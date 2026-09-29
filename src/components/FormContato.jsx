"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormContato() {
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(event) {
    event.preventDefault();

    setEnviado(true);
  }

  return (
    <section
      id="contato"
      className="bg-[#171717] py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-[#D4A72C]">
            Fale com a Fluxora
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Quer entender como a Fluxora pode ajudar sua indústria?
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-zinc-400">
            Preencha seus dados e simule uma solicitação de contato com nossa
            equipe.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-start gap-3">
              <div className="mt-1 h-3 w-3 rounded-full bg-[#D4A72C]" />

              <p className="text-zinc-300">
                Conheça as principais funcionalidades do sistema.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 h-3 w-3 rounded-full bg-[#D4A72C]" />

              <p className="text-zinc-300">
                Veja como organizar melhor o controle de matérias-primas.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 h-3 w-3 rounded-full bg-[#D4A72C]" />

              <p className="text-zinc-300">
                Experimente a demonstração sem necessidade de cadastro.
              </p>
            </div>

          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">

          {!enviado ? (
            <form
              onSubmit={enviarFormulario}
              className="space-y-5"
            >

              <div className="space-y-2">
                <Label
                  htmlFor="nome"
                  className="text-zinc-200"
                >
                  Nome
                </Label>

                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-zinc-200"
                >
                  E-mail corporativo
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="nome@empresa.com"
                  required
                  className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="empresa"
                  className="text-zinc-200"
                >
                  Empresa
                </Label>

                <Input
                  id="empresa"
                  type="text"
                  placeholder="Nome da empresa"
                  required
                  className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="interesse"
                  className="text-zinc-200"
                >
                  Área de interesse
                </Label>

                <select
                  id="interesse"
                  required
                  defaultValue=""
                  className="h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 text-sm text-white outline-none transition focus:border-[#D4A72C]"
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>

                  <option value="estoque">
                    Controle de estoque
                  </option>

                  <option value="indicadores">
                    Indicadores
                  </option>

                  <option value="movimentacoes">
                    Movimentações de materiais
                  </option>

                  <option value="demonstracao">
                    Demonstração do sistema
                  </option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#D4A72C] font-semibold text-black hover:bg-[#e0b63d]"
              >
                Solicitar contato
              </Button>

              <p className="text-center text-xs text-zinc-500">
                Este formulário é fictício e não envia dados para nenhum
                servidor.
              </p>

            </form>
          ) : (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A72C] text-2xl font-bold text-black">
                ✓
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Solicitação registrada
              </h3>

              <p className="mt-3 max-w-sm text-zinc-400">
                Esta é uma simulação. Em um sistema real, os dados seriam
                enviados para a equipe comercial da Fluxora.
              </p>

              <Button
                onClick={() => setEnviado(false)}
                className="mt-6 bg-[#D4A72C] text-black hover:bg-[#e0b63d]"
              >
                Enviar novamente
              </Button>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}