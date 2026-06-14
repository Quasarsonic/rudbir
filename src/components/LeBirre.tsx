import Section, { BeerCard, ContentImage, CtaButton } from "./Section";

export default function LeBirre() {
  return (
    <Section id="le-birre" title="LE BIRRE">
      <p className="mb-6 leading-relaxed text-zinc-300">
        Catalogo delle birre in produzione, disponibili in bottiglie [33 cl] o in fusto [20 l].
        <br />
        È possibile noleggiare la spina.
      </p>

      <div className="mb-8">
        <CtaButton href="#contatti">Ordina o noleggia la spina</CtaButton>
      </div>

      <ContentImage
        src="/images/Rud1.jpg"
        alt="Birre Rud Bir"
        width={1170}
        height={460}
        productCard
      />

      <h3 className="mb-6 text-base font-bold tracking-wider text-zinc-100">RUD BIR</h3>

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
        name="TISANA DELLA VERZASCA"
        abv="tisana artigianale"
        description="Infuso alle erbe della valle, con note di montagna e sentori agrumati. Una tisana artigianale prodotta a Gordola con ingredienti selezionati del territorio ticinese — perfetta per chi cerca calma e autenticità locale."
        heritageLabel="Prodotto locale della Valle Verzasca"
      />

      <BeerCard
        name="AMBER"
        abv="5 % alc."
        vegan
        description="Indian Pale Ale moderata nell'alcol e nell'amaro. Equilibrio fra il caramello, i profumi e gli aromi di frutta rossa, come le fragole di bosco. Ideale per ritrovare l'equilibrio!"
      />

      <h3 className="mb-6 mt-10 text-base font-bold tracking-wider text-zinc-100">
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
