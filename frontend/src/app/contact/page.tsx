'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const subjects = [
  'Selectionner',
  'Demande de devis',
  'Question technique',
  'Demande d\'audit / diagnostic',
  'Prise de rendez-vous',
  'Reclamation / SAV',
  'Candidature spontanee',
  'Autre',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    civility: '',
    lastName: '',
    firstName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-[clamp(48px,6vw,88px)] pb-[clamp(28px,3.5vw,48px)]">
        <div className="wrap">
          <div className="flex items-center gap-2 text-sm text-muted mb-[22px]">
            <Link href="/" className="hover:text-ink transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-ink">Contact</span>
          </div>

          <div className="eyebrow mb-[22px]">
            <b>05</b> &nbsp;Contact
          </div>

          <h1 className="font-display font-medium text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em]">
            Parlons de <em className="italic text-laiton-deep">votre projet</em>.
          </h1>

          <p className="mt-[clamp(20px,2.5vw,32px)] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-ink-2 max-w-[50ch]">
            Devis, audit, question technique ou prise de rendez-vous : decrivez votre besoin, nous vous repondons sous 24h ouvrees.
          </p>
        </div>
      </section>

      {/* Contact Page Content */}
      <section className="py-[clamp(48px,6vw,88px)]">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-[clamp(40px,5vw,80px)]">
            {/* Left: Info + Map */}
            <div>
              {/* Contact Info */}
              <div className="border-t border-line">
                <div className="py-[22px] grid grid-cols-[130px_1fr] gap-5 items-baseline border-b border-line">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">Telephone</span>
                  <a href="tel:0134223012" className="font-display text-[21px] hover:text-laiton-deep transition-colors">
                    01 34 22 30 12
                  </a>
                </div>
                <div className="py-[22px] grid grid-cols-[130px_1fr] gap-5 items-baseline border-b border-line">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">Email</span>
                  <a href="mailto:contact@eoliya.com" className="text-base hover:text-laiton-deep transition-colors">
                    contact@eoliya.com
                  </a>
                </div>
                <div className="py-[22px] grid grid-cols-[130px_1fr] gap-5 items-baseline border-b border-line">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">Adresse</span>
                  <address className="not-italic text-base leading-[1.5]">
                    131 Boulevard Pereire<br />75017 Paris
                  </address>
                </div>
                <div className="py-[22px] grid grid-cols-[130px_1fr] gap-5 items-baseline border-b border-line">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">Horaires</span>
                  <span className="text-base leading-[1.5]">Lun – Ven · 9h00 – 18h00</span>
                </div>
              </div>

              {/* Map */}
              <div className="mt-[clamp(28px,3.5vw,44px)] aspect-[4/3] rounded-sm overflow-hidden bg-paper-2 border border-line">
                <iframe
                  title="Carte — 131 Boulevard Pereire, 75017 Paris"
                  src="https://maps.google.com/maps?q=131%20Boulevard%20Pereire%2075017%20Paris&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full h-full border-0 grayscale contrast-[1.1] opacity-90"
                />
              </div>

              {/* Guarantee */}
              <div className="mt-[clamp(20px,2.5vw,32px)] flex items-center gap-3 text-sm text-muted">
                <span className="w-2 h-2 rounded-full bg-laiton-deep" />
                <span>Reponse garantie sous 24h ouvrees · Devis gratuit et sans engagement</span>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="space-y-[clamp(24px,3vw,36px)]" noValidate>
              {/* Civility */}
              <div className="field">
                <label>Civilite</label>
                <select name="civility" value={formData.civility} onChange={handleChange}>
                  <option value="">Selectionner</option>
                  <option value="Mme">Mme</option>
                  <option value="M.">M.</option>
                </select>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-[clamp(16px,2vw,28px)]">
                <div className="field">
                  <label>Nom <span className="req">*</span></label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label>Prenom <span className="req">*</span></label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
              </div>

              {/* Company */}
              <div className="field">
                <label>Entreprise / Organisation</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-2 gap-[clamp(16px,2vw,28px)]">
                <div className="field">
                  <label>Email <span className="req">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label>Telephone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              {/* Subject */}
              <div className="field">
                <label>Objet de votre demande <span className="req">*</span></label>
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject === 'Selectionner' ? '' : subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="field">
                <label>Votre message <span className="req">*</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Decrivez brievement votre projet, vos besoins ou votre question"
                  required
                  rows={5}
                />
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer text-sm text-muted">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 accent-laiton-deep"
                />
                <span>
                  J&apos;accepte que mes donnees soient utilisees par EOLIYA Ingenierie pour traiter ma demande.
                  Conformement au RGPD, je peux exercer mes droits d&apos;acces, de rectification et de suppression.
                </span>
              </label>

              {/* Submit */}
              <button type="submit" className="btn">
                Envoyer ma demande <i>→</i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
