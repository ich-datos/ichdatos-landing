// components/Hero.jsx
export default function Hero() {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Transformá tus datos en decisiones que importan
      </h2>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Consultoría inteligente en gestión de datos para negocios en crecimiento.
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
