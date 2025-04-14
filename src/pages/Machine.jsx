
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Terminal, Flag, HelpCircle, FileText, Network, Download, Copy, CheckCircle } from "lucide-react";
import { allMachines } from "@/data/machines";

const Machine = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [flag, setFlag] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showWriteup, setShowWriteup] = useState(false);
  const [vpnStatus, setVpnStatus] = useState("disconnected");
  const [copied, setCopied] = useState(false);

  const machine = allMachines.find(m => m.id === id);

  useEffect(() => {
    if (!machine) {
      toast({
        title: "Erro",
        description: "Máquina não encontrada",
        variant: "destructive"
      });
      navigate("/machines");
    }
  }, [machine, navigate, toast]);

  if (!machine) {
    return null;
  }

  const handleFlagSubmit = (e) => {
    e.preventDefault();
    const currentFlagObj = machine.flags[machine.currentFlag];
    
    if (flag.trim() === currentFlagObj?.value) {
      toast({
        title: "Parabéns!",
        description: "Flag correta! Você desbloqueou o próximo desafio.",
      });
      currentFlagObj.completed = true;
      machine.currentFlag += 1;
      setFlag("");
    } else {
      toast({
        title: "Incorreto",
        description: "Esta não é a flag correta. Tente novamente!",
        variant: "destructive"
      });
    }
  };

  const handleVPNDownload = () => {
    toast({
      title: "Download Iniciado",
      description: "O arquivo de configuração VPN está sendo baixado.",
    });
  };

  const handleIPCopy = () => {
    navigator.clipboard.writeText(machine.ip);
    setCopied(true);
    toast({
      title: "IP Copiado",
      description: "O IP da máquina foi copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVPNConnect = () => {
    setVpnStatus("connecting");
    setTimeout(() => {
      setVpnStatus("connected");
      toast({
        title: "VPN Conectada",
        description: "Você está conectado à rede da máquina.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border border-border p-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">{machine.title}</h1>
            <p className="text-muted-foreground mt-2">{machine.description}</p>
            <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-semibold mb-2">Contexto do Desafio</h3>
              <p className="text-sm text-muted-foreground">{machine.context}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={handleIPCopy}
              className="w-full sm:w-auto"
            >
              {copied ? (
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              {machine.ip}
            </Button>
            <Button
              variant="outline"
              onClick={handleVPNDownload}
              className="w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4" />
              Download VPN
            </Button>
            <Button
              variant={vpnStatus === "connected" ? "outline" : "default"}
              onClick={handleVPNConnect}
              disabled={vpnStatus === "connecting"}
              className="w-full sm:w-auto"
            >
              <Network className="mr-2 h-4 w-4" />
              {vpnStatus === "connected" ? "Conectado" : "Conectar VPN"}
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-secondary p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Informações da Máquina</h3>
              <p className="text-muted-foreground">Dificuldade: {machine.difficulty}</p>
              <p className="text-muted-foreground">Categoria: {machine.category}</p>
              <p className="text-muted-foreground">
                Progresso: {machine.currentFlag}/{machine.totalFlags} flags
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Flags Disponíveis</h3>
              {machine.flags.map((flag) => (
                <div
                  key={flag.id}
                  className="bg-secondary/50 p-4 rounded-lg border border-border"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">Flag {flag.id}</h4>
                      <p className="text-sm text-muted-foreground">{flag.description}</p>
                    </div>
                    {flag.completed && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleFlagSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold">Submeter Flag</h3>
              <div className="flex gap-2">
                <Input
                  value={flag}
                  onChange={(e) => setFlag(e.target.value)}
                  placeholder="flag{...}"
                  className="font-mono"
                />
                <Button type="submit">
                  <Flag className="mr-2 h-4 w-4" />
                  Enviar
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => setShowHint(!showHint)}
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              {showHint ? "Ocultar Dica" : "Mostrar Dica"}
            </Button>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-secondary p-4 rounded-lg"
              >
                <p className="text-muted-foreground">{machine.hint}</p>
              </motion.div>
            )}

            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => setShowWriteup(!showWriteup)}
            >
              <FileText className="mr-2 h-4 w-4" />
              {showWriteup ? "Ocultar Writeup" : "Mostrar Writeup"}
            </Button>
            {showWriteup && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-secondary p-4 rounded-lg"
              >
                <pre className="whitespace-pre-wrap text-sm text-muted-foreground">
                  {machine.writeup}
                </pre>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Machine;
