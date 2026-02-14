import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-900 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-gray-600 text-xs md:text-sm mb-4">
          MAXXIMUSBET © {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
        <p className="text-gray-700 text-[10px] max-w-2xl mx-auto leading-relaxed">
          Apostas esportivas envolvem riscos financeiros. Aposte com responsabilidade. Este serviço é destinado a maiores de 18 anos. Nossas análises são baseadas em estatísticas e não garantem lucro futuro.
        </p>
      </div>
    </footer>
  );
};

export default Footer;