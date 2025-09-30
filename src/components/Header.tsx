import { Button } from "./ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              Gleiciane Hamilka
            </div>
            <div className="ml-2 text-sm text-gray-600 hidden sm:block">
              Arquitetura & Design
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-gray-900 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-gray-900 transition-colors">
              Sobre
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
              Portfólio
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-gray-900 transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contato
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </div>
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-gray-900 transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-gray-900 transition-colors">
                Sobre
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
                Portfólio
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-gray-900 transition-colors">
                Serviços
              </a>
              <a href="#contato" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contato
              </a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}