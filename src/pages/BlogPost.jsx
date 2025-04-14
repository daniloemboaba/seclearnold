
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = {
  1: {
    title: "Introdução ao Reconhecimento em Pentest",
    date: "08 Abr 2025",
    category: "Reconhecimento",
    tags: ["pentest", "recon", "osint"],
    content: `
      <div class="prose prose-invert max-w-none">
        <p class="lead">
          O reconhecimento é a fase mais crucial de um teste de penetração. É durante esta etapa que coletamos informações valiosas sobre nosso alvo, que serão fundamentais para as fases posteriores do pentest.
        </p>

        <h2>Importância do Reconhecimento</h2>
        <p>
          Um reconhecimento bem executado pode ser a diferença entre um teste de penetração bem-sucedido e um que falha em identificar vulnerabilidades críticas. Durante esta fase, buscamos compreender:
        </p>
        
        <ul>
          <li>Infraestrutura do alvo</li>
          <li>Tecnologias utilizadas</li>
          <li>Possíveis vetores de ataque</li>
          <li>Superfície de ataque exposta</li>
        </ul>

        <img  alt="Diagrama de Reconhecimento" class="my-8 rounded-lg w-full" src="https://images.unsplash.com/photo-1687794079217-c877ba6aae84" />

        <h2>Técnicas Principais</h2>
        <p>
          Existem diversas técnicas que podemos utilizar durante a fase de reconhecimento. Vamos explorar as principais:
        </p>

        <h3>1. OSINT (Open Source Intelligence)</h3>
        <p>
          A coleta de informações através de fontes públicas é fundamental. Utilizamos:
        </p>
        
        <img  alt="OSINT Tools" class="my-8 rounded-lg w-full" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />

        <h3>2. Enumeração de Subdomínios</h3>
        <p>
          Identificar subdomínios pode revelar sistemas e aplicações não documentados:
        </p>
        
        <pre class="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
          subfinder -d exemplo.com
          amass enum -d exemplo.com
          assetfinder exemplo.com
        </pre>

        <h3>3. Varredura de Portas</h3>
        <p>
          A identificação de serviços expostos é crucial:
        </p>

        <img  alt="Port Scanning" class="my-8 rounded-lg w-full" src="https://images.unsplash.com/photo-1554699802-b54d95006c00" />

        <h2>Ferramentas Essenciais</h2>
        <p>
          Algumas ferramentas indispensáveis para reconhecimento incluem:
        </p>

        <ul>
          <li>Nmap - Varredura de portas e serviços</li>
          <li>Subfinder - Descoberta de subdomínios</li>
          <li>Amass - Mapeamento de superfície de ataque</li>
          <li>Shodan - Busca por dispositivos expostos</li>
        </ul>

        <h2>Conclusão</h2>
        <p>
          O reconhecimento é uma arte que requer paciência e metodologia. Quanto mais informações coletarmos nesta fase, maiores serão nossas chances de sucesso nas etapas seguintes do pentest.
        </p>
      </div>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <div>Artigo não encontrado</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <Link to="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Blog
          </Button>
        </Link>

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold neon-text">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {post.category}
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose-container"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </div>
  );
};

export default BlogPost;
