export default function PreviaDeschboard() {
  return (
    <section className="bg-[#F4F4F5] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#A67C00]">
            Prévia do sistema
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#171717] sm:text-4xl">
            Tenha uma visão rápida do seu estoque
          </h2>

          <p className="mt-4 text-zinc-600">
            Acompanhe indicadores, materiais em situação crítica e informações
            importantes para a operação.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">

          <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
            <div>
              <p className="text-sm text-zinc-500">
                Dashboard
              </p>

              <h3 className="text-lg font-bold text-[#171717]">
                Visão geral do estoque
              </h3>
            </div>

            <div className="rounded-lg bg-[#D4A72C] px-3 py-2 text-sm font-semibold text-black">
              Fluxora
            </div>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-zinc-200 bg-[#FAFAFA] p-5">
              <p className="text-sm text-zinc-500">
                Total de materiais
              </p>

              <p className="mt-2 text-3xl font-bold text-[#171717]">
                12
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-[#FAFAFA] p-5">
              <p className="text-sm text-zinc-500">
                Estoque normal
              </p>

              <p className="mt-2 text-3xl font-bold text-[#171717]">
                7
              </p>
            </div>

            <div className="rounded-xl border border-[#D4A72C]/40 bg-[#D4A72C]/10 p-5">
              <p className="text-sm text-[#8a6a12]">
                Estoque baixo
              </p>

              <p className="mt-2 text-3xl font-bold text-[#8a6a12]">
                3
              </p>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm text-red-500">
                Sem estoque
              </p>

              <p className="mt-2 text-3xl font-bold text-red-600">
                2
              </p>
            </div>

          </div>

          <div className="grid gap-6 px-6 pb-6 lg:grid-cols-2">

            <div className="rounded-xl border border-zinc-200 p-5">
              <div className="mb-6">
                <h4 className="font-semibold text-[#171717]">
                  Materiais por categoria
                </h4>

                <p className="text-sm text-zinc-500">
                  Quantidade cadastrada
                </p>
              </div>

              <div className="flex h-52 items-end gap-5">

                <div className="flex flex-1 flex-col items-center gap-3">
                  <div className="h-32 w-full rounded-t-lg bg-[#D4A72C]" />
                  <span className="text-xs text-zinc-500">
                    Metais
                  </span>
                </div>

                <div className="flex flex-1 flex-col items-center gap-3">
                  <div className="h-44 w-full rounded-t-lg bg-[#D4A72C]" />
                  <span className="text-xs text-zinc-500">
                    Plásticos
                  </span>
                </div>

                <div className="flex flex-1 flex-col items-center gap-3">
                  <div className="h-24 w-full rounded-t-lg bg-[#D4A72C]" />
                  <span className="text-xs text-zinc-500">
                    Químicos
                  </span>
                </div>

                <div className="flex flex-1 flex-col items-center gap-3">
                  <div className="h-36 w-full rounded-t-lg bg-[#D4A72C]" />
                  <span className="text-xs text-zinc-500">
                    Embalagens
                  </span>
                </div>

              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <div className="mb-5">
                <h4 className="font-semibold text-[#171717]">
                  Materiais que precisam de atenção
                </h4>

                <p className="text-sm text-zinc-500">
                  Situação atual do estoque
                </p>
              </div>

              <div className="space-y-3">

                <div className="flex items-center justify-between rounded-lg bg-[#FAFAFA] p-4">
                  <div>
                    <p className="font-medium text-[#171717]">
                      Chapa de aço
                    </p>

                    <p className="text-sm text-zinc-500">
                      MP-001
                    </p>
                  </div>

                  <span className="rounded-full bg-[#D4A72C]/15 px-3 py-1 text-xs font-semibold text-[#8a6a12]">
                    Estoque baixo
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-[#FAFAFA] p-4">
                  <div>
                    <p className="font-medium text-[#171717]">
                      Resina plástica
                    </p>

                    <p className="text-sm text-zinc-500">
                      MP-006
                    </p>
                  </div>

                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                    Sem estoque
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-[#FAFAFA] p-4">
                  <div>
                    <p className="font-medium text-[#171717]">
                      Tinta industrial
                    </p>

                    <p className="text-sm text-zinc-500">
                      MP-009
                    </p>
                  </div>

                  <span className="rounded-full bg-[#D4A72C]/15 px-3 py-1 text-xs font-semibold text-[#8a6a12]">
                    Estoque baixo
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