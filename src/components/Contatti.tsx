import Image from "next/image";
import Section, { CtaButton, PRODUCT_CARD_HOVER } from "./Section";

export default function Contatti() {
  return (
    <Section id="contatti" title="CONTATTI" className="border-b-0">
      <address className="mb-8 not-italic leading-relaxed text-zinc-300">
        <strong className="text-zinc-100">RUD BIR</strong> di Luca Ferrara
        <br />
        Via Santa Maria 66
        <br />
        6596 Gordola
      </address>

      <div className="relative mb-8 aspect-[4/3] w-full max-w-full min-w-0 overflow-hidden rounded-sm border border-amber-400/20 bg-zinc-800 md:aspect-[16/9]">
        <iframe
          src="https://maps.google.com/maps?q=Via+Santa+Maria+66,+6596+Gordola,+Svizzera&t=k&z=16&ie=UTF8&iwloc=&output=embed"
          title="Mappa Birrificio Rud Bir — Via Santa Maria 66, Gordola"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <CtaButton href="mailto:info@rudbir.ch">Scrivici</CtaButton>
        <CtaButton href="tel:+41762439758">Chiamaci</CtaButton>
        <CtaButton href="https://www.facebook.com/rudbir.ch" external>
          Facebook
        </CtaButton>
      </div>

      <p className="my-8 text-center tracking-widest text-zinc-500">***</p>

      <h3 className="mb-8 text-center text-xl font-bold tracking-wider bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
        SALUTE!
      </h3>

      <div
        className={`relative mx-auto w-full min-w-0 max-w-md rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-4 ${PRODUCT_CARD_HOVER} hover:border-amber-400/25 active:translate-y-0`}
      >
        <Image
          src="/images/rud6.jpg"
          alt="Bottiglia e bicchiere di birra Rud Bir"
          width={1170}
          height={817}
          quality={90}
          className="h-auto w-full max-w-full object-contain transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 448px"
        />
      </div>
    </Section>
  );
}
