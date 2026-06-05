import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Generales de Vente — EOLIYA Ingenierie',
  description: 'Conditions generales de vente des prestations d\'ingenierie proposees par EOLIYA Ingenierie.',
};

export default function CGVPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-[clamp(48px,6vw,88px)] pb-[clamp(28px,3.5vw,48px)]">
        <div className="wrap">
          <div className="eyebrow">Conditions contractuelles</div>
          <h1 className="font-display font-medium text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em] mt-4">
            Conditions Generales de Vente
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
                  Article 1 — Objet et champ d&apos;application
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Les presentes conditions generales de vente (CGV) regissent les relations contractuelles entre EOLIYA (SASU), ci-apres denominee « le Prestataire », et tout client professionnel ou particulier, ci-apres denomme « le Client », dans le cadre des prestations d&apos;ingenierie, de conseil, de pilotage de travaux, de fourniture de materiels et de maintenance.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Article 2 — Devis et commande
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Les devis emis par le Prestataire sont valables trente (30) jours a compter de leur date d&apos;emission, sauf mention contraire. La commande est reputee ferme a la reception par le Prestataire du devis signe et accompagne, le cas echeant, de l&apos;acompte prevu.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Article 3 — Prix et modalites de paiement
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Les prix sont indiques en euros, hors taxes (HT). La TVA applicable est celle en vigueur au jour de la facturation. Sauf mention contraire, les factures sont payables a trente (30) jours date de facture, par virement bancaire ou cheque. En cas de retard de paiement, des penalites de retard egales a trois fois le taux d&apos;interet legal seront appliquees, ainsi qu&apos;une indemnite forfaitaire de 40 € pour frais de recouvrement.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Article 4 — Execution des prestations
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Le Prestataire s&apos;engage a executer les prestations conformement au devis accepte et aux regles de l&apos;art. Les delais communiques sont indicatifs et ne constituent pas des delais de rigueur. En cas de retard imputable au Prestataire, le Client pourra demander une revision du planning sans pouvoir pretendre a des penalites, sauf stipulation contraire dans le devis.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Article 5 — Obligations du Client
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Le Client s&apos;engage a fournir au Prestataire toutes les informations et documents necessaires a la bonne execution des prestations. Il assure l&apos;acces au site d&apos;intervention dans des conditions de securite adequates et informe le Prestataire de tout evenement susceptible d&apos;affecter le deroulement du projet.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Article 6 — Garantie et responsabilite
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Le Prestataire garantit que les prestations sont realisees conformement aux normes en vigueur. Il est assure au titre de la responsabilite civile professionnelle. La responsabilite du Prestataire ne saurait etre engagee au-dela du montant de la prestation facturee, sauf en cas de faute lourde ou de dol.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Article 7 — Propriete intellectuelle
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Les etudes, plans, documents techniques et logiciels developpes par le Prestataire restent sa propriete intellectuelle jusqu&apos;au paiement integral de la prestation. Apres reglement, le Client dispose d&apos;un droit d&apos;usage non exclusif pour les besoins du projet concerne.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Article 8 — Resiliation
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  En cas de manquement grave de l&apos;une des parties a ses obligations, l&apos;autre partie pourra resilier le contrat de plein droit, apres mise en demeure restee infructueuse pendant quinze (15) jours. Les prestations realisees avant la resiliation restent dues par le Client.
                </p>
              </section>

              <section>
                <h2 className="font-mono font-medium text-xs tracking-[0.18em] uppercase text-laiton-deep">
                  Article 9 — Litiges
                </h2>
                <p className="mt-[14px] text-[clamp(15.5px,1.4vw,17px)] leading-[1.72] text-ink-2">
                  Les presentes CGV sont soumises au droit francais. En cas de litige, les parties s&apos;engagent a rechercher une solution amiable. A defaut, le Tribunal de Commerce de Paris sera seul competent.
                </p>
              </section>

              <hr className="border-t border-line mt-[clamp(44px,5vw,68px)]" />

              <p className="text-muted text-[clamp(13px,1.15vw,14px)] leading-[1.62]">
                Version en vigueur au 1er janvier 2026. EOLIYA se reserve le droit de modifier les presentes CGV. Les conditions applicables sont celles en vigueur a la date de la commande.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
