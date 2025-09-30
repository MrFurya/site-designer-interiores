import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Server, Users, Activity, Clock } from "lucide-react";

export function HomeTab() {
  return (
    <div className="space-y-6">
      {/* Status do Servidor */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="w-5 h-5" />
            Status do Servidor
          </CardTitle>
          <CardDescription>Informações em tempo real do servidor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl text-green-500 mb-1">128</div>
              <div className="text-sm text-muted-foreground">Jogadores Online</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-blue-500 mb-1">256</div>
              <div className="text-sm text-muted-foreground">Máximo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-yellow-500 mb-1">32ms</div>
              <div className="text-sm text-muted-foreground">Ping Médio</div>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="text-green-500">Online</Badge>
              <div className="text-sm text-muted-foreground mt-1">Status</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Informações do Jogador */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Seu Perfil
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4>Nome</h4>
              <p className="text-muted-foreground">Jogador_123</p>
            </div>
            <div>
              <h4>ID</h4>
              <p className="text-muted-foreground">#12345</p>
            </div>
            <div>
              <h4>Tempo Online</h4>
              <p className="text-muted-foreground">2h 45m</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Atividade Recente */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Atividade Recente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Conectou ao servidor</span>
              <Badge variant="secondary" className="ml-auto">2h atrás</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Executou comando /help</span>
              <Badge variant="secondary" className="ml-auto">1h atrás</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Entrou no veículo</span>
              <Badge variant="secondary" className="ml-auto">30m atrás</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}