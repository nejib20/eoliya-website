import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — EOLIYA Ingénierie',
  description: "Politique de confidentialité d’EOLIYA Ingénierie : collecte, finalités et droits sur vos données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <nav className="wrap crumb rv" aria-label="Fil d’ariane">
        <Link href="/">Accueil</Link>
        <span className="sep">/</span>
        <span>Confidentialité</span>
      </nav>

      {/* HERO */}
      <section className="legal-hero">
        <div className="wrap">
          <div className="eyebrow rv">Protection des données</div>
          <h1 className="rv d1">Politique de confidentialité</h1>
        </div>
      </section>

      {/* CORPS */}
      <section className="legal-body">
        <div className="wrap">
          <div className="col">
            <section className="rv">
              <h2>Responsable du traitement</h2>
              <p>
                Les données collectées sur ce site sont traitées par EOLIYA (SASU), dont le siège est au 131 Boulevard Pereire, 75017 Paris. Pour toute question relative à vos données : contact@eoliya.com.
              </p>
            </section>

            <section className="rv">
              <h2>Données collectées</h2>
              <p>
                Via le formulaire de contact : civilité, nom, prénom, société ou organisation, adresse électronique, numéro de téléphone, objet de la demande et message. Seuls les champs signalés comme obligatoires sont nécessaires au traitement de votre demande. Des cookies strictement nécessaires au fonctionnement du site peuvent également être enregistrés.
              </p>
            </section>

            <section className="rv">
              <h2>Finalités</h2>
              <p>
                Ces données servent à répondre à vos demandes, établir un devis, assurer le suivi de la relation et, le cas échéant, vous recontacter au sujet de votre projet.
              </p>
            </section>

            <section className="rv">
              <h2>Base légale</h2>
              <p>
                Le traitement repose sur votre consentement, recueilli lors de l’envoi du formulaire, ainsi que sur l’intérêt légitime d’EOLIYA à répondre aux sollicitations et à gérer sa relation commerciale.
              </p>
            </section>

            <section className="rv">
              <h2>Destinataires</h2>
              <p>
                Vos données sont destinées aux seules personnes habilitées d’EOLIYA et, le cas échéant, à ses prestataires techniques, notamment l’hébergeur du site. Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales.
              </p>
            </section>

            <section className="rv">
              <h2>Durée de conservation</h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement de votre demande, puis archivées pour une durée maximale de trois ans à compter du dernier contact, sauf obligation légale de conservation plus longue.
              </p>
            </section>

            <section className="rv">
              <h2>Vos droits</h2>
              <p>
                Conformément au Règlement général sur la protection des données et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données. Vous pouvez les exercer en écrivant à contact@eoliya.com. Vous disposez également du droit d’introduire une réclamation auprès de la CNIL (www.cnil.fr).
              </p>
            </section>

            <section className="rv">
              <h2>Cookies</h2>
              <p>
                Ce site utilise uniquement des cookies strictement nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de suivi tiers n’est déposé sans votre consentement.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
