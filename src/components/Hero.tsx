import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full">
      <Image
        src="/images/rud0.jpg"
        alt="Rud Bir — Birrificio artigianale ticinese"
        width={1920}
        height={1080}
        priority
        className="h-auto w-full object-cover"
        sizes="100vw"
      />
    </div>
  );
}
