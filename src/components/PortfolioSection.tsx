import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", "Residencial", "Comercial", "Reforma"];

  const projects = [
    {
      id: 1,
      title: "Apartamento Moderno Jardins",
      category: "Residencial",
      location: "São Paulo, SP",
      year: "2023",
      description: "Projeto completo de apartamento de 120m² com conceito minimalista e cores neutras.",
      image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU5MTMwNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Minimalista", "Neutro", "Funcional"]
    },
    {
      id: 2,
      title: "Cozinha Gourmet Premium",
      category: "Residencial",
      location: "Alphaville, SP",
      year: "2023",
      description: "Cozinha planejada com ilha central e acabamentos de luxo para família jovem.",
      image: "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc1OTE2NTU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Gourmet", "Luxo", "Planejada"]
    },
    {
      id: 3,
      title: "Suíte Master Elegante",
      category: "Residencial",
      location: "Moema, SP",
      year: "2023",
      description: "Quarto principal com closet integrado e banheiro spa privativo.",
      image: "https://images.unsplash.com/photo-1704428382583-c9c7c1e55d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwZGVzaWdufGVufDF8fHx8MTc1OTEyMDg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Elegante", "Closet", "Spa"]
    },
    {
      id: 4,
      title: "Banheiro Spa Moderno",
      category: "Reforma",
      location: "Vila Madalena, SP",
      year: "2022",
      description: "Reforma completa transformando banheiro tradicional em spa moderno.",
      image: "https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmF0aHJvb20lMjBkZXNpZ258ZW58MXx8fHwxNzU5MDU5MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Spa", "Moderno", "Reforma"]
    },
    {
      id: 5,
      title: "Escritório Corporativo",
      category: "Comercial",
      location: "Faria Lima, SP",
      year: "2023",
      description: "Projeto de escritório corporativo com foco em produtividade e bem-estar.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkxMjk2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Corporativo", "Produtividade", "Bem-estar"]
    },
    {
      id: 6,
      title: "Loft Industrial Chic",
      category: "Reforma",
      location: "Bela Vista, SP",
      year: "2022",
      description: "Transformação de antigo galpão em loft moderno com elementos industriais.",
      image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU5MTMwNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Industrial", "Loft", "Moderno"]
    }
  ];

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            Portfólio
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900">
            Projetos Realizados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram espaços e criaram experiências únicas para nossos clientes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 bg-white border-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl text-gray-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="ghost" className="w-full group/btn">
                  Ver Detalhes
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Ver Todos os Projetos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}