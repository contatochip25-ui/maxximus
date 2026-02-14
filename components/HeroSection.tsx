import React from 'react';
import Button from './Button';
import { ShieldCheck, TrendingUp, Wallet, Target } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center py-20 px-4 md:px-8 clip-diagonal bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop" 
          alt="Sports Stadium" 
          className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-neon/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Branding Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 border border-brand-gold/30 rounded-full bg-brand-gold/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
          <span className="text-brand-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase">MaxximusBet VIP</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 drop-shadow-2xl">
          AMADORES APOSTAM NA SORTE.<br />
          <span className="text-brand-neon relative">
            NÓS JOGAMOS COM MÉTODO.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-neon opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-3xl mb-10 leading-relaxed">
          Chega de quebrar banca seguindo palpiteiros. A <strong className="text-white">MAXXIMUSBET</strong> entrega análise fria, leitura de mercado e bilhetes prontos para copiar e lucrar.
        </p>

        {/* Features Grid (Mobile/Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-12">
          <FeatureItem icon={<Target className="text-brand-neon" />} text="Bilhetes Prontos" />
          <FeatureItem icon={<ShieldCheck className="text-brand-neon" />} text="Entradas Filtradas" />
          <FeatureItem icon={<TrendingUp className="text-brand-neon" />} text="Estratégia Validada" />
          <FeatureItem icon={<Wallet className="text-brand-neon" />} text="Gestão Profissional" />
        </div>

        {/* CTA */}
        <Button 
          text="ENTRAR NO VIP GRATUITO AGORA" 
          subtext="Acesso pode ser limitado a qualquer momento."
          className="mt-4"
        />
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm hover:border-brand-neon/50 transition-colors">
    <div className="mb-2 p-2 bg-brand-black rounded-full border border-white/10">{icon}</div>
    <span className="text-sm font-bold text-gray-200 uppercase tracking-wide text-center">{text}</span>
  </div>
);

export default HeroSection;