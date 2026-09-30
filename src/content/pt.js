export default {
  meta: {
    title: 'Alexandre Lopes — Desenvolvedor Júnior | Dados & Sistemas',
    description:
      'Portfólio de Alexandre Lopes, desenvolvedor júnior com foco em SQL, PostgreSQL, Node.js e React. Modelagem de dados, automação e sistemas internos.',
  },
  nav: {
    skills: 'Habilidades',
    projects: 'Projetos',
    database: 'Banco de Dados',
    experience: 'Experiência',
    certifications: 'Certificações',
    contact: 'Contato',
    langToggleLabel: 'Idioma',
  },
  hero: {
    eyebrow: 'Portfólio',
    name: 'Alexandre Lopes',
    title: 'Desenvolvedor Júnior | SQL e PostgreSQL | Python, Node.js e React | Automação e Sistemas de Dados',
    tagline:
      'Eu penso em dados antes de pensar em telas: modelo a estrutura primeiro, depois construo a interface em cima dela.',
    ctaProjects: 'Ver projetos',
    ctaLinkedin: 'LinkedIn',
    ctaGithub: 'GitHub',
    ctaCv: 'Baixar CV',
  },
  about: {
    heading: 'Sobre',
    paragraphs: [
      'Desenvolvedor em início de carreira, com foco em dados e sistemas. Estudo Gestão da Tecnologia da Informação no SENAC e, desde 2024, trabalho na Mellone (e-commerce de calçados), onde coordeno a expedição e gerencio o TikTok Shop.',
      'Foi ali que aprendi a decidir com base em dado real e a lidar com operação de volume. Em paralelo, transformo problemas reais do trabalho em software: construí do zero um portal operacional interno (Node.js, Express, React e PostgreSQL no Supabase) com autenticação JWT, permissões por módulo, logs de auditoria e integração com APIs de marketplaces (OAuth2 e webhooks).',
      'O que me move: organizar informação, modelar dados e automatizar tarefas repetitivas. Atualmente estudando inglês e Azure (AZ-900).',
    ],
  },
  skills: {
    heading: 'Habilidades',
    groups: [
      {
        title: 'Dados e Banco de Dados',
        items: ['SQL', 'PostgreSQL', 'Supabase', 'Modelagem de Dados'],
      },
      {
        title: 'Backend',
        items: ['Node.js', 'Express', 'APIs REST', 'JWT / Autenticação'],
      },
      {
        title: 'Frontend',
        items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
      },
      {
        title: 'Ferramentas',
        items: ['Python', 'Git / GitHub', 'Linux', 'Scrum'],
      },
      {
        title: 'Idiomas',
        items: ['Português (nativo)', 'Inglês (em desenvolvimento)'],
      },
    ],
  },
  projects: {
    heading: 'Projetos',
    intro: 'Problemas reais, resolvidos com software.',
    linkLabel: 'Repositório',
    linkTodoLabel: 'Repositório (em breve)',
    items: [
      {
        name: 'Operations Portal',
        problem:
          'Manuais, ferramentas e devoluções espalhados sem controle de acesso centralizado.',
        solution:
          'Portal full-stack com 4 níveis de acesso, permissões granulares por módulo e ação, logs de auditoria com IP, editor de manuais em blocos com preview e arrastar-e-soltar, biblioteca de logos e templates, e módulo de devoluções com integrações a APIs de marketplaces (OAuth2 com refresh automático e webhooks).',
        tech: ['Node.js', 'Express', 'PostgreSQL (Supabase)', 'React', 'Vite', 'Tailwind CSS', 'JWT', 'bcrypt'],
        link: 'TODO: link do repositório (privado ou público)',
        linkIsTodo: true,
      },
      {
        name: 'EAN Extractor',
        problem:
          'Extrair EAN, referência, modelo/cor e tamanho de XML de nota fiscal era manual e lento.',
        solution:
          'Aplicação web que lê o XML e aplica regras de leitura por formato de fornecedor, com testes automatizados. Processamento 100% local, direto no navegador.',
        tech: ['React', 'Vite', 'JavaScript'],
        link: 'TODO: link do repositório',
        linkIsTodo: true,
      },
      {
        name: 'Tá Anotado',
        problem: 'Precisava de uma lista de tarefas pessoal simples, fora do navegador.',
        solution: 'Aplicativo desktop de lista de tarefas, feito com Electron.',
        tech: ['Electron', 'JavaScript'],
        link: 'TODO: link do repositório',
        linkIsTodo: true,
      },
      {
        name: 'Desenha aí',
        problem: 'Faltava uma forma rápida de montar diagramas e fluxogramas simples.',
        solution: 'Editor de diagramas e fluxogramas em React, construído sobre React Flow.',
        tech: ['React', 'React Flow'],
        link: 'TODO: link do repositório (incluir somente se o repositório for público)',
        linkIsTodo: true,
      },
    ],
  },
  database: {
    heading: 'Banco de Dados',
    eyebrow: 'Diferencial',
    intro:
      'Uma das partes do Operations Portal que mais gosto é a modelagem dos dados. Abaixo está uma versão simplificada e fictícia do esquema, para mostrar como penso a estrutura antes da tela.',
    diagramCaption:
      'Modelo simplificado do Operations Portal (nomes de tabela genéricos, sem dados reais).',
    decisionsHeading: 'Decisões de modelagem',
    decisions: [
      {
        title: 'Permissões por módulo e ação',
        text:
          'Em vez de um único campo de "cargo", as permissões ficam em uma tabela própria, ligando papel (role), módulo e ação (ler, criar, editar, excluir) por uma tabela de junção. Isso permite ajustar o acesso sem alterar código.',
      },
      {
        title: 'Logs de auditoria com IP',
        text:
          'Toda ação sensível gera um registro de auditoria com usuário, ação, tabela/registro afetado, IP de origem e data/hora — importante para rastrear mudanças em um sistema com múltiplos níveis de acesso.',
      },
      {
        title: 'Bloco de conteúdo como lista tipada',
        text:
          'O editor de manuais não guarda um texto único: cada manual é uma lista ordenada de blocos tipados (texto, imagem, passo numerado), cada um com sua posição. Isso viabiliza o editor com preview e arrastar-e-soltar.',
      },
      {
        title: 'Motivos de devolução configuráveis por canal',
        text:
          'Cada canal de venda tem suas próprias regras de devolução, então os motivos ficam em uma tabela configurável associada ao canal, em vez de uma lista fixa no código.',
      },
    ],
  },
  experience: {
    heading: 'Experiência',
    items: [
      {
        role: 'Assistente de E-commerce',
        company: 'Mellone',
        period: 'jul/2024 — atual',
        description:
          'Coordenação da expedição, gestão do TikTok Shop, desenvolvimento do portal operacional interno e de automações, padronização de descrições de produtos e tabelas de medidas.',
      },
    ],
  },
  education: {
    heading: 'Formação',
    items: [
      {
        degree: 'Gestão da Tecnologia da Informação',
        institution: 'SENAC (EAD)',
        period: 'fev/2024 — previsão 2027',
      },
    ],
  },
  certifications: {
    heading: 'Certificações',
    items: [
      {
        name: 'Scrum Fundamentals Certified (SFC)',
        issuer: 'ScrumStudy',
        date: 'fev/2024',
        status: 'concluido',
      },
      {
        name: 'Gestão de Desempenho',
        issuer: 'Qulture.Rocks',
        date: '2024',
        status: 'concluido',
      },
      {
        name: 'AZ-900: Microsoft Azure Fundamentals',
        issuer: 'Microsoft',
        date: null,
        status: 'em_preparacao',
      },
    ],
    statusLabels: {
      concluido: 'Concluído',
      em_preparacao: 'Em preparação',
    },
  },
  contact: {
    heading: 'Contato',
    intro: 'Aberto a oportunidades na área de dados e desenvolvimento.',
    emailLabel: 'E-mail',
    emailTodo: 'TODO: adicionar endereço de e-mail',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footer: {
    rights: `© ${new Date().getFullYear()} Alexandre Lopes. Todos os direitos reservados.`,
    builtWith: 'Construído com React, Vite e Tailwind CSS.',
  },
}
