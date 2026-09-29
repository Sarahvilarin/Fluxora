import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#F4F4F5]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        
        <div>
          <span className="inline-flex rounded-full bg-[#D4A72C]/15 px-4 py-2 text-sm font-semibold text-[#8a6a12]">
            Gestão inteligente de matéria-prima
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-[#171717] sm:text-5xl lg:text-6xl">
            Controle seus materiais antes que a falta deles pare sua produção.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            A Fluxora ajuda indústrias a acompanhar estoques, identificar
            materiais em falta e visualizar indicadores importantes em um só
            lugar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="rounded-lg bg-[#D4A72C] px-6 py-3 text-center font-semibold text-black transition hover:bg-[#e0b63d]"
            >
              Experimentar demonstração
            </Link>

            <a
              href="#funcionalidades"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-center font-semibold text-[#171717] transition hover:border-[#D4A72C]"
            >
              Conhecer recursos
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-black/5">
          <div className="rounded-xl bg-[#171717] p-5">
            
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">
                  Visão geral
                </p>

                <h2 className="text-xl font-bold text-white">
                  Estoque de materiais
                </h2>
              </div>

              <div className="h-3 w-3 rounded-full bg-[#D4A72C]" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              
              <div className="rounded-lg bg-zinc-800 p-4">
                <p className="text-xs text-zinc-400">
                  Total
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  12
                </p>
              </div>

              <div className="rounded-lg bg-zinc-800 p-4">
                <p className="text-xs text-zinc-400">
                  Normal
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  7
                </p>
              </div>

              <div className="rounded-lg bg-zinc-800 p-4">
                <p className="text-xs text-zinc-400">
                  Estoque baixo
                </p>

                <p className="mt-2 text-2xl font-bold text-[#D4A72C]">
                  3
                </p>
              </div>

              <div className="rounded-lg bg-zinc-800 p-4">
                <p className="text-xs text-zinc-400">
                  Sem estoque
                </p>

                <p className="mt-2 text-2xl font-bold text-red-400">
                  2
                </p>
              </div>

            </div>

            <div className="mt-5 rounded-xl bg-zinc-900 p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-medium text-white">
                  Materiais por categoria
                </p>

                <span className="text-xs text-zinc-500">
                  últimos dados
                </span>
              </div>

              <div className="flex h-36 items-end gap-4">
                
                <div className="flex flex-1 flex-col items-center gap-2">
                  <div className="h-20 w-full rounded-t-md bg-[#D4A72C]" />
                  <span className="text-xs text-zinc-400">
                    Metais
                  </span>
                </div>

                <div className="flex flex-1 flex-col items-center gap-2">
                  <div className="h-28 w-full rounded-t-md bg-[#D4A72C]" />
                  <span className="text-xs text-zinc-400">
                    Plásticos
                  </span>
                </div>

                <div className="flex flex-1 flex-col items-center gap-2">
                  <div className="h-16 w-full rounded-t-md bg-[#D4A72C]" />
                  <span className="text-xs text-zinc-400">
                    Químicos
                  </span>
                </div>

                <div className="flex flex-1 flex-col items-center gap-2">
                  <div className="h-24 w-full rounded-t-md bg-[#D4A72C]" />
                  <span className="text-xs text-zinc-400">
                    Embalagens
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}