import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800">
                ✨ Transformando espaços em experiências únicas
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Design de Interiores
                <span className="block text-amber-600">que Inspira</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sou Gleiciane Oliveira Hamilka, arquiteta especializada em criar ambientes que refletem a personalidade e necessidades dos meus clientes, combinando funcionalidade e beleza.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Ver Projetos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Conheça meu processo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-gray-900">8+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU5MTMwNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Interior design showcase"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-full opacity-10 z-0"></div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 text-xl">🏆</span>
                </div>
                <div>
                  <div className="text-gray-900">Prêmio Design</div>
                  <div className="text-sm text-gray-600">2023 - Melhor Projeto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}