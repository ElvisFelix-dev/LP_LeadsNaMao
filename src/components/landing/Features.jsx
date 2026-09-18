
import {
  ArrowRight,
  CalendarDays,
  Check,
  GitBranch,
  Home,
  MessageCircle,
  Users,
  Zap,
} from 'lucide-react';

import SectionTitle from '../ui/SectionTitle';

export default function Features() {
  return (
    <section
      id="recursos"
      className="relative overflow-hidden border-t border-white/[0.05] bg-[#080A0F] py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-300px] top-[20%] h-[600px] w-[600px] rounded-full bg-white/[0.015] blur-[140px]" />

        <div className="absolute right-[-300px] top-[45%] h-[600px] w-[600px] rounded-full bg-white/[0.015] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <SectionTitle
          eyebrow="Recursos"
          title={
            <>
              Tudo que sua operação precisa.
              <span className="block text-white/35">
                Em uma única plataforma.
              </span>
            </>
          }
          description="Do primeiro contato à venda, o Leads Na Mão conecta as principais etapas da operação comercial da sua imobiliária."
        />

        {/* =====================================================
            FEATURE 01 — LEADS
        ====================================================== */}

        <FeatureBlock
          number="01"
          icon={Users}
          eyebrow="Gestão de leads"
          title={
            <>
              Cada lead tem uma história.
              <span className="block text-white/35">
                Sua equipe precisa enxergá-la.
              </span>
            </>
          }
          description="Centralize informações, histórico de contatos, origem, responsável, estágio e próximos passos em um único lugar."
          benefits={[
            'Histórico completo do lead',
            'Responsável pelo atendimento',
            'Origem e informações comerciais',
            'Evolução do relacionamento',
          ]}
          image="/images/platform/leads.png"
          imageAlt="Gestão de leads do Leads Na Mão"
          placeholder="Screenshot da gestão de leads"
        />

        {/* =====================================================
            FEATURE 02 — DISTRIBUTION
        ====================================================== */}

        <FeatureBlock
          reverse
          number="02"
          icon={Zap}
          eyebrow="Distribuição automática"
          title={
            <>
              O lead entrou.
              <span className="block text-white/35">
                O time já sabe quem atende.
              </span>
            </>
          }
          description="Distribua automaticamente novas oportunidades entre os corretores e reduza o tempo entre a chegada do lead e o primeiro atendimento."
          benefits={[
            'Distribuição automática',
            'Menos dependência de processos manuais',
            'Mais velocidade no atendimento',
            'Gestão centralizada pelo administrador',
          ]}
          image="/images/platform/lead.png"
          imageAlt="Distribuição automática de leads"
          placeholder="Screenshot da distribuição de leads"
        />

        {/* =====================================================
            FEATURE 03 — PIPELINE
        ====================================================== */}

        <FeatureBlock
          number="03"
          icon={GitBranch}
          eyebrow="Pipeline comercial"
          title={
            <>
              Saiba exatamente
              <span className="block text-white/35">
                onde cada oportunidade está.
              </span>
            </>
          }
          description="Visualize sua operação em um pipeline claro e acompanhe a evolução dos leads desde o primeiro contato até a negociação."
          benefits={[
            'Pipeline visual',
            'Etapas personalizadas da operação',
            'Acompanhamento por corretor',
            'Histórico das movimentações',
          ]}
          image="/images/platform/pipeline.png"
          imageAlt="Pipeline comercial do Leads Na Mão"
          placeholder="Screenshot do pipeline comercial"
        />

        {/* =====================================================
            FEATURE 04 — AGENDA
        ====================================================== */}

        <FeatureBlock
          reverse
          number="04"
          icon={CalendarDays}
          eyebrow="Agenda e visitas"
          title={
            <>
              Menos compromissos esquecidos.
              <span className="block text-white/35">
                Mais acompanhamento.
              </span>
            </>
          }
          description="Organize visitas, reuniões, ligações, propostas e outros compromissos diretamente dentro da operação comercial."
          benefits={[
            'Agenda centralizada',
            'Visitas e reuniões',
            'Compromissos vinculados aos leads',
            'Visão individual e da equipe',
          ]}
          image="/images/platform/agenda.png"
          imageAlt="Agenda do Leads Na Mão"
          placeholder="Screenshot da agenda"
        />

        {/* =====================================================
            FEATURE 05 — PROPERTIES
        ====================================================== */}

        <FeatureBlock
          number="05"
          icon={Home}
          eyebrow="Imóveis e oportunidades"
          title={
            <>
              O imóvel certo também
              <span className="block text-white/35">
                faz parte da operação.
              </span>
            </>
          }
          description="Organize os imóveis disponíveis, acompanhe oportunidades e conecte o atendimento comercial ao portfólio da imobiliária."
          benefits={[
            'Catálogo de imóveis',
            'Informações centralizadas',
            'Gestão de oportunidades',
            'Relacionamento entre lead e imóvel',
          ]}
          image="/images/platform/properties.png"
          imageAlt="Gestão de imóveis do Leads Na Mão"
          placeholder="Screenshot da gestão de imóveis"
        />

        {/* =====================================================
            FEATURE 06 — PROPOSALS
        ====================================================== */}

        <FeatureBlock
          reverse
          number="06"
          icon={MessageCircle}
          eyebrow="Propostas"
          title={
            <>
              Da conversa à proposta.
              <span className="block text-white/35">
                Sem perder o contexto.
              </span>
            </>
          }
          description="Mantenha as propostas conectadas ao lead e acompanhe a evolução da negociação dentro da mesma operação."
          benefits={[
            'Criação de propostas',
            'Histórico de propostas',
            'Acompanhamento da negociação',
            'Integração com o processo comercial',
          ]}
          image="/images/platform/proposals.png"
          imageAlt="Propostas do Leads Na Mão"
          placeholder="Screenshot de propostas"
        />

        {/* =====================================================
            FINAL FEATURE STATEMENT
        ====================================================== */}

        <div className="mx-auto mt-24 max-w-4xl text-center sm:mt-32">
          <div className="mx-auto mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
            <Check
              size={18}
              className="text-white/50"
            />
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
            Tudo conectado para sua equipe
            <span className="text-white/35">
              {' '}
              trabalhar melhor.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/35 sm:text-base">
            Porque uma operação imobiliária eficiente não depende de uma única
            funcionalidade. Ela depende de todas as etapas conversando entre
            si.
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 text-xs font-medium text-white/25">
            <span>Leads</span>
            <ArrowRight size={12} />
            <span>Atendimento</span>
            <ArrowRight size={12} />
            <span>Visita</span>
            <ArrowRight size={12} />
            <span>Proposta</span>
            <ArrowRight size={12} />
            <span>Venda</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURE BLOCK
============================================================ */

function FeatureBlock({
  number,
  icon: Icon,
  eyebrow,
  title,
  description,
  benefits,
  image,
  imageAlt,
  placeholder,
  reverse = false,
}) {
  return (
    <article
      className={`relative mt-24 grid items-center gap-10 sm:mt-32 lg:grid-cols-2 lg:gap-20 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* =====================================================
          TEXT
      ====================================================== */}

      <div className="relative">
        {/* Number */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-white/20">
            {number}
          </span>

          <span className="h-px w-8 bg-white/[0.08]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
            {eyebrow}
          </span>
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
          <Icon
            size={18}
            strokeWidth={1.7}
            className="text-white/55"
          />
        </div>

        {/* Title */}
        <h3 className="max-w-xl text-2xl font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-5 max-w-lg text-sm leading-6 text-white/35 sm:text-base sm:leading-7">
          {description}
        </p>

        {/* Benefits */}
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025]">
                <Check
                  size={11}
                  strokeWidth={2}
                  className="text-white/45"
                />
              </span>

              <span className="text-sm text-white/45">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-10 rounded-full bg-white/[0.025] blur-[90px]" />

        {/* Main frame */}
        <div className="relative rounded-[22px] border border-white/[0.09] bg-white/[0.025] p-1.5 shadow-[0_30px_90px_rgba(0,0,0,0.4)] sm:rounded-[26px] sm:p-2">
          <div className="overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#0C0F15] sm:rounded-[20px]">
            {/* Browser header */}
            <div className="flex h-9 items-center border-b border-white/[0.05] bg-[#090C11] px-3 sm:h-10 sm:px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
              </div>

              <div className="mx-auto hidden h-5 w-40 rounded bg-white/[0.02] sm:block" />

              <div className="w-8" />
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden">
              {/*
                ==================================================
                SCREENSHOT REAL
                ==================================================

                O caminho recebido pelo componente fica preparado
                para as imagens reais da plataforma.

                Exemplo:

                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-top"
                />

                ==================================================
              */}

              <FeatureImagePlaceholder
                label={placeholder}
                image={image}
                alt={imageAlt}
              />
            </div>
          </div>
        </div>

        {/* Small floating label */}
        <div
          className={`absolute -bottom-4 ${
            reverse ? 'right-5' : 'left-5'
          } hidden rounded-xl border border-white/[0.08] bg-[#0C0F15]/95 px-3 py-2 shadow-xl shadow-black/30 backdrop-blur-xl sm:block`}
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

            <span className="text-[10px] font-medium text-white/40">
              Leads Na Mão
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   IMAGE PLACEHOLDER
============================================================ */

function FeatureImagePlaceholder({ label, image, alt }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0D1016]">
      {image ? (
        <img
          src={image}
          alt={alt || label}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 bg-[#0D1016]">
          {/* Fake sidebar */}
          <div className="absolute inset-y-0 left-0 hidden w-[18%] border-r border-white/[0.05] bg-[#090C11] sm:block">
            <div className="space-y-4 p-4">
              <div className="h-5 w-5 rounded-md bg-white/[0.08]" />

              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <div className="h-2.5 w-2.5 rounded bg-white/[0.05]" />
                  <div className="h-1.5 w-12 rounded-full bg-white/[0.04]" />
                </div>
              ))}
            </div>
          </div>

          {/* Fake content */}
          <div className="ml-0 p-5 sm:ml-[18%] sm:p-6">
            {/* Top */}
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2.5 w-24 rounded-full bg-white/[0.08]" />
                <div className="mt-2 h-1.5 w-16 rounded-full bg-white/[0.04]" />
              </div>

              <div className="h-7 w-7 rounded-full bg-white/[0.06]" />
            </div>

            {/* Cards */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-3"
                >
                  <div className="h-1.5 w-10 rounded-full bg-white/[0.05]" />
                  <div className="mt-3 h-3.5 w-8 rounded bg-white/[0.08]" />
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="mt-3 rounded-xl border border-white/[0.05] bg-white/[0.018] p-4">
              <div className="flex items-center justify-between">
                <div className="h-2 w-20 rounded-full bg-white/[0.07]" />
                <div className="h-5 w-12 rounded bg-white/[0.04]" />
              </div>

              <div className="mt-5 space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/[0.04] pb-3"
                  >
                    <div className="h-7 w-7 rounded-full bg-white/[0.06]" />

                    <div className="flex-1">
                      <div className="h-1.5 w-20 rounded-full bg-white/[0.06]" />
                      <div className="mt-1.5 h-1 w-12 rounded-full bg-white/[0.035]" />
                    </div>

                    <div className="h-4 w-10 rounded bg-white/[0.04]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay sutil */}
      {image && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/[0.02]" />
      )}
    </div>
  );
}

