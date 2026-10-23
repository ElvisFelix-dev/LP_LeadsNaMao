import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Users,
  Zap,
} from 'lucide-react';
import dashboard from '../../assets/platform/dashboard.png';
import Button from '../ui/Button';

const highlights = [
  { icon: Users, label: 'Gestão de leads', color: 'text-sky-300', bg: 'bg-sky-400/10' },
  { icon: MessageCircle, label: 'WhatsApp integrado', color: 'text-emerald-300', bg: 'bg-emerald-400/10' },
  { icon: Zap, label: 'Follow-ups automáticos', color: 'text-violet-300', bg: 'bg-violet-400/10' },
  { icon: CalendarDays, label: 'Agenda e visitas', color: 'text-amber-300', bg: 'bg-amber-400/10' },
];

export default function Hero() {
  return (
    <section id="topo" className="nodus-hero relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute right-[-8rem] top-10 h-[560px] w-[560px] rounded-full bg-sky-500/10 blur-[150px]" />
        <div className="nodus-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#050b18] to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 sm:pb-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-8 lg:pb-28">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/[0.08] px-3.5 py-2 text-xs font-semibold tracking-wide text-blue-200 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,.9)]" />
            CRM especializado para imobiliárias
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Tudo conectado
            <span className="block bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text pb-2 text-transparent">
              para vender mais.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300/80 sm:text-lg sm:leading-8">
            O CRM NODUS conecta leads, corretores, imóveis, conversas e follow-ups em uma única plataforma — para sua equipe acompanhar cada oportunidade com mais clareza.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contato" variant="primary" icon>
              Solicitar demonstração
            </Button>
            <a href="#recursos" className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-blue-300/30 hover:bg-blue-400/[0.08] hover:text-white">
              Conhecer os recursos
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-400 sm:text-sm">
            {['Gestão centralizada', 'Comunicação integrada', 'Follow-ups personalizados'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-sky-400" />{item}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {highlights.map(({ icon: Icon, label, color, bg }) => (
              <div key={label} className="rounded-2xl border border-white/[0.08] bg-slate-950/50 p-3 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-300/25">
                <span className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${bg}`}>
                  <Icon size={18} className={color} />
                </span>
                <span className="text-xs font-medium leading-5 text-slate-200 sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-3xl lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-sky-400/5 to-indigo-500/15 blur-2xl" />
          <div className="relative rounded-[1.6rem] border border-blue-300/20 bg-[#07101f]/90 p-2 shadow-[0_35px_120px_rgba(0,0,0,.65)] sm:rounded-[2rem] sm:p-3">
            <div className="flex h-10 items-center gap-2 border-b border-white/[0.07] px-3 sm:h-12 sm:px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <div className="mx-auto rounded-lg border border-white/[0.06] bg-white/[0.035] px-4 py-1 text-[10px] text-slate-400 sm:text-xs">CRM NODUS · Dashboard</div>
              <BarChart3 size={15} className="text-sky-300" />
            </div>
            <div className="overflow-hidden rounded-b-[1.2rem] bg-[#050914]">
              <img src={dashboard} alt="Dashboard do CRM NODUS com indicadores da operação imobiliária" className="block h-auto w-full object-cover object-top" />
            </div>
          </div>
          <div className="absolute -bottom-6 left-3 hidden max-w-[250px] rounded-2xl border border-emerald-300/20 bg-[#071622]/95 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><MessageCircle size={19} /></span>
              <div><p className="text-xs text-slate-400">Atendimento conectado</p><p className="mt-1 text-sm font-semibold text-white">Conversas + follow-ups</p></div>
            </div>
          </div>
          <div className="absolute -right-2 -top-5 hidden rounded-2xl border border-blue-300/20 bg-[#0b1530]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block lg:-right-5">
            <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-blue-200">CRM NODUS</p>
            <p className="mt-1 text-sm font-semibold text-white">Sua operação em foco</p>
          </div>
        </div>
      </div>
    </section>
  );
}
