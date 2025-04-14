
import React from "react";

const difficulties = ["Fácil", "Médio", "Difícil", "Muito Difícil", "Expert"];

const operatingSystems = {
  linux: ["Ubuntu 20.04", "Debian 11", "CentOS 8", "Kali Linux", "Red Hat Enterprise Linux 8"],
  windows: ["Windows Server 2019", "Windows 10 Enterprise", "Windows Server 2016"],
};

const webServers = ["Apache 2.4", "Nginx 1.18", "IIS 10", "Tomcat 9"];
const databases = ["MySQL 8.0", "PostgreSQL 13", "MongoDB 4.4", "MSSQL 2019"];
const languages = ["PHP 7.4", "Python 3.9", "Java 11", "Node.js 14", ".NET Core 5"];

const generateTechnicalDetails = (category) => {
  const os = operatingSystems.linux[Math.floor(Math.random() * operatingSystems.linux.length)];
  const webServer = webServers[Math.floor(Math.random() * webServers.length)];
  const database = databases[Math.floor(Math.random() * databases.length)];
  const language = languages[Math.floor(Math.random() * languages.length)];

  const configurations = {
    "Subdomain Discovery": {
      os: os,
      services: [
        { name: "DNS Server", version: "BIND 9.16" },
        { name: webServer, ports: [80, 443] },
        { name: "Wildcard DNS", enabled: true },
        { name: "Virtual Hosts", count: "Multiple" }
      ],
      vulnerabilities: [
        "Misconfigured DNS",
        "Information Disclosure",
        "Zone Transfer"
      ],
      database,
      language
    },
    "SQL Injection": {
      os: os,
      services: [
        { name: webServer, ports: [80, 443] },
        { name: database, ports: [3306] },
        { name: language, version: "7.4" }
      ],
      vulnerabilities: [
        "Unvalidated User Input",
        "Weak Database Permissions",
        "Error Messages Exposed"
      ],
      database,
      language
    },
    "PHP Deserialization": {
      os: os,
      services: [
        { name: "Apache", version: "2.4.41" },
        { name: "PHP", version: "7.4.3" },
        { name: database, ports: [3306] }
      ],
      vulnerabilities: [
        "Unsafe Object Deserialization",
        "Magic Methods Exposed",
        "Weak File Permissions"
      ],
      database,
      language
    }
  };

  const config = configurations[category] || {
    os: os,
    services: [
      { name: webServer, ports: [80, 443] },
      { name: database, ports: [3306] },
      { name: language, version: "Latest" }
    ],
    vulnerabilities: [
      "Configuration Issues",
      "Access Control Problems",
      "Input Validation Flaws"
    ],
    database,
    language
  };

  return config;
};

const generateMachineContext = (category, company, difficulty, technicalDetails) => {
  const contexts = {
    "Subdomain Discovery": `A ${company} solicitou um teste de penetração em sua infraestrutura web. A empresa utiliza múltiplos subdomínios para diferentes serviços internos e externos. Sua missão é identificar subdomínios ocultos que possam conter vulnerabilidades. O ambiente inclui um servidor DNS mal configurado e possíveis problemas de vazamento de informações.`,
    "SQL Injection": `A ${company} desenvolveu um novo sistema de gestão financeira. O aplicativo web utiliza ${technicalDetails.database} como banco de dados e foi desenvolvido em ${technicalDetails.language}. Durante uma avaliação preliminar, foram identificados possíveis problemas de validação de entrada em formulários críticos.`,
    "PHP Deserialization": `O portal interno da ${company} utiliza um framework PHP customizado para gerenciamento de sessões e dados. A aplicação implementa serialização de objetos PHP para manter estado entre requisições. Sua tarefa é investigar possíveis vulnerabilidades na implementação da desserialização.`
  };

  return contexts[category] || `A ${company} nos contratou para realizar um teste de penetração em seu ambiente. Durante a avaliação inicial, identificamos uma possível vulnerabilidade relacionada a ${category}. O ambiente utiliza ${technicalDetails.language} com ${technicalDetails.database} e requer atenção especial na análise de segurança.`;
};

// Rest of the code remains unchanged...
const generateDetailedFlags = (category, difficulty, machineNumber, technicalDetails) => {
  const flags = [];
  const scenarios = {
    "Subdomain Discovery": [
      {
        description: "Encontre o subdomínio oculto usando técnicas de enumeração",
        hint: "Utilize ferramentas como gobuster dns ou subfinder. Verifique também por transferência de zona DNS.",
        technicalDetails: "O servidor DNS está executando BIND 9.16 com configurações padrão."
      },
      {
        description: "Identifique o serviço rodando no subdomínio descoberto",
        hint: "Realize um scan de portas no subdomínio descoberto. Analise os banners dos serviços.",
        technicalDetails: "Diversos serviços web estão rodando em portas não padrão."
      },
      {
        description: "Explore a vulnerabilidade no painel de administração",
        hint: "O painel admin pode ter credenciais padrão ou problemas de autenticação.",
        technicalDetails: "Painel admin rodando em admin.internal.[domínio]"
      },
      {
        description: "Obtenha acesso ao painel através da falha encontrada",
        hint: "Verifique por bypass de autenticação ou injeção SQL no login.",
        technicalDetails: "Sistema de login utiliza MySQL sem prepared statements"
      },
      {
        description: "Encontre credenciais expostas no servidor",
        hint: "Procure por arquivos de backup ou configuração expostos.",
        technicalDetails: "Arquivos .bak e .conf podem estar acessíveis"
      },
      {
        description: "Pivote para outro subdomínio interno",
        hint: "Use as credenciais encontradas para acessar outros sistemas.",
        technicalDetails: "Rede interna usa range 192.168.0.0/24"
      },
      {
        description: "Acesse dados sensíveis no servidor de backup",
        hint: "O servidor de backup pode ter configurações fracas de segurança.",
        technicalDetails: "Servidor de backup rodando em backup.internal.[domínio]"
      },
      {
        description: "Obtenha acesso root ao servidor principal",
        hint: "Procure por vulnerabilidades de escalação de privilégios.",
        technicalDetails: "Kernel Linux desatualizado com CVEs conhecidas"
      }
    ]
  };

  const defaultScenario = [
    {
      description: "Reconhecimento inicial do alvo",
      hint: "Realize um scan completo de portas e serviços.",
      technicalDetails: `Servidor rodando ${technicalDetails.os}`
    },
    {
      description: "Identificação da vulnerabilidade",
      hint: "Analise as versões dos serviços em execução.",
      technicalDetails: `Serviços principais: ${technicalDetails.services.map(s => s.name).join(', ')}`
    },
    {
      description: "Criação do exploit",
      hint: "Desenvolva um exploit específico para a vulnerabilidade encontrada.",
      technicalDetails: `Vulnerabilidades conhecidas: ${technicalDetails.vulnerabilities.join(', ')}`
    },
    {
      description: "Execução do exploit",
      hint: "Execute o exploit com cuidado para não danificar o sistema.",
      technicalDetails: "Sistema possui WAF e monitoring"
    },
    {
      description: "Pós-exploração inicial",
      hint: "Colete informações adicionais após o acesso inicial.",
      technicalDetails: "Diversos serviços internos disponíveis"
    },
    {
      description: "Escalação de privilégios",
      hint: "Procure por configurações fracas ou vulnerabilidades locais.",
      technicalDetails: "Permissões SUID misconfigured"
    },
    {
      description: "Movimento lateral na rede",
      hint: "Use as credenciais encontradas para acessar outros sistemas.",
      technicalDetails: "Rede segmentada em VLANs"
    },
    {
      description: "Comprometimento total",
      hint: "Obtenha acesso completo ao sistema e documente o processo.",
      technicalDetails: "Objetivo: Acesso root/SYSTEM"
    }
  ];

  const flagScenarios = scenarios[category] || defaultScenario;

  for (let i = 1; i <= 8; i++) {
    flags.push({
      id: i,
      description: flagScenarios[i - 1].description,
      hint: flagScenarios[i - 1].hint,
      technicalDetails: flagScenarios[i - 1].technicalDetails,
      completed: false,
      value: `flag{${category.toLowerCase().replace(/\s/g, "_")}_${difficulty.toLowerCase()}_${machineNumber}_${i}}`
    });
  }
  return flags;
};

const generateMachinesForCategory = (category, description) => {
  const machines = [];
  const companies = [
    "TechCorp Solutions",
    "SecureBank Financial",
    "HealthCare Plus",
    "E-commerce Pro",
    "CloudTech Services",
    "DataStore Inc",
    "WebApp Systems",
    "NetSec Solutions"
  ];

  difficulties.forEach(difficulty => {
    for (let i = 1; i <= 8; i++) {
      const company = companies[i - 1];
      const technicalDetails = generateTechnicalDetails(category);
      
      machines.push({
        id: `${category.toLowerCase().replace(/\s/g, "_")}_${difficulty.toLowerCase()}_${i}`,
        title: `${category} - ${company}`,
        description: `${description} (${difficulty})`,
        context: generateMachineContext(category, company, difficulty, technicalDetails),
        difficulty,
        category,
        technicalDetails: technicalDetails,
        flags: generateDetailedFlags(category, difficulty, i, technicalDetails),
        ip: `10.10.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        vpnConfig: `vpn-${category.toLowerCase().replace(/\s/g, "_")}-${difficulty.toLowerCase()}-${i}.ovpn`,
        hint: `Analise cuidadosamente como a aplicação processa os dados de entrada. Procure por pontos onde ${category.toLowerCase()} pode ser explorado.`,
        writeup: `# Passo a passo detalhado\n\n1. Reconhecimento inicial\n2. Identificação do vetor de ataque\n3. Desenvolvimento do exploit\n4. Exploração\n5. Pós-exploração`,
        currentFlag: 0,
        totalFlags: 8
      });
    }
  });
  return machines;
};

const machineCategories = {
  "Reconhecimento": {
    categories: [
      { name: "Subdomain Discovery", description: "Aprenda a descobrir e explorar subdomínios ocultos" },
      { name: "Application Discovery", description: "Identifique aplicações e serviços em execução" },
      { name: "Parameter Discovery", description: "Descubra parâmetros ocultos em aplicações web" },
      { name: "Content Discovery", description: "Encontre conteúdo não listado em aplicações" },
      { name: "Port scanning", description: "Aprenda técnicas avançadas de varredura de portas" },
      { name: "Git Exposed Attack", description: "Explore repositórios Git expostos" }
    ]
  }
};

const allMachines = [];
Object.entries(machineCategories).forEach(([mainCategory, { categories }]) => {
  categories.forEach(({ name, description }) => {
    allMachines.push(...generateMachinesForCategory(name, description));
  });
});

export { allMachines, machineCategories, difficulties };
