import Image from "next/image";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-16 border-b border-neutral-100 py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="mb-8 text-xl font-normal tracking-[0.2em] text-neutral-800 md:text-2xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

interface BeerCardProps {
  name: string;
  abv: string;
  description: string;
  vegan?: boolean;
}

export function BeerCard({ name, abv, description, vegan }: BeerCardProps) {
  return (
    <article className="mb-8">
      <h3 className="mb-2 text-base font-bold text-neutral-800">
        {name}{" "}
        <span className="font-normal text-neutral-500">({abv})</span>
      </h3>
      <p className="leading-relaxed text-neutral-600">{description}</p>
      {vegan && (
        <p className="mt-2 text-sm font-semibold tracking-wide text-[var(--color-rud-green)]">
          VEGAN!
        </p>
      )}
    </article>
  );
}

interface ContentImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ContentImage({ src, alt, className = "" }: ContentImageProps) {
  return (
    <div className={`relative my-8 w-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="h-auto w-full object-cover"
        sizes="(max-width: 768px) 100vw, 896px"
      />
    </div>
  );
}

interface VideoEmbedProps {
  type: "youtube" | "vimeo";
  id: string;
  title: string;
}

export function VideoEmbed({ type, id, title }: VideoEmbedProps) {
  const src =
    type === "youtube"
      ? `https://www.youtube.com/embed/${id}`
      : `https://player.vimeo.com/video/${id}`;

  return (
    <div className="relative my-8 aspect-video w-full overflow-hidden bg-neutral-100">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-rud-green)] underline-offset-2 transition-colors hover:underline"
    >
      {children}
    </a>
  );
}
