import {
  ArrowLeft,
  ArrowUpRight,
  FileCheck2,
  FileText,
  Lock,
  Mail,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import Footer from '../components/landing/Footer';

import logoImg from '../assets/logoImg.png';

const sections = [
  {
    icon: FileCheck2,
    title: '1. Aceitação dos termos',
    content: (
      <>
        <p>
          Ao acessar ou utilizar o Leads Na Mão, você declara que leu,
          compreendeu e concorda com estes Termos de Uso.
        </p>

        <p>
          Caso não concorde com qualquer uma das condições apresentadas, não
          deverá utilizar a plataforma ou seus serviços.
        </p>

        <p>
          Estes termos podem ser atualizados periodicamente para refletir
          mudanças nos serviços, na legislação ou nas práticas da plataforma.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: '2. Sobre o Leads Na Mão',
    content: (
      <>
        <p>
          O Leads Na Mão é uma plataforma de gestão comercial desenvolvida
          para apoiar imobiliárias na organização de leads, equipes,
          oportunidades e processos relacionados à operação de vendas.
        </p>

        <p>
          Entre os recursos disponibilizados podem estar gestão de leads,
          distribuição de oportunidades, pipeline comercial, agenda, imóveis,
          propostas, acompanhamento de negociações e indicadores da operação.
        </p>

        <p>
          Os recursos disponíveis podem variar de acordo com a versão,
          configuração e plano contratado.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    title: '3. Cadastro e responsabilidade do usuário',
    content: (
      <>
        <p>
          Para utilizar determinadas funcionalidades, poderá ser necessário
          criar uma conta e fornecer informações verdadeiras, completas e
          atualizadas.
        </p>

        <p>
          O usuário é responsável por manter a confidencialidade de suas
          credenciais de acesso e por todas as atividades realizadas em sua
          conta.
        </p>

        <p>
          Caso identifique qualquer utilização não autorizada da conta, o
          usuário deverá comunicar a situação à equipe responsável pelo
          Leads Na Mão.
        </p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: '4. Uso adequado da plataforma',
    content: (
      <>
        <p>
          O Leads Na Mão deve ser utilizado de acordo com a legislação
          aplicável e exclusivamente para finalidades legítimas relacionadas
          às atividades do usuário.
        </p>

        <p>Não é permitido utilizar a plataforma para:</p>

        <ul>
          <li>Praticar atividades ilegais ou fraudulentas;</li>
          <li>Violar direitos de terceiros;</li>
          <li>Tentar obter acesso não autorizado ao sistema;</li>
          <li>Distribuir códigos maliciosos ou conteúdos prejudiciais;</li>
          <li>Interferir deliberadamente no funcionamento da plataforma;</li>
          <li>Utilizar os serviços de maneira incompatível com sua finalidade.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Lock,
    title: '5. Dados inseridos pelo usuário',
    content: (
      <>
        <p>
          O usuário é responsável pelos dados e informações que inserir na
          plataforma, incluindo informações relacionadas a clientes, leads,
          imóveis, contatos e demais pessoas envolvidas em sua operação.
        </p>

        <p>
          O usuário deve possuir os direitos e as bases legais necessárias
          para coletar, utilizar e compartilhar essas informações de acordo
          com a legislação aplicável.
        </p>

        <p>
          O tratamento de dados pessoais realizado pelo Leads Na Mão está
          sujeito também à sua Política de Privacidade e às responsabilidades
          aplicáveis a cada parte envolvida no tratamento.
        </p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: '6. Disponibilidade do serviço',
    content: (
      <>
        <p>
          Buscamos manter o Leads Na Mão disponível e funcionando de forma
          adequada, mas não podemos garantir disponibilidade ininterrupta.
        </p>

        <p>
          O serviço poderá passar por períodos de manutenção, atualização,
          melhorias ou interrupções decorrentes de fatores técnicos,
          operacionais ou de terceiros.
        </p>

        <p>
          Sempre que possível, eventuais manutenções programadas serão
          realizadas de forma a minimizar impactos aos usuários.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: '7. Propriedade intelectual',
    content: (
      <>
        <p>
          O software, identidade visual, marca, interface, código, textos,
          elementos gráficos e demais componentes do Leads Na Mão são
          protegidos pela legislação aplicável de propriedade intelectual.
        </p>

        <p>
          A utilização da plataforma não concede ao usuário qualquer direito
          de propriedade sobre seus componentes ou sobre a tecnologia que a
          sustenta.
        </p>

        <p>
          É proibida a reprodução, distribuição, modificação, engenharia
          reversa ou exploração não autorizada dos elementos protegidos da
          plataforma.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    title: '8. Suspensão ou encerramento',
    content: (
      <>
        <p>
          O acesso à plataforma poderá ser suspenso ou encerrado quando houver
          violação destes Termos de Uso, utilização indevida dos serviços,
          inadimplência, determinação legal ou outras situações previstas
          contratualmente.
        </p>

        <p>
          O usuário também poderá solicitar o encerramento de sua conta,
          observadas as condições aplicáveis ao serviço contratado.
        </p>
      </>
    ),
  },
  {
    icon: Mail,
    title: '9. Contato',
    content: (
      <>
        <p>
          Caso tenha dúvidas sobre estes Termos de Uso, sobre o funcionamento
          da plataforma ou sobre sua conta, entre em contato conosco.
        </p>

        <a
          href="mailto:contato@leadsnamao.com.br"
          className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          contato@leadsnamao.com.br
          <ArrowUpRight size={14} />
        </a>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07090D] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-260px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/[0.06]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-end justify-center gap-0.5 rounded-xl border border-white/10 bg-white/[0.04] p-2">
              <img
                src={logoImg}
                alt="Leads Na Mão"
                className="h-5 w-5"
              />
            </div>

            <div className="leading-none">
              <span className="block text-sm font-semibold tracking-tight">
                Leads Na Mão
              </span>

              <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/30">
                CRM Imobiliário
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} />
            Voltar para o site
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-20 lg:px-8 lg:pb-20 lg:pt-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2">
            <FileCheck2 size={14} className="text-white/50" />

            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
              Termos e condições
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Termos de
            <span className="text-white/45"> Uso.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
            Estes Termos de Uso estabelecem as condições aplicáveis ao acesso
            e utilização do Leads Na Mão e dos serviços disponibilizados pela
            plataforma.
          </p>

          <div className="mt-8 flex items-center gap-2 text-xs text-white/25">
            <span>Última atualização:</span>
            <span className="text-white/45">17 de setembro de 2026</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="space-y-6">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                      <Icon size={17} className="text-white/45" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4 text-sm leading-7 text-white/40">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom contact */}
          <div className="mt-12 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Precisa de ajuda?
                </p>

                <p className="mt-1.5 text-sm text-white/30">
                  Nossa equipe está disponível para esclarecer dúvidas sobre os
                  termos e a utilização da plataforma.
                </p>
              </div>

              <a
                href="mailto:contato@leadsnamao.com.br"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#07090D] transition-all hover:bg-white/90"
              >
                <Mail size={15} />
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
