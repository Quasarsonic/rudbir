import Section, { ContentImage } from "./Section";

const BREWING_STEPS = [
  {
    number: 1,
    title: "ROMPI IL CHICCO",
    subtitle: "Macinatura",
    image: "/images/rud5.1.jpg",
    text: "I grani di malto d'orzo e di altri cereali eventualmente utilizzati devono ovviamente essere macinati per mettere a disposizione il loro contenuto amidaceo. Questa operazione in apparenza banale riveste una notevole importanza poiché il guscio del chicco, detta glumella, deve rimanere intatta (mentre il chicco deve rompersi) per favorire una filtrazione ottimale.",
  },
  {
    number: 2,
    title: "UNISCI L'ACQUA",
    subtitle: "Ammostamento",
    image: "/images/rud5.2.jpg",
    text: "Il cereale macinato viene miscelato con acqua calda per permettere l'attivazione degli enzimi contenuti nel malto. Nel malto esistono diversi enzimi, ognuno con un'azione differente, che operano in maniera ottimale a temperature e acidità (pH) diverse. Quelli più importanti sono della diastasi che degradano gli amidi del cereale in zuccheri. L'ammostamento è quindi una fase importantissima nella realizzazione della birra e, unitamente alla scelta delle tipologie e quantità dei diversi malti e cereali, rappresenta il momento in cui il birraio impone al prodotto finito le caratteristiche basilari desiderate: corpo, beverinità, alcool, schiuma, etc.",
  },
  {
    number: 3,
    title: "DIVIDI TREBBIE E MOSTO",
    subtitle: "Filtrazione",
    image: "/images/rud5.3.jpg",
    text: "Verificata l'azione degli enzimi della diastasi, ossia dopo che gli amidi sono stati completamente trasformati in zuccheri, è necessario filtrare l'impasto. Solitamente questa fase è realizzata con l'ausilio di un doppio fondo che, sostenendo le trebbie, permette al mosto zuccherino di essere filtrato sino a risultare privo di impurità. Le trebbie con il loro letto filtrante sono le assolute protagoniste di questo passaggio. Estratto il primo mosto, rimane imprigionata nelle trebbie una notevole quantità di zuccheri. Per recuperarli e quindi aumentare l'efficienza del sistema di birrificazione, i birrai sono soliti risciacquare con acqua calda due o tre volte le trebbie, recuperando nuovo mosto attraverso ulteriori fasi di filtrazione.",
  },
  {
    number: 4,
    title: "BUTTACI IL LUPPOLO",
    subtitle: "Bollitura e luppolamento",
    image: "/images/rud5.4.jpg",
    text: "La bollitura del mosto, successiva alla filtrazione, viene effettuata di norma per 60-90 minuti (alcune birrerie arrivano però fino a 250!), ed assolve diverse funzioni: denaturare gli enzimi ancora eventualmente presenti; sterilizzare il mosto; favorire la coagulazione e precipitazione di proteine e polifenoli; consentire la trasformazione degli alfa acidi del luppolo in iso-alfa acidi, responsabili della componente amara della birra. Dal punto di vista organolettico, il luppolo svolge sia una funzione amaricante, data dalla componente degli alfa acidi, che aromatica, data da beta acidi e oli essenziali. La funzione amaricante può essere resa possibile solamente attraverso la solubilizzazione degli alfa acidi del luppolo per mezzo di una bollitura prolungata: per questo motivo le aggiunte di luppolo amaricante vengono effettuate all'inizio della fase di bollitura. Successivamente durante la bollitura avvengono le aggiunte per l'aroma.",
  },
  {
    number: 5,
    title: "INOCULA IL LIEVITO",
    subtitle: "Fermentazione",
    image: "/images/rud5.5.jpg",
    text: "Al termine della bollitura il mosto viene poi trasferito verso i fermentatori e raffreddato attraverso uno scambiatore di calore sino alla temperatura adatta al tipo di fermentazione scelta, e di conseguenza al tipo di lievito utilizzato (alta 18-25° C oppure bassa 7-15° C). Il mosto dopo la bollitura è però povero di ossigeno, indispensabile per una corretta fermentazione. Il birraio provede quindi a reintegrare la quantità di ossigeno necessaria. Il mosto è ora pronto per l'aggiunta del lievito e la fase di fermentazione. Si dice che il mastro birraio produce il mosto, ma che è il lievito a far la birra!",
  },
  {
    number: 6,
    title: "RIEMPI LE BOTTIGLIE",
    subtitle: "Imbottigliamento",
    image: "/images/rud5.6.jpg",
    text: "Dopo una settimana circa all'interno dei fermentatori primari, la birra viene trasferita all'interno di maturatori per un periodo più o meno lungo a dipendenza del tipo di fermentazione. Successivamente la birra viene messa in bottiglia, una ad una, manualmente, poi tappata e infine etichettata. In bottiglia la birra subisce una rifermentazione: questo contribuisce a stabilizzare il prodotto senza ricorrere alla pastorizzazione.",
  },
];

export default function ComeSiFaLaBirra() {
  return (
    <Section id="come-si-fa" title="COME SI FA LA BIRRA?">
      <ContentImage src="/images/rud4.jpg" alt="Come si fa la birra" />

      <div className="space-y-12">
        {BREWING_STEPS.map((step) => (
          <article key={step.number}>
            <ContentImage src={step.image} alt={`${step.number} — ${step.title}`} />
            <h3 className="mb-1 text-base font-bold text-neutral-800">
              {step.number} — {step.title}
            </h3>
            <p className="mb-3 text-sm font-medium text-neutral-500">{step.subtitle}</p>
            <p className="leading-relaxed text-neutral-600">{step.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
