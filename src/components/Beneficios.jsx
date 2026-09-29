import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#A67C00]">
            Benefícios
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#171717] sm:text-4xl">
            Mais controle para a rotina da indústria
          </h2>

          <p className="mt-4 text-zinc-600">
            A Fluxora centraliza informações importantes do estoque para facilitar
            decisões e reduzir problemas na produção.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          <Card className="border-zinc-200 transition hover:-translate-y-1 hover:border-[#D4A72C] hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C] text-xl font-bold text-black">
                01
              </div>

              <CardTitle className="text-xl">
                Estoque mais organizado
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="leading-7 text-zinc-600">
                Visualize os materiais cadastrados, quantidades disponíveis e
                estoques mínimos de forma clara.
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 transition hover:-translate-y-1 hover:border-[#D4A72C] hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C] text-xl font-bold text-black">
                02
              </div>

              <CardTitle className="text-xl">
                Identificação rápida de faltas
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="leading-7 text-zinc-600">
                Saiba rapidamente quais matérias-primas estão com estoque baixo
                ou completamente indisponíveis.
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 transition hover:-translate-y-1 hover:border-[#D4A72C] hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C] text-xl font-bold text-black">
                03
              </div>

              <CardTitle className="text-xl">
                Decisões com dados
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="leading-7 text-zinc-600">
                Acompanhe indicadores do estoque e tenha uma visão mais rápida
                da situação dos materiais da empresa.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}