export default function Header() {
  return (
    <header className="sticky top-0 bg-gray-900 py-7 px-6 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-100">ICH</h1>
        <nav>
          <ul className="flex gap-6 text-lg">
            <li><a href="#services" className="hover:underline text-gray-100">Servicios</a></li>
            <li><a href="#sobre" className="hover:underline text-gray-100">Propósito</a></li>
            <li><a href="#diagnostico" className="hover:underline text-gray-100">Diagnóstico</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
