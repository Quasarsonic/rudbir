import Section, { ContentImage, ExternalLink, VideoEmbed } from "./Section";

const PRESS_LINKS = [
  {
    href: "http://digusto.ch/birra-artigianale-ticinese/",
    label: "digusto.ch — Birra artigianale ticinese",
  },
  {
    href: "http://www.tio.ch/News/People/People/696194/Luka-Rude-Boy-e-il-pallino-per-la-birra-fatta-in-casa/",
    label: "tio.ch — Luka Rude Boy e il pallino per la birra fatta in casa",
  },
  {
    href: "http://www3.varesenews.it/blog/maltogradimento/?tag=rud-bir",
    label: "varesenews.it — Maltogradimento",
  },
  {
    href: "http://www.progettiamo.ch/?progetti/48/la-rivisitazione-di-un-birrificio-artigianale",
    label: "progettiamo.ch — La rivisitazione di un birrificio artigianale",
  },
];

export default function IlBirrificio() {
  return (
    <Section id="il-birrificio" title="IL BIRRIFICIO">
      <VideoEmbed
        type="youtube"
        id="i4lJeF52dMo"
        title="Giro virtuale nel birrificio Rud Bir"
      />

      <p className="mb-8 leading-relaxed text-zinc-300">
        Fatti un giro virtuale nel birrificio{" "}
        <span className="italic">[cliccando sul video qui sopra]</span>, oppure passa a
        trovarmi a Gordola in via S. Gottardo 80.
      </p>

      <h3 className="mb-4 text-base font-bold tracking-wider text-zinc-100">AMISI</h3>
      <p className="mb-4 leading-relaxed text-zinc-300">
        Per lo start-up del micro-birrificio, Rud Bir è stata sostenuta, coaudiuvata e
        supervisionata da AMISI, Associazione Microcredito della Svizzera Italiana.
        Approfitto per ringraziare l&apos;associazione AMISI per il lavoro professionale,
        competente e la massima disponibilità dimostratami in questo periodo.
      </p>
      <p className="mb-8">
        <ExternalLink href="https://www.amisi.ch">www.amisi.ch</ExternalLink>
      </p>

      <ContentImage
        src="/images/rud2.jpg"
        alt="Birrificio Rud Bir"
        width={1076}
        height={761}
      />

      <h3 className="mb-4 text-base font-bold tracking-wider text-zinc-100">
        LUKA &quot;RUDE BOY&quot; FERRARA
      </h3>
      <div className="space-y-4 leading-relaxed text-zinc-300">
        <p>
          Luka sono io. 40 enne con una passione per la chimica e per la musica. Sono una voce
          di Rete 3 (Luka Rude Boy), gioco a fare il dj nei locali e nelle tendine, presento
          manifestazioni e festival. Chimico di formazione, ho iniziato a produrre birra a casa
          nel 1996 dopo la scuola: la mia passione per farla e degustarla non si è mai spenta.
        </p>
        <p>
          Ho acquistato 3 anni fa un piccolo impianto da homebrewer (50 litri) e ho iniziato a
          farmi la birra per me seriamente: è piaciuta anche ad altri nel frattempo e mi ritrovo
          oggi con un micro-birrificio ed un impianto da 400 litri!
        </p>
        <p>
          Per qualsiasi altra informazione, mi potete contattare all&apos;indirizzo{" "}
          <a
            href="mailto:info@rudbir.ch"
            className="text-amber-400 transition-colors hover:text-yellow-500 hover:underline"
          >
            info@rudbir.ch
          </a>
        </p>
      </div>

      <h3 className="mb-4 mt-10 text-base font-bold tracking-wider text-zinc-100">
        DICONO DI RUD BIR
      </h3>
      <ul className="mb-8 min-w-0 space-y-2 break-words">
        {PRESS_LINKS.map((link) => (
          <li key={link.href}>
            <ExternalLink href={link.href}>{link.label}</ExternalLink>
          </li>
        ))}
      </ul>

      <h3 className="mb-4 text-base font-bold tracking-wider text-zinc-100">
        E AVETE VISTO?
      </h3>
      <p className="mb-6">
        <ExternalLink href="http://www.bov.ch/cgi-bin/canton.cgi?ti">
          www.bov.ch
        </ExternalLink>
      </p>

      <p className="mb-6 text-center tracking-widest text-zinc-500">***</p>

      <VideoEmbed type="vimeo" id="108791948" title="Rud Bir — Video" />
    </Section>
  );
}
