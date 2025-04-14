
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Network, Download, Flag, Terminal } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const difficultyColors = {
  "Fácil": "text-green-500",
  "Médio": "text-yellow-500",
  "Difícil": "text-orange-500",
  "Muito Difícil": "text-red-500",
  "Expert": "text-purple-500"
};

const MachineCard = ({ machine, index }) => {
  const { toast } = useToast();

  const handleVPNDownload = (e, vpnConfig) => {
    e.preventDefault();
    toast({
      title: "Download VPN",
      description: "Iniciando download da configuração VPN...",
    });
  };

  const handleIPCopy = (e, ip) => {
    e.preventDefault();
    navigator.clipboard.writeText(ip);
    toast({
      title: "IP Copiado",
      description: "IP copiado para a área de transferência",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card-hover glass-effect rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h3 className="text-xl font-bold text-gradient">{machine.title}</h3>
            <span className="text-sm text-muted-foreground">{machine.category}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[machine.difficulty]} bg-secondary`}>
          {machine.difficulty}
        </span>
      </div>
      
      <p className="text-muted-foreground mb-6 line-clamp-2">{machine.description}</p>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Flag className="h-4 w-4 text-primary" />
            <span>{machine.flags.length} flags</span>
          </div>
          <div className="flex items-center space-x-2">
            <Terminal className="h-4 w-4 text-primary" />
            <span>{machine.technicalDetails.os}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className="w-full hover:bg-primary/10"
            onClick={(e) => handleIPCopy(e, machine.ip)}
          >
            <Network className="mr-2 h-4 w-4" />
            {machine.ip}
          </Button>
          <Button
            variant="outline"
            className="w-full hover:bg-primary/10"
            onClick={(e) => handleVPNDownload(e, machine.vpnConfig)}
          >
            <Download className="mr-2 h-4 w-4" />
            VPN
          </Button>
        </div>

        <Link to={`/machines/${machine.id}`} className="block">
          <Button className="w-full bg-primary hover:bg-primary/90">
            Iniciar Máquina
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default MachineCard;
