import Image from "next/image";

const OPTIMIZED_IMAGE_CLASS =
  "h-auto w-full max-w-full object-contain transition-all duration-500";

export const PRODUCT_CARD_HOVER =
  "transition-all duration-500 ease-out hover:-translate-y-2 hover:drop-shadow-[0_20px_20px_rgba(255,255,255,0.05)]";

const CTA_BUTTON_CLASS =
  "inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-amber-400 to-yellow-600 px-6 py-3 text-sm font-semibold tracking-wider text-zinc-900 transition-colors duration-200 hover:from-amber-300 hover:to-yellow-500 active:from-amber-500 active:to-yellow-700";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full min-w-0 scroll-mt-28 border-b border-zinc-800 py-12 md:scroll-mt-36 md:py-16 ${className}`}
    >
      <div className="mx-auto w-full min-w-0 max-w-4xl px-4 md:px-6">
        <h2 className="mb-8 break-words bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-xl font-normal tracking-[0.12em] text-transparent md:text-2xl md:tracking-[0.2em]">
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
  heritageLabel?: string;
}

interface HeritageBadgeProps {
  label?: string;
  className?: string;
}

export function HeritageBadge({
  label = "Prodotto locale della Valle Verzasca",
  className = "",
}: HeritageBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-amber-400/30 bg-zinc-950/90 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-zinc-300 ${className}`}
    >
      {label}
    </span>
  );
}

export function BeerCard({
  name,
  abv,
  description,
  vegan,
  heritageLabel,
}: BeerCardProps) {
  return (
    <article
      className={`group mb-6 min-w-0 break-words rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-5 ${PRODUCT_CARD_HOVER} hover:border-amber-400/25 active:translate-y-0`}
    >
      <h3 className="mb-2 text-base font-bold text-zinc-100">
        {name}{" "}
        <span className="font-normal text-zinc-400">({abv})</span>
      </h3>
      <p className="leading-relaxed text-zinc-300">{description}</p>
      {heritageLabel && (
        <div className="mt-3">
          <HeritageBadge label={heritageLabel} />
        </div>
      )}
      {vegan && (
        <p className="mt-2 text-sm font-semibold tracking-wide text-amber-400">
          VEGAN!
        </p>
      )}
    </article>
  );
}

interface CtaButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function CtaButton({
  href,
  children,
  className = "",
  external = false,
  onClick,
  type = "button",
}: CtaButtonProps) {
  const classes = `${CTA_BUTTON_CLASS} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

interface ContentImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  productCard?: boolean;
}

export function ContentImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  productCard = false,
}: ContentImageProps) {
  return (
    <div
      className={`relative my-8 w-full max-w-full min-w-0 overflow-hidden rounded-lg ${productCard ? `border border-zinc-800/80 bg-zinc-900/40 p-4 ${PRODUCT_CARD_HOVER} hover:border-amber-400/25 active:translate-y-0` : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={90}
        priority={priority}
        className={OPTIMIZED_IMAGE_CLASS}
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
    <div className="relative my-8 aspect-video w-full max-w-full min-w-0 overflow-hidden rounded-sm border border-amber-400/20 bg-zinc-800">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full max-w-full border-0"
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
      className="break-words text-amber-400 underline-offset-2 transition-colors hover:text-yellow-500 hover:underline"
    >
      {children}
    </a>
  );
}
