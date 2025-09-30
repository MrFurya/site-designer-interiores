import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { History, MessageCircle, AlertTriangle, Shield, User } from "lucide-react";

export function HistoryTab() {
  const historyItems = [
    {
      id: 1,
      type: "chat",
      icon: MessageCircle,
      user: "Jogador_123",
      action: "Enviou mensagem no chat global",
      content: "Olá pessoal, alguém quer fazer RP?",
      timestamp: "14:30",
      severity: "info"
    },
    {
      id: 2,
      type: "command",
      icon: Shield,
      user: "Admin_Pedro",
      action: "Executou comando /kick",
      content: "Jogador expulso por spam",
      timestamp: "14:25",
      severity: "warning"
    },
    {
      id: 3,
      type: "connect",
      icon: User,
      user: "Novato_456",
      action: "Conectou ao servidor",
      content: "",
      timestamp: "14:20",
      severity: "success"
    },
    {
      id: 4,
      type: "violation",
      icon: AlertTriangle,
      user: "Jogador_789",
      action: "Violação detectada",
      content: "Possível uso de hack detectado",
      timestamp: "14:15",
      severity: "error"
    },
    {
      id: 5,
      type: "chat",
      icon: MessageCircle,
      user: "Moderador_Ana",
      action: "Enviou aviso global",
      content: "Lembrem-se de seguir as regras do servidor!",
      timestamp: "14:10",
      severity: "info"
    },
    {
      id: 6,
      type: "command",
      icon: Shield,
      user: "Admin_Carlos",
      action: "Executou comando /ban",
      content: "Jogador banido por 24h - RDM",
      timestamp: "14:05",
      severity: "error"
    },
    {
      id: 7,
      type: "connect",
      icon: User,
      user: "VetPlayer_999",
      action: "Desconectou do servidor",
      content: "",
      timestamp: "14:00",
      severity: "info"
    },
    {
      id: 8,
      type: "chat",
      icon: MessageCircle,
      user: "Helper_João",
      action: "Respondeu dúvida no /n",
      content: "Para conseguir trabalho, vá até a prefeitura",
      timestamp: "13:55",
      severity: "info"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "error": return "text-red-500";
      case "warning": return "text-yellow-500";
      case "success": return "text-green-500";
      default: return "text-blue-500";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "error": return "destructive";
      case "warning": return "secondary";
      case "success": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-5 h-5" />
            Histórico do Servidor
          </CardTitle>
          <CardDescription>Atividades e eventos recentes do servidor</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {historyItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 ${getSeverityColor(item.severity)}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm">{item.user}</span>
                          <Badge variant={getSeverityBadge(item.severity) as any} className="text-xs">
                            {item.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground ml-auto">{item.timestamp}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{item.action}</p>
                        {item.content && (
                          <div className="bg-muted/50 rounded p-2 mt-2">
                            <p className="text-xs">{item.content}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Estatísticas do Histórico */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-4">
            <div className="text-center">
              <div className="text-2xl text-blue-500 mb-1">156</div>
              <div className="text-sm text-muted-foreground">Conexões Hoje</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-center">
              <div className="text-2xl text-green-500 mb-1">89</div>
              <div className="text-sm text-muted-foreground">Comandos Executados</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-center">
              <div className="text-2xl text-yellow-500 mb-1">12</div>
              <div className="text-sm text-muted-foreground">Avisos Dados</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-center">
              <div className="text-2xl text-red-500 mb-1">3</div>
              <div className="text-sm text-muted-foreground">Punições</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}