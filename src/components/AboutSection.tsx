import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Heart, Lightbulb } from "lucide-react";

export function AboutSection() {
  const achievements = [
    {
      icon: Award,
      title: "Certificações",
      description: "CAU/SP - Conselho de Arquitetura e Urbanismo"
    },
    {
      icon: Users,
      title: "Especialização",
      description: "Design de Interiores Residencial e Comercial"
    },
    {
      icon: Heart,
      title: "Filosofia",
      description: "Ambientes que contam histórias e geram bem-estar"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Soluções criativas e sustentáveis"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1714575600356-6635434699f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBhcmNoaXRlY3QlMjB3b3JraW5nfGVufDF8fHx8MTc1OTE2NTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gleiciane Oliveira Hamilka trabalhando"
              className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
            />
            
            {/* Decorative quote */}
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-sm italic">"Cada projeto é uma oportunidade de criar algo único e especial"</p>
              <p className="text-xs mt-2 opacity-90">- Gleiciane Hamilka</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-amber-600 border-amber-600">
                Sobre a Arquiteta
              </Badge>
              <h2 className="text-3xl lg:text-4xl text-gray-900">
                Gleiciane Oliveira Hamilka
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Com mais de 8 anos de experiência em arquitetura e design de interiores, dedico-me a criar espaços que vão além da estética, priorizando a funcionalidade e o bem-estar dos usuários.
                </p>
                <p>
                  Formada em Arquitetura e Urbanismo, especializo-me em projetos residenciais e comerciais que refletem a personalidade e necessidades específicas de cada cliente. Minha abordagem combina técnica apurada, criatividade e atenção aos detalhes.
                </p>
                <p>
                  Acredito que um bom projeto de interiores deve contar a história de quem habita o espaço, criando ambientes acolhedores, funcionais e esteticamente harmoniosos.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="text-gray-900 mb-1">{achievement.title}</h4>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h4 className="text-gray-900">Especialidades</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Design Residencial",
                  "Projetos Comerciais", 
                  "Reforma e Revitalização",
                  "Consultoria em Decoração",
                  "Projetos Sustentáveis",
                  "Design de Móveis"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}