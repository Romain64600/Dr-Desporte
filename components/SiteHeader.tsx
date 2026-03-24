"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const onFreemium = pathname === "/freemium";
  const onPreparacion = pathname === "/preparacion";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-5 sm:pt-6">
      <div className="flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border border-black/[0.06] bg-white/95 px-3 py-3 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:gap-4 sm:px-6 sm:py-3.5">
        <Link
          href="/"
          className="font-display flex min-w-0 shrink items-center gap-2.5 text-sm font-bold tracking-tight text-text sm:gap-3 sm:text-base"
        >
          <Image
            src="/logo.png"
            alt="Dr. Desporte"
            width={40}
            height={40}
            className="h-8 w-8 shrink-0 rounded-lg object-contain sm:h-9 sm:w-9"
            priority
          />
          <span className="truncate">Dr. Desporte</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
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
    </header>
  );
}
