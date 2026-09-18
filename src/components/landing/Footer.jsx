import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logoImg.png';

const productLinks = [
  {
    label: 'Recursos',
    href: '/#recursos',
  },
  {
    label: 'Como funciona',
    href: '/#como-funciona',
  },
  {
    label: 'Dashboard',
    href: '/#dashboard',
  },
  {
    label: 'Automação',
    href: '/#automacao',
  },
];

const companyLinks = [
  {
    label: 'Para imobiliárias',
    href: '/#para-quem',
  },
  {
    label: 'Conhecer plataforma',
    href: '/#cta',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] bg-[#07090D]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Leads Na Mão"
            >
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                <img
                  src={logoImg}
                  alt="Leads Na Mão"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-white">
                  Leads Na Mão
                </span>

                <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                  CRM Imobiliário
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/35">
              Organize seus leads, equipe comercial e processos de vendas em
              uma única plataforma.
            </p>

            <Link
              to="/contato"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition-colors duration-200 hover:text-white"
            >
              Conhecer a plataforma
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Produto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Produto
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {productLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </nav>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Empresa
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}

              <FooterLink
                label="Contato"
                href="/contato"
              />
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Fale com a gente
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <ContactLink
                href="mailto:contato@leadsnamao.com.br"
                icon={Mail}
                label="contato@leadsnamao.com.br"
              />

              <ContactLink
                href="/contato"
                icon={MessageCircle}
                label="Falar com a equipe"
              />
            </div>

            <p className="mt-5 max-w-xs text-xs leading-5 text-white/25">
              Quer entender como o Leads Na Mão pode funcionar na sua
              imobiliária? Vamos conversar.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/[0.05] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            © {currentYear} Leads Na Mão. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              to="/privacidade"
              className="text-xs text-white/25 transition-colors duration-200 hover:text-white/60"
            >
              Privacidade
            </Link>

            <Link
              to="/termos"
              className="text-xs text-white/25 transition-colors duration-200 hover:text-white/60"
            >
              Termos
            </Link>

            <Link
              to="/#topo"
              className="group inline-flex items-center gap-1.5 text-xs text-white/25 transition-colors duration-200 hover:text-white/60"
            >
              Voltar ao topo

              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label, href }) {
  return (
    <Link
      to={href}
      className="text-sm text-white/35 transition-colors duration-200 hover:text-white"
    >
      {label}
    </Link>
  );
}

function ContactLink({ href, icon: Icon, label }) {
  const isExternal = href.startsWith('mailto:') || href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        className="group inline-flex items-center gap-3 text-sm text-white/35 transition-colors duration-200 hover:text-white"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] transition-colors duration-200 group-hover:border-white/10 group-hover:bg-white/[0.05]">
          <Icon size={14} />
        </span>

        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link
      to={href}
      className="group inline-flex items-center gap-3 text-sm text-white/35 transition-colors duration-200 hover:text-white"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] transition-colors duration-200 group-hover:border-white/10 group-hover:bg-white/[0.05]">
        <Icon size={14} />
      </span>

      <span>{label}</span>
    </Link>
  );
}
