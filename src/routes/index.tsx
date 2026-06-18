import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-rooftop.jpg";
import sushiImg from "@/assets/dish-sushi.jpg";
import steakImg from "@/assets/dish-steak.jpg";
import cocktailImg from "@/assets/dish-cocktail.jpg";
import ambianceImg from "@/assets/ambiance.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matii Rooftop — Sushi & Skyline Dining in Amman" },
      { name: "description", content: "Amman's most loved rooftop. Chef Musab's omakase sushi, signature cocktails, and panoramic city views. 4.8★ from 2,356 guests. Reserve tonight." },
      { property: "og:title", content: "Matii Rooftop — Sushi & Skyline Dining in Amman" },
      { property: "og:description", content: "Chef Musab's omakase, craft cocktails, and Amman's best rooftop view. Dine-in, takeaway & delivery." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const dishes = [
  {
    name: "Chef Musab's Omakase",
    desc: "A seasonal eight-piece journey of nigiri and signature rolls, finished with 24k gold leaf.",
    price: "JOD 28",
    img: sushiImg,
    tag: "Most loved",
  },
  {
    name: "Charcoal Wagyu",
    desc: "Binchotan-grilled wagyu, smoked seasonal vegetables, miso-bone reduction.",
    price: "JOD 24",
    img: steakImg,
    tag: "Chef's pick",
  },
  {
    name: "Matii Smoked Old Fashioned",
    desc: "Oak-smoked bourbon, burnt-orange bitters, hand-cut ice — served under the city lights.",
    price: "JOD 12",
    img: cocktailImg,
    tag: "Signature bar",
  },
];

const reviews = [
  {
    quote:
      "Hands down the best sushi I've ever had in my life. Chef Musab is incredibly talented — every piece feels like a work of art.",
    name: "Verified Guest",
    when: "2 months ago",
  },
  {
    quote:
      "The view, the food, the service — Matii nails all three. It's our new spot for special nights in Amman.",
    name: "Layla H.",
    when: "Recently",
  },
  {
    quote:
      "Booked for a birthday and the team made it unforgettable. The omakase is a must.",
    name: "Omar K.",
    when: "Recently",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight text-foreground">Matii</span>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Rooftop</span>
          </a>
          <ul className="hidden gap-10 text-sm text-muted-foreground md:flex">
            <li><a href="#menu" className="transition hover:text-primary">Menu</a></li>
            <li><a href="#story" className="transition hover:text-primary">Story</a></li>
            <li><a href="#reviews" className="transition hover:text-primary">Reviews</a></li>
            <li><a href="#visit" className="transition hover:text-primary">Visit</a></li>
          </ul>
          <a
            href="tel:+962790636599"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90 md:inline-flex"
          >
            Reserve a table
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Matii rooftop at twilight overlooking Amman"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:pb-32">
          <div className="max-w-2xl animate-float-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-background/30 px-4 py-1.5 backdrop-blur">
              <span className="text-primary">★ 4.8</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">2,356 guests · Amman</span>
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              Dinner above <span className="italic text-primary">the city.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Chef Musab's omakase sushi, charcoal grill, and craft cocktails — served on Amman's most coveted rooftop.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="tel:+962790636599"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
              >
                Book tonight · 07 9063 6599
              </a>
              <a
                href="#menu"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                Explore the menu
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span>Dine-in</span>
              <span>· Takeaway</span>
              <span>· Delivery</span>
              <span>· Open till 1 AM</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["4.8★", "Google rating"],
            ["2,356", "Guest reviews"],
            ["JOD 10–30", "Per person"],
            ["Till 1 AM", "Open nightly"],
          ].map(([big, small]) => (
            <div key={big} className="bg-background px-6 py-8 text-center">
              <div className="font-display text-3xl text-primary">{big}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">The menu</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Plates worth the climb.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A short, intentional menu built around what's fresh this week. Sushi from the cold bar, fire from the binchotan grill, and cocktails poured under the stars.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {dishes.map((d) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/50"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute left-5 top-5 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur">
                {d.tag}
              </div>
              <div className="space-y-3 p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl">{d.name}</h3>
                  <span className="shrink-0 text-primary">{d.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STORY / AMBIANCE */}
      <section id="story" className="relative overflow-hidden border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:py-32">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={ambianceImg}
              alt="Matii rooftop ambiance with hanging bulbs and city view"
              loading="lazy"
              width={1600}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our story</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">A rooftop built for the long evening.</h2>
            <p className="mt-6 text-muted-foreground">
              Matii began with a simple idea: take Amman's best view, set a few candlelit tables under string lights, and let Chef Musab cook. Years later, that idea still guides every plate, every pour, and every welcome at the door.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you're here for an anniversary, a quiet date, or a long table with friends — we kept the room small on purpose. Book ahead.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Chef</div>
                <div className="mt-1 text-foreground">Musab — Omakase & Grill</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Setting</div>
                <div className="mt-1 text-foreground">Open-air rooftop, Amman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Guest words</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">4.8 stars, 2,356 stories.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.quote}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8"
            >
              <div className="text-primary">★★★★★</div>
              <blockquote className="mt-6 font-display text-lg leading-relaxed text-foreground">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted-foreground">
                <div className="text-foreground">{r.name}</div>
                <div>{r.when}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* VISIT / CTA */}
      <section id="visit" className="relative overflow-hidden">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Plan your visit</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Tonight on the rooftop.</h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              We're open till 1 AM. Walk-ins welcome, but the best tables go to those who call ahead.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+962790636599"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
              >
                Call to reserve
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {[
              ["Address", "Waleed Jamal St, Amman"],
              ["Plus code", "XRXC+58 Amman"],
              ["Phone", "07 9063 6599"],
              ["Hours", "Daily · Closes 1 AM"],
              ["Price", "JOD 10–30 per person"],
              ["Service", "Dine-in · Takeaway · Delivery"],
            ].map(([k, v]) => (
              <div key={k} className="bg-card p-6">
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{k}</dt>
                <dd className="mt-2 text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl text-foreground">Matii</span>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Rooftop</span>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} Matii Rooftop · Amman, Jordan
          </p>
        </div>
      </footer>
    </main>
  );
}
