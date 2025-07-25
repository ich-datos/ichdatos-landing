// components/Hero.tsx
export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-4 md:px-8 bg-gray-950 overflow-hidden">
      
      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-tight max-w-4xl">
        TU PYME YA TIENE TODO. <br className="hidden sm:block" /> NOSOTROS LO CONECTAMOS.
      </h2>
      
      <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
        Ponemos a trabajar tus datos para que tomes decisiones asertivas.
      </p>
      
      <div className="mt-10 sm:mt-12">
        <a
          href="#diagnostico"
          className="bg-[#0d3b66] hover:bg-[#145DA0] text-white font-semibold rounded-full px-8 py-3 sm:px-10 sm:py-4 shadow-lg transition duration-300"
        >
          Comenzá tu diagnóstico gratuito
        </a>
      </div>
    </section>
  );
}
