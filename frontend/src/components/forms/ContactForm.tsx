/**
 * Contact Form Component
 * @author Nejib Aloui <nejib20@gmail.com>
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building2, User, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import type { ContactFormData } from '@/lib/validation';

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function ContactForm({ onSuccess, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    website: '', // Honeypot
    acceptPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setErrorMessage(data.error || 'Une erreur est survenue');
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        website: '',
        acceptPrivacy: false,
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Erreur réseau. Veuillez réessayer.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-green-900">Message envoyé avec succès!</h4>
            <p className="text-sm text-green-700 mt-1">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && errorMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-red-900">Erreur</h4>
            <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Jean Dupont"
              required
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="jean.dupont@exemple.com"
              required
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="01 23 45 67 89"
            />
          </div>
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Entreprise
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Nom de votre entreprise"
            />
          </div>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Sujet <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Demande de devis, renseignement..."
            required
          />
        </div>
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Décrivez votre projet ou votre demande..."
          required
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        <p className="mt-1 text-sm text-gray-500">
          {formData.message?.length || 0} / 2000 caractères
        </p>
      </div>

      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Privacy Policy */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="acceptPrivacy"
            checked={formData.acceptPrivacy}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            required
          />
          <span className="text-sm text-gray-600">
            J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.{' '}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.acceptPrivacy && <p className="mt-1 text-sm text-red-600">{errors.acceptPrivacy}</p>}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <>
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Envoyer le message
          </>
        )}
      </motion.button>

      <p className="text-sm text-center text-gray-500">
        Ou contactez-nous directement :{' '}
        <a href="tel:0134223012" className="text-blue-600 hover:underline font-medium">
          01 34 22 30 12
        </a>{' '}
        |{' '}
        <a href="mailto:contact@eoliya.com" className="text-blue-600 hover:underline font-medium">
          contact@eoliya.com
        </a>
      </p>
    </motion.form>
  );
}
