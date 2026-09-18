
import {
  AlertCircle,
  ArrowDown,
  Clock3,
  MessageSquare,
  Users,
} from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: MessageSquare,
      title: 'Leads espalhados',
      description:
        'Instagram, portais, anúncios, indicações e WhatsApp. As oportunidades chegam de vários lugares e acabam espalhadas em diferentes canais.',
    },
    {
      icon: Users,
      title: 'Distribuição sem controle',
      description:
        'Quando não existe um processo claro, alguns corretores recebem mais oportunidades enquanto outras acabam sem acompanhamento.',
    },
    {
      icon: Clock3,
      title: 'Follow-up esquecido',
      description:
        'O primeiro contato acontece, mas sem histórico e acompanhamento é fácil deixar uma conversa importante para depois.',
    },
    {
      icon: AlertCircle,
      title: 'Gestor sem visão',
      description:
        'Sem uma operação centralizada, fica difícil saber quais leads estão sendo trabalhados, quais estão parados e onde estão as oportunidades.',
    },
  ];

  return (
    <section
      id="problemas"
      className="relative overflow-hidden border-t border-white/[0.05] bg-[#080A0F] py-24 sm:py-28 lg:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.018] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage:
              'linear-gradient(to bottom, black, transparent 80%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black, transparent 80%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              O problema
            </span>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Seus leads estão chegando.
              <br />

              <span className="text-white/35">
                Mas sua operação consegue acompanhá-los?
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              O problema nem sempre é gerar mais leads. Muitas vezes, a
              oportunidade já está chegando — o que falta é uma operação
              preparada para transformar cada contato em uma oportunidade
              comercial acompanhada.
            </p>
          </div>
        </div>

        {/* Flow problem */}
        <div className="relative mt-16 sm:mt-20">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent lg:block" />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, index) => {
              const Icon = problem.icon;

              return (
                <ProblemCard
                  key={problem.title}
                  icon={Icon}
                  title={problem.title}
                  description={problem.description}
                  number={String(index + 1).padStart(2, '0')}
                />
              );
            })}
          </div>
        </div>

        {/* Visual transition */}
        <div className="mt-20 flex flex-col items-center sm:mt-24">
          <div className="flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 backdrop-blur-xl">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04]">
              <ArrowDown size={12} className="text-white/40" />
            </span>

            <span className="text-xs font-medium text-white/40 sm:text-sm">
              Quando tudo fica espalhado, a oportunidade começa a escapar.
            </span>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-16 max-w-4xl text-center sm:mt-20">
          <div className="mx-auto mb-6 h-px w-12 bg-white/10" />

          <p className="text-2xl font-medium leading-tight tracking-[-0.025em] text-white/80 sm:text-3xl lg:text-4xl">
            Mais canais não significam mais vendas
            <span className="text-white/30"> se a operação não acompanha.</span>
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/35 sm:text-base">
            É por isso que o CRM precisa fazer parte da operação — e não ser
            apenas mais uma ferramenta para sua equipe preencher.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROBLEM CARD
========================================================= */

function ProblemCard({
  icon: Icon,
  title,
  description,
  number,
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0B0E13]/80 p-5 transition duration-500 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-[#0D1016] sm:p-6">
      {/* Top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Number */}
      <div className="absolute right-5 top-5 text-[10px] font-semibold tracking-[0.15em] text-white/15">
        {number}
      </div>

      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035] transition duration-500 group-hover:border-white/[0.12] group-hover:bg-white/[0.06]">
        <Icon
          size={17}
          strokeWidth={1.7}
          className="text-white/45 transition group-hover:text-white/70"
        />
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-base font-semibold tracking-[-0.015em] text-white/85">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/35">
          {description}
        </p>
      </div>

      {/* Bottom indicator */}
      <div className="mt-7 flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-white/20" />

        <span className="h-px flex-1 bg-white/[0.05]" />

        <span className="h-1 w-1 rounded-full bg-white/10" />
      </div>
    </article>
  );
}

