import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ["Produto", "Solução", "Recursos", "Preços"];
    
    // Função para alternar o menu mobile
   
 return (
    <header className="bg-[#0F172A] w-full text-white shadow-md">
      <div className="w-full  flex justify-between items-center  py-3">
        {/* Logo */}
        <h1 className="text-[32px] font-bold">trakor</h1>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-16 text-sm">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
         
          
        </nav>
        <button className=" hidden md:flex bg-gray-600 hover:bg-gray-700 px-6 py-1 rounded">
            Solicitar Convite
          </button>

        {/* Botão Mobile */}
        <button
          className="md:hidden bg-[#334155] rounded-lg p-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] px-4 pb-6 space-y-6 text-sm">
          {navItems.map((item) => (
            <a key={item} href="#" className="block hover:underline">
              {item}
            </a>
          ))}
          <button className=" bg-gray-600 hover:bg-gray-700 px-6 py-1 rounded">
            Solicitar Convite
          </button>
          
        </div>
      )}
    </header>
  );
}

export default Header;