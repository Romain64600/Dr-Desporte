import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const FASE_MOVIMIENTO = [
  {
    titulo: "Semanas 1–2: solo hábitos y seguridad",
    lineas: [
      "Objetivo: moverte un poco más que ayer, sin compararte con nadie.",
      "Caminar en plano, a ritmo muy cómodo: empieza con 2–5 minutos al día (o menos si hace falta), varias veces al día si te va mejor.",
      "Si de pie es difícil: marcha sentado (levantar rodillas suave), rodillos de tobillos, abrir y cerrar las manos con calma.",
      "Subir escaleras: solo si tu médico lo ve bien; si no, ascensor sin culpa.",
      "Parar en cuanto notes mareo, dolor agudo en el pecho o falta de aire que no se calma al reposo — y pedir ayuda médica si hace falta."
    ]
  },
  {
    titulo: "Semanas 3–4: un poco más, siempre suave",
    lineas: [
      "Si las semanas anteriores te han ido bien, puedes sumar 1–2 minutos al paseo o hacer un paseo extra corto.",
      "Apoyarte en una silla o pared para levantarte y sentarte 5–8 veces, con calma (solo si no hay dolor de rodilla agudo).",
      "Estiramientos muy suaves de cuello y hombros sentado, sin forzar.",
      "Seguir priorizando el sueño y el agua: son parte del “entreno”."
    ]
  }
] as const;

const FASE_COMIDA = [
  <>
    No es una dieta estricta: es <strong>ordenar</strong> un poco el plato, sin
    humillarte si un día sale mal.
  </>,
  <>
    Intenta que en cada comida principal haya <strong>proteína</strong> (huevo,
    yogur, legumbres, pescado, carne magra…) y <strong>verdura o fruta</strong>{" "}
    en cantidad que puedas sostener.
  </>,
  <>
    Beber <strong>agua</strong> con regularidad; limitar refrescos azucarados
    poco a poco, no de golpe.
  </>,
  <>
    Comer sentado, sin pantalla a veces, ayuda a notar el hambre y la saciedad.
  </>,
  <>
    Si tienes <strong>tratamiento médico o nutricional</strong>, esta guía no lo
    sustituye: combina con lo que te indiquen.
  </>
] as const;

export default function PreparacionPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-grain opacity-90"
        aria-hidden
      />
      <SiteHeader />

      <main className="relative pt-36 sm:pt-44 lg:pt-48">
        <section className="relative px-6 pb-12">
          <div
            className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-50"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cta">
              Gratis · fase previa
            </p>
            <h1 className="font-display mt-4 text-balance text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Preparación muy suave antes del nivel principiante
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Si llevas mucho tiempo sin moverte, si el peso te limita el día a
              día o si un plan “para principiantes” todavía se te hace lejos,
              esta página es para ti:{" "}
              <strong className="font-semibold text-text">
                pasos mínimos, gratis y sin presión de rendimiento
              </strong>
              . Cuando te sientas más estable, podrás pasar al contenido gratuito
              semanal (nivel principiante).
            </p>
          </div>
        </section>

        <section className="border-t border-text/8 bg-surface px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-cta/30 bg-cta/[0.06] p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-text sm:text-xl">
                Aviso importante (salud)
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text sm:text-base">
                Esto <strong>no sustituye</strong> el consejo de un médico o
                equipo sanitario. La obesidad y la falta de hábito de ejercicio
                pueden ir ligadas a otros problemas de salud.{" "}
                <strong>
                  Habla con tu médico antes de cambiar la actividad física o la
                  alimentación
                </strong>
                , sobre todo si tienes dolor, medicación o antecedentes
                cardiovasculares.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-text/6 px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-text">
                Movimiento (muy por debajo del “principiante”)
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Aquí no buscamos sudar ni “quemar calorías”. Buscamos que el
                cuerpo recuerde moverse con seguridad y constancia mínima.
              </p>
            </div>
            {FASE_MOVIMIENTO.map((bloque) => (
              <article
                key={bloque.titulo}
                className="rounded-2xl border border-text/10 bg-bg p-6 shadow-card sm:p-8"
              >
                <h3 className="font-display text-lg font-bold text-text">
                  {bloque.titulo}
                </h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-text sm:text-base">
                  {bloque.lineas.map((linea) => (
                    <li key={linea}>{linea}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-text/6 bg-surface px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-text">
              Comida: enfoque suave (sin castigo)
            </h2>
            <ul className="mt-6 list-disc space-y-4 pl-5 text-sm leading-relaxed text-text sm:text-base">
              {FASE_COMIDA.map((nodo, i) => (
                <li key={i}>{nodo}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-text/6 px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-text/10 bg-bg p-8 text-center shadow-card">
            <h2 className="font-display text-xl font-bold text-text sm:text-2xl">
              ¿Cuándo pasar al plan gratuito “principiante”?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Cuando puedas caminar unos{" "}
              <strong className="font-semibold text-text">
                10–15 minutos seguidos
              </strong>{" "}
              a ritmo cómodo (o equivalente que te haya validado tu médico) y te
              sientas bien al día siguiente, prueba la semana tipo de ejercicios
              y comidas en la página gratuita.
            </p>
            <Link
              href="/freemium"
              className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-cta px-10 text-sm font-bold text-white shadow-glow transition hover:bg-cta-hover sm:text-base"
            >
              Ir al contenido gratuito semanal
            </Link>
            <p className="mt-6">
              <Link
                href="/"
                className="text-sm font-semibold text-cta underline decoration-2 underline-offset-4 hover:text-cta-hover"
              >
                Volver a la página principal
              </Link>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-text/8 bg-bg py-10 text-center">
        <p className="px-4 text-xs leading-relaxed text-muted">
          Información general y educativa. No es diagnóstico ni tratamiento
          médico.
        </p>
      </footer>
    </div>
  );
}
