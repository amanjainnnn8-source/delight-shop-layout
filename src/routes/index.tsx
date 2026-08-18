import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, ShoppingBag, Menu } from "lucide-react";

import mainImage from "@/assets/throne-main.jpg";
import packagingImage from "@/assets/throne-packaging.jpg";
import nobleImage from "@/assets/variant-noble.jpg";
import regalImage from "@/assets/variant-regal.jpg";
import orionImage from "@/assets/variant-orion.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "angle-line (100ml) — Extrait de Parfum" },
      {
        name: "description",
        content:
          "angle-line 100ml extrait de parfum. Smoke, leather and the final say. Unisex. Ships within 24-36 hours.",
      },
      { property: "og:title", content: "angle-line (100ml) — Extrait de Parfum" },
      {
        property: "og:description",
        content: "Smoke, leather and the final say. Unisex extrait de parfum, 100ml.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

const gallery = [
  { src: mainImage, alt: "angle-line parfum bottle shaped like a chess king" },
  { src: packagingImage, alt: "angle-line black gift box packaging with the bottle" },
];

const variants = [
  { name: "Noble (100ml)", image: nobleImage },
  { name: "Regal (100ml)", image: regalImage },
  { name: "Orion (100ml)", image: orionImage },
];

const notes = [
  { tier: "Top", value: "Black pepper · Bergamot" },
  { tier: "Heart", value: "Smoked leather · Iris" },
  { tier: "Base", value: "Oud · Amber · Vetiver" },
];

function ProductPage() {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const current = gallery[active] ?? gallery[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary py-2.5 text-center text-primary-foreground">
        <p className="label-xs">Claim two 7ml freebies with every order</p>
      </div>

      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background px-5 py-4 md:px-10">
        <button aria-label="Open menu" className="p-1">
          <Menu className="size-5" strokeWidth={1.5} />
        </button>
        <span className="text-xl font-extrabold uppercase" style={{ letterSpacing: "var(--tracking-brand)" }}>
          angle-line
        </span>
        <div className="flex items-center gap-4">
          <span className="btn-ink hidden px-4 py-2 md:inline-flex hover:btn-ink-hover">Buy now</span>
          <button aria-label="Cart" className="p-1">
            <ShoppingBag className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <main>
        <section className="grid gap-10 px-5 py-8 md:grid-cols-2 md:gap-14 md:px-10 md:py-12">
          <div>
            <div className="bg-secondary">
              <img
                src={current.src}
                alt={current.alt}
                width={1200}
                height={1200}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="mt-3 flex gap-3">
              {gallery.map((image, i) => (
                <button
                  key={image.src}
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`size-20 border bg-secondary transition-colors ${
                    active === i ? "border-foreground" : "border-border"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-28 md:self-start">
            <h1 className="text-4xl uppercase md:text-5xl">
              angle-line <span className="text-2xl md:text-3xl">(100ml)</span>
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Unisex", "Leather", "Parfum"].map((tag) => (
                <span key={tag} className="label-xs bg-secondary px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>

            <p className="label-xs mt-5 text-muted-foreground">
              Late dinners · Long drives · All nighters
            </p>
            <p className="mt-2 text-lg font-medium">
              It smells like smoke, leather and the final say.
            </p>

            <div className="mt-6">
              <p className="text-3xl font-semibold">₹ 2,499</p>
              <p className="mt-1 text-xs text-muted-foreground">Incl. of all taxes</p>
            </div>

            <div className="mt-8">
              <p className="label-xs">Choose variants</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {variants.map((variant) => (
                  <div key={variant.name} className="text-center">
                    <div className="border border-border bg-secondary">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        width={600}
                        height={600}
                        loading="lazy"
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                    <p className="label-xs mt-2">{variant.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center justify-between border border-border px-3 py-3 sm:w-32">
                <button aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  <Minus className="size-4" />
                </button>
                <span className="text-sm font-semibold">{qty}</span>
                <button aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>
                  <Plus className="size-4" />
                </button>
              </div>
              <button className="btn-ink flex-1 hover:btn-ink-hover">Add to cart</button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              * Ships within 24-36 hours of ordering.
            </p>

            <dl className="mt-8 divide-y divide-border border-y border-border">
              {notes.map((note) => (
                <div key={note.tier} className="flex items-center justify-between py-4">
                  <dt className="label-xs text-muted-foreground">{note.tier}</dt>
                  <dd className="text-sm font-medium">{note.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="grid gap-px bg-border md:grid-cols-2">
          <div className="flex min-h-72 flex-col justify-end bg-primary p-8 text-primary-foreground md:p-14">
            <h2 className="text-3xl uppercase md:text-4xl">Absolute. Dark. Unrivalled.</h2>
            <p className="mt-4 max-w-md text-sm opacity-75">
              A 24% concentration extrait built for weight, not noise. Eight to ten hours of
              smoked leather that stays close to the skin.
            </p>
          </div>
          <img
            src={packagingImage}
            alt="angle-line packaging on dark marble"
            width={1200}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </section>
      </main>

      <footer className="flex flex-col items-center gap-3 px-5 py-12 text-center">
        <span className="text-lg font-extrabold uppercase" style={{ letterSpacing: "var(--tracking-brand)" }}>
          angle-line
        </span>
        <p className="label-xs text-muted-foreground">Power isn't inherited. It's built.</p>
      </footer>
    </div>
  );
}
