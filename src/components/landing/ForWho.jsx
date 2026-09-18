import {
  ShieldCheck,
  UsersRound,
  UserRound,
  ArrowUpRight,
  Check,
} from 'lucide-react';

import SectionTitle from '../ui/SectionTitle';

const profiles = [
  {
    icon: ShieldCheck,
    number: '01',
    label: 'Para quem lidera',
    title: 'Donos e gestores de imobiliárias',
    description:
      'Tenha uma visão centralizada da operação, acompanhe os resultados e entenda onde estão suas oportunidades.',
    benefits: [
      'Visão geral da operação',
      'Acompanhamento dos leads',
      'Indicadores comerciais',
      'Gestão da equipe',
    ],
  },
  {
    icon: UsersRound,
    number: '02',
    label: 'Para quem coordena',
    title: 'Gestores comerciais',
    description:
      'Acompanhe o trabalho dos corretores, distribua oportunidades e identifique rapidamente o que precisa de atenção.',
    benefits: [
      'Distribuição de leads',
      'Acompanhamento do pipeline',
      'Agenda e visitas',
      'Histórico da operação',
    ],
  },
  {
    icon: UserRound,
    number: '03',
    label: 'Para quem vende',
    title: 'Corretores',
    description:
      'Tenha seus leads, tarefas, visitas e negociações organizados para dedicar mais tempo ao atendimento.',
    benefits: [
      'Carteira de leads',
      'Histórico dos contatos',
      'Agenda de compromissos',
      'Acompanhamento das oportunidades',
    ],
  },
];

export default function ForWho() {
  return (
    <section
      id="para-quem"
      className="relative border-t border-white/[0.05] bg-[#080A0F] px-6 py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.018] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Para quem é"
          title={
            <>
              Uma plataforma para
              <br />
              <span className="text-white/35">
                toda a operação comercial.
              </span>
            </>
          }
          description="Cada pessoa da imobiliária tem uma necessidade diferente. O Leads Na Mão conecta todos em torno da mesma operação."
        />

        {/* Profiles */}
        <div className="mt-16 grid gap-5 md:grid-cols-3 sm:mt-20">
          {profiles.map((profile) => {
            const Icon = profile.icon;

            return (
              <article
                key={profile.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.03] sm:p-7"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-[#0B0E13]">
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      className="text-white/55"
                    />
                  </div>

                  <span className="text-xs font-semibold tracking-[0.18em] text-white/15">
                    {profile.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                    {profile.label}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-white/85">
                    {profile.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/35">
                    {profile.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="mt-7 space-y-3 border-t border-white/[0.06] pt-6">
                  {profile.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025]">
                        <Check
                          size={11}
                          strokeWidth={2}
                          className="text-white/45"
                        />
                      </div>

                      <span className="text-xs text-white/40">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <span className="text-xs text-white/20">
                    Leads Na Mão
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="text-white/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/50"
                  />
                </div>

                {/* Glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-white/[0.02] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 sm:mt-16 sm:flex-row">
          <div>
            <p className="text-sm font-medium text-white/60">
              Uma única operação. Um único lugar.
            </p>

            <p className="mt-1 text-sm text-white/30">
              Todos trabalhando com as mesmas informações.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/30">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            Equipe conectada
          </div>
        </div>
      </div>
    </section>
  );
}
