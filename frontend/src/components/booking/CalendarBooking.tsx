/**
 * Calendar Booking Component
 * @author Nejib Aloui <nejib20@gmail.com>
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  Video,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import type { BookingFormData } from '@/lib/validation';

interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

interface CalendarBookingProps {
  onSuccess?: () => void;
  className?: string;
}

export default function CalendarBooking({ onSuccess, className = '' }: CalendarBookingProps) {
  const [step, setStep] = useState<'date' | 'details'>('date');
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    duration: '60',
    meetingType: 'office',
    notes: '',
    website: '', // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Fetch available slots when date changes
  useEffect(() => {
    if (formData.date && formData.duration) {
      fetchAvailableSlots();
    }
  }, [formData.date, formData.duration]);

  const fetchAvailableSlots = async () => {
    if (!formData.date) return;

    setLoadingSlots(true);
    try {
      const startDate = new Date(formData.date);
      startDate.setHours(9, 0, 0, 0);
      const endDate = new Date(formData.date);
      endDate.setHours(18, 0, 0, 0);

      const response = await fetch(
        `/api/calendar/slots?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&duration=${
          formData.duration
        }`
      );

      if (response.ok) {
        const data = await response.json();
        setAvailableSlots(data.slots || []);
      }
    } catch (error) {
      console.error('Error fetching slots:', error);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const selectTimeSlot = (time: string) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/calendar', {
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
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
        >
          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-green-900 text-lg">Rendez-vous confirmé!</h4>
            <p className="text-sm text-green-700 mt-1">
              Vous allez recevoir un email de confirmation avec tous les détails.
            </p>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">
            Erreur lors de la réservation. Veuillez vérifier vos informations ou nous contacter.
          </p>
        </motion.div>
      )}

      {/* Step Indicator */}
      <div className="flex items-center gap-4">
        <div
          className={`flex items-center gap-2 ${
            step === 'date' ? 'text-blue-600 font-semibold' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'date' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            1
          </div>
          <span>Date & Heure</span>
        </div>
        <div className="flex-1 h-px bg-gray-300" />
        <div
          className={`flex items-center gap-2 ${
            step === 'details' ? 'text-blue-600 font-semibold' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'details' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            2
          </div>
          <span>Vos informations</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          {step === 'date' && (
            <motion.div
              key="date"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Choisissez une date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-1" />
                  Durée du rendez-vous
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="30">30 minutes</option>
                  <option value="60">1 heure</option>
                  <option value="90">1h30</option>
                  <option value="120">2 heures</option>
                </select>
              </div>

              {/* Time Slots */}
              {formData.date && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Créneaux disponibles
                  </label>
                  {loadingSlots ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                    </div>
                  ) : availableSlots.length > 0 ? (
                    <div className="grid grid-cols-3 gap-2">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot.start}
                          type="button"
                          onClick={() => selectTimeSlot(new Date(slot.start).toTimeString().slice(0, 5))}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            formData.time === new Date(slot.start).toTimeString().slice(0, 5)
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          {new Date(slot.start).toLocaleTimeString('fr-FR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 py-4 text-center">
                      Aucun créneau disponible ce jour. Choisissez une autre date.
                    </p>
                  )}
                </div>
              )}

              <button
                type="button"
                onClick={() => setStep('details')}
                disabled={!formData.date || !formData.time}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuer
              </button>
            </motion.div>
          )}

          {step === 'details' && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Meeting Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Type de rendez-vous</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'office', icon: MapPin, label: 'Au bureau' },
                    { value: 'video', icon: Video, label: 'Visio' },
                    { value: 'phone', icon: PhoneCall, label: 'Téléphone' },
                  ].map(({ value, icon: Icon, label }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, meetingType: value as any }))}
                      className={`py-3 px-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                        formData.meetingType === value
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes (optionnel)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Décrivez brièvement l'objet du rendez-vous..."
                />
              </div>

              {/* Honeypot */}
              <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('date')}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Confirmation...
                    </>
                  ) : (
                    'Confirmer le rendez-vous'
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
