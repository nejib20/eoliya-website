'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Building2 } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  variant?: 'full' | 'preview';
}

// Team members based on typical engineering bureau structure
const defaultTeamMembers: TeamMember[] = [
  {
    name: 'Nejib Zarouk',
    role: 'Fondateur & Directeur Général',
    department: 'Direction',
    bio: 'Ingénieur diplômé avec plus de 20 ans d\'expérience en ingénierie du bâtiment. Fondateur d\'EOLIYA en 2009, Nejib pilote la stratégie et les grands comptes avec une vision orientée innovation et performance énergétique.',
    linkedin: 'https://linkedin.com/in/nejib-zarouk',
    email: 'n.zarouk@eoliya.com',
  },
  {
    name: 'Sophie Martin',
    role: 'Directrice Technique',
    department: 'Bureau d\'études',
    bio: 'Responsable du pôle études et conception depuis 8 ans. Sophie coordonne les équipes d\'ingénieurs sur les projets TCE et assure la qualité technique des livrables.',
    linkedin: 'https://linkedin.com/company/eoliya',
    email: 'contact@eoliya.com',
  },
  {
    name: 'Thomas Dubois',
    role: 'Responsable Pôle Éclairage',
    department: 'Relamping & Luminaires',
    bio: 'Expert en conception lumière et efficacité énergétique. Thomas supervise les projets de relamping LED et le développement de luminaires sur mesure pour les applications techniques.',
    linkedin: 'https://linkedin.com/company/eoliya',
    email: 'contact@eoliya.com',
  },
  {
    name: 'Marie Lecomte',
    role: 'Responsable Projets',
    department: 'Maîtrise d\'œuvre',
    bio: 'Chef de projets confirmée avec 12 ans d\'expérience en coordination TCE. Marie assure le suivi opérationnel des chantiers et la relation client au quotidien.',
    linkedin: 'https://linkedin.com/company/eoliya',
    email: 'contact@eoliya.com',
  },
  {
    name: 'Alexandre Chen',
    role: 'Ingénieur Études',
    department: 'Bureau d\'études',
    bio: 'Spécialiste des études électriques et de la conformité réglementaire. Alexandre réalise les dimensionnements et les notes de calcul pour les projets tertiaires et industriels.',
    linkedin: 'https://linkedin.com/company/eoliya',
    email: 'contact@eoliya.com',
  },
  {
    name: 'Émilie Rousseau',
    role: 'Chargée d\'affaires',
    department: 'Commercial',
    bio: 'Interface privilégiée de nos clients, Émilie accompagne les entreprises dans la définition de leurs besoins et le suivi commercial de leurs projets.',
    linkedin: 'https://linkedin.com/company/eoliya',
    email: 'contact@eoliya.com',
  },
];

// SVG Avatar component (professional illustration style)
const TeamAvatar: React.FC<{ name: string; department: string }> = ({ name, department }) => {
  // Generate consistent colors based on name
  const colors = {
    'Direction': { bg: '#0066CC', accent: '#F5A623' },
    'Bureau d\'études': { bg: '#1E3A5F', accent: '#0066CC' },
    'Relamping & Luminaires': { bg: '#F5A623', accent: '#1E3A5F' },
    'Maîtrise d\'œuvre': { bg: '#0066CC', accent: '#1E3A5F' },
    'Commercial': { bg: '#1E3A5F', accent: '#F5A623' },
  };

  const color = colors[department as keyof typeof colors] || { bg: '#0066CC', accent: '#F5A623' };
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Background pattern */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`grad-${name.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color.bg} stopOpacity="0.1" />
            <stop offset="100%" stopColor={color.bg} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#grad-${name.replace(/\s/g, '')})`} />

        {/* Abstract professional figure */}
        <circle cx="50" cy="35" r="18" fill={color.bg} opacity="0.8" />
        <ellipse cx="50" cy="85" rx="28" ry="25" fill={color.bg} opacity="0.6" />

        {/* Accent elements */}
        <circle cx="50" cy="35" r="12" fill="white" opacity="0.2" />
      </svg>

      {/* Initials overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-4xl font-bold opacity-20"
          style={{ color: color.bg }}
        >
          {initials}
        </span>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const Team: React.FC<TeamProps> = ({
  title = 'Notre équipe',
  subtitle = 'Des experts passionnés au service de vos projets',
  members = defaultTeamMembers,
  variant = 'full',
}) => {
  const displayedMembers = variant === 'preview' ? members.slice(0, 4) : members;

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4">
            L'équipe EOLIYA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Avatar */}
                <div className="relative overflow-hidden">
                  <TeamAvatar name={member.name} department={member.department} />

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/90 via-secondary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary-500 hover:bg-primary-500 hover:text-white transition-colors"
                          aria-label={`LinkedIn de ${member.name}`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary-500 hover:bg-primary-500 hover:text-white transition-colors"
                          aria-label={`Email de ${member.name}`}
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Department badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-secondary-500">
                      <Building2 className="w-3 h-3" />
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-500 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {variant === 'preview' && (
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/equipe"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Découvrir toute l'équipe
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Team;
