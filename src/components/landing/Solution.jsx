
import {
  ArrowRight,
  BarChart3,
  Check,
  LayoutDashboard,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

import Button from '../ui/Button';

import imgHero from '../../assets/platform/analytics.png';

export default function Solution() {
  const benefits = [
    'Centralize seus leads e contatos',
    'Distribua oportunidades para os corretores',
    'Acompanhe cada etapa do atendimento',
    'Tenha visão da operação comercial',
  ];

  return (
    <section
      id="solucao"
      className="relative overflow-hidden border-t border-white/[0.05] bg-[#07090D] py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="absolute left-1/2 top-[-150px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.018] blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 45%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 45%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
            <Sparkles size={13} />
            A solução
          </span>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Uma operação comercial
            <span className="block text-white/35">
              feita para não perder oportunidades.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            O Leads Na Mão centraliza o trabalho da sua equipe em uma única
            plataforma — do momento em que o lead entra até a evolução da
            negociação.
          </p>
        </div>

        {/* =====================================================
            MAIN PLATFORM SHOWCASE
        ====================================================== */}

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Glow behind platform */}
          <div className="absolute inset-x-[10%] bottom-[-100px] h-[350px] rounded-full bg-white/[0.04] blur-[120px]" />

          {/* Floating left card */}
          <div className="absolute -left-5 top-24 z-20 hidden w-52 -translate-x-1/2 lg:block xl:-left-8">
            <FloatingFeature
              icon={LayoutDashboard}
              title="Visão centralizada"
              description="Sua operação em um só lugar."
            />
          </div>

          {/* Floating right card */}
          <div className="absolute -right-5 top-52 z-20 hidden w-52 translate-x-1/2 lg:block xl:-right-8">
            <FloatingFeature
              icon={BarChart3}
              title="Acompanhamento"
              description="Decisões baseadas em dados."
            />
          </div>

          {/* Platform frame */}
          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-[26px] border border-white/[0.10] bg-white/[0.025] p-1.5 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:rounded-[30px] sm:p-2">
              <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0B0E13] sm:rounded-[24px]">
                {/* Browser bar */}
                <div className="flex h-11 items-center border-b border-white/[0.06] bg-[#090C11] px-4 sm:h-12 sm:px-5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>

                  <div className="mx-auto hidden h-6 max-w-md flex-1 items-center justify-center rounded-md border border-white/[0.05] bg-white/[0.02] sm:flex">
                    <span className="text-[10px] text-white/20">
                      app.leadsnamao.com.br
                    </span>
                  </div>

                  <div className="w-12" />
                </div>

                {/* =================================================
                    IMAGE PLACEHOLDER
                ================================================== */}

                <div className="relative aspect-[16/9] overflow-hidden">


                    <img
                      src={imgHero}
                      alt="Dashboard do Leads Na Mão"
                      className="h-full w-full object-cover object-top"
                    />


                </div>
              </div>
            </div>

            {/* Image caption */}
            <div className="mt-5 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
              <span className="flex items-center gap-1.5 text-xs text-white/25">
                <MousePointer2 size={12} />
                Uma visão completa da sua operação
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

              <span className="text-xs text-white/20">
                Dashboard Leads Na Mão
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <div className="mx-auto mt-20 max-w-5xl sm:mt-24 lg:mt-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Text */}
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-white/25">
                Tudo conectado
              </span>

              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                Menos ferramentas.
                <span className="block text-white/35">
                  Mais controle da operação.
                </span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/35 sm:text-base">
                O objetivo não é adicionar mais uma ferramenta para sua equipe
                usar. É transformar processos espalhados em uma operação
                comercial organizada.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <BenefitItem
                  key={benefit}
                  text={benefit}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-20 flex justify-center sm:mt-24">
          <Button
            href="#recursos"
            variant="secondary"
          >
            Conhecer os recursos
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FLOATING FEATURE
============================================================ */

function FloatingFeature({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0C0F15]/90 p-3.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
          <Icon
            size={15}
            strokeWidth={1.7}
            className="text-white/55"
          />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold text-white/75">
            {title}
          </p>

          <p className="mt-1 text-[11px] leading-4 text-white/30">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   BENEFIT ITEM
============================================================ */

function BenefitItem({ text }) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition duration-300 hover:border-white/[0.10] hover:bg-white/[0.035]">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.035]">
        <Check
          size={13}
          strokeWidth={2}
          className="text-white/50"
        />
      </span>

      <span className="text-sm text-white/55 transition group-hover:text-white/70">
        {text}
      </span>
    </div>
  );
}

/* ============================================================
   PLATFORM PLACEHOLDER
============================================================ */

function PlatformImagePlaceholder() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0C0F15]">
      {/* Sidebar */}
      <div className="absolute inset-y-0 left-0 hidden w-[18%] border-r border-white/[0.05] bg-[#090C11] sm:block">
        <div className="p-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-white/[0.08]" />
            <div className="h-2 w-16 rounded-full bg-white/[0.07]" />
          </div>

          {/* Menu */}
          <div className="mt-9 space-y-4">
            {[
              'Dashboard',
              'Leads',
              'Imóveis',
              'Agenda',
              'Propostas',
              'Corretores',
            ].map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-2.5 ${
                  index === 1 ? 'opacity-100' : 'opacity-45'
                }`}
              >
                <div
                  className={`h-3 w-3 rounded ${
                    index === 1
                      ? 'bg-white/[0.12]'
                      : 'bg-white/[0.05]'
                  }`}
                />

                <div
                  className={`h-2 rounded-full ${
                    index === 1
                      ? 'w-16 bg-white/[0.10]'
                      : 'w-14 bg-white/[0.045]'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex h-full flex-col p-5 sm:ml-[18%] sm:p-7">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-3 w-28 rounded-full bg-white/[0.10]" />

            <div className="mt-2 h-2 w-36 rounded-full bg-white/[0.04]" />
          </div>

          <div className="flex items-center gap-3">
            <div className="h-7 w-16 rounded-lg bg-white/[0.04]" />
            <div className="h-8 w-8 rounded-full bg-white/[0.07]" />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['Leads', '248'],
            ['Atendidos', '187'],
            ['Visitas', '42'],
            ['Propostas', '18'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
            >
              <div className="h-2 w-14 rounded-full bg-white/[0.06]" />

              <div className="mt-3 flex items-end gap-2">
                <span className="text-base font-semibold text-white/70 sm:text-lg">
                  {value}
                </span>

                <span className="mb-0.5 h-1.5 w-5 rounded-full bg-white/[0.05]" />
              </div>

              <div className="mt-2 h-1.5 w-12 rounded-full bg-white/[0.04]" />
            </div>
          ))}
        </div>

        {/* Main dashboard */}
        <div className="mt-4 grid min-h-0 flex-1 gap-3 sm:grid-cols-[1.35fr_0.65fr]">
          {/* Chart */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-24 rounded-full bg-white/[0.08]" />
                <div className="mt-2 h-1.5 w-16 rounded-full bg-white/[0.04]" />
              </div>

              <div className="h-6 w-16 rounded-lg border border-white/[0.05] bg-white/[0.025]" />
            </div>

            {/* Chart */}
            <div className="mt-7 flex h-[42%] items-end gap-1.5 sm:gap-2">
              {[28, 42, 36, 57, 49, 65, 54, 76, 63, 81, 69, 88].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-white/[0.07]"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ),
              )}
            </div>

            {/* Rows */}
            <div className="mt-6 space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-t border-white/[0.04] pt-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-white/[0.05]" />

                    <div>
                      <div className="h-1.5 w-20 rounded-full bg-white/[0.06]" />
                      <div className="mt-1.5 h-1 w-12 rounded-full bg-white/[0.035]" />
                    </div>
                  </div>

                  <div className="h-1.5 w-8 rounded-full bg-white/[0.04]" />
                </div>
              ))}
            </div>
          </div>

          {/* Recent leads */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div className="h-2 w-20 rounded-full bg-white/[0.08]" />

              <div className="h-5 w-5 rounded-md bg-white/[0.04]" />
            </div>

            <div className="mt-5 space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 border-b border-white/[0.04] pb-3 last:border-0"
                >
                  <div className="h-7 w-7 shrink-0 rounded-full bg-white/[0.06]" />

                  <div className="min-w-0 flex-1">
                    <div className="h-1.5 w-16 rounded-full bg-white/[0.07]" />

                    <div className="mt-1.5 h-1 w-10 rounded-full bg-white/[0.04]" />
                  </div>

                  <div className="h-1.5 w-6 rounded-full bg-white/[0.04]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/[0.08]">
        <div className="rounded-2xl border border-white/[0.08] bg-[#0B0E14]/90 px-6 py-5 text-center shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
            <ShieldCheck
              size={19}
              strokeWidth={1.7}
              className="text-white/55"
            />
          </div>

          <p className="mt-3 text-sm font-semibold text-white/80">
            Seu CRM aqui
          </p>

          <p className="mt-1 text-xs text-white/30">
            Substitua pelo screenshot real
          </p>
        </div>
      </div>
    </div>
  );
}

