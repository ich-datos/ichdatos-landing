'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="que"
      className="bg-slate-800 py-12 px-10 border-t border-gray-600"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          ¿Qué hacemos?
        </h2>
        <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
          Acompañamos a empresas en crecimiento profesionalizando la
          gestión de sus datos sin perder agilidad. Integramos análisis técnico y visión de
          negocio para escalar con sentido, eficiencia y foco en lo que importa.
        </p>
        
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">🔍 Diagnóstico claro</h3>
            <p className="text-gray-600">
              Identificamos puntos críticos y oportunidades con una mirada integral del negocio.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">⚙️ Automatización útil</h3>
            <p className="text-gray-600">
              Eliminamos tareas repetitivas y potenciamos la toma de decisiones con datos confiables.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">📈 Escalabilidad</h3>
            <p className="text-gray-600">
              Diseñamos soluciones adaptables, para que tu estructura crezca sin fricciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
