'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button, Input, Textarea, Select } from '@/components/ui';

interface ContactFormData {
  civilite: string;
  nom: string;
  prenom: string;
  entreprise: string;
  fonction: string;
  email: string;
  telephone: string;
  objet: string;
  prestations: string[];
  message: string;
  source: string;
  rgpd: boolean;
}

interface ContactProps {
  title?: string;
  subtitle?: string;
  showContactInfo?: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const Contact: React.FC<ContactProps> = ({
  title = 'Parlons de votre projet',
  subtitle = 'Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h ouvrées.',
  showContactInfo = true,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    civilite: '',
    nom: '',
    prenom: '',
    entreprise: '',
    fonction: '',
    email: '',
    telephone: '',
    objet: '',
    prestations: [],
    message: '',
    source: '',
    rgpd: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation simple
    const newErrors: Record<string, string> = {};
    if (!formData.nom) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom) newErrors.prenom = 'Le prénom est requis';
    if (!formData.email) newErrors.email = 'L\'email est requis';
    if (!formData.objet) newErrors.objet = 'L\'objet est requis';
    if (!formData.message) newErrors.message = 'Le message est requis';
    if (!formData.rgpd) newErrors.rgpd = 'Vous devez accepter la politique RGPD';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: Envoyer à Strapi ou API de contact
      console.log('Form submitted:', formData);
      // Simuler l'envoi
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Message envoyé avec succès !');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div {...fadeInUp} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  id="civilite"
                  label="Civilité"
                  options={[
                    { value: '', label: 'Sélectionner' },
                    { value: 'mme', label: 'Mme' },
                    { value: 'm', label: 'M.' },
                  ]}
                  value={formData.civilite}
                  onChange={(e) => setFormData({ ...formData, civilite: e.target.value })}
                />

                <Input
                  id="nom"
                  label="Nom"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  error={errors.nom}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  id="prenom"
                  label="Prénom"
                  required
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  error={errors.prenom}
                />

                <Input
                  id="entreprise"
                  label="Entreprise / Organisation"
                  value={formData.entreprise}
                  onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                />

                <Input
                  id="telephone"
                  label="Téléphone"
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                />
              </div>

              <Select
                id="objet"
                label="Objet de votre demande"
                required
                options={[
                  { value: '', label: 'Sélectionner' },
                  { value: 'devis', label: 'Demande de devis' },
                  { value: 'technique', label: 'Question technique' },
                  { value: 'audit', label: 'Demande d\'audit / diagnostic' },
                  { value: 'rdv', label: 'Prise de rendez-vous' },
                  { value: 'sav', label: 'Réclamation / SAV' },
                  { value: 'candidature', label: 'Candidature spontanée' },
                  { value: 'autre', label: 'Autre' },
                ]}
                value={formData.objet}
                onChange={(e) => setFormData({ ...formData, objet: e.target.value })}
                error={errors.objet}
              />

              <Textarea
                id="message"
                label="Votre message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                error={errors.message}
                helperText="Décrivez brièvement votre projet, vos besoins ou votre question"
              />

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  checked={formData.rgpd}
                  onChange={(e) => setFormData({ ...formData, rgpd: e.target.checked })}
                  className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="rgpd" className="text-sm text-gray-600">
                  J'accepte que mes données personnelles soient utilisées par EOLIYA Ingénierie pour traiter ma demande.
                  Conformément au RGPD, je peux exercer mes droits d'accès, de rectification et de suppression.
                  {errors.rgpd && (
                    <span className="block text-red-600 mt-1">{errors.rgpd}</span>
                  )}
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={Send}
                disabled={isSubmitting}
                fullWidth
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          {showContactInfo && (
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                <h3 className="text-xl font-semibold text-secondary-500 mb-6">
                  Nos coordonnées
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-medium text-secondary-500 mb-1">Téléphone</div>
                      <a href="tel:0134223012" className="text-gray-600 hover:text-primary-500 transition-colors">
                        01 34 22 30 12
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-medium text-secondary-500 mb-1">Email</div>
                      <a href="mailto:contact@eoliya.com" className="text-gray-600 hover:text-primary-500 transition-colors">
                        contact@eoliya.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-medium text-secondary-500 mb-1">Adresse</div>
                      <address className="text-gray-600 not-italic">
                        131 Boulevard Pereire<br />
                        75017 Paris
                      </address>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-secondary-500 mb-3">Horaires</h4>
                  <p className="text-gray-600 text-sm">
                    Lundi - Vendredi<br />
                    9h00 - 18h00
                  </p>
                </div>

                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-700">
                    Réponse garantie sous 24h ouvrées
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
