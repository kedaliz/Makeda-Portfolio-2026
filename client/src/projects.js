export const featuredProjects = [
  {
    _id: 'meme-generator',
    title: 'Meme Generator',
    description: 'A browser-based web app for creating and customizing memes quickly.',
    imageUrl: '/images/meme-generator-cover.webp',
    altText: 'Meme Generator interface with controls for adding text to a meme template.',
    technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
    problem: 'Many meme-making tools are cluttered with ads and do not provide a simple real-time editing experience.',
    role: 'I built the front-end logic and interface using React, focusing on a clean responsive layout and instant text rendering.',
    result: 'Created a lightweight meme tool that supports quick customization and sharing.',
    githubUrl: 'https://github.com/kedaliz/meme-generator',
    liveUrl: 'https://meme-generator-quum8gtzy-kedalizs-projects.vercel.app/',
  },
  {
    _id: 'apple-fest',
    title: 'Apple Fest',
    description: 'A live event website experience for the Apple Harvest Festival.',
    imageUrl: '/images/apple-fest-cover.webp',
    altText: 'Apple Fest website showing information for festival visitors.',
    technologies: ['React', 'Vite', 'Render'],
    problem: 'Large festivals often rely on static or difficult-to-navigate websites that are hard to use on mobile during the event.',
    role: 'I designed the information hierarchy and mobile-first experience for schedules, maps, directions, vendors, and event information.',
    result: 'Created a centralized digital hub for festival attendees.',
    githubUrl: 'https://github.com/kedaliz/apple-fest',
    liveUrl: 'https://apple-fest.onrender.com/',
  },
  {
    _id: 'community-events',
    title: 'Community Events Directory',
    description: 'A full-stack MERN application for discovering local gatherings, managing events, and tracking RSVPs in one community-centered experience.',
    imageUrl: '/images/communityimage.webp',
    altText: 'Community Events Directory website displaying its community event discovery interface.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    problem: 'Local community groups struggle to manage RSVPs and event visibility across fragmented social platforms.',
    role: 'I developed the full-stack MERN architecture, designed the database schema, and built a personalized user dashboard.',
    result: 'Built a functional ecosystem with RSVP tracking and event categorization to make local gatherings easier to discover.',
    githubUrl: 'https://github.com/kedaliz/Community-Events.git',
    liveUrl: 'https://community-events-v5rb.onrender.com',
  },
  {
    _id: 'gymling-gym',
    title: 'Gymling Gym',
    team: 'INFO 3450 group project',
    audience: 'New gym users at Cornell’s Noyes Fitness Center',
    prototypeUrl: 'https://www.figma.com/proto/9OKq6DH2Zxlj85XFYgzZlC?node-id=0-1&t=OekQi37yc4lgE8sg-6',
    figmaUrl: 'https://www.figma.com/design/9OKq6DH2Zxlj85XFYgzZlC/a4-group-prototype?m=auto&t=OekQi37yc4lgE8sg-6',
    process: [
      { title: 'Research & synthesis', text: 'I conducted interviews and contextual inquiry, then synthesized research using affinity mapping and a mind map. These activities helped frame the experience around new users’ needs rather than assuming familiarity with the gym.' },
      { title: 'User needs & scope', text: 'The project focuses on helping new users find equipment, understand how to use it, and feel more comfortable getting started. The concept combines navigation, equipment guidance, onboarding, and progress-based motivation.' },
      { title: 'Flows & information architecture', text: 'The experience brings together onboarding, a 2D aerial view of the gym, equipment guidance, and interactive modals. Spatial navigation responds to the challenge of finding unfamiliar equipment; form guides address uncertainty about how to use it.' },
      { title: 'Prototyping & evaluation', text: 'The team moved from paper and low-fidelity exploration to a high-fidelity Figma prototype. Iterative usability testing helped refine onboarding and interactive UI modals.' },
      { title: 'Reflection', text: 'The work highlights the value of connecting research, spatial navigation, and practical guidance when designing for an unfamiliar environment. The prototype is a design concept, not evidence of a deployed AR system.' },
    ],
    artifacts: [
      { title: 'Research synthesis & affinity diagram', description: 'Individual research board used to organize and synthesize the research.', url: 'https://www.figma.com/board/XcQQ78uFVYsny6oOcoJu3T/Makeda-A3-Individual?t=OekQi37yc4lgE8sg-6' },
      { title: 'Mind map', description: 'A project mind map for exploring the problem space and connections between ideas.', url: 'https://www.figma.com/board/6cMqnK5g77uaEZv3U59MjS/a4-video-mindmap?t=OekQi37yc4lgE8sg-6' },
      { title: 'Final prototype', description: 'Explore the group’s interactive mobile prototype and its proposed gym experience.', url: 'https://www.figma.com/proto/9OKq6DH2Zxlj85XFYgzZlC?node-id=0-1&t=OekQi37yc4lgE8sg-6' },
      { title: 'Prototype design file', description: 'The group Figma file containing the prototype design work.', url: 'https://www.figma.com/design/9OKq6DH2Zxlj85XFYgzZlC/a4-group-prototype?m=auto&t=OekQi37yc4lgE8sg-6' },
    ],
    course: 'INFO 3450',
    description: 'A mobile fitness and AR companion app designed to reduce gym intimidation at Cornell’s Noyes Fitness Center through spatial navigation, equipment form guides, and gamified progression.',
    technologies: ['Figma', 'User Research', 'HCI Prototyping', 'AR'],
    problem: 'New gym users can feel overwhelmed by unfamiliar equipment, confusing layouts, and uncertainty about how to get started.',
    role: 'I conducted interviews, contextual inquiries, and iterative usability testing while designing onboarding flows, spatial navigation, equipment guidance, and interactive UI modals.',
    result: 'Created a high-fidelity prototype that makes the gym feel more approachable through visual guidance and progress-based motivation.',
  },
  {
    _id: 'bi-learning-analytics',
    title: 'BI Learning Analytics Dashboard',
    team: 'INFO 4100 · Team R',
    audience: 'Instructors and students using clicker data',
    process: [
      { title: 'User requirements', text: 'Instructors need a view of engagement and performance patterns; students need private, actionable feedback on their own progress. These two audiences require different views of the same learning context.' },
      { title: 'Dashboard planning & information architecture', text: 'The team organized the experience into instructor and student views. I contributed to views that use summary metrics and comparative visualizations to make the data easier to interpret.' },
      { title: 'Visualization decisions', text: 'Attendance-versus-performance analysis and sentiment trends support the instructor perspective. Student views include quiz comparisons, weak-area analysis, and recommended next-step resources.' },
      { title: 'Reflection', text: 'Designing for both audiences underscores the importance of choosing information and comparisons that fit each user’s decisions, while considering the privacy of student feedback.' },
    ],
    course: 'INFO 4100, Team R',
    description: 'A two-sided R Shiny dashboard that helps instructors understand clicker engagement and helps students reflect on quiz performance.',
    technologies: ['R Shiny', 'R', 'ggplot2', 'Learning Analytics'],
    problem: 'Instructors need a clear way to identify engagement and performance patterns in clicker data, while students need private, actionable feedback about their progress.',
    role: 'I worked on the Team R project to design instructor and student dashboard views with summary metrics and comparative visualizations.',
    result: 'The dashboard includes attendance-versus-performance analysis, sentiment trends, student quiz comparisons, weak-area analysis, and recommended next-step resources.',
  },
  {
    _id: 'housing-transparency',
    title: 'Collegetown Off-Campus Housing Transparency Platform',
    team: 'INFO 4125 · Team 5',
    audience: 'Cornell undergraduates searching for off-campus housing',
    process: [
      { title: 'Research synthesis & stakeholder needs', text: 'The team explored the information gaps students face when comparing rentals. Research synthesis and affinity mapping helped frame the product around costs, conditions, landlord responsiveness, and other factors that affect housing decisions.' },
      { title: 'Scope & requirements', text: 'The concept covers Collegetown, Cayuga Heights, and Downtown. Its scope is to bring rental information into one place so students can compare options before signing a lease, rather than relying on fragmented sources.' },
      { title: 'Information architecture & priorities', text: 'Search, filters, an interactive map, and favorites support discovery. Property scorecards bring rent, fees, safety, cleanliness, and maintenance information together for comparison. Reviews, anonymous surveys, contact details, and a verified FAQ support additional context.' },
      { title: 'Prototyping & evaluation', text: 'The team developed low-fidelity explorations and a high-fidelity Figma concept, then evaluated the prototype. The project’s targets of 25 reviews across 10 properties and 85% satisfaction were goals, not reported results.' },
      { title: 'Reflection', text: 'Housing comparisons depend on more than a listed rent: clear costs and reliable information about conditions can help students make better-informed decisions. The concept’s effectiveness depends on the availability and quality of that information.' },
    ],
    artifacts: [
      { title: 'High-fidelity housing design', description: 'Explore the team’s Figma design for the housing transparency concept.', url: 'https://www.figma.com/design/UWUZiCPq12OEhWXGSmUkQL/INFO-4215-Group-5-Solution?node-id=0-1&p=f&t=GhUAfedwUQzIFQ21-0' },
    ],
    course: 'INFO 4125',
    description: 'A product concept for Cornell undergraduates that makes off-campus rental searches clearer, safer, and easier to compare.',
    technologies: ['UX Research', 'Figma', 'Product Scoping', 'System Design'],
    problem: 'Cornell students often sign leases without reliable information about total costs, housing conditions, landlord responsiveness, safety, cleanliness, or maintenance quality. This disproportionately affects lower-income, international, and disabled students.',
    role: 'As part of Team 5, I contributed to the research and product design for a centralized housing platform covering Collegetown, Cayuga Heights, and Downtown.',
    result: 'Designed and evaluated a prototype intended to help students compare housing options before signing a lease. The project targeted at least 25 reviews across 10 properties and an 85% user-satisfaction goal.',
    features: ['Interactive map', 'Search and filters', 'Favorites', 'Property scorecards', 'Anonymous surveys', 'Reviews', 'Contact details', 'Verified FAQ', 'Rent and fee comparison', 'Safety and maintenance information'],
    githubUrl: 'https://github.com/kedaliz/-the-info-4125-project',
    figmaUrl: 'https://www.figma.com/design/UWUZiCPq12OEhWXGSmUkQL/INFO-4215-Group-5-Solution?node-id=0-1',
  },
  {
    _id: 'creative-business-analysis',
    title: 'Post-Pandemic Creative Business Longevity Analysis',
    audience: 'Readers interested in creative-industry recovery and business longevity',
    process: [
      { title: 'Data & preparation', text: 'The analysis uses municipal business registry datasets for Los Angeles creative industries. I cleaned and wrangled the data before exploring post-pandemic longevity.' },
      { title: 'Analysis & reproducibility', text: 'I used R, Tidyverse, and Tidymodels for the data workflow and modeling, documenting the analysis in Quarto so the work could be reproduced.' },
      { title: 'Reflection & limitations', text: 'Registry data offers a structured view of business longevity but cannot by itself explain every reason a business survives or closes. Interpreting the analysis requires attention to what the source data can and cannot show.' },
    ],
    course: 'INFO 2951',
    description: 'A reproducible analysis of municipal business registry data exploring post-pandemic survival trends across Los Angeles creative industries.',
    technologies: ['R', 'Tidyverse', 'Tidymodels', 'Quarto'],
    problem: 'Creative businesses experienced uneven recovery after the pandemic, making it important to understand which industries and communities were most resilient.',
    role: 'I cleaned, wrangled, and modeled municipal business registry datasets using a reproducible Quarto workflow.',
    result: 'Published data-driven findings about longevity trends in Los Angeles creative industries.',
  },
  {
    _id: 'info-4340',
    title: 'INFO 4340 Project',
    course: 'INFO 4340',
    description: 'An Information Science project demonstrating research, product thinking, and applied technical work from INFO 4340.',
    technologies: [],
  },
];

const normalize = (value) => typeof value === 'string' ? value.trim().toLowerCase().replace(/\/+$/, '').replace(/\.git$/, '') : '';

export const projectRoute = (project) => `#/work/${encodeURIComponent(project._id)}`;

export const findProjectByRoute = (projects, route) =>
  projects.find((project) => projectRoute(project) === route);

export function mergeProjects(apiProjects) {
  if (!Array.isArray(apiProjects)) {
    throw new TypeError('Expected an array of API projects');
  }

  const projects = featuredProjects.map((project) => ({ ...project }));
  const seenIds = new Set(projects.map((project) => project._id));

  for (const project of apiProjects) {
    if (!project || typeof project !== 'object' || !project._id || !project.title) {
      console.error('Skipping invalid API project:', project);
      continue;
    }

    const match = projects.find((item) =>
      normalize(item.title) === normalize(project.title) ||
      (normalize(project.githubUrl) && normalize(item.githubUrl) === normalize(project.githubUrl)) ||
      (normalize(project.liveUrl) && normalize(item.liveUrl) === normalize(project.liveUrl))
    );

    if (match) {
      Object.assign(match, { ...project, ...match });
    } else {
      const id = `api-${project._id}`;
      if (seenIds.has(id)) {
        console.error('Skipping duplicate API project ID:', project._id);
        continue;
      }
      seenIds.add(id);
      projects.push({ ...project, _id: id });
    }
  }

  return projects;
}
