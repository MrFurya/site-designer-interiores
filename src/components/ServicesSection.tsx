import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Home, 
  Building2, 
  Palette, 
  Ruler, 
  Camera, 
  TreePine,
  ArrowRight,
  Check
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Design Residencial",
      description: "Projetos completos para residências, apartamentos e casas, priorizando conforto e funcionalidade.",
      features: [
        "Projeto conceitual e executivo",
        "Especificação de materiais",
        "Mobiliário sob medida",
        "Acompanhamento de obra"
      ],
      price: "A partir de R$ 80/m²"
    },
    {
      icon: Building2,
      title: "Design Comercial",
      description: "Ambientes corporativos que refletem a identidade da empresa e otimizam a produtividade.",
      features: [
        "Escritórios e coworking",
        "Lojas e showrooms",
        "Restaurantes e cafés",
        "Consultório e clínicas"
      ],
      price: "A partir de R$ 120/m²"
    },
    {
      icon: Palette,
      title: "Consultoria em Decoração",
      description: "Orientação especializada para transformar seus ambientes com mudanças pontuais e eficazes.",
      features: [
        "Análise do ambiente atual",
        "Paleta de cores personalizada",
        "Seleção de móveis e objetos",
        "Lista de compras detalhada"
      ],
      price: "R$ 350 por ambiente"
    },
    {
      icon: Ruler,
      title: "Projeto de Marcenaria",
      description: "Móveis planejados e sob medida que maximizam o aproveitamento dos espaços.",
      features: [
        "Desenho técnico detalhado",
        "Especificação de materiais",
        "Acompanhamento produção",
        "Instalação supervisionada"
      ],
      price: "A partir de R$ 2.500/m²"
    },
    {
      icon: Camera,
      title: "Projeto 3D e Renderização",
      description: "Visualização realística dos projetos através de imagens 3D de alta qualidade.",
      features: [
        "Modelagem 3D completa",
        "Renderizações fotorrealísticas",
        "Tour virtual 360°",
        "Animações e vídeos"
      ],
      price: "R$ 450 por ambiente"
    },
    {
      icon: TreePine,
      title: "Design Sustentável",
      description: "Projetos eco-friendly com foco em sustentabilidade e eficiência energética.",
      features: [
        "Materiais sustentáveis",
        "Eficiência energética",
        "Aproveitamento luz natural",
        "Sistemas de reuso de água"
      ],
      price: "Consulte valores"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            Serviços
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900">
            Como Posso Ajudar Você
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofereço uma gama completa de serviços em arquitetura e design de interiores, 
            desde a concepção até a execução do seu projeto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                    <IconComponent className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-lg text-gray-900 mb-4">{service.price}</div>
                    <Button variant="outline" className="w-full group/btn">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl lg:text-3xl text-gray-900">
              Meu Processo de Trabalho
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Um processo estruturado que garante resultados excepcionais em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Briefing",
                description: "Entendimento das necessidades, estilo de vida e orçamento do cliente."
              },
              {
                step: "02", 
                title: "Conceito",
                description: "Desenvolvimento do conceito criativo e apresentação das primeiras ideias."
              },
              {
                step: "03",
                title: "Projeto",
                description: "Elaboração do projeto executivo com plantas, 3D e especificações."
              },
              {
                step: "04",
                title: "Execução",
                description: "Acompanhamento da obra e instalação para garantir a qualidade final."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}