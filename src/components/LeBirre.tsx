import Section, { BeerCard, ContentImage } from "./Section";

export default function LeBirre() {
  return (
    <Section id="le-birre" title="LE BIRRE">
      <p className="mb-6 leading-relaxed text-neutral-600">
        Catalogo delle birre in produzione, disponibili in bottiglie [33 cl] o in fusto [20 l].
        <br />
        È possibile noleggiare la spina.
      </p>

      <ContentImage src="/images/Rud1.jpg" alt="Birre Rud Bir" />

      <h3 className="mb-6 text-base font-bold tracking-wider text-neutral-800">RUD BIR</h3>

      <BeerCard
        name="SPECIALINA"
        abv="5 % alc."
        vegan
        description="American Pale Ale con sentori agrumati e di frutta gialla. Il mango, il frutto della passione, le albicocche si apprezzano al naso e in bocca. Ideale come aperitivo!"
      />

      <BeerCard
        name="WEIZEN"
        abv="5,2 % alc"
        description="Pale Ale al Miele dal profumo molto intenso. L'equilibrio in bocca è notevole, caratterizzato da un finale amaro di miele di castagno che si fonde con quello del luppolo Svizzero che contiene. Ideale con le castagne e il panettone!"
      />

      <BeerCard
        name="ZEN-ZEN"
        abv="2% alc"
        description="Nella famiglia de Le leggere è nata la Rud Bir Zen-Zen. 2% di alcol, zenzero naturale bio, scorza di limone e freschezza a volontà. Ideale per rinfrescare la gola assetata dall'arsura e per realizzare cocktail fantasiosi."
      />

      <BeerCard
        name="AMBER"
        abv="5 % alc."
        vegan
        description="Indian Pale Ale moderata nell'alcol e nell'amaro. Equilibrio fra il caramello, i profumi e gli aromi di frutta rossa, come le fragole di bosco. Ideale per ritrovare l'equilibrio!"
      />

      <h3 className="mb-6 mt-10 text-base font-bold tracking-wider text-neutral-800">
        LE NOSTRANE
      </h3>

      <BeerCard
        name="LA VERZASCHINA"
        abv="5 % alc."
        description="Birra bionda prodotta con luppoli coltivati a Sonogno in val Verzasca."
      />

      <BeerCard
        name="LA CAVERGNESA"
        abv="5 % alc."
        description="Birra ambrata prodotta con luppoli coltivati a Cavergno in val Maggia."
      />
    </Section>
  );
}
