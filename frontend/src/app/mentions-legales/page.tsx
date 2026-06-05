import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions legales — EOLIYA Ingenierie',
  description: 'Mentions legales du site EOLIYA Ingenierie. Informations sur l\'editeur, l\'hebergement et la propriete intellectuelle.',
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-[clamp(48px,6vw,88px)] pb-[clamp(28px,3.5vw,48px)]">
        <div className="wrap">
          <div className="eyebrow">Informations legales</div>
          <h1 className="font-display font-medium text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em] mt-4">
            Mentions legales
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-[clamp(40px,5vw,72px)] pb-[clamp(16px,2vw,28px)]">
        <div className="wrap">
          <div className="max-w-[720px]">
            <div className="space-y-[clamp(34px,4vw,52px)]">
              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Propriete intellectuelle
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  L&apos;ensemble des contenus presents sur ce site (textes, images, logo, identite visuelle, mise en page) est la propriete d&apos;EOLIYA, sauf mention contraire, et est protege au titre du droit de la propriete intellectuelle. Toute reproduction ou representation, totale ou partielle, sans autorisation ecrite prealable d&apos;EOLIYA, est interdite.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Donnees personnelles
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Les informations recueillies via le formulaire de contact font l&apos;objet d&apos;un traitement destine a repondre aux demandes. Pour en savoir plus sur la gestion de vos donnees et l&apos;exercice de vos droits, consultez notre{' '}
                  <Link href="/confidentialite" className="text-ink underline underline-offset-[3px] decoration-laiton decoration-1 hover:text-laiton-deep transition-colors">
                    Politique de confidentialite
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Responsabilite
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  EOLIYA s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiees sur ce site, sans pouvoir en garantir l&apos;exhaustivite ni l&apos;absence d&apos;erreurs. EOLIYA ne saurait etre tenue responsable des dommages resultant de l&apos;acces ou de l&apos;utilisation du site.
                </p>
              </section>

              <hr className="border-t border-line mt-[clamp(44px,5vw,68px)]" />

              <div className="text-muted text-[clamp(13px,1.15vw,14px)] leading-[1.62] space-y-3">
                <p>
                  <span className="text-laiton-deep font-mono text-[10.5px] tracking-[0.16em] uppercase mr-2">Editeur du site</span>
                  Le present site est edite par EOLIYA, societe par actions simplifiee a associe unique (SASU) au capital de 100 000 euros. Siege social : 131 Boulevard Pereire, 75017 Paris. RCS Paris 830 553 160. SIRET (siege) : 830 553 160 00029. Numero de TVA intracommunautaire : FR25830553160. Code APE : 71.12B (Ingenierie, etudes techniques). Telephone : 01 34 22 30 12. Courriel : contact@eoliya.com.
                </p>
                <p>
                  <span className="text-laiton-deep font-mono text-[10.5px] tracking-[0.16em] uppercase mr-2">Directeur de la publication</span>
                  Sofian Ayeb, en qualite de president.
                </p>
                <p>
                  <span className="text-laiton-deep font-mono text-[10.5px] tracking-[0.16em] uppercase mr-2">Hebergement</span>
                  Le site est heberge par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Etats-Unis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
