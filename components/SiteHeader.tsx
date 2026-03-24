"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const onFreemium = pathname === "/freemium";
  const onPreparacion = pathname === "/preparacion";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto flex max-w-6xl items-end gap-2 sm:items-center sm:gap-4 lg:gap-6">
        <Link
          href="/"
          className="relative z-[60] shrink-0 -translate-y-1 drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:opacity-95 sm:-translate-y-2 lg:-translate-y-3"
          aria-label="Dr. Desporte — inicio"
        >
          <Image
            src="/logo.png"
            alt="Dr. Desporte"
            width={256}
            height={256}
            className="h-32 w-32 rounded-2xl object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52"
            priority
            sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, 13rem"
          />
        </Link>

        <div className="min-w-0 flex-1 pb-1 sm:pb-0">
          <div className="ml-auto flex w-fit max-w-full justify-end rounded-full border border-black/[0.06] bg-white/95 px-2 py-2 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:px-5 sm:py-3">
            <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
              <Link
                href="/preparacion"
                className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-[10px] font-bold transition sm:px-3 sm:py-2 sm:text-xs ${
                  onPreparacion
                    ? "bg-text/10 text-text ring-1 ring-text/20"
                    : "text-muted hover:bg-bg hover:text-text"
                }`}
                title="Para quien aún no está listo para el nivel principiante"
              >
                <span className="hidden sm:inline">Pasos previos</span>
                <span className="sm:hidden">Previos</span>
              </Link>
              <Link
                href="/freemium"
                className={`whitespace-nowrap rounded-full border-2 px-2.5 py-1.5 text-[10px] font-bold transition sm:px-4 sm:py-2 sm:text-sm ${
                  onFreemium
                    ? "border-cta bg-cta/10 text-cta"
                    : "border-cta/40 bg-cta/[0.06] text-cta hover:border-cta hover:bg-cta/10"
                }`}
              >
                Empieza gratis
              </Link>
              <Link
                href="/#registro"
                className="whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-text sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Registrarse
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
