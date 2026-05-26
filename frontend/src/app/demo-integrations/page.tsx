/**
 * Demo Page - Test des intégrations
 * @author Nejib Aloui <nejib20@gmail.com>
 *
 * Cette page permet de tester toutes les intégrations en un seul endroit.
 * À supprimer en production ou protéger par mot de passe.
 */

import ContactForm from '@/components/forms/ContactForm';
import CalendarBooking from '@/components/booking/CalendarBooking';

export default function DemoIntegrationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Démonstration des Intégrations
          </h1>
          <p className="text-lg text-gray-600">
            Page de test pour valider toutes les intégrations API
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2">
            <span className="text-2xl">⚠️</span>
            <span className="text-sm text-yellow-800 font-medium">
              Cette page est à usage interne uniquement. À supprimer en production.
            </span>
          </div>
        </div>

        <div className="space-y-16">
          {/* Integration 1: Contact Form */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Formulaire de Contact</h2>
                <p className="text-gray-600">Service: Resend</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Fonctionnalités testées:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✅ Validation Zod côté serveur</li>
                <li>✅ Honeypot anti-spam</li>
                <li>✅ Rate limiting (3 req/heure)</li>
                <li>✅ Envoi d'email via Resend</li>
                <li>✅ Templates HTML responsives</li>
              </ul>
            </div>

            <ContactForm
              onSuccess={() => {
                console.log('✅ Contact form submitted successfully');
              }}
            />

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-mono text-gray-600">
                Endpoint: POST /api/contact
              </p>
              <p className="text-xs font-mono text-gray-600">
                Rate Limit: 3 requêtes/heure par IP
              </p>
            </div>
          </section>

          {/* Integration 2: Calendar Booking */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Réservation de Rendez-vous</h2>
                <p className="text-gray-600">Service: Google Calendar API</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Fonctionnalités testées:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✅ Récupération des créneaux disponibles</li>
                <li>✅ Création d'événements Google Calendar</li>
                <li>✅ Email de confirmation automatique</li>
                <li>✅ Support visio/bureau/téléphone</li>
                <li>✅ Rate limiting (5 req/heure création, 20 req/min slots)</li>
              </ul>
            </div>

            <CalendarBooking
              onSuccess={() => {
                console.log('✅ Calendar booking successful');
              }}
            />

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-mono text-gray-600">
                Endpoints: POST /api/calendar, GET /api/calendar/slots
              </p>
              <p className="text-xs font-mono text-gray-600">
                Rate Limit: 5 créations/heure, 20 lectures/minute par IP
              </p>
            </div>
          </section>

          {/* Integration 3: Chatbot Widget */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Chatbot Intelligent</h2>
                <p className="text-gray-600">Service: OpenAI GPT-4</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Fonctionnalités testées:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✅ Streaming en temps réel</li>
                <li>✅ System prompt personnalisé EOLIYA</li>
                <li>✅ Content moderation OpenAI</li>
                <li>✅ Historique de conversation</li>
                <li>✅ Rate limiting (20 req/minute)</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Widget de chat visible</h4>
                  <p className="text-sm text-gray-600">Cliquer sur l'icône en bas à droite</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <strong>Questions suggérées pour tester:</strong>
                </p>
                <ul className="space-y-1 text-gray-600 pl-4">
                  <li>• "Quels sont les avantages du relamping LED?"</li>
                  <li>• "Combien coûte un audit énergétique?"</li>
                  <li>• "Quelles sont vos expertises?"</li>
                  <li>• "Comment prendre rendez-vous?"</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-mono text-gray-600">
                Endpoint: POST /api/chat (Server-Sent Events)
              </p>
              <p className="text-xs font-mono text-gray-600">
                Rate Limit: 20 messages/minute par IP
              </p>
              <p className="text-xs font-mono text-gray-600 mt-2">
                Model: gpt-4-turbo-preview (~$0.05-0.10 par conversation)
              </p>
            </div>
          </section>

          {/* Status & Configuration */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Configuration & Status</h2>
                <p className="text-gray-600">Vérification des variables d'environnement</p>
              </div>
            </div>

            <div className="space-y-4">
              <ConfigStatus
                name="Google Calendar"
                vars={['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN']}
              />
              <ConfigStatus name="OpenAI" vars={['OPENAI_API_KEY']} />
              <ConfigStatus name="Resend" vars={['RESEND_API_KEY']} />
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>💡 Astuce:</strong> Pour configurer les variables manquantes, éditer{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">.env.local</code> dans le dossier
                frontend.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center py-8">
            <p className="text-gray-600 mb-2">
              Documentation complète:{' '}
              <a
                href="/docs/specs/INTEGRATIONS.md"
                className="text-blue-600 hover:underline font-medium"
              >
                /docs/specs/INTEGRATIONS.md
              </a>
            </p>
            <p className="text-sm text-gray-500">
              EOLIYA INGENIERIE - Intégrations développées par Nejib Aloui
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Component to check environment variable status
 */
function ConfigStatus({ name, vars }: { name: string; vars: string[] }) {
  const checkEnvVar = (varName: string) => {
    // In production, never expose actual values
    return typeof process.env[varName] !== 'undefined' && process.env[varName] !== '';
  };

  const allConfigured = vars.every(checkEnvVar);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-xs text-gray-500">
          {vars.map((v) => v.replace('GOOGLE_', '').replace('OPENAI_', '').replace('RESEND_', '')).join(', ')}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {allConfigured ? (
          <>
            <span className="text-green-600 font-semibold">✓ Configuré</span>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </>
        ) : (
          <>
            <span className="text-red-600 font-semibold">✗ Manquant</span>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </>
        )}
      </div>
    </div>
  );
}
