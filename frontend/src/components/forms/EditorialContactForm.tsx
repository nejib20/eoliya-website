'use client';

import React, { useEffect, useRef, useState } from 'react';
import Turnstile, { type TurnstileHandle, turnstileEnabled } from '@/components/Turnstile';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initial = {
  civility: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  website: '', // honeypot
  acceptPrivacy: false,
};

/**
 * Formulaire de contact éditorial (.cform) branché à /api/contact, avec défense
 * en profondeur : honeypot, time-trap (formToken), et Cloudflare Turnstile.
 */
export const EditorialContactForm: React.FC = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [formToken, setFormToken] = useState('');
  const turnstileRef = useRef<TurnstileHandle>(null);

  // Time-trap : récupère le jeton HMAC au montage (vide si la couche est désactivée côté serveur)
  useEffect(() => {
    fetch('/api/contact/token', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setFormToken(d.formToken ?? ''))
      .catch(() => {});
  }, []);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((p) => ({
      ...p,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    if (turnstileEnabled && !turnstileToken) {
      setStatus('error');
      setErrorMsg('Merci de patienter une seconde le temps de la vérification anti-robot, puis réessayez.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone,
          company: form.company,
          subject: form.subject,
          message: form.message,
          website: form.website,
          acceptPrivacy: form.acceptPrivacy,
          turnstileToken,
          formToken,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data?.error || 'Une erreur est survenue. Veuillez réessayer.');
        return;
      }
      setStatus('success');
      setForm(initial);
    } catch {
      setStatus('error');
      setErrorMsg('Erreur réseau. Veuillez réessayer ou nous appeler au 01 34 22 30 12.');
    } finally {
      turnstileRef.current?.reset();
      setTurnstileToken('');
      // rafraîchit le jeton time-trap pour une éventuelle nouvelle soumission
      fetch('/api/contact/token', { cache: 'no-store' })
        .then((r) => r.json())
        .then((d) => setFormToken(d.formToken ?? ''))
        .catch(() => {});
    }
  };

  return (
    <form className="cform rv d1" onSubmit={handleSubmit} noValidate>
      <div className="fld">
        <label htmlFor="civility">Civilité</label>
        <select id="civility" name="civility" value={form.civility} onChange={onChange}>
          <option value="">Sélectionner</option>
          <option>Mme</option>
          <option>M.</option>
        </select>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="lastName">Nom <span className="req">*</span></label>
          <input id="lastName" type="text" name="lastName" value={form.lastName} onChange={onChange} required autoComplete="family-name" />
        </div>
        <div className="fld">
          <label htmlFor="firstName">Prénom <span className="req">*</span></label>
          <input id="firstName" type="text" name="firstName" value={form.firstName} onChange={onChange} required autoComplete="given-name" />
        </div>
      </div>

      <div className="fld">
        <label htmlFor="company">Entreprise / Organisation</label>
        <input id="company" type="text" name="company" value={form.company} onChange={onChange} autoComplete="organization" />
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="email">Email <span className="req">*</span></label>
          <input id="email" type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
        </div>
        <div className="fld">
          <label htmlFor="phone">Téléphone</label>
          <input id="phone" type="tel" name="phone" value={form.phone} onChange={onChange} autoComplete="tel" />
        </div>
      </div>

      <div className="fld">
        <label htmlFor="subject">Objet de votre demande <span className="req">*</span></label>
        <select id="subject" name="subject" value={form.subject} onChange={onChange} required>
          <option value="" disabled>Sélectionner</option>
          <option>Demande de devis</option>
          <option>Question technique</option>
          <option>Demande d&apos;audit / diagnostic</option>
          <option>Prise de rendez-vous</option>
          <option>Réclamation / SAV</option>
          <option>Candidature spontanée</option>
          <option>Autre</option>
        </select>
      </div>

      <div className="fld">
        <label htmlFor="message">Votre message <span className="req">*</span></label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Décrivez brièvement votre projet, vos besoins ou votre question"
          required
          rows={5}
        />
      </div>

      {/* Honeypot — off-screen, hors tabulation et hors a11y */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="contact_url">Ne pas remplir</label>
        <input
          id="contact_url"
          type="text"
          name="website"
          value={form.website}
          onChange={onChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="consent">
        <input type="checkbox" name="acceptPrivacy" checked={form.acceptPrivacy} onChange={onChange} required />
        <span>
          J&apos;accepte que mes données soient utilisées par EOLIYA Ingénierie pour traiter ma
          demande. Conformément au RGPD, je peux exercer mes droits d&apos;accès, de rectification
          et de suppression.
        </span>
      </label>

      {/* Cloudflare Turnstile (invisible si possible ; ne s'affiche que si configuré) */}
      <Turnstile
        ref={turnstileRef}
        onVerify={setTurnstileToken}
        onExpire={() => setTurnstileToken('')}
        onError={() => setTurnstileToken('')}
        className="cf-turnstile-slot"
      />

      {status === 'error' && errorMsg && (
        <p role="alert" className="cform-msg cform-msg--error">{errorMsg}</p>
      )}

      <button type="submit" className="btn" disabled={status === 'submitting'}>
        {status === 'success'
          ? 'Merci, message envoyé ✓'
          : status === 'submitting'
            ? 'Envoi en cours…'
            : <>Envoyer ma demande <i>→</i></>}
      </button>
    </form>
  );
};

export default EditorialContactForm;
