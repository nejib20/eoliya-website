import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialite — EOLIYA Ingenierie',
  description: 'Politique de confidentialite d\'EOLIYA Ingenierie. Informations sur la collecte et le traitement des donnees personnelles.',
};

export default function ConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-[clamp(48px,6vw,88px)] pb-[clamp(28px,3.5vw,48px)]">
        <div className="wrap">
          <div className="eyebrow">Protection des donnees</div>
          <h1 className="font-display font-medium text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em] mt-4">
            Politique de confidentialite
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
                  Responsable du traitement
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Le responsable du traitement des donnees personnelles collectees sur ce site est EOLIYA (SASU), representee par Sofian Ayeb, president. Siege social : 131 Boulevard Pereire, 75017 Paris. Courriel : contact@eoliya.com.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Donnees collectees
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Les donnees personnelles collectees sur ce site sont celles renseignees volontairement par l&apos;utilisateur via le formulaire de contact : civilite, nom, prenom, adresse e-mail, numero de telephone (facultatif), entreprise (facultatif), objet et contenu du message.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Finalites du traitement
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Les donnees sont collectees afin de repondre aux demandes de contact, devis, questions techniques ou candidatures. Elles permettent egalement d&apos;assurer le suivi commercial et relationnel.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Base legale
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Le traitement des donnees repose sur le consentement de l&apos;utilisateur (case a cocher du formulaire) et sur l&apos;interet legitime d&apos;EOLIYA a repondre aux sollicitations recues.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Duree de conservation
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Les donnees sont conservees pendant la duree necessaire au traitement de la demande, puis archivees pendant trois ans a compter du dernier contact, conformement aux recommandations de la CNIL.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Droits de l&apos;utilisateur
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Conformement au Reglement General sur la Protection des Donnees (RGPD), vous disposez d&apos;un droit d&apos;acces, de rectification, de suppression, d&apos;opposition et de portabilite de vos donnees. Pour exercer ces droits, adressez votre demande a : contact@eoliya.com. Vous pouvez egalement introduire une reclamation aupres de la CNIL (cnil.fr).
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Cookies
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Ce site utilise uniquement des cookies techniques strictement necessaires a son fonctionnement. Aucun cookie publicitaire ou de suivi tiers n&apos;est depose sans consentement prealable.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Securite
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  EOLIYA met en oeuvre des mesures techniques et organisationnelles appropriees pour proteger les donnees personnelles contre tout acces non autorise, perte ou alteration. Le site est heberge sur des serveurs securises (HTTPS).
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
