import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      location: "Moema, SP",
      rating: 5,
      comment: "Gleiciane transformou completamente nosso apartamento. O resultado superou todas as expectativas! Ela conseguiu entender exatamente o que queríamos e criou um ambiente acolhedor e funcional.",
      project: "Apartamento 150m²"
    },
    {
      name: "João Santos", 
      role: "Médico",
      location: "Jardins, SP",
      rating: 5,
      comment: "Profissional excepcional! O projeto do consultório ficou incrível, muito bem pensado para o fluxo de pacientes. Gleiciane é detalhista e muito criativa.",
      project: "Consultório Médico"
    },
    {
      name: "Ana Costa",
      role: "Advogada",
      location: "Vila Madalena, SP", 
      rating: 5,
      comment: "A reforma da nossa casa foi um sucesso total. Gleiciane soube otimizar cada espaço e criar ambientes únicos. Recomendo sem dúvidas!",
      project: "Casa 200m²"
    },
    {
      name: "Carlos Oliveira",
      role: "Arquiteto",
      location: "Pinheiros, SP",
      rating: 5,
      comment: "Como colega de profissão, posso afirmar que Gleiciane tem um olhar único para design. O projeto do nosso escritório ficou sensacional.",
      project: "Escritório Corporativo"
    },
    {
      name: "Patricia Lima",
      role: "Designer",
      location: "Alphaville, SP",
      rating: 5,
      comment: "Gleiciane conseguiu capturar nossa essência e transformar em um projeto incrível. Cada detalhe foi pensado com carinho e precisão.",
      project: "Apartamento Duplex"
    },
    {
      name: "Roberto Ferreira",
      role: "Empresário",
      location: "Itaim Bibi, SP",
      rating: 5,
      comment: "Excelente profissional! O projeto da nossa loja aumentou significativamente o movimento. Design funcional e atrativo para os clientes.",
      project: "Loja Comercial"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            Depoimentos
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900">
            O Que Dizem Meus Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A satisfação dos clientes é minha maior recompensa. Veja o que eles têm a dizer sobre nossos projetos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Project */}
                <div className="pt-2">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.project}
                  </Badge>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-amber-100 text-amber-700">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-amber-600 mb-2">150+</div>
              <div className="text-gray-600">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-3xl text-amber-600 mb-2">100%</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl text-amber-600 mb-2">8+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl text-amber-600 mb-2">50+</div>
              <div className="text-gray-600">Indicações Recebidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}