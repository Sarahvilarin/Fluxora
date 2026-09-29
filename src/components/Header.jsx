import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-[#171717]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#D4A72C]" />

          <span className="text-xl font-bold text-white">
            Fluxora
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#beneficios"
            className="text-sm text-zinc-300 transition hover:text-[#D4A72C]"
          >
            Benefícios
          </a>

          <a
            href="#funcionalidades"
            className="text-sm text-zinc-300 transition hover:text-[#D4A72C]"
          >
            Funcionalidades
          </a>

          <a
            href="#contato"
            className="text-sm text-zinc-300 transition hover:text-[#D4A72C]"
          >
            Contato
          </a>
        </nav>

        <Link
          href="/demo"
          className="rounded-lg bg-[#D4A72C] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e0b63d]"
        >
          Ver demonstração
        </Link>
      </div>
    </header>
  );
}