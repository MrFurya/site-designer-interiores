import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Linkedin
} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99999-9999",
      description: "WhatsApp disponível"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@gleicianehamila.com.br",
      description: "Resposta em até 24h"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      description: "Atendimento em toda Grande SP"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex: 9h às 18h",
      description: "Sáb: 9h às 14h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            Contato
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900">
            Vamos Conversar Sobre Seu Projeto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entre em contato para agendar uma consulta e começarmos a transformar seus ambientes em espaços únicos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Solicite um Orçamento
              </CardTitle>
              <p className="text-gray-600">
                Preencha o formulário e receba uma proposta personalizada para seu projeto.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-gray-700 mb-2">
                    Tipo de Serviço
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="design-residencial">Design Residencial</option>
                    <option value="design-comercial">Design Comercial</option>
                    <option value="consultoria">Consultoria em Decoração</option>
                    <option value="marcenaria">Projeto de Marcenaria</option>
                    <option value="3d">Projeto 3D e Renderização</option>
                    <option value="sustentavel">Design Sustentável</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Descreva seu Projeto
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me mais sobre seu projeto, suas necessidades e expectativas..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                  <Send className="mr-2 w-5 h-5" />
                  Enviar Solicitação
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Seus dados estão protegidos. Entramos em contato em até 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-gray-600">{info.value}</p>
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h4 className="text-gray-900 mb-4">Siga nas Redes Sociais</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Acompanhe meus projetos e dicas de decoração
                </p>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h4 className="text-gray-900 mb-2">Atendimento Rápido</h4>
                <p className="text-gray-600 mb-4">
                  Precisa de uma resposta rápida? Entre em contato via WhatsApp!
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}