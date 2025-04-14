
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Calendar, ChevronRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Put It to Work: Prepare for Cybersecurity Jobs",
    date: "3 de ago de 2024",
    status: "Aprovado",
    url: "#"
  },
  {
    id: 2,
    title: "Automate Cybersecurity Tasks with Python",
    date: "3 de ago de 2024",
    status: "Aprovado",
    url: "#"
  },
  {
    id: 3,
    title: "Sound the Alarm: Detection and Response",
    date: "3 de ago de 2024",
    status: "Aprovado",
    url: "#"
  },
  {
    id: 4,
    title: "Assets, Threats, and Vulnerabilities",
    date: "3 de ago de 2024",
    status: "Aprovado",
    url: "#"
  },
  {
    id: 5,
    title: "Tools of the Trade: Linux and SQL",
    date: "3 de ago de 2024",
    status: "Aprovado",
    url: "#"
  },
  {
    id: 6,
    title: "Connect and Protect: Networks and Network Security",
    date: "3 de ago de 2024",
    status: "Aprovado",
    url: "#"
  },
  {
    id: 7,
    title: "Play It Safe: Manage Security Risks",
    date: "3 de ago de 2024",
    status: "Aprovado",
    url: "#"
  },
  {
    id: 8,
    title: "Foundations of Cybersecurity",
    date: "3 de ago de 2024",
    status: "Aprovado",
    url: "#"
  }
];

const About = () => {
  return (
    <div className="space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold neon-text">
          LearningOldCyber
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Estudando CyberSecurity aos 36 anos, transformando experiência em expertise
          na área de segurança da informação.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certificações
          </h2>
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 rounded-lg hover:neon-border"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gradient">{cert.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Sobre Mim
          </h2>
          <div className="glass-card p-6 rounded-lg space-y-4">
            <p className="text-muted-foreground">
              Iniciei minha jornada na área de Cybersecurity com determinação e paixão
              por aprender. Através de cursos especializados e prática constante,
              venho desenvolvendo habilidades em:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                Ethical Hacking e Pentest
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                Análise de Vulnerabilidades
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                Segurança de Redes
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                Automação com Python
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary" />
                Linux e SQL
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
