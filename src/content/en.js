export default {
  meta: {
    title: 'Alexandre Lopes — Junior Developer | Data & Systems',
    description:
      'Portfolio of Alexandre Lopes, a junior developer focused on SQL, PostgreSQL, Node.js and React. Data modeling, automation and internal systems.',
  },
  nav: {
    skills: 'Skills',
    projects: 'Projects',
    database: 'Database',
    experience: 'Experience',
    certifications: 'Certifications',
    contact: 'Contact',
    langToggleLabel: 'Language',
  },
  hero: {
    eyebrow: 'Portfolio',
    name: 'Alexandre Lopes',
    title: 'Junior Developer | SQL & PostgreSQL | Python, Node.js & React | Data Workflows & Automation',
    tagline:
      "I think in data before I think in screens: I model the structure first, then build the interface on top of it.",
    ctaProjects: 'View projects',
    ctaLinkedin: 'LinkedIn',
    ctaGithub: 'GitHub',
    ctaCv: 'Download CV',
  },
  about: {
    heading: 'About',
    paragraphs: [
      "Early-career developer focused on data and systems. I'm studying IT Management at SENAC and, since 2024, I've worked at Mellone (footwear e-commerce), where I coordinate fulfillment operations and manage the TikTok Shop.",
      "That's where I learned to make decisions based on real data and to handle high-volume operations. On the side, I turn real workplace problems into software: I built an internal operations portal from scratch (Node.js, Express, React and PostgreSQL on Supabase) with JWT authentication, module-level permissions, audit logs and marketplace API integrations (OAuth2 and webhooks).",
      'What drives me: organizing information, modeling data and automating repetitive work. Currently studying English and Azure (AZ-900).',
    ],
  },
  skills: {
    heading: 'Skills',
    groups: [
      {
        title: 'Data & Databases',
        items: ['SQL', 'PostgreSQL', 'Supabase', 'Data Modeling'],
      },
      {
        title: 'Backend',
        items: ['Node.js', 'Express', 'REST APIs', 'JWT / Authentication'],
      },
      {
        title: 'Frontend',
        items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
      },
      {
        title: 'Tools',
        items: ['Python', 'Git / GitHub', 'Linux', 'Scrum'],
      },
      {
        title: 'Languages',
        items: ['Portuguese (native)', 'English (developing)'],
      },
    ],
  },
  projects: {
    heading: 'Projects',
    intro: 'Real problems, solved with software.',
    linkLabel: 'Repository',
    linkTodoLabel: 'Repository (coming soon)',
    items: [
      {
        name: 'Operations Portal',
        problem:
          'Manuals, tools and returns were scattered across the team with no centralized access control.',
        solution:
          'A full-stack portal with 4 access levels, granular permissions per module and action, audit logs with IP tracking, a block-based manual editor with preview and drag-and-drop, a logo and template library, and a returns module integrated with marketplace APIs (OAuth2 with automatic token refresh and webhooks).',
        tech: ['Node.js', 'Express', 'PostgreSQL (Supabase)', 'React', 'Vite', 'Tailwind CSS', 'JWT', 'bcrypt'],
        link: 'TODO: repository link (private or public)',
        linkIsTodo: true,
      },
      {
        name: 'EAN Extractor',
        problem:
          'Extracting EAN, reference, model/color and size from invoice XML files was a slow, manual process.',
        solution:
          'A web app that reads the XML and applies parsing rules per supplier format, with automated tests. Everything runs locally in the browser.',
        tech: ['React', 'Vite', 'JavaScript'],
        link: 'TODO: repository link',
        linkIsTodo: true,
      },
      {
        name: 'Tá Anotado',
        problem: 'Needed a simple personal to-do list app outside the browser.',
        solution: 'A desktop to-do list app built with Electron.',
        tech: ['Electron', 'JavaScript'],
        link: 'TODO: repository link',
        linkIsTodo: true,
      },
      {
        name: 'Desenha aí',
        problem: 'Needed a quick way to put together simple diagrams and flowcharts.',
        solution: 'A diagram and flowchart editor built in React, on top of React Flow.',
        tech: ['React', 'React Flow'],
        link: 'TODO: repository link (only include if the repository is public)',
        linkIsTodo: true,
      },
    ],
  },
  database: {
    heading: 'Database',
    eyebrow: 'What sets me apart',
    intro:
      "One of my favorite parts of the Operations Portal is the data modeling itself. Below is a simplified, fictional version of the schema, to show how I think about structure before the screen.",
    diagramCaption:
      'Simplified model of the Operations Portal (generic table names, no real data).',
    decisionsHeading: 'Modeling decisions',
    decisions: [
      {
        title: 'Permissions per module and action',
        text:
          "Instead of a single flat 'role' field, permissions live in their own table, linking a role, a module and an action (read, create, edit, delete) through a join table. That makes access adjustable without touching code.",
      },
      {
        title: 'Audit logs with IP tracking',
        text:
          'Every sensitive action creates an audit record with the user, the action, the affected table/record, the source IP and a timestamp — important for tracing changes in a system with multiple access levels.',
      },
      {
        title: 'Content blocks as a typed list',
        text:
          "The manual editor doesn't store one big text field: each manual is an ordered list of typed blocks (text, image, numbered step), each with its own position. That's what makes the drag-and-drop preview editor possible.",
      },
      {
        title: 'Return reasons configurable per channel',
        text:
          'Each sales channel has its own return rules, so return reasons live in a configurable table tied to the channel, instead of a fixed list hardcoded in the app.',
      },
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        role: 'E-commerce Assistant',
        company: 'Mellone',
        period: 'Jul 2024 — Present',
        description:
          'Coordinating fulfillment operations, managing the TikTok Shop, building the internal operations portal and related automations, and standardizing product descriptions and size charts.',
      },
    ],
  },
  education: {
    heading: 'Education',
    items: [
      {
        degree: 'IT Management',
        institution: 'SENAC (online)',
        period: 'Feb 2024 — expected 2027',
      },
    ],
  },
  certifications: {
    heading: 'Certifications',
    items: [
      {
        name: 'Scrum Fundamentals Certified (SFC)',
        issuer: 'ScrumStudy',
        date: 'Feb 2024',
        status: 'completed',
      },
      {
        name: 'Performance Management',
        issuer: 'Qulture.Rocks',
        date: '2024',
        status: 'completed',
      },
      {
        name: 'AZ-900: Microsoft Azure Fundamentals',
        issuer: 'Microsoft',
        date: null,
        status: 'in_progress',
      },
    ],
    statusLabels: {
      completed: 'Completed',
      in_progress: 'In preparation',
    },
  },
  contact: {
    heading: 'Contact',
    intro: 'Open to opportunities in data and software development.',
    emailLabel: 'Email',
    emailTodo: 'TODO: add email address',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footer: {
    rights: `© ${new Date().getFullYear()} Alexandre Lopes. All rights reserved.`,
    builtWith: 'Built with React, Vite and Tailwind CSS.',
  },
}
