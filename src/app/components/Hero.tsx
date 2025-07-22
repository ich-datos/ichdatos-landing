// components/Hero.jsx
export default function Hero() {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center px-5 bg-gray-950">
      <h2 className="text-4xl md:text-3xl mb-4 text-gray-100">
        TU PYME YA TIENE TODO... NOSOTROS LO CONECTAMOS.
      </h2>
      <p className="text-lg md:text-lg py-4 mb-35 max-w-1x2 text-gray-400">
        Ponemos a trabajar tus datos para que tomes decisiones asertivas.
      </p>
      <a
        href="#diagnostico"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Comenzá tu diagnóstico gratuito
      </a>
    </section>
  );
}
