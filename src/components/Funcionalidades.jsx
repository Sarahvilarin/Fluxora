import { Badge } from "@/components/ui/badge";

export default function Funcionalidades() {
  return (
    <section id="funcionalidades" className="bg-[#171717] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-2xl">
          <Badge className="bg-[#D4A72C] text-black hover:bg-[#D4A72C]">
            Recursos
          </Badge>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Tudo o que você precisa para acompanhar seus materiais
          </h2>

          <p className="mt-4 text-zinc-400">
            A Fluxora reúne informações importantes do estoque em uma interface
            simples, rápida e fácil de entender.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-[#D4A72C]">
            <p className="text-sm font-semibold text-[#D4A72C]">
              01
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white">
              Controle de estoque
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Acompanhe a quantidade disponível de cada matéria-prima e compare
              com o estoque mínimo definido.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-[#D4A72C]">
            <p className="text-sm font-semibold text-[#D4A72C]">
              02
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white">
              Busca e filtros
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Encontre materiais por nome, código, categoria e situação de
              estoque.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-[#D4A72C]">
            <p className="text-sm font-semibold text-[#D4A72C]">
              03
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white">
              Indicadores em tempo real
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Visualize rapidamente quantos materiais estão normais, baixos ou
              sem estoque.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-[#D4A72C]">
            <p className="text-sm font-semibold text-[#D4A72C]">
              04
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white">
              Entrada e saída de materiais
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Registre movimentações e mantenha as quantidades atualizadas de
              forma simulada.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}