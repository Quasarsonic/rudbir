import Image from "next/image";
import { CtaButton } from "./Section";

export default function Hero() {
  return (
    <div className="relative w-full max-w-full min-w-0 overflow-hidden">
      <Image
        src="/images/rud0.jpg"
        alt="Rud Bir — Birrificio artigianale ticinese"
        width={1170}
        height={1415}
        priority
        quality={90}
        className="h-auto w-full max-w-full object-contain transition-all duration-500"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-neutral-950"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-6 flex justify-center px-4 md:bottom-10">
        <CtaButton href="#le-birre">Scopri le birre</CtaButton>
      </div>
    </div>
  );
}
