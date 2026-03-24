import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const WEEKLY_EXERCISES = [
  {
    day: "Lunes",
    focus: "Cuerpo completo (ligero)",
    items: [
      "Calentamiento 5 min (movilidad cadera + hombros)",
      "Sentadillas al peso corporal · 3 × 12",
      "Flexiones inclinadas (en banco o mesa) · 3 × 8–12",
      "Plancha forearm · 3 × 30–45 s"
    ]
  },
  {
    day: "Martes",
    focus: "Cardio suave",
    items: [
      "Caminata rápida o bici · 25–35 min (hablar sin ahogarte)",
      "Core: dead bug · 3 × 8/side",
      "Estiramientos piernas y espalda · 8 min"
    ]
  },
  {
    day: "Miércoles",
    focus: "Tren inferior",
    items: [
      "Zancadas alternas · 3 × 10/pierna",
      "Puente de glúteos · 3 × 15",
      "Subidas a escalón o step · 3 × 10/pierna",
      "Estático cuádriceps contra pared · 2 × 40 s"
    ]
  },
  {
    day: "Jueves",
    focus: "Descanso activo",
    items: [
      "Paseo 20 min",
      "Movilidad columna y cuello · 10 min",
      "Respiración diafragmática · 5 min"
    ]
  },
  {
    day: "Viernes",
    focus: "Tren superior + postura",
    items: [
      "Remo con banda o botella · 3 × 12",
      "Press militar ligero (mancuernas/botellas) · 3 × 10",
      "Face pull con banda · 3 × 15",
      "Farmer carry (si tienes peso) · 3 × 20 m"
    ]
  },
  {
    day: "Sábado",
    focus: "Circuito corto",
    items: [
      "4 rondas, 40 s trabajo / 20 s descanso: jumping jacks suaves, sentadilla, skipping sin cuerda, plancha",
      "Enfriamiento y estiramientos · 6 min"
    ]
  },
  {
    day: "Domingo",
    focus: "Recuperación",
    items: [
      "Caminata opcional 15–20 min",
      "Estiramientos suaves cuerpo completo"
    ]
  }
] as const;

const WEEKLY_MEALS = [
  {
    day: "Lunes",
    breakfast: "Yogur natural + avena + frutos rojos y semillas de chía.",
    lunch: "Ensalada grande (lechuga, tomate, garbanzos) + pechuga a la plancha o tofu.",
    dinner: "Pescado al horno con verduras asadas y un poco de patata."
  },
  {
    day: "Martes",
    breakfast: "Tostada integral + aguacate + huevo y tomate.",
    lunch: "Arroz integral con lentejas estofadas y espinacas.",
    dinner: "Crema de calabacín + tortilla de claras o huevos con ensalada."
  },
  {
    day: "Miércoles",
    breakfast: "Batido: plátano, leche o bebida vegetal, avena, cacao puro.",
    lunch: "Wrap integral con pavo o hummus, rúcula y zanahoria rallada.",
    dinner: "Pavo o seitán salteado con brócoli y arroz basmati."
  },
  {
    day: "Jueves",
    breakfast: "Avena cocida con manzana rallada y canela.",
    lunch: "Quinoa con ensalada de pepino, tomate, feta o queso fresco y aceite de oliva.",
    dinner: "Merluza o bacalao con puré de coliflor y zanahoria."
  },
  {
    day: "Viernes",
    breakfast: "Requesón o queso fresco + fruta y nueces.",
    lunch: "Pasta integral con salsa de tomate casera y albóndigas de pavo o legumbres.",
    dinner: "Ensalada de lentejas templadas con huevo duro y aguacate."
  },
  {
    day: "Sábado",
    breakfast: "Pan integral + tomate (estilo pan con tomate) + fruta.",
    lunch: "Pollo o legumbres al curry con arroz y verduras.",
    dinner: "Pizza casera fina: masa integral, verduras y mozzarella moderada."
  },
  {
    day: "Domingo",
    breakfast: "Tortilla francesa (2 huevos) + pan integral y naranja.",
    lunch: "Estofado de ternera magra o estofado de garbanzos con patata.",
    dinner: "Sopa de verduras + tostadas con queso fundido ligero."
  }
] as const;

const COMPARISON = [
  {
    label: "Enfoque",
    free: "Plantillas semanales para la mayoría",
    paid: "Plan hecho según tu objetivo, nivel y horarios"
  },
  {
    label: "Entrenamientos",
    free: "Ideas generales de ejercicios (sin progresión a tu nombre)",
    paid: "Progresión guiada, volumen e intensidad ajustados a ti"
  },
  {
    label: "Nutrición",
    free: "Menú tipo de la semana (no adaptado a alergias ni gustos)",
    paid: "Pautas y ajustes según tus preferencias y resultados"
  },
  {
    label: "Seguimiento",
    free: "Sin revisión de técnica ni feedback",
    paid: "Coaching, correcciones y ajustes continuos"
  }
] as const;

export default function FreemiumPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-grain opacity-90"
        aria-hidden
      />
      <SiteHeader />

      <main className="relative pt-36 sm:pt-44 lg:pt-48">
        <section className="relative px-6 pb-16">
          <div
            className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-70"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-glow sm:text-xs">
                  100% gratuito
                </span>
                <span className="inline-flex items-center rounded-full border border-text/10 bg-surface/80 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-muted backdrop-blur-sm sm:text-xs">
                  Sin registro
                </span>
              </div>
              <h1 className="font-display mt-6 text-balance text-3xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl">
                Tu semana gratis: ejercicios + comidas tipo
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Aquí tienes el <strong className="font-semibold text-text">contenido gratuito</strong>{" "}
                de la semana: entrenos y menú modelo. Es genérico y se renueva en
                la web; el{" "}
                <strong className="font-semibold text-text">plan de pago</strong>{" "}
                va contigo al detalle.
              </p>

              <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-text/12 bg-bg p-5 text-left shadow-sm sm:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-text/70">
                  Obesidad grave o muy poco hábito de movimiento
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Si esta semana tipo te parece demasiado fuerte, hay una{" "}
                  <strong className="font-semibold text-text">
                    fase previa gratuita
                  </strong>
                  : caminar muy poco a poco, movilidad en silla y pautas de
                  comida suaves, pensadas para quien aún no está en nivel
                  principiante.
                </p>
                <Link
                  href="/preparacion"
                  className="mt-4 inline-flex items-center text-sm font-bold text-cta underline decoration-2 underline-offset-4 hover:text-cta-hover"
                >
                  Ir a la preparación muy suave (gratis) →
                </Link>
              </div>

              <p className="mx-auto mt-8 max-w-xl text-sm font-medium text-cta">
                ↓ Desplázate para ver la rutina y las comidas de esta semana
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#ejercicios"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-cta bg-cta/10 px-8 text-sm font-bold text-cta transition hover:bg-cta/18 sm:w-auto sm:text-base"
                >
                  Ir a los ejercicios
                </a>
                <a
                  href="#comidas"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-text/15 bg-surface px-8 text-sm font-bold text-text transition hover:border-text/30 sm:w-auto sm:text-base"
                >
                  Ir al menú semanal
                </a>
                <Link
                  href="/#oferta"
                  className="text-sm font-bold text-muted underline decoration-2 underline-offset-4 hover:text-cta"
                >
                  Comparar con el plan de pago
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ejercicios"
          className="scroll-mt-40 border-t border-text/6 bg-surface py-16 sm:scroll-mt-44 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
                  Ejercicios de la semana
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                  Rutina modelo. No tiene en cuenta lesiones, material que tengas
                  en casa ni tu condición actual.
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-mist px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                Plantilla semanal
              </span>
            </div>

            <ul className="mt-12 grid gap-6 lg:grid-cols-2">
              {WEEKLY_EXERCISES.map((block) => (
                <li
                  key={block.day}
                  className="rounded-3xl border border-text/8 bg-bg p-7 shadow-card transition hover:border-cta/15"
                >
                  <div className="flex items-baseline justify-between gap-4 border-b border-text/8 pb-4">
                    <span className="font-display text-xl font-bold text-text">
                      {block.day}
                    </span>
                    <span className="text-right text-xs font-semibold uppercase tracking-wide text-cta">
                      {block.focus}
                    </span>
                  </div>
                  <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-text marker:text-muted">
                    {block.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="comidas"
          className="scroll-mt-40 border-t border-text/6 py-16 sm:scroll-mt-44 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
                  Comidas de la semana
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                  Ideas equilibradas para inspirarte. Calorías y macros no están
                  calculados para ti.
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-mist px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                Menú orientativo
              </span>
            </div>

            <div className="mt-12 space-y-6">
              {WEEKLY_MEALS.map((m) => (
                <article
                  key={m.day}
                  className="overflow-hidden rounded-3xl border border-text/8 bg-surface shadow-card"
                >
                  <div className="border-b border-text/8 bg-bg/80 px-6 py-4">
                    <h3 className="font-display text-lg font-bold text-text">
                      {m.day}
                    </h3>
                  </div>
                  <div className="grid gap-0 sm:grid-cols-3 sm:divide-x sm:divide-text/8">
                    <div className="border-b border-text/8 p-6 sm:border-b-0">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-cta">
                        Desayuno
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text">
                        {m.breakfast}
                      </p>
                    </div>
                    <div className="border-b border-text/8 p-6 sm:border-b-0">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-cta">
                        Comida
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text">
                        {m.lunch}
                      </p>
                    </div>
                    <div className="p-6">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-cta">
                        Cena
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text">
                        {m.dinner}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-text/6 bg-ink py-16 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cta">
                Freemium vs pago
              </p>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                ¿Por qué pasar al plan personalizado?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                El contenido gratis te orienta. El plan de pago está pensado para
                quien quiere resultados con tu nombre encima — no una plantilla
                igual para todos.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
              <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="bg-white/5 p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Criterio
                  </p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/55">
                    Contenido gratis
                  </p>
                </div>
                <div className="bg-cta/10 p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-cta">
                    Plan personalizado (pago)
                  </p>
                </div>
              </div>
              {COMPARISON.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 border-t border-white/10 md:grid-cols-3 md:divide-x md:divide-white/10"
                >
                  <div className="bg-white/[0.03] p-5 md:p-6">
                    <p className="text-sm font-bold text-white">{row.label}</p>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-sm leading-relaxed text-white/60">
                      {row.free}
                    </p>
                  </div>
                  <div className="bg-cta/5 p-5 md:p-6">
                    <p className="text-sm font-medium leading-relaxed text-white/90">
                      {row.paid}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#oferta"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-cta px-10 text-sm font-bold text-white shadow-glow transition hover:bg-cta-hover sm:w-auto sm:text-base"
              >
                Elegir mi plan
              </Link>
              <Link
                href="/"
                className="text-sm font-semibold text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                Volver a la landing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-text/8 bg-bg py-10 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Dr. Desporte · contenido freemium
        </p>
      </footer>
    </div>
  );
}
