import {
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';

import Button from '../ui/Button';

const benefits = [
  'Leads centralizados',
  'Equipe organizada',
  'Pipeline comercial',
  'Visão da operação',
];

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-white/[0.05] bg-[#07090D] px-6 py-24 sm:py-32"
    >
      {/* Main glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[500px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A0D12] px-6 py-14 text-center shadow-[0_40px_120px_rgba(0,0,0,0.4)] sm:px-12 sm:py-20 lg:px-20">
          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[90px]" />

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-medium text-white/40">
              <Sparkles size={13} strokeWidth={1.7} />
              Leads Na Mão
            </div>

            {/* Title */}
            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Sua operação pode ser mais
              <br className="hidden sm:block" />
              <span className="text-white/35">
                organizada, conectada e previsível.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              Coloque seus leads, equipe e processos comerciais em um único
              lugar e tenha mais clareza para acompanhar cada oportunidade.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/contato"
                variant="primary"
                icon
              >
                Conhecer o Leads Na Mão
              </Button>

              <Button
                href="#recursos"
                variant="secondary"
                icon={false}
              >
                Ver recursos
              </Button>
            </div>

            {/* Benefits */}
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-xs text-white/30"
                >
                  <Check
                    size={13}
                    strokeWidth={1.8}
                    className="text-white/40"
                  />

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Small supporting text */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center">
          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

          <p className="text-xs text-white/25">
            Uma plataforma para organizar a operação comercial da sua
            imobiliária.
          </p>
        </div>
      </div>
    </section>
  );
}
