import Section, { BeerCard, ContentImage } from "./Section";

const ARCHIVE_BEERS = [
  {
    name: "CHIARA",
    abv: "4.3 % alc",
    vegan: true,
    description:
      "Birra ad alta fermentazione stile Pale Ale inglese, leggera e beverina, presenta note di malto piacevoli al naso e al palato. Ideale ogni qualvolta tu abbia sete.",
  },
  {
    name: "AMBER",
    abv: "4.9 % alc.",
    vegan: true,
    description:
      "Birra ad alta fermentazione stile Amber Ale inglese, dal sapore amabile e ideale per chi predilige note torrefatte a sentori profumati di luppoli europei e americani. Ideale quando hai voglia di viziarti un po'....",
  },
  {
    name: "IMPERIAL",
    abv: "7.5 % alc",
    vegan: true,
    description:
      "Birra ad alta fermentazione stile Stout, ma nella sua forma più alcolica, 'Imperial Stout'. Note di caffè e di liquirizia si fondono in una nerissima birra dalla schiuma morbida. Ideale come dopo cena!",
  },
  {
    name: "SPECIALINA",
    abv: "5 % alc.",
    vegan: true,
    description:
      "Birra ad alta fermentazione stile American Pale Ale, dal profumo intenso di agrumi, mango e dal sapore mediamente amaro ma rinfrescante e sorprendente. Ideale come aperitivo!",
  },
  {
    name: "PISADAGATT",
    abv: "5,4 % alc",
    vegan: true,
    description:
      "La prima ricetta creata da RudBir nel 2010, rivisitata ora con luppoli australiani molto resinosi e agrumati. Morbida in bocca, esala al naso, esaltati ed acri, i profumi del luppolo. Ideale per liberare il naso tappo e inebriare le vie respiratorie!",
  },
  {
    name: "MERLOT",
    abv: "5.0 % alc",
    vegan: true,
    description:
      "Birra ad alta fermentazione stile Ticinese prodotta con lievito del Merlot che la rende piacevolmente profumata al naso e corroborante al palato! Ideale con formaggi anche stagionati.",
  },
  {
    name: "STELLARE",
    abv: "7.0 % alc",
    vegan: true,
    description:
      "Birra ad alta fermentazione in stile Dunkel Bock (stile tedesco che sta scomparendo). Birra molto amabile, maltata con profumo ed aroma di carattere! Ideale con affettati!",
  },
  {
    name: "LETARGO",
    abv: "5,2 % alc",
    description:
      "Birra in stile blanche belga, ma rouge. Speziata con coriandolo, scorza d'arancio e pepe aromatizzato in Valle Maggia. Tra i suoi cereali di fabbricazione troviamo orzo, farro e frumento BIO provenienti dal piano di Magadino. Ideale con le castagne e il panettone!",
  },
  {
    name: "VAI ZEN",
    abv: "3,5 % alc",
    description:
      "Birra di grano in stile White IPA, ma con soli 3,5% alc. Una sfida alla canicola estiva!",
  },
  {
    name: "BITTER PAN",
    abv: "5,8 % alc",
    description:
      "Birra ad alta fermentazione stile Bitter. La ricetta s'impreziosisce con l'aggiunta di pane raffermo, sì, ma diventato grande mai! e che trasuda giovinezza e spensieratezza in ogni sua briciola. Una birra sbarazzina da bere con la propria ombra dopo essersi riconciliati.",
  },
  {
    name: "CASTA",
    abv: "5,5 % alc",
    description:
      "Birra alla castagna, senza macchia e senza spine. Ottima davanti al fuoco le sere autunnali o tra i filari a fine vendemmia. Aiuta a non bestemmiare mentre si tolgono spine dal fianco.",
  },
  {
    name: "AMBRA KADABRA",
    abv: "7,0 % alc",
    vegan: true,
    description:
      "Birra ambrata ad alta fermentazione stile Indian Pale Ale. La frutta che si sposa con l'amaro in un connubio riuscitissimo! Arancio, mandarino maturo, frutto della passione dovuto all'uso di luppoli aromatici. Ideale dopo le 17!",
  },
];

export default function Birrografia() {
  return (
    <Section id="birrografia" title="BIRROGRAFIA">
      <p className="mb-8 leading-relaxed text-neutral-600">
        Lista non esaustiva delle varie birre prodotte nel tempo.
        <br />
        Le birre non più in produzione potrebbero tornare, chiedete al birraio.
      </p>

      <ContentImage src="/images/Rud3.jpg" alt="Birrografia Rud Bir" />

      <ol className="list-none space-y-0">
        {ARCHIVE_BEERS.map((beer, index) => (
          <li key={beer.name} className="relative pl-8">
            <span className="absolute left-0 top-0 font-bold text-neutral-400">
              {index + 1}
            </span>
            <BeerCard
              name={beer.name}
              abv={beer.abv}
              description={beer.description}
              vegan={beer.vegan}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
