import {
  Users,
  CalendarDays,
  FileText,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';

import SectionTitle from '../ui/SectionTitle';

const metrics = [
  {
    label: 'Leads ativos',
    value: '248',
    change: '+18%',
    icon: Users,
  },
  {
    label: 'Visitas agendadas',
    value: '32',
    change: '+12%',
    icon: CalendarDays,
  },
  {
    label: 'Propostas',
    value: '17',
    change: '+8%',
    icon: FileText,
  },
  {
    label: 'Conversão',
    value: '12,8%',
    change: '+2,4%',
    icon: TrendingUp,
  },
];

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative border-t border-white/[0.05] bg-[#07090D] px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Visão da operação"
          title={
            <>
              Consigo enxergar
              <br />
              <span className="text-white/35">meu negócio.</span>
            </>
          }
          description="Tenha uma visão clara dos principais indicadores da sua operação comercial sem precisar juntar informações de vários lugares."
        />

        {/* Dashboard browser */}
        <div className="relative mt-16 sm:mt-20">
          {/* Floating label */}
          <div className="absolute -top-5 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-white/[0.08] bg-[#0B0E13] px-4 py-2 text-xs font-medium text-white/50 shadow-2xl sm:block">
            Visão geral da operação
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B0E13] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            {/* Browser bar */}
            <div className="flex h-12 items-center border-b border-white/[0.06] px-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>

              <div className="mx-auto hidden h-7 w-72 items-center justify-center rounded-md border border-white/[0.05] bg-white/[0.02] text-[10px] text-white/20 sm:flex">
                app.leadsnamao.com.br/dashboard
              </div>

              <div className="w-12" />
            </div>

            {/* Screenshot area */}
            <div className="relative aspect-[16/9] min-h-[420px] overflow-hidden bg-[#090C11]">

              <img
                src="/images/platform/dashboard.png"
                alt="Dashboard do Leads Na Mão"
                className="h-full w-full object-cover object-top"
              />


            </div>
          </div>

          {/* Bottom floating cards */}
          <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
            <InsightCard
              title="Leads"
              description="Saiba quantas oportunidades estão em atendimento."
            />

            <InsightCard
              title="Equipe"
              description="Acompanhe a operação dos seus corretores."
            />

            <InsightCard
              title="Conversão"
              description="Entenda como os leads avançam pelo funil."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightCard({ title, description }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">
        {title}
      </span>

      <p className="mt-3 text-sm leading-6 text-white/45">
        {description}
      </p>
    </div>
  );
}
