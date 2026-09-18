import {
  ArrowLeft,
  ArrowUpRight,
  Database,
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
    icon: Database,
    title: '1. Informações que coletamos',
    content: (
      <>
        <p>
          Podemos coletar informações fornecidas diretamente por você ao
          utilizar o Leads Na Mão, solicitar uma demonstração, entrar em
          contato conosco ou utilizar nossos serviços.
        </p>

        <p>
          Essas informações podem incluir nome, e-mail, telefone, nome da
          imobiliária, informações profissionais e outros dados necessários
          para atender à sua solicitação.
        </p>

        <p>
          Também podemos coletar informações técnicas relacionadas ao uso da
          plataforma, como endereço IP, navegador, dispositivo, páginas
          acessadas e informações de navegação.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: '2. Como utilizamos suas informações',
    content: (
      <>
        <p>
          As informações coletadas podem ser utilizadas para fornecer,
          manter, melhorar e personalizar nossos serviços.
        </p>

        <p>Também podemos utilizá-las para:</p>

        <ul>
          <li>Responder solicitações e mensagens;</li>
          <li>Agendar e realizar demonstrações da plataforma;</li>
          <li>Prestar suporte aos usuários;</li>
          <li>Enviar comunicações relacionadas ao serviço;</li>
          <li>Melhorar a experiência e segurança da plataforma;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: '3. Proteção dos dados',
    content: (
      <>
        <p>
          Adotamos medidas técnicas e organizacionais destinadas a proteger
          as informações contra acesso não autorizado, alteração, divulgação
          ou destruição indevida.
        </p>

        <p>
          O acesso às informações é limitado às pessoas e sistemas que
          precisam desses dados para executar suas respectivas funções.
        </p>

        <p>
          Apesar das medidas de segurança adotadas, nenhum sistema conectado
          à internet pode ser considerado completamente livre de riscos.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    title: '4. Compartilhamento de informações',
    content: (
      <>
        <p>
          Não comercializamos informações pessoais dos nossos usuários.
        </p>

        <p>
          Poderemos compartilhar informações com fornecedores e prestadores
          de serviços que auxiliem na operação da plataforma, sempre que isso
          for necessário para fornecer nossos serviços.
        </p>

        <p>
          Também poderemos compartilhar informações quando houver obrigação
          legal, ordem judicial ou outra hipótese prevista na legislação
          aplicável.
        </p>
      </>
    ),
  },
  {
    icon: Lock,
    title: '5. Armazenamento e retenção',
    content: (
      <>
        <p>
          As informações são armazenadas pelo período necessário para cumprir
          as finalidades para as quais foram coletadas, atender obrigações
          legais e exercer direitos legítimos.
        </p>

        <p>
          Quando os dados não forem mais necessários e não houver obrigação
          legal de retenção, eles poderão ser excluídos ou anonimizados,
          conforme aplicável.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    title: '6. Seus direitos',
    content: (
      <>
        <p>
          Nos termos da legislação aplicável, especialmente da Lei Geral de
          Proteção de Dados Pessoais (LGPD), você poderá solicitar informações
          sobre o tratamento dos seus dados e exercer os direitos previstos
          em lei.
        </p>

        <p>Entre eles, quando aplicáveis:</p>

        <ul>
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos dados;</li>
          <li>Correção de informações incompletas ou incorretas;</li>
          <li>Solicitação de eliminação de dados em determinadas situações;</li>
          <li>Informações sobre compartilhamento de dados;</li>
          <li>Revogação do consentimento, quando aplicável.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Mail,
    title: '7. Contato',
    content: (
      <>
        <p>
          Se você tiver dúvidas sobre esta Política de Privacidade ou quiser
          exercer algum direito relacionado aos seus dados pessoais, entre em
          contato conosco.
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

export default function Privacy() {
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
            <ShieldCheck size={14} className="text-white/50" />

            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
              Privacidade e proteção de dados
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Política de
            <span className="text-white/45"> Privacidade.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
            Esta Política de Privacidade explica como o Leads Na Mão coleta,
            utiliza, armazena e protege informações pessoais relacionadas aos
            seus serviços.
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
                  Ficou com alguma dúvida?
                </p>

                <p className="mt-1.5 text-sm text-white/30">
                  Nossa equipe está disponível para esclarecer questões sobre
                  privacidade e proteção de dados.
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
