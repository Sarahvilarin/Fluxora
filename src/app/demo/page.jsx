"use client";

import { useState } from "react";
import Link from "next/link";

import materiaisIniciais from "@/materiais.json";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    Pie,
    PieChart,
    Cell,
    Legend,
} from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

function calcularSituacao(material) {
    if (material.quantidade === 0) {
        return "Sem estoque";
    }

    if (material.quantidade < material.estoqueMinimo) {
        return "Estoque baixo";
    }

    return "Normal";
}

function corSituacao(situacao) {
    if (situacao === "Sem estoque") {
        return "bg-red-100 text-red-700";
    }

    if (situacao === "Estoque baixo") {
        return "bg-[#D4A72C]/20 text-[#8a6a12]";
    }

    return "bg-zinc-200 text-zinc-700";
}

export default function DemoPage() {
    const [materiais, setMateriais] = useState(materiaisIniciais);

    const [busca, setBusca] = useState("");
    const [categoria, setCategoria] = useState("todas");
    const [situacaoFiltro, setSituacaoFiltro] = useState("todas");

    const [dialogMovimentacaoAberto, setDialogMovimentacaoAberto] = useState(false);

    const [materialSelecionado, setMaterialSelecionado] = useState(null);

    const [tipoMovimentacao, setTipoMovimentacao] = useState("entrada");

    const [quantidadeMovimentacao, setQuantidadeMovimentacao] = useState("");

    const [erroMovimentacao, setErroMovimentacao] = useState("");

    const [dialogAberto, setDialogAberto] = useState(false);

    const [novoMaterial, setNovoMaterial] = useState({
        codigo: "",
        material: "",
        categoria: "",
        unidade: "",
        quantidade: "",
        estoqueMinimo: "",
    });

    const totalMateriais = materiais.length;

    const totalNormal = materiais.filter(
        (material) => calcularSituacao(material) === "Normal"
    ).length;

    const totalBaixo = materiais.filter(
        (material) => calcularSituacao(material) === "Estoque baixo"
    ).length;

    const totalSemEstoque = materiais.filter(
        (material) => calcularSituacao(material) === "Sem estoque"
    ).length;

    const materiaisPorCategoria = [
        {
            categoria: "Metais",
            quantidade: materiais.filter(
                (material) => material.categoria === "Metais"
            ).length,
        },
        {
            categoria: "Plásticos",
            quantidade: materiais.filter(
                (material) => material.categoria === "Plásticos"
            ).length,
        },
        {
            categoria: "Químicos",
            quantidade: materiais.filter(
                (material) => material.categoria === "Químicos"
            ).length,
        },
        {
            categoria: "Embalagens",
            quantidade: materiais.filter(
                (material) => material.categoria === "Embalagens"
            ).length,
        },
    ];

    const distribuicaoEstoque = [
        {
            nome: "Normal",
            quantidade: totalNormal,
            cor: "#52525B",
        },
        {
            nome: "Estoque baixo",
            quantidade: totalBaixo,
            cor: "#D4A72C",
        },
        {
            nome: "Sem estoque",
            quantidade: totalSemEstoque,
            cor: "#DC2626",
        },
    ];

    const configCategorias = {
        quantidade: {
            label: "Materiais",
            color: "#D4A72C",
        },
    };

    const configEstoque = {
        quantidade: {
            label: "Materiais",
        },
    };

    const materiaisFiltrados = materiais.filter((material) => {
        const situacao = calcularSituacao(material);

        const termoBusca = busca.toLowerCase();

        const correspondeBusca =
            material.material.toLowerCase().includes(termoBusca) ||
            material.codigo.toLowerCase().includes(termoBusca);

        const correspondeCategoria =
            categoria === "todas" || material.categoria === categoria;

        const correspondeSituacao =
            situacaoFiltro === "todas" || situacao === situacaoFiltro;

        return (
            correspondeBusca &&
            correspondeCategoria &&
            correspondeSituacao
        );
    });

    function limparFiltros() {
        setBusca("");
        setCategoria("todas");
        setSituacaoFiltro("todas");
    }

    function cadastrarMaterial(event) {
        event.preventDefault();

        if (
            !novoMaterial.codigo ||
            !novoMaterial.material ||
            !novoMaterial.categoria ||
            !novoMaterial.unidade ||
            novoMaterial.quantidade === "" ||
            novoMaterial.estoqueMinimo === ""
        ) {
            return;
        }

        const quantidade = Number(novoMaterial.quantidade);
        const estoqueMinimo = Number(novoMaterial.estoqueMinimo);

        if (quantidade < 0 || estoqueMinimo < 0) {
            return;
        }

        const materialCriado = {
            id: Date.now(),
            codigo: novoMaterial.codigo,
            material: novoMaterial.material,
            categoria: novoMaterial.categoria,
            unidade: novoMaterial.unidade,
            quantidade,
            estoqueMinimo,
        };

        setMateriais((materiaisAtuais) => [
            ...materiaisAtuais,
            materialCriado,
        ]);

        setNovoMaterial({
            codigo: "",
            material: "",
            categoria: "",
            unidade: "",
            quantidade: "",
            estoqueMinimo: "",
        });

        setDialogAberto(false);
    }

    function abrirMovimentacao(material) {
        setMaterialSelecionado(material);
        setTipoMovimentacao("entrada");
        setQuantidadeMovimentacao("");
        setErroMovimentacao("");
        setDialogMovimentacaoAberto(true);
    }

    function registrarMovimentacao(event) {
        event.preventDefault();

        const quantidade = Number(quantidadeMovimentacao);

        if (!materialSelecionado) {
            return;
        }

        if (quantidade <= 0) {
            setErroMovimentacao(
                "A quantidade da movimentação deve ser maior que zero."
            );

            return;
        }

        if (
            tipoMovimentacao === "saida" &&
            quantidade > materialSelecionado.quantidade
        ) {
            setErroMovimentacao(
                "A saída não pode ser maior que o saldo disponível."
            );

            return;
        }

        setMateriais((materiaisAtuais) =>
            materiaisAtuais.map((material) => {
                if (material.id !== materialSelecionado.id) {
                    return material;
                }

                const novaQuantidade =
                    tipoMovimentacao === "entrada"
                        ? material.quantidade + quantidade
                        : material.quantidade - quantidade;

                return {
                    ...material,
                    quantidade: novaQuantidade,
                };
            })
        );

        setDialogMovimentacaoAberto(false);
        setMaterialSelecionado(null);
        setQuantidadeMovimentacao("");
        setErroMovimentacao("");
    }

    return (
        <main className="min-h-screen bg-[#F4F4F5]">
            <header className="border-b border-zinc-800 bg-[#171717]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div>
                        <Link href="/" className="text-xl font-bold text-white">
                            Fluxora
                        </Link>

                        <p className="text-xs text-zinc-400">
                            Demonstração do SaaS
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-[#D4A72C] hover:text-[#D4A72C]"
                    >
                        Voltar para home
                    </Link>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-6 py-10">

                <div className="mb-8">
                    <span className="rounded-full bg-[#D4A72C]/20 px-3 py-1 text-sm font-semibold text-[#8a6a12]">
                        Dados fictícios
                    </span>

                    <h1 className="mt-4 text-3xl font-bold text-[#171717] sm:text-4xl">
                        Controle de matérias-primas
                    </h1>

                    <p className="mt-3 max-w-2xl text-zinc-600">
                        Acompanhe os principais indicadores do estoque e visualize a
                        situação atual dos materiais cadastrados.
                    </p>
                </div>

                {/* INDICADORES */}

                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-zinc-500">
                                Total de materiais
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p className="text-3xl font-bold text-[#171717]">
                                {totalMateriais}
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Materiais cadastrados
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-zinc-500">
                                Estoque normal
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p className="text-3xl font-bold text-[#171717]">
                                {totalNormal}
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Quantidade suficiente
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#D4A72C]/50">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-[#8a6a12]">
                                Estoque baixo
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p className="text-3xl font-bold text-[#8a6a12]">
                                {totalBaixo}
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Precisam de atenção
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-red-200">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-red-500">
                                Sem estoque
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p className="text-3xl font-bold text-red-600">
                                {totalSemEstoque}
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Materiais indisponíveis
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* GRÁFICOS */}

                <section className="mt-10 grid gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Materiais por categoria</CardTitle>

                            <p className="text-sm text-zinc-500">
                                Quantidade de matérias-primas cadastradas em cada categoria.
                            </p>
                        </CardHeader>

                        <CardContent>
                            <ChartContainer
                                config={configCategorias}
                                className="min-h-[280px] w-full"
                            >
                                <BarChart data={materiaisPorCategoria}>
                                    <CartesianGrid vertical={false} />

                                    <XAxis
                                        dataKey="categoria"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={10}
                                    />

                                    <ChartTooltip
                                        content={<ChartTooltipContent />}
                                    />

                                    <Bar
                                        dataKey="quantidade"
                                        fill="#D4A72C"
                                        radius={[6, 6, 0, 0]}
                                    />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Situação dos estoques</CardTitle>

                            <p className="text-sm text-zinc-500">
                                Distribuição dos materiais de acordo com a situação atual.
                            </p>
                        </CardHeader>

                        <CardContent>
                            <ChartContainer
                                config={configEstoque}
                                className="mx-auto min-h-[280px] w-full"
                            >
                                <PieChart>
                                    <ChartTooltip
                                        content={
                                            <ChartTooltipContent nameKey="nome" />
                                        }
                                    />

                                    <Pie
                                        data={distribuicaoEstoque}
                                        dataKey="quantidade"
                                        nameKey="nome"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={3}
                                    >
                                        {distribuicaoEstoque.map((item) => (
                                            <Cell
                                                key={item.nome}
                                                fill={item.cor}
                                            />
                                        ))}
                                    </Pie>

                                    <Legend />
                                </PieChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </section>

                {/* MATERIAIS */}

                <section className="mt-10">

                    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <h2 className="text-2xl font-bold text-[#171717]">
                                Materiais cadastrados
                            </h2>

                            <p className="mt-1 text-sm text-zinc-500">
                                Busque, filtre e gerencie os materiais da demonstração.
                            </p>
                        </div>

                        <Dialog
                            open={dialogAberto}
                            onOpenChange={setDialogAberto}
                        >

                            <DialogTrigger
                                render={
                                    <Button className="bg-[#D4A72C] font-semibold text-black hover:bg-[#c79b26]" />
                                }
                            >
                                + Cadastrar material
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-[550px]">

                                <form onSubmit={cadastrarMaterial}>

                                    <DialogHeader>
                                        <DialogTitle>
                                            Cadastrar material
                                        </DialogTitle>

                                        <DialogDescription>
                                            Adicione uma nova matéria-prima ao estoque da demonstração.
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="grid gap-5 py-6">

                                        <div className="grid gap-2">
                                            <Label htmlFor="novo-codigo">
                                                Código
                                            </Label>

                                            <Input
                                                id="novo-codigo"
                                                placeholder="Ex: MP-013"
                                                value={novoMaterial.codigo}
                                                onChange={(event) =>
                                                    setNovoMaterial({
                                                        ...novoMaterial,
                                                        codigo: event.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="novo-material">
                                                Material
                                            </Label>

                                            <Input
                                                id="novo-material"
                                                placeholder="Ex: Borracha industrial"
                                                value={novoMaterial.material}
                                                onChange={(event) =>
                                                    setNovoMaterial({
                                                        ...novoMaterial,
                                                        material: event.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="nova-categoria">
                                                Categoria
                                            </Label>

                                            <Select
                                                value={categoria}
                                                onValueChange={setCategoria}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Todas as categorias" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectItem value="todas">
                                                        Todas as categorias
                                                    </SelectItem>

                                                    <SelectItem value="Metais">
                                                        Metais
                                                    </SelectItem>

                                                    <SelectItem value="Plásticos">
                                                        Plásticos
                                                    </SelectItem>

                                                    <SelectItem value="Químicos">
                                                        Químicos
                                                    </SelectItem>

                                                    <SelectItem value="Embalagens">
                                                        Embalagens
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">

                                            <div className="grid gap-2">
                                                <Label>Unidade</Label>

                                                <Select
                                                    value={novoMaterial.unidade}
                                                    onValueChange={(value) =>
                                                        setNovoMaterial({
                                                            ...novoMaterial,
                                                            unidade: value,
                                                        })
                                                    }
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Selecione" />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        <SelectItem value="kg">kg</SelectItem>
                                                        <SelectItem value="L">L</SelectItem>
                                                        <SelectItem value="un">un</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="nova-quantidade">
                                                    Quantidade
                                                </Label>

                                                <Input
                                                    id="nova-quantidade"
                                                    type="number"
                                                    min="0"
                                                    placeholder="0"
                                                    value={novoMaterial.quantidade}
                                                    onChange={(event) =>
                                                        setNovoMaterial({
                                                            ...novoMaterial,
                                                            quantidade: event.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                            </div>

                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="novo-minimo">
                                                Estoque mínimo
                                            </Label>

                                            <Input
                                                id="novo-minimo"
                                                type="number"
                                                min="0"
                                                placeholder="Ex: 100"
                                                value={novoMaterial.estoqueMinimo}
                                                onChange={(event) =>
                                                    setNovoMaterial({
                                                        ...novoMaterial,
                                                        estoqueMinimo: event.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>

                                    </div>

                                    <DialogFooter>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setDialogAberto(false)}
                                        >
                                            Cancelar
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="bg-[#D4A72C] font-semibold text-black hover:bg-[#c79b26]"
                                        >
                                            Cadastrar material
                                        </Button>
                                    </DialogFooter>

                                </form>

                            </DialogContent>

                        </Dialog>

                    </div>

                    {/* FILTROS */}

                    <div className="mb-5 rounded-2xl border border-zinc-200 bg-white p-5">

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                            <div>
                                <label
                                    htmlFor="busca"
                                    className="mb-2 block text-sm font-medium text-zinc-700"
                                >
                                    Buscar material
                                </label>

                                <Input
                                    id="busca"
                                    type="text"
                                    placeholder="Nome ou código..."
                                    value={busca}
                                    onChange={(event) =>
                                        setBusca(event.target.value)
                                    }
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label>Categoria</Label>

                                <Select
                                    value={novoMaterial.categoria}
                                    onValueChange={(value) =>
                                        setNovoMaterial({
                                            ...novoMaterial,
                                            categoria: value,
                                        })
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecione uma categoria" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="Metais">Metais</SelectItem>
                                        <SelectItem value="Plásticos">Plásticos</SelectItem>
                                        <SelectItem value="Químicos">Químicos</SelectItem>
                                        <SelectItem value="Embalagens">Embalagens</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label
                                    htmlFor="situacao"
                                    className="mb-2 block text-sm font-medium text-zinc-700"
                                >
                                    Situação
                                </label>

                                <Select
                                    value={situacaoFiltro}
                                    onValueChange={setSituacaoFiltro}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Todas as situações" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="todas">
                                            Todas as situações
                                        </SelectItem>

                                        <SelectItem value="Normal">
                                            Normal
                                        </SelectItem>

                                        <SelectItem value="Estoque baixo">
                                            Estoque baixo
                                        </SelectItem>

                                        <SelectItem value="Sem estoque">
                                            Sem estoque
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex items-end">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={limparFiltros}
                                    className="w-full"
                                >
                                    Limpar filtros
                                </Button>
                            </div>

                        </div>

                        <p className="mt-4 text-sm text-zinc-500">
                            {materiaisFiltrados.length} material(is) encontrado(s)
                        </p>

                    </div>

                    {/* TABELA */}

                    <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
                        <Table className="min-w-[900px]">

                            <TableHeader className="bg-[#171717]">
                                <TableRow className="hover:bg-[#171717]">

                                    <TableHead className="text-white">
                                        Código
                                    </TableHead>

                                    <TableHead className="text-white">
                                        Material
                                    </TableHead>

                                    <TableHead className="text-white">
                                        Categoria
                                    </TableHead>

                                    <TableHead className="text-white">
                                        Unidade
                                    </TableHead>

                                    <TableHead className="text-white">
                                        Quantidade
                                    </TableHead>

                                    <TableHead className="text-white">
                                        Estoque mínimo
                                    </TableHead>

                                    <TableHead className="text-white">
                                        Situação
                                    </TableHead>

                                    <TableHead className="text-white">
                                        Ações
                                    </TableHead>

                                </TableRow>
                            </TableHeader>

                            <TableBody>

                                {materiaisFiltrados.length > 0 ? (
                                    materiaisFiltrados.map((material) => {
                                        const situacao = calcularSituacao(material);

                                        return (
                                            <TableRow key={material.id}>

                                                <TableCell className="font-semibold text-[#171717]">
                                                    {material.codigo}
                                                </TableCell>

                                                <TableCell>
                                                    {material.material}
                                                </TableCell>

                                                <TableCell>
                                                    {material.categoria}
                                                </TableCell>

                                                <TableCell>
                                                    {material.unidade}
                                                </TableCell>

                                                <TableCell>
                                                    {material.quantidade}
                                                </TableCell>

                                                <TableCell>
                                                    {material.estoqueMinimo}
                                                </TableCell>

                                                <TableCell>
                                                    <span
                                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${corSituacao(
                                                            situacao
                                                        )}`}
                                                    >
                                                        {situacao}
                                                    </span>
                                                </TableCell>

                                                <TableCell>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => abrirMovimentacao(material)}
                                                    >
                                                        Movimentar
                                                    </Button>
                                                </TableCell>

                                            </TableRow>
                                        );
                                    })
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={8}
                                            className="py-12 text-center"
                                        >
                                            <p className="font-semibold text-zinc-700">
                                                Nenhum material encontrado
                                            </p>

                                            <p className="mt-1 text-sm text-zinc-500">
                                                Tente alterar ou limpar os filtros.
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                )}

                            </TableBody>

                        </Table>
                    </div>

                    <Dialog
                        open={dialogMovimentacaoAberto}
                        onOpenChange={setDialogMovimentacaoAberto}
                    >
                        <DialogContent className="sm:max-w-[500px]">
                            <form onSubmit={registrarMovimentacao}>

                                <DialogHeader>
                                    <DialogTitle>
                                        Registrar movimentação
                                    </DialogTitle>

                                    <DialogDescription>
                                        Registre uma entrada ou saída no estoque do material selecionado.
                                    </DialogDescription>
                                </DialogHeader>

                                {materialSelecionado && (
                                    <div className="py-6">

                                        <div className="mb-6 rounded-xl bg-zinc-100 p-4">

                                            <p className="text-sm text-zinc-500">
                                                Material
                                            </p>

                                            <p className="mt-1 font-semibold text-[#171717]">
                                                {materialSelecionado.material}
                                            </p>

                                            <p className="mt-1 text-sm text-zinc-500">
                                                {materialSelecionado.codigo}
                                            </p>

                                            <div className="mt-4 flex items-center justify-between">

                                                <span className="text-sm text-zinc-500">
                                                    Saldo atual
                                                </span>

                                                <span className="font-bold text-[#171717]">
                                                    {materialSelecionado.quantidade}{" "}
                                                    {materialSelecionado.unidade}
                                                </span>

                                            </div>

                                        </div>

                                        <div className="grid gap-5">

                                            <div className="grid gap-2">
                                                <Label>Tipo de movimentação</Label>

                                                <Select
                                                    value={tipoMovimentacao}
                                                    onValueChange={(value) => {
                                                        setTipoMovimentacao(value);
                                                        setErroMovimentacao("");
                                                    }}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        <SelectItem value="entrada">
                                                            Entrada
                                                        </SelectItem>

                                                        <SelectItem value="saida">
                                                            Saída
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid gap-2">

                                                <Label htmlFor="quantidade-movimentacao">
                                                    Quantidade
                                                </Label>

                                                <Input
                                                    id="quantidade-movimentacao"
                                                    type="number"
                                                    min="1"
                                                    placeholder="Digite a quantidade"
                                                    value={quantidadeMovimentacao}
                                                    onChange={(event) => {
                                                        setQuantidadeMovimentacao(event.target.value);
                                                        setErroMovimentacao("");
                                                    }}
                                                    required
                                                />

                                            </div>

                                            {erroMovimentacao && (
                                                <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                                                    <p className="text-sm font-medium text-red-600">
                                                        {erroMovimentacao}
                                                    </p>
                                                </div>
                                            )}

                                        </div>

                                    </div>
                                )}

                                <DialogFooter>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() =>
                                            setDialogMovimentacaoAberto(false)
                                        }
                                    >
                                        Cancelar
                                    </Button>

                                    <Button
                                        type="submit"
                                        className="bg-[#D4A72C] font-semibold text-black hover:bg-[#c79b26]"
                                    >
                                        Registrar movimentação
                                    </Button>

                                </DialogFooter>

                            </form>
                        </DialogContent>
                    </Dialog>

                </section>

            </div>
        </main>
    );
}