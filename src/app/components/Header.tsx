export default function Header() {
  return (
    <header className="sticky top-0 bg-gray-100 py-0 px-4 shadow-md z-50 opacity-95">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img 
          src="/logo.png" 
          alt="Logo ICH" 
          style={{ height: '100px', width: 'auto' }}/>
        <nav>
          <ul className="flex gap-15 text-lg">
            <li><a href="#que" className="hover:underline text-neutral-800 text-sm">¿QUÉ HACEMOS?</a></li>
            <li><a href="#porque" className="hover:underline text-gray-800 text-sm" >¿POR QUÉ LO HACEMOS?</a></li>
            <li><a href="#como" className="hover:underline text-gray-800 text-sm">¿CÓMO LO HACEMOS?</a></li>
            <li><a href="#diagnostico" className="hover:underline text-gray-800 text-sm">DIAGNÓSTICO PYME</a></li>
            <li><a href="#contacto" className="hover:underline text-gray-800 text-sm">CONTACTO</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
