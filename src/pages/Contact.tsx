import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Contact() {
  return (
    <div className="space-y-16">
      <Section
        eyebrow="Contact"
        title="Un espace moderne, rassurant et clair"
        description="Le formulaire illustratif montre comment une mise en page douce et élégante rend l'étape de contact plus accessible. 
        Le visiteur comprend que tout est simple, fluide et discret."
      >
        <p className="text-xs text-neutral-400 mb-4">
          Ce formulaire est présenté comme il pourrait apparaître sur le site final de {siteConfig.clubName}.
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="glass p-7 rose-halo">
            <h3 className="text-base font-semibold text-white">Formulaire de contact</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-xs text-neutral-300 mb-1">Nom / pseudo</label>
                <input className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100" placeholder="Votre nom" />
              </div>

              <div>
                <label className="block text-xs text-neutral-300 mb-1">Email</label>
                <input className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100" type="email" placeholder="email@exemple.com" />
              </div>

              <div>
                <label className="block text-xs text-neutral-300 mb-1">Message</label>
                <textarea className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100" rows={4} placeholder="Votre demande..." />
              </div>

              <button className="btn-primary w-full">Envoyer (maquette)</button>
            </div>
          </div>

          <div className="glass p-7 gold-halo">
            <h3 className="text-base font-semibold text-white">Informations utiles</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Voici comment une page de contact moderne peut présenter les informations essentielles, tout en restant douce, élégante et rassurante.
            </p>

            <div className="mt-5 space-y-2 text-sm text-neutral-300">
              <div>📍 Adresse du club (exemple)</div>
              <div>📞 Téléphone (exemple)</div>
              <div>🕘 Horaires habituels</div>
              <div>🧥 Dress-code recommandé</div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-[11px] text-neutral-400">
              Une mention discrète pour rappeler la confidentialité propre à {siteConfig.clubName}.
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}

export default Contact;
