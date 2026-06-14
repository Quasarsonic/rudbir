import Image from "next/image";
import Section from "./Section";

export default function Contatti() {
  return (
    <Section id="contatti" title="CONTATTI" className="border-b-0">
      <address className="mb-8 not-italic leading-relaxed text-neutral-600">
        <strong className="text-neutral-800">RUD BIR</strong> di Luca Ferrara
        <br />
        Via Santa Maria 66
        <br />
        6596 Gordola
      </address>

      <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden bg-neutral-100 md:aspect-[16/9]">
        <iframe
          src="https://maps.google.com/maps?q=Via+Santa+Maria+66,+6596+Gordola,+Svizzera&t=k&z=16&ie=UTF8&iwloc=&output=embed"
          title="Mappa Birrificio Rud Bir — Via Santa Maria 66, Gordola"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="space-y-2 text-neutral-500">
        <p>
          <a
            href="mailto:info@rudbir.ch"
            className="transition-colors hover:text-[var(--color-rud-green)]"
          >
            info@rudbir.ch
          </a>
        </p>
        <p>
          <a
            href="tel:+41762439758"
            className="transition-colors hover:text-[var(--color-rud-green)]"
          >
            0041 (0) 76 243 97 58
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/rudbir.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-rud-green)] transition-opacity hover:opacity-80"
          >
            Pagina Facebook
          </a>
        </p>
      </div>

      <p className="my-8 text-center tracking-widest text-neutral-400">***</p>

      <h3 className="mb-8 text-center text-xl font-bold tracking-wider text-neutral-800">
        SALUTE!
      </h3>

      <div className="relative mx-auto max-w-md">
        <Image
          src="/images/rud6.jpg"
          alt="Bottiglia e bicchiere di birra Rud Bir"
          width={800}
          height={600}
          className="h-auto w-full object-contain"
          sizes="(max-width: 768px) 100vw, 448px"
        />
      </div>
    </Section>
  );
}
