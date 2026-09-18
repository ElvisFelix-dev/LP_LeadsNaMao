import {
  MessageCircle,
  FileSpreadsheet,
  StickyNote,
  Search,
  Users,
  GitBranch,
  CalendarDays,
  BarChart3,
  ArrowRight,
  Check,
} from 'lucide-react';

import SectionTitle from '../ui/SectionTitle';

const beforeItems = [
  {
    icon: MessageCircle,
    title: 'Leads espalhados',
    description: 'Conversas e contatos ficam distribuídos entre diferentes canais.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Planilhas e controles manuais',
    description: 'Informações precisam ser atualizadas e conferidas manualmente.',
  },
  {
    icon: StickyNote,
    title: 'Anotações perdidas',
    description: 'Follow-ups e informações importantes dependem da memória da equipe.',
  },
  {
    icon: Search,
    title: 'Pouca visibilidade',
    description: 'O gestor precisa perguntar para descobrir o que está acontecendo.',
  },
];

const afterItems = [
  {
    icon: Users,
    title: 'Leads centralizados',
    description: 'Toda a operação comercial começa em um único lugar.',
  },
  {
    icon: GitBranch,
    title: 'Pipeline organizado',
    description: 'Cada oportunidade tem uma etapa e um responsável.',
  },
  {
    icon: CalendarDays,
    title: 'Agenda conectada',
    description: 'Visitas, reuniões e compromissos acompanham a operação.',
  },
  {
    icon: BarChart3,
    title: 'Visão da gestão',
    description: 'Indicadores ajudam você a entender o andamento do negócio.',
  },
];

export default function BeforeAfter() {
  return (
    <section
      id="antes-depois"
      className="relative border-t border-white/[0.05] bg-[#07090D] px-6 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.018] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="A mudança"
          title={
            <>
              Menos operação espalhada.
              <br />
              <span className="text-white/35">
                Mais controle sobre o negócio.
              </span>
            </>
          }
          description="O Leads Na Mão transforma processos que antes dependiam de planilhas, mensagens e controles paralelos em uma operação comercial conectada."
        />

        {/* Comparison */}
        <div className="relative mt-16 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">
          {/* BEFORE */}
          <ComparisonCard
            type="before"
            eyebrow="Antes"
            title="A operação depende de vários controles."
            description="As informações existem, mas estão espalhadas pela rotina da equipe."
            items={beforeItems}
          />

          {/* CENTER ARROW */}
          <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-[#080A0F] shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
              <ArrowRight
                size={17}
                strokeWidth={1.7}
                className="text-white/50"
              />
            </div>
          </div>

          {/* AFTER */}
          <ComparisonCard
            type="after"
            eyebrow="Com Leads Na Mão"
            title="A operação acontece em um só lugar."
            description="Sua equipe trabalha conectada e a gestão acompanha o negócio com mais clareza."
            items={afterItems}
          />
        </div>

        {/* Bottom transformation */}
        <div className="mx-auto mt-12 max-w-4xl sm:mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-8 text-center sm:px-10 sm:py-10">
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/25">
                O resultado
              </p>

              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                Sua equipe trabalha melhor porque a operação deixa de depender
                de improvisos.
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/35">
                Mais organização para quem atende. Mais visibilidade para quem
                gerencia. Mais contexto em cada oportunidade.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[70px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({
  type,
  eyebrow,
  title,
  description,
  items,
}) {
  const isAfter = type === 'after';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 ${
        isAfter
          ? 'border-white/[0.1] bg-[#0B0E13] shadow-[0_25px_80px_rgba(0,0,0,0.3)]'
          : 'border-white/[0.06] bg-white/[0.015]'
      }`}
    >
      {/* Top line */}
      {isAfter && (
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-semibold uppercase tracking-[0.18em] ${
              isAfter ? 'text-white/50' : 'text-white/25'
            }`}
          >
            {eyebrow}
          </span>

          {isAfter && (
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04]">
              <Check size={13} strokeWidth={1.8} className="text-white/60" />
            </div>
          )}
        </div>

        <h3
          className={`mt-5 max-w-md text-xl font-semibold tracking-[-0.025em] sm:text-2xl ${
            isAfter ? 'text-white/90' : 'text-white/65'
          }`}
        >
          {title}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
          {description}
        </p>
      </div>

      {/* Items */}
      <div className="relative z-10 mt-8 space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`group flex gap-4 rounded-xl border p-4 transition-colors ${
                isAfter
                  ? 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] hover:bg-white/[0.03]'
                  : 'border-white/[0.045] bg-white/[0.012]'
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                  isAfter
                    ? 'border-white/[0.07] bg-white/[0.03]'
                    : 'border-white/[0.045] bg-white/[0.015]'
                }`}
              >
                <Icon
                  size={17}
                  strokeWidth={1.6}
                  className={isAfter ? 'text-white/50' : 'text-white/25'}
                />
              </div>

              <div className="min-w-0">
                <h4
                  className={`text-sm font-medium ${
                    isAfter ? 'text-white/70' : 'text-white/50'
                  }`}
                >
                  {item.title}
                </h4>

                <p className="mt-1 text-xs leading-5 text-white/25">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative glow */}
      {isAfter && (
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-white/[0.025] blur-3xl" />
      )}
    </div>
  );
}
