import {
  Zap,
  UserRound,
  MessageCircle,
  Bell,
  CheckCircle2,
  ArrowDown,
} from 'lucide-react';

import SectionTitle from '../ui/SectionTitle';

const automationSteps = [
  {
    icon: UserRound,
    title: 'Lead entra',
    description: 'Uma nova oportunidade chega à operação.',
  },
  {
    icon: Zap,
    title: 'Distribuição',
    description: 'O sistema direciona o lead para o responsável.',
  },
  {
    icon: MessageCircle,
    title: 'Follow-up',
    description: 'A comunicação pode acompanhar o ritmo da negociação.',
  },
  {
    icon: Bell,
    title: 'Equipe acionada',
    description: 'Quando existe uma resposta, o corretor sabe que precisa agir.',
  },
];

export default function Automation() {
  return (
    <section
      id="automacao"
      className="relative border-t border-white/[0.05] bg-[#080A0F] px-6 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[500px] -translate-y-1/2 rounded-full bg-white/[0.02] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Automação"
          title={
            <>
              Ele trabalha junto
              <br />
              <span className="text-white/35">com sua equipe.</span>
            </>
          }
          description="Automatize tarefas operacionais e mantenha sua equipe focada no que realmente precisa de atenção: conversar, atender e fechar negócios."
        />

        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs font-medium text-white/45">
              <Zap size={13} strokeWidth={1.8} />
              Automação comercial
            </div>

            <h3 className="mt-6 max-w-lg text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              Menos tarefas repetitivas.
              <br />
              <span className="text-white/35">
                Mais tempo para vender.
              </span>
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/40 sm:text-base">
              A automação entra para apoiar o trabalho da equipe, não para
              substituir o relacionamento humano que existe por trás de cada
              negociação.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Distribuição automática de novos leads',
                'Acompanhamento do histórico de atendimento',
                'Follow-ups automatizados',
                'Notificações para a equipe',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.7}
                    className="shrink-0 text-white/45"
                  />

                  <span className="text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Automation flow */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0B0E13] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
              <div>
                <p className="text-sm font-medium text-white/70">
                  Fluxo automatizado
                </p>

                <p className="mt-1 text-xs text-white/30">
                  A operação continua mesmo quando sua equipe está ocupada.
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                <Zap size={16} className="text-white/50" />
              </div>
            </div>

            {/* Steps */}
            <div className="mt-7">
              {automationSteps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === automationSteps.length - 1;

                return (
                  <div key={step.title}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                          className="text-white/55"
                        />
                      </div>

                      <div className="pt-1">
                        <p className="text-sm font-semibold text-white/70">
                          {step.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-white/30">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {!isLast && (
                      <div className="ml-[21px] flex h-10 items-center">
                        <div className="flex h-full flex-col items-center">
                          <div className="h-full w-px bg-white/[0.07]" />

                          <ArrowDown
                            size={12}
                            strokeWidth={1.5}
                            className="-mt-1 text-white/20"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Status */}
            <div className="mt-7 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03]">
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                </div>

                <div>
                  <p className="text-xs font-medium text-white/60">
                    Automação ativa
                  </p>

                  <p className="mt-0.5 text-[11px] text-white/25">
                    Acompanhando novas oportunidades
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.025] blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
