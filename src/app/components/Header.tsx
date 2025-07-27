'use client'; // Para usar estado

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8 py-2 md:py-4">
        
        <img 
          src="/logo.png" 
          alt="Logo ICH" 
          className="h-12 md:h-16 w-auto"
        />
        {/* Botón hamburguesa solo visible en móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm md:text-base">
            <li><a href="#que" className="hover:underline text-gray-800 font-serif">¿Qué hacemos?</a></li>
            <li><a href="#porque" className="hover:underline text-gray-800 font-serif">¿Por qué lo hacemos?</a></li>
            <li><a href="#como" className="hover:underline text-gray-800 font-serif">¿Cómo lo hacemos?</a></li>
            <li><a href="#diagnostico" className="hover:underline text-gray-800 font-serif">Diagnóstico PYME</a></li>
            <li><a href="#contacto" className="hover:underline text-gray-800 font-serif">Contacto</a></li>
          </ul>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-md mx-4 mt-2 px-4 pb-4 transition-transform transform duration-300 ease-out animate-slideDown">
          <ul className="flex flex-col gap-4 text-base">
            <li><a href="#que" className="hover:underline text-gray-800 font-serif" onClick={() => setIsOpen(false)}>¿Qué hacemos?</a></li>
            <li><a href="#porque" className="hover:underline text-gray-800 font-serif" onClick={() => setIsOpen(false)}>¿Por qué lo hacemos?</a></li>
            <li><a href="#como" className="hover:underline text-gray-800 font-serif" onClick={() => setIsOpen(false)}>¿Cómo lo hacemos?</a></li>
            <li><a href="#diagnostico" className="hover:underline text-gray-800 font-serif" onClick={() => setIsOpen(false)}>Diagnóstico PYME</a></li>
            <li><a href="#contacto" className="hover:underline text-gray-800 font-serif" onClick={() => setIsOpen(false)}>Contacto</a></li>
          </ul>
         </div>
      )}
    </header>
  );
}