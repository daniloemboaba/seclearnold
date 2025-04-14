
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Trump ordena investigação federal contra ex-diretor da CIA, Chris Kerbs",
    date: "11 Abr 2025",
    category: "Notícias",
    description: "O ex-presidente Donald Trump ordenou uma investigação federal contra Christopher Krebs, ex-diretor da CISA...",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/00851b56-2538-4db0-a65e-3b9bc68eb5c7/cb904f4df6a031769c2515d7ef452050.png",
    tags: ["política", "cibersegurança", "investigação"]
  },
  {
    id: 2,
    title: "Documento judicial revela plano de ataque do spyware Pegasus no...",
    date: "10 Abr 2025",
    category: "Malware",
    description: "Um documento judicial recentemente divulgado revela detalhes sobre um sofisticado plano de ataque utilizando o spyware Pegasus...",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/00851b56-2538-4db0-a65e-3b9bc68eb5c7/d4cf96dd6eee2563ea939e2e3159d7b5.png",
    tags: ["malware", "pegasus", "espionagem"]
  },
  {
    id: 3,
    title: "AVISO: The BEGINNING e MOONBURST: malwares móveis usam Android e...",
    date: "09 Abr 2025",
    category: "Malware",
    description: "Dois novos malwares móveis foram identificados atacando dispositivos Android e iOS...",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/00851b56-2538-4db0-a65e-3b9bc68eb5c7/fb51e8f06f138e55bb7cd1647efdbdf1.png",
    tags: ["android", "ios", "malware"]
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gradient">Últimas Notícias</h1>
          <div className="relative w-64">
            <Input
              placeholder="Buscar artigos..."
              className="bg-[#0D1A1F] border-[#52D1B2]/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="bg-[#0D1A1F] rounded-lg overflow-hidden border border-[#52D1B2]/20 hover:border-[#52D1B2]/50 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-[#B0B0B0]">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {post.category}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white group-hover:text-[#52D1B2] transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-[#B0B0B0]">{post.description}</p>
                    
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-[#52D1B2]/10 text-[#52D1B2]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                page === 1
                  ? "bg-[#52D1B2] text-white"
                  : "bg-[#0D1A1F] text-[#B0B0B0] hover:bg-[#52D1B2]/20"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
