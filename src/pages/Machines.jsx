
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MachineCard from "@/components/MachineCard";
import { allMachines, machineCategories, difficulties } from "@/data/machines";

const Machines = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredMachines = useMemo(() => {
    return allMachines.filter(machine => {
      const matchesSearch = 
        machine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        machine.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "all" || 
        machine.category === selectedCategory;
      
      const matchesDifficulty = 
        selectedDifficulty === "all" || 
        machine.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">Laboratório de Máquinas</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar máquinas..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedDifficulty === "all" ? "default" : "outline"}
              onClick={() => setSelectedDifficulty("all")}
            >
              Todas Dificuldades
            </Button>
            {difficulties.map(difficulty => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`${
                  difficulty === "Fácil" ? "text-green-500" :
                  difficulty === "Médio" ? "text-yellow-500" :
                  difficulty === "Difícil" ? "text-orange-500" :
                  difficulty === "Muito Difícil" ? "text-red-500" :
                  "text-purple-500"
                }`}
              >
                {difficulty}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
            >
              Todas Categorias
            </Button>
            {Object.entries(machineCategories).map(([mainCategory, { categories }]) => (
              <div key={mainCategory} className="flex flex-wrap gap-2">
                {categories.map(({ name }) => (
                  <Button
                    key={name}
                    variant={selectedCategory === name ? "default" : "outline"}
                    onClick={() => setSelectedCategory(name)}
                  >
                    {name}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMachines.map((machine, index) => (
          <MachineCard key={machine.id} machine={machine} index={index} />
        ))}
      </div>

      {filteredMachines.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">
            Nenhuma máquina encontrada com os filtros atuais.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Machines;
