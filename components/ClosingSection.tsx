import React from 'react';
import Button from './Button';
import { AlertTriangle, Users } from 'lucide-react';

const ClosingSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 bg-brand-black flex flex-col items-center text-center overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ 
        backgroundImage: `radial-gradient(#333 1px, transparent 1px)`, 
        backgroundSize: '30px 30px' 
      }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase mb-6 bg-red-500/10 px-4 py-2 rounded-sm border border-red-500/20">
          <AlertTriangle className="w-5 h-5" />
          <span>Última chamada para o grupo</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          VOCÊ PODE CONTINUAR <span className="text-gray-600 line-through decoration-red-600 decoration-4">NO ESCURO</span>...<br />
          OU ENTRAR PARA QUEM JOGA COM <span className="text-brand-neon">ESTRATÉGIA</span>.
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          O mercado é impiedoso com amadores. A MAXXIMUSBET é o escudo e a espada que você precisa. O acesso é gratuito, mas o valor é incalculável.
        </p>

        <div className="bg-[#111] p-8 md:p-12 border border-brand-gold/30 rounded-sm relative shadow-[0_0_50px_rgba(255,215,0,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-black font-black uppercase px-4 py-1 text-xs tracking-widest rounded-sm">
                Acesso Imediato
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-10">
                <div className="text-center">
                    <span className="block text-4xl font-black text-white mb-1">100%</span>
                    <span className="text-gray-500 text-sm uppercase tracking-wider font-bold">Gratuito</span>
                </div>
                <div className="w-px h-12 bg-gray-800 hidden md:block"></div>
                <div className="text-center">
                    <span className="block text-4xl font-black text-white mb-1 flex items-center justify-center gap-2">
                         <Users className="w-8 h-8 text-brand-neon" /> 5k+
                    </span>
                    <span className="text-gray-500 text-sm uppercase tracking-wider font-bold">Membros Ativos</span>
                </div>
                <div className="w-px h-12 bg-gray-800 hidden md:block"></div>
                <div className="text-center">
                    <span className="block text-4xl font-black text-white mb-1">24/7</span>
                    <span className="text-gray-500 text-sm uppercase tracking-wider font-bold">Suporte & Tips</span>
                </div>
            </div>

            <Button 
                text="QUERO ENTRAR PARA O VIP DA MAXXIMUSBET" 
                fullWidth={true}
                className="w-full md:w-auto"
            />
            
            <p className="mt-6 text-sm text-gray-500">
                Ao clicar, você será redirecionado para o nosso grupo exclusivo no WhatsApp.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;