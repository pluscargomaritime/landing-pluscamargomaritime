import { useState } from 'react';
import svgPaths from '../../assets/svgPaths';
import imgLogo from '../../assets/logo.png';

const WORKER_URL = 'https://worker-cargomaritime.pluscargomaritime.workers.dev';

export default function MainContent() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter-section');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Focus en el input después del scroll
      setTimeout(() => {
        const emailInput = document.getElementById('email-input');
        if (emailInput) {
          emailInput.focus();
        }
      }, 800);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length > 0) {
      setIsValid(validateEmail(value));
    } else {
      setIsValid(null);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitError(null);
    if (validateEmail(email) && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const res = await fetch(`${WORKER_URL}/api/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (res.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setEmail('');
            setIsValid(null);
            setIsSubmitted(false);
            setSubmitError(null);
          }, 3000);
        } else {
          setSubmitError(data.message || 'Something went wrong. Please try again.');
          setIsValid(false);
        }
      } catch {
        setSubmitError('Network error. Please check your connection and try again.');
        setIsValid(false);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[896px] px-4 md:px-20 relative z-10">
      {/* Logo imponente con efecto de flotación - SIN fondo opaco */}
      <div className="mb-6 md:mb-8 w-full max-w-[550px] animate-[scaleIn_1s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
        {/* Contenedor con efectos sutiles que no tapan el fondo */}
        <div className="relative p-6 md:p-8 group">
          {/* Sombra suave de fondo - muy sutil */}
          <div
            className="absolute inset-0 blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
            }}
          />

          {/* Glow dorado de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(233,195,73,0.15)] via-transparent to-[rgba(233,195,73,0.15)] blur-xl" />

          {/* Logo con filtro para invertir colores a blanco */}
          <div className="relative hover:animate-[float_3s_ease-in-out_infinite] transition-all duration-500">
            <img
              alt="Cargo Maritime Global Lines"
              className="w-full h-auto object-contain  drop-shadow-[0_4px_24px_rgba(233,195,73,0.6)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_6px_32px_rgba(233,195,73,0.8)]"
              src={imgLogo}
            />
          </div>

          {/* Líneas decorativas sutiles */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(233,195,73,0.5)] to-transparent opacity-60" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(233,195,73,0.5)] to-transparent opacity-60" />
        </div>
      </div>

      {/* Headline con animación escalonada - AHORA DESPUÉS DEL LOGO */}
      <div className="flex flex-col items-center max-w-[768px] pb-6 md:pb-[24px] w-full">
        <div className="flex flex-col font-['Noto_Serif'] font-semibold text-[#e5e2e1] text-[28px] md:text-[48px] text-center leading-tight md:leading-[57.6px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="m-0 animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">Connecting Global Trade</p>
          <p className="m-0 animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">Through Intelligent Maritime</p>
          <p className="m-0 animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">Solutions</p>
        </div>
      </div>

      {/* Subheadline con animación */}
      <div className="relative w-full max-w-[736px] mb-8 md:mb-0 animate-[fadeInUp_0.8s_ease-out_1.2s] opacity-0 [animation-fill-mode:forwards]">
        <div className="flex flex-col font-['Hanken_Grotesk'] text-[#cfc4c5] text-[16px] md:text-[18px] text-center leading-relaxed md:leading-[28.8px]">
          <p className="m-0">We are building a new digital experience to present our international maritime and</p>
          <p className="m-0">trading operations.</p>
        </div>
      </div>

      {/* Badge COMING SOON con glow pulsante - clickeable */}
      <div className="relative my-8 md:my-2 animate-[scaleIn_0.6s_ease-out_1.4s] opacity-0 [animation-fill-mode:forwards]">
        <button
          onClick={scrollToNewsletter}
          className="bg-[#e9c349] flex items-center justify-center gap-2 px-8 md:px-[40px] py-3 md:py-[12px] rounded-[9999px] animate-[glow_2s_ease-in-out_infinite] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#f0d060]"
          aria-label="Register for early access"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_infinite]" />
          <p className="font-['Hanken_Grotesk'] font-semibold text-[#3c2f00] text-[12px] md:text-[14px] tracking-[3.6px] md:tracking-[4.2px] uppercase leading-[14px] m-0 relative z-10">COMING SOON</p>
          {/* Arrow icon animado */}
          <svg className="w-3 h-3 md:w-4 md:h-4 relative z-10 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="#3c2f00" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Tooltip sutil */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <p className="font-['Hanken_Grotesk'] text-[10px] text-[#cfc4c5] tracking-wider uppercase whitespace-nowrap">Get notified</p>
        </div>
      </div>

      {/* Newsletter Form */}
      <div id="newsletter-section" className="flex flex-col items-start w-full max-w-[448px] pt-12 md:pt-[64px] animate-[fadeInUp_0.8s_ease-out_1.6s] opacity-0 [animation-fill-mode:forwards] scroll-mt-24">
        {isSubmitted ? (
          <div className="w-full animate-[fadeInUp_0.5s_ease-out]">
            <div className="relative p-6 md:p-8 rounded-2xl border border-[rgba(233,195,73,0.25)]">
              {/* Gold glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(233,195,73,0.1)] via-transparent to-[rgba(233,195,73,0.05)] blur-xl rounded-2xl" />

              <div className="relative flex flex-col items-center text-center">
                {/* Gold decorative lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#e9c349] to-transparent opacity-60" />

                {/* Checkmark circle */}
                <div className="mt-4 mb-5 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[rgba(233,195,73,0.12)] border border-[rgba(233,195,73,0.3)]">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#e9c349]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="font-['Noto_Serif'] text-[#e9c349] text-xl md:text-2xl font-semibold leading-tight mb-2">
                  You're on the list!
                </h3>

                <p className="font-['Hanken_Grotesk'] text-[#cfc4c5] text-sm md:text-base leading-relaxed max-w-[320px]">
                  Thank you for your interest. We'll notify you at{' '}
                  <span className="text-[#e9c349] font-medium">{email}</span> when we launch.
                </p>

                {/* Bottom decorative line */}
                <div className="mt-6 mb-2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[rgba(233,195,73,0.4)] to-transparent" />
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full">
            <div className={`flex items-end w-full pb-[9px] relative transition-all duration-300 ${
              isFocused ? 'border-b-2 border-[#e9c349]' :
              isValid === false ? 'border-b-2 border-red-400' :
              isValid === true ? 'border-b-2 border-green-400' :
              'border-b border-[#988e90]'
            }`}>
              {isFocused && (
                <div className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#e9c349] blur-sm animate-[pulse_2s_ease-in-out_infinite]" />
              )}

              <input
                id="email-input"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Register for priority launch access"
                className={`flex-1 bg-transparent font-['Hanken_Grotesk'] text-[#cfc4c5] text-[14px] md:text-[16px] outline-none placeholder:text-[#cfc4c5] pb-[10px] pt-[9px] px-[12px] transition-all duration-300 ${
                  isFocused ? 'text-white' : ''
                }`}
              />

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`h-[32px] w-[16px] flex-shrink-0 transition-all duration-300 ${
                  isValid && !isSubmitting ? 'opacity-100 hover:scale-110 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                } ${isSubmitting ? 'animate-[pulse_1s_ease-in-out_infinite]' : ''}`}
                aria-label="Submit"
              >
                <svg className="w-full h-full transition-transform duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 16 32">
                  <path d={svgPaths.p1e720300} fill="#E9C349" />
                </svg>
              </button>
            </div>

            {/* Validation messages */}
            <div className="mt-2 min-h-[20px]">
              {isValid === false && email.length > 0 && (
                <p className="font-['Hanken_Grotesk'] text-[12px] text-red-400 animate-[fadeIn_0.3s_ease-out]">
                  {submitError || 'Please enter a valid email address'}
                </p>
              )}
              {isValid === true && (
                <p className="font-['Hanken_Grotesk'] text-[12px] text-green-400 animate-[fadeIn_0.3s_ease-out]">
                  Ready to join our launch list
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
