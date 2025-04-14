
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Terminal, Award, Network } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aprenda Segurança na Prática
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Pratique habilidades de hacking ético em ambientes reais e seguros
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/machines">
            <Button size="lg" className="text-lg">
              Começar Agora
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-lg bg-card border border-border"
        >
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ambientes Reais</h3>
          <p className="text-muted-foreground">
            Pratique em máquinas que simulam ambientes corporativos reais
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-lg bg-card border border-border"
        >
          <Terminal className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Aprenda na Prática</h3>
          <p className="text-muted-foreground">
            Resolva desafios práticos e capture flags em diferentes níveis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-lg bg-card border border-border"
        >
          <Network className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Conexão VPN</h3>
          <p className="text-muted-foreground">
            Acesse as máquinas de forma segura através de nossa VPN dedicada
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
