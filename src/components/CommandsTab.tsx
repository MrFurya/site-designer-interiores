import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Terminal, Search, Copy } from "lucide-react";
import { useState } from "react";

export function CommandsTab() {
  const [searchTerm, setSearchTerm] = useState("");

  const commands = [
    { name: "/help", description: "Mostra todos os comandos disponíveis", category: "Geral" },
    { name: "/me", description: "Ação em primeira pessoa", category: "RP" },
    { name: "/do", description: "Ação em terceira pessoa", category: "RP" },
    { name: "/b", description: "Chat fora de personagem", category: "OOC" },
    { name: "/pm", description: "Mensagem privada para outro jogador", category: "Chat" },
    { name: "/admins", description: "Lista de administradores online", category: "Admin" },
    { name: "/report", description: "Reportar um jogador", category: "Admin" },
    { name: "/veh", description: "Spawnar veículo", category: "Admin" },
    { name: "/tpto", description: "Teleportar para jogador", category: "Admin" },
    { name: "/kick", description: "Expulsar jogador", category: "Admin" },
    { name: "/ban", description: "Banir jogador", category: "Admin" },
    { name: "/unban", description: "Desbanir jogador", category: "Admin" },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["Todos", "Geral", "RP", "OOC", "Chat", "Admin"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const displayCommands = selectedCategory === "Todos" 
    ? filteredCommands 
    : filteredCommands.filter(cmd => cmd.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Busca e Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            Comandos Disponíveis
          </CardTitle>
          <CardDescription>Lista de todos os comandos do servidor</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar comandos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lista de Comandos */}
      <div className="grid gap-3">
        {displayCommands.map((command) => (
          <Card key={command.name} className="hover:bg-accent/50 transition-colors">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm">{command.name}</code>
                    <Badge variant="secondary">{command.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{command.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(command.name)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {displayCommands.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground">Nenhum comando encontrado</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}