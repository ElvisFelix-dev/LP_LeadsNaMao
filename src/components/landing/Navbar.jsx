import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

import logoImg from '../../assets/logoImg.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { label: 'Recursos', href: '#recursos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Para imobiliárias', href: '#para-quem' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="rounded-2xl border border-white/[0.08] bg-[#080A0F]/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5"
              aria-label="Leads Na Mão"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                <img
                  src={logoImg}
                  alt="Leads Na Mão"
                  className="h-5 w-5"
                />
              </div>

              <div className="leading-none">
                <span className="block text-sm font-semibold tracking-tight text-white">
                  Leads Na Mão
                </span>

                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                  CRM Imobiliário
                </span>
              </div>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/55 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Conhecer plataforma

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

          {/* Mobile navigation */}
          {menuOpen && (
            <div className="border-t border-white/[0.08] pt-4 md:hidden">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-white/60 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
                >
                  Conhecer plataforma
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
