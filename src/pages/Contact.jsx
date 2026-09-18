import { useState } from 'react';

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Loader2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import emailjs from '@emailjs/browser';

import Footer from '../components/landing/Footer';

import logoImg from '../assets/logoImg.png';

const benefits = [
  {
    title: 'Veja a plataforma por dentro',
    description:
      'Conheça os principais recursos e entenda como eles se encaixam na rotina da sua imobiliária.',
  },
  {
    title: 'Organize sua operação',
    description:
      'Entenda como centralizar leads, acompanhar oportunidades e distribuir contatos para sua equipe.',
  },
  {
    title: 'Conheça o fluxo comercial',
    description:
      'Veja como gestores e corretores podem trabalhar dentro de uma operação mais organizada.',
  },
];

const demoItems = [
  {
    icon: CalendarDays,
    title: 'Demonstração personalizada',
    description:
      'Apresentamos a plataforma considerando a realidade e o tamanho da sua imobiliária.',
  },
  {
    icon: Clock3,
    title: 'Sem compromisso',
    description:
      'Uma conversa objetiva para você conhecer o produto antes de tomar qualquer decisão.',
  },
  {
    icon: Users,
    title: 'Foco na sua equipe',
    description:
      'Mostramos como gestores e corretores podem trabalhar dentro da mesma operação.',
  },
];

const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999';

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setSubmitted(false);
    setError('');

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        'service_jefx9ch',
        'template_1zoc9ih',
        form,
        'HTC4eCcilOxil_G9t',
      );

      setSubmitted(true);

      form.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 8000);
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);

      setError(
        err?.text ||
          'Não conseguimos enviar sua solicitação agora. Tente novamente em alguns instantes.',
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#06080D] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

        <div className="absolute right-[-250px] top-[35%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[130px]" />

        <div className="absolute left-[-250px] top-[70%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[130px]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#06080D]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6">
          <Link
            to="/"
            className="group flex items-center"
          >
            <img
              src={logoImg}
              alt="Leads na Mão"
              className="h-9 w-auto transition duration-300 group-hover:opacity-80"
            />
          </Link>

          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-sm text-white/55 transition duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />

            Voltar para o início
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 sm:pt-20 lg:pb-28 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
            {/* LEFT */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-xs font-medium text-white/55 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.07]">
                  <Sparkles size={11} />
                </span>

                Demonstração da plataforma
              </div>

              <h1 className="max-w-2xl text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.25rem]">
                Sua operação comercial pode ser{' '}
                <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                  mais organizada.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/45 sm:text-base">
                Conheça o Leads na Mão e veja como uma operação
                imobiliária pode centralizar seus leads, organizar
                oportunidades e dar mais visibilidade para gestores e
                corretores.
              </p>

              {/* Benefits */}
              <div className="mt-9 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group flex items-start gap-3.5"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] transition duration-300 group-hover:border-white/[0.15] group-hover:bg-white/[0.07]">
                      <Check size={14} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white/80">
                        {benefit.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/35 sm:text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust */}
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-white/30">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={14} />
                  Demonstração sem compromisso
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

                <span>Conversa personalizada</span>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-[32px] bg-white/[0.015] blur-2xl" />

              <div className="relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#0B0E14]/95 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                {/* Card top accent */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                {submitted ? (
                  <div className="flex min-h-[650px] flex-col items-center justify-center px-8 py-12 text-center sm:px-12">
                    <div className="relative mb-7">
                      <div className="absolute inset-0 rounded-full bg-white/[0.08] blur-xl" />

                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.045]">
                        <Check size={32} strokeWidth={1.7} />
                      </div>
                    </div>

                    <span className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/35">
                      Solicitação recebida
                    </span>

                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      Tudo certo por aqui.
                    </h2>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
                      Recebemos seus dados e nossa equipe entrará em
                      contato para combinar a demonstração da plataforma.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="group mt-9 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-5 py-3 text-sm text-white/60 transition duration-300 hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white"
                    >
                      Enviar outra solicitação

                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                ) : (
                  <div className="p-6 sm:p-8 lg:p-9">
                    {/* Form header */}
                    <div className="mb-8">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                        <CalendarDays size={18} />
                      </div>

                      <h2 className="text-2xl font-semibold tracking-tight">
                        Agende uma demonstração
                      </h2>

                      <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                        Conte um pouco sobre sua imobiliária. Vamos
                        preparar a demonstração de acordo com sua
                        operação.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* NAME + COMPANY */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-xs font-medium text-white/55"
                          >
                            Nome
                          </label>

                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Seu nome"
                            required
                            disabled={isSending}
                            autoComplete="name"
                            className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/[0.12] focus:border-white/[0.22] focus:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="mb-2 block text-xs font-medium text-white/55"
                          >
                            Imobiliária
                          </label>

                          <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Nome da empresa"
                            required
                            disabled={isSending}
                            autoComplete="organization"
                            className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/[0.12] focus:border-white/[0.22] focus:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>

                      {/* EMAIL + PHONE */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-xs font-medium text-white/55"
                          >
                            E-mail
                          </label>

                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            disabled={isSending}
                            autoComplete="email"
                            className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/[0.12] focus:border-white/[0.22] focus:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-2 block text-xs font-medium text-white/55"
                          >
                            WhatsApp
                          </label>

                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(11) 99999-9999"
                            required
                            disabled={isSending}
                            autoComplete="tel"
                            className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/[0.12] focus:border-white/[0.22] focus:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>

                      {/* BROKERS */}
                      <div>
                        <label
                          htmlFor="brokers"
                          className="mb-2 block text-xs font-medium text-white/55"
                        >
                          Tamanho da equipe
                        </label>

                        <select
                          id="brokers"
                          name="brokers"
                          required
                          disabled={isSending}
                          defaultValue=""
                          className="h-12 w-full appearance-none rounded-xl border border-white/[0.08] bg-[#0B0E14] px-4 text-sm text-white outline-none transition duration-300 hover:border-white/[0.12] focus:border-white/[0.22] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="" disabled>
                            Quantos corretores?
                          </option>

                          <option value="1 a 5 corretores">
                            1 a 5 corretores
                          </option>

                          <option value="6 a 10 corretores">
                            6 a 10 corretores
                          </option>

                          <option value="11 a 20 corretores">
                            11 a 20 corretores
                          </option>

                          <option value="21 a 50 corretores">
                            21 a 50 corretores
                          </option>

                          <option value="Mais de 50 corretores">
                            Mais de 50 corretores
                          </option>
                        </select>
                      </div>

                      {/* TIME */}
                      <div>
                        <label
                          htmlFor="preferredTime"
                          className="mb-2 block text-xs font-medium text-white/55"
                        >
                          Melhor horário
                        </label>

                        <select
                          id="preferredTime"
                          name="preferredTime"
                          required
                          disabled={isSending}
                          defaultValue=""
                          className="h-12 w-full appearance-none rounded-xl border border-white/[0.08] bg-[#0B0E14] px-4 text-sm text-white outline-none transition duration-300 hover:border-white/[0.12] focus:border-white/[0.22] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="" disabled>
                            Escolha um horário
                          </option>

                          <option value="Manhã">Manhã</option>

                          <option value="Tarde">Tarde</option>

                          <option value="Tenho flexibilidade">
                            Tenho flexibilidade
                          </option>
                        </select>
                      </div>

                      {/* MESSAGE */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-xs font-medium text-white/55"
                        >
                          Mensagem{' '}
                          <span className="text-white/20">
                            (opcional)
                          </span>
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows="3"
                          placeholder="Alguma necessidade específica?"
                          disabled={isSending}
                          className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm leading-6 text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/[0.12] focus:border-white/[0.22] focus:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      {/* ERROR */}
                      {error && (
                        <div className="flex items-start gap-3 rounded-xl border border-red-400/15 bg-red-400/[0.05] px-4 py-3.5 text-sm text-red-300">
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />

                          <span>{error}</span>
                        </div>
                      )}

                      {/* SUBMIT */}
                      <button
                        type="submit"
                        disabled={isSending}
                        className="group relative flex h-13 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#07090D] shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSending ? (
                          <>
                            <Loader2
                              size={17}
                              className="animate-spin"
                            />

                            Enviando solicitação...
                          </>
                        ) : (
                          <>
                            Solicitar demonstração

                            <ArrowRight
                              size={17}
                              className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                          </>
                        )}
                      </button>

                      {/* PRIVACY */}
                      <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-white/25">
                        <ShieldCheck size={13} />

                        Seus dados são utilizados apenas para contato
                        sobre a demonstração.
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO FEATURES */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <div className="mb-10 max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/30">
              O que você vai conhecer
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Uma demonstração pensada para sua operação.
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/40">
              Mais do que apresentar funcionalidades, queremos
              mostrar como a plataforma pode se encaixar no dia a dia
              da sua equipe.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {demoItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.03]"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/[0.025] blur-2xl transition duration-500 group-hover:bg-white/[0.05]" />

                  <div className="relative">
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035]">
                      <Icon size={18} />
                    </div>

                    <h3 className="text-base font-semibold text-white/90">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/35">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 py-10 sm:px-10 lg:px-12">
            <div className="absolute right-[-100px] top-[-160px] h-[350px] w-[350px] rounded-full bg-white/[0.025] blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/30">
                  <MessageCircle size={14} />
                  Atendimento direto
                </div>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Prefere conversar pelo WhatsApp?
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-6 text-white/40">
                  Fale diretamente com nossa equipe e tire suas dúvidas
                  sobre o Leads na Mão.
                </p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.045] px-5 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/[0.18] hover:bg-white/[0.08]"
              >
                <MessageCircle size={17} />

                Falar no WhatsApp

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
