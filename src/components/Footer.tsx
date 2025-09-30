import { Button } from "./ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin,
  ArrowUp
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-2xl text-white mb-2">
                Gleiciane Oliveira Hamilka
              </h3>
              <p className="text-amber-400">Arquitetura & Design de Interiores</p>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transformando espaços em experiências únicas há mais de 8 anos. 
              Cada projeto é desenvolvido com paixão, técnica e atenção aos 
              detalhes para criar ambientes que inspiram.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Design Residencial</span>
              </li>
              <li>
                <span className="text-gray-300">Design Comercial</span>
              </li>
              <li>
                <span className="text-gray-300">Consultoria em Decoração</span>
              </li>
              <li>
                <span className="text-gray-300">Projeto de Marcenaria</span>
              </li>
              <li>
                <span className="text-gray-300">Renderização 3D</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-white">(11) 99999-9999</div>
                <div className="text-sm text-gray-400">WhatsApp disponível</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-white">contato@gleicianehamila.com.br</div>
                <div className="text-sm text-gray-400">Resposta em até 24h</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-white">São Paulo, SP</div>
                <div className="text-sm text-gray-400">Atendimento em toda Grande SP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Gleiciane Oliveira Hamilka. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-gray-400 text-sm">
              CAU/SP - Conselho de Arquitetura e Urbanismo
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Topo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}