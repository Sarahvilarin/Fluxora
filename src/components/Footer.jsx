import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#111111]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-[#D4A72C]" />

              <span className="text-xl font-bold text-white">
                Fluxora
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
              Controle de matérias-primas de forma simples, visual e eficiente.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#beneficios"
              className="text-zinc-400 transition hover:text-[#D4A72C]"
            >
              Benefícios
            </a>

            <a
              href="#funcionalidades"
              className="text-zinc-400 transition hover:text-[#D4A72C]"
            >
              Funcionalidades
            </a>

            <a
              href="#contato"
              className="text-zinc-400 transition hover:text-[#D4A72C]"
            >
              Contato
            </a>

            <Link
              href="/demo"
              className="text-zinc-400 transition hover:text-[#D4A72C]"
            >
              Demonstração
            </Link>
          </div>

        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <p className="text-sm text-zinc-600">
            © 2026 Fluxora. Projeto demonstrativo desenvolvido para fins educacionais.
          </p>
        </div>
      </div>
    </footer>
  );
}