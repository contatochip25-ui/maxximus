import React from 'react';
import { Check, BarChart2 } from 'lucide-react';

const AuthoritySection: React.FC = () => {
  const tickets = [
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/bilhete5.jpeg",
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/bilhete6.jpeg",
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/bilhete7.jpeg"
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 bg-brand-dark overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content: Authority & Method */}
        <div className="space-y-8 order-1 lg:order-1">
          <div className="space-y-2">
            <h4 className="text-brand-gold font-bold tracking-widest uppercase text-xs md:text-sm">Método Comprovado</h4>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              AQUI NÃO EXISTE "ACHISMO".<br/>
              <span className="text-gray-500">EXISTE ANÁLISE TÉCNICA.</span>
            </h2>
          </div>
          
          <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-4 border-brand-neon pl-4">
            A MaxximusBet não é um grupo de torcedores. Somos analistas de dados. Identificamos padrões, assimetrias nas odds e erros das casas de aposta para entregar valor real.
          </p>

          <div className="space-y-4">
            <ListItem text="Bilhetes estruturados e prontos para execução" />
            <ListItem text="Estratégia matemática acima da sorte" />
            <ListItem text="Gestão de banca rigorosa para consistência" />
            <ListItem text="Transparência total em Green e Red" />
          </div>

          <div className="pt-4 hidden md:block">
            <p className="text-2xl font-black italic text-white">
              “RESULTADO É CONSEQUÊNCIA DE <span className="text-brand-neon underline decoration-brand-neon underline-offset-4">MÉTODO</span>.”
            </p>
          </div>
        </div>

        {/* Right Content: Visual Proof / Ticket Images */}
        <div className="relative order-2 lg:order-2 w-full">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
          
          {/* Mobile Label */}
          <div className="md:hidden mb-4 flex items-center gap-2">
             <BarChart2 className="text-brand-neon w-5 h-5" />
             <span className="text-white font-bold text-sm uppercase tracking-wider">Últimos Resultados</span>
          </div>

          {/* 
            MOBILE: Horizontal Scroll (Snap) 
            DESKTOP: Grid Layout 
          */}
          <div className="flex lg:grid lg:grid-cols-2 gap-4 overflow-x-auto pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
            
            {/* Image 1 - Large on Desktop */}
            <div className="min-w-[85vw] md:min-w-[300px] lg:min-w-0 lg:col-span-2 relative group snap-center">
              <div className="absolute inset-0 bg-brand-neon/10 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none border border-white/10 rounded-xl"></div>
              <img 
                src={tickets[0]} 
                alt="Comprovante de Lucro 1" 
                className="w-full h-64 md:h-80 object-cover rounded-xl border-2 border-brand-neon/30 shadow-[0_0_20px_rgba(204,255,0,0.1)] grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-brand-neon/50 z-20">
                <span className="text-brand-neon font-black text-xs uppercase tracking-widest">Lucro Recente</span>
              </div>
            </div>

            {/* Image 2 */}
            <div className="min-w-[70vw] md:min-w-[250px] lg:min-w-0 relative group snap-center lg:translate-y-8">
              <img 
                src={tickets[1]} 
                alt="Comprovante de Lucro 2" 
                className="w-full h-48 md:h-64 object-cover rounded-xl border-2 border-white/10 group-hover:border-brand-neon/50 transition-all duration-300"
              />
            </div>

            {/* Image 3 */}
            <div className="min-w-[70vw] md:min-w-[250px] lg:min-w-0 relative group snap-center lg:-translate-y-8">
               <img 
                src={tickets[2]} 
                alt="Comprovante de Lucro 3" 
                className="w-full h-48 md:h-64 object-cover rounded-xl border-2 border-white/10 group-hover:border-brand-neon/50 transition-all duration-300"
              />
            </div>

          </div>
          
          {/* Mobile Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-2 lg:hidden">
            <div className="w-2 h-2 rounded-full bg-brand-neon"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          </div>
          
          {/* Stats Box Floating */}
          <div className="hidden lg:block absolute -bottom-10 -right-10 bg-brand-black border border-brand-gold/20 p-6 shadow-2xl z-30 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-4">
                <div>
                    <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Assertividade</p>
                    <p className="text-4xl font-black text-brand-gold">87%</p>
                    <p className="text-xs text-gray-500">Semana Passada</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-neon/10 flex items-center justify-center border border-brand-neon/20 group-hover:bg-brand-neon group-hover:text-black transition-colors">
      <Check className="w-5 h-5 text-brand-neon group-hover:text-black" />
    </div>
    <span className="text-base md:text-lg font-semibold text-gray-200">{text}</span>
  </div>
);

export default AuthoritySection;