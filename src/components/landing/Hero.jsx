
import {
  Check,
  ChevronDown,
  CircleCheck,
} from 'lucide-react';

import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main glow */}
        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

        {/* Side glows */}
        <div className="absolute left-[-250px] top-[300px] h-[450px] w-[450px] rounded-full bg-white/[0.02] blur-[100px]" />

        <div className="absolute right-[-250px] top-[400px] h-[450px] w-[450px] rounded-full bg-white/[0.02] blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage:
              'linear-gradient(to bottom, black 0%, transparent 75%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, transparent 75%)',
          }}
        />

        {/* Top radial fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#07090D] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 shadow-lg shadow-black/10 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white/70" />
            </span>

            <span className="text-xs font-medium tracking-wide text-white/55 sm:text-sm">
              CRM feito para operações imobiliárias
            </span>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[72px]">
            O CRM que coloca seus{' '}
            <span className="bg-gradient-to-r from-white via-white/90 to-white/45 bg-clip-text text-transparent">
              leads na mão certa.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            Organize leads, corretores, imóveis, visitas e propostas em uma
            única plataforma — e acompanhe sua operação comercial do primeiro
            contato até a venda.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contato">
              Conhecer o Leads Na Mão
            </Button>

            <a
              href="#como-funciona"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white/65 transition duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white"
            >
              Ver como funciona

              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <TrustPoint text="Gestão centralizada" />
            <TrustPoint text="Distribuição de leads" />
            <TrustPoint text="Pipeline comercial" />
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto max-w-3xl pb-24 pt-24 text-center sm:pb-28 lg:pt-32">
          <p className="text-sm font-medium text-white/30">
            Mais organização.
            <span className="mx-2 text-white/15">•</span>
            Mais acompanhamento.
            <span className="mx-2 text-white/15">•</span>
            Menos oportunidades perdidas.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRUST POINT
========================================================= */

function TrustPoint({ text }) {
  return (
    <div className="flex items-center gap-2">
      <CircleCheck size={14} className="text-white/35" />

      <span className="text-xs text-white/35 sm:text-sm">
        {text}
      </span>
    </div>
  );
}

/* =========================================================
   FLOATING CARD
========================================================= */

function FloatingCard({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0C0F15]/90 p-3.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
          <Icon size={14} className="text-white/55" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-[10px] font-medium uppercase tracking-wider text-white/30">
            {title}
          </p>

          <p className="mt-0.5 text-xs font-semibold leading-4 text-white/75">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PLATFORM PLACEHOLDER
========================================================= */

function PlatformPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Fake sidebar */}
      <div className="absolute inset-y-0 left-0 hidden w-[18%] border-r border-white/[0.05] bg-[#0A0D12] sm:block">
        <div className="p-4">
          <div className="mb-8 flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-white/[0.08]" />
            <div className="h-2 w-14 rounded-full bg-white/[0.08]" />
          </div>

          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="h-3 w-3 rounded bg-white/[0.05]" />
                <div className="h-2 w-16 rounded-full bg-white/[0.045]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fake dashboard */}
      <div className="ml-0 flex flex-1 flex-col p-5 sm:ml-[18%] sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-3 w-28 rounded-full bg-white/[0.10]" />
            <div className="mt-2 h-2 w-20 rounded-full bg-white/[0.045]" />
          </div>

          <div className="h-8 w-8 rounded-full bg-white/[0.07]" />
        </div>

        {/* Stats */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            'Leads',
            'Visitas',
            'Propostas',
            'Vendas',
          ].map((label, index) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
            >
              <div className="h-2 w-12 rounded-full bg-white/[0.06]" />

              <div className="mt-3 h-5 w-12 rounded-md bg-white/[0.10]" />

              <div className="mt-2 flex items-center gap-1.5">
                <div className="h-1.5 w-5 rounded-full bg-white/[0.05]" />
                <div className="h-1.5 w-8 rounded-full bg-white/[0.04]" />
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="mb-5 flex items-center justify-between">
              <div className="h-2 w-20 rounded-full bg-white/[0.08]" />
              <div className="h-5 w-14 rounded-md bg-white/[0.04]" />
            </div>

            {/* Chart */}
            <div className="flex h-[42%] items-end gap-2">
              {[35, 50, 42, 65, 48, 72, 58, 84, 67, 90, 75, 94].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-white/[0.07]"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>

            <div className="mt-5 space-y-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-t border-white/[0.04] pt-2.5"
                >
                  <div className="h-2 w-24 rounded-full bg-white/[0.05]" />
                  <div className="h-2 w-10 rounded-full bg-white/[0.04]" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="h-2 w-20 rounded-full bg-white/[0.08]" />

            <div className="mt-5 space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 border-b border-white/[0.04] pb-3"
                >
                  <div className="h-7 w-7 shrink-0 rounded-full bg-white/[0.06]" />

                  <div className="min-w-0 flex-1">
                    <div className="h-2 w-16 rounded-full bg-white/[0.07]" />
                    <div className="mt-1.5 h-1.5 w-12 rounded-full bg-white/[0.04]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl border border-white/[0.08] bg-[#0B0E14]/90 px-6 py-5 text-center shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
            <Check size={18} className="text-white/60" />
          </div>

          <p className="mt-3 text-sm font-semibold text-white/80">
            Preview da plataforma
          </p>

          <p className="mt-1 text-xs text-white/30">
            Substitua pelo screenshot do seu CRM
          </p>
        </div>
      </div>
    </div>
  );
}

