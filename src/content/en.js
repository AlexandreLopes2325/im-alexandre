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
      "Early-career developer focused on data and systems. I'm studying IT Management at SENAC and, since 2024, I've worked at a footwear e-commerce company, where I coordinate fulfillment operations and manage the TikTok Shop.",
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
    items: [
      {
        name: 'Operations Portal',
        problem:
          'Manuals, tools and returns were scattered across the team with no centralized access control.',
        solution:
          'A full-stack portal with 4 access levels, granular permissions per module and action, audit logs with IP tracking, a block-based manual editor with preview and drag-and-drop, a logo and template library, and a returns module integrated with marketplace APIs (OAuth2 with automatic token refresh and webhooks).',
        tech: ['Node.js', 'Express', 'PostgreSQL (Supabase)', 'React', 'Vite', 'Tailwind CSS', 'JWT', 'bcrypt'],
        link: 'https://github.com/AlexandreLopes2325/operations-portal',
        linkIsTodo: false,
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
      "One of my favorite parts of the Operations Portal is the data modeling itself. Below is the real database schema (PostgreSQL / Supabase), simplified only in how many columns are shown per table — no name is made up.",
    diagramCaption:
      'Real Operations Portal schema (database/schema.sql) — 11 tables, names and relations as they are in the database.',
    decisionsHeading: 'Modeling decisions',
    decisions: [
      {
        title: 'Fixed role + on-demand JSON permissions',
        text:
          "users.role holds one of 4 fixed levels (viewer, editor, admin, admin_master) via a CHECK constraint. Instead of building a separate permissions table for today's small team, the permissions column (jsonb, optional) lets that default be overridden per user — null means 'use the role's default'.",
      },
      {
        title: 'audit_logs with free-form JSON details',
        text:
          'audit_logs stores user_id, action, details (jsonb) and ip_address. user_id references users(id) ON DELETE SET NULL, so the audit trail survives even if the user account is later deleted.',
      },
      {
        title: 'Typed sections + custom_html as an escape hatch',
        text:
          'The manual editor stores ordered blocks in sections, with type restricted by a CHECK constraint (title, subtitle, text, alert, table, image, step, checklist, divider) and sort_order. But manuals.custom_html, when set, replaces the blocks entirely — a direct way out for pages that don\'t fit the block editor.',
      },
      {
        title: 'Channel as a natural key, reason as historical text',
        text:
          "return_reasons.channel and returns.channel reference return_channels(key) — not a numeric id — with ON UPDATE CASCADE. returns.reason, though, stores the reason's label as free text at the time of the return, so editing or deactivating a reason later doesn't rewrite history.",
      },
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        role: 'E-commerce Assistant',
        company: 'Footwear e-commerce company',
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
    phoneLabel: 'Phone',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footer: {
    rights: `© ${new Date().getFullYear()} Alexandre Lopes. All rights reserved.`,
    builtWith: 'Built with React, Vite and Tailwind CSS.',
  },
}
