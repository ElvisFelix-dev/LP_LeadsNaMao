import {
  UserPlus,
  Users,
  MessageSquare,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

import SectionTitle from '../ui/SectionTitle';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'O lead entra',
    description:
      'Os contatos chegam à sua operação e ficam registrados em um único lugar.',
  },
  {
    number: '02',
    icon: Users,
    title: 'O time recebe',
    description:
      'A oportunidade é direcionada para o corretor responsável, sem depender de controles paralelos.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'O atendimento acontece',
    description:
      'Sua equipe acompanha contatos, tarefas, visitas e todo o histórico da negociação.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'A gestão acompanha',
    description:
      'Você visualiza o andamento da operação e sabe onde estão as oportunidades.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative border-t border-white/[0.05] bg-[#080A0F] px-6 py-24 sm:py-32"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Como funciona"
          title={
            <>
              É simples de operar.
              <br />
              <span className="text-white/35">
                Mais clareza para sua equipe.
              </span>
            </>
          }
          description="O Leads Na Mão organiza o caminho do lead até a venda para que sua equipe saiba o que fazer e a gestão saiba o que está acontecendo."
        />

        <div className="relative mt-16 sm:mt-20">
          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.035] sm:p-7"
                >
                  {/* Number */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#0C0F15] shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        className="text-white/80"
                      />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.18em] text-white/20">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {step.number !== '04' && (
                    <div className="mt-7 hidden items-center gap-2 text-xs font-medium text-white/20 lg:flex">
                      Próximo passo
                      <ArrowRight size={13} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-20">
          <p className="text-sm leading-7 text-white/30 sm:text-base">
            Do primeiro contato ao fechamento, cada etapa fica registrada e
            conectada à operação comercial.
          </p>
        </div>
      </div>
    </section>
  );
}
