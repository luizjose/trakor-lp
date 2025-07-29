import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#334155] min-w-full mt-12 text-white py-12 px-6 md:px-12">
      {/* Acessos - Grid Responsivo */}
      <div className="max-w-full min-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-12 justify-center ">
        {/* 1 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Categorias</h3>
          <ul className="text-lg space-y-1 text-[#E2E8F0]">
            <li>
              <a href="#" className="hover:underline">
                Interface de Usuário
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Experiência do Usuário
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mídia Digital
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Estilo de Vida
              </a>
            </li>
          </ul>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Produto</h3>
          <ul className="text-lg space-y-1 text-[#E2E8F0]">
            <li>
              <a href="#" className="hover:underline">
                Preços
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Visão Geral
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Explorar
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Acessibilidade
              </a>
            </li>
          </ul>
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Soluções</h3>
          <ul className="text-lg space-y-1 text-[#E2E8F0]">
            <li>
              <a href="#" className="hover:underline">
                Brainstorming
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ideação
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wireframing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pesquisa
              </a>
            </li>
          </ul>
        </div>
        {/* 4 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Recursos</h3>
          <ul className="text-lg space-y-1 text-[#E2E8F0]">
            <li>
              <a href="#" className="hover:underline">
                Central de Ajuda
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tutoriais
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Perguntas Frequentes
              </a>
            </li>
          </ul>
        </div>
        {/* 5 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Suporte</h3>
          <ul className="text-lg space-y-1 text-[#E2E8F0]">
            <li>
              <a href="#" className="hover:underline">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Desenvolvedores
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Documentação
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Integrações
              </a>
            </li>
          </ul>
        </div>
        {/* 6 - opcional, se quiser outra seção */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Empresa</h3>
          <ul className="text-lg space-y-1 text-[#E2E8F0]">
            <li>
              <a href="#" className="hover:underline">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Imprensa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Eventos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Solicitar Demonstração ➝
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-700 pt-8 mt-12">
        <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>Trakor © 2025. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <a href="#facebook" className="hover:underline">
              <FaFacebook size={24} />
            </a>
            <a href="#twitter" className="hover:underline">
              <FaTwitter size={24} />
            </a>
            <a href="#instagram" className="hover:underline">
              <FaInstagram size={24} />
            </a>
            <a href="#linkedin" className="hover:underline">
              <FaLinkedin size={24} />
            </a>
            {/*botões playstore e applestore */}
            <div className="flex gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition border border-white"
            >
              <FaGooglePlay size={28} />
              <div className="leading-tight text-left">
                <span className="text-xs">Disponível no</span>
                <br />
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition border border-white"
            >
              <FaApple size={28} />
              <div className="leading-tight text-left">
                <span className="text-xs">Baixar na</span>
                <br />
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
