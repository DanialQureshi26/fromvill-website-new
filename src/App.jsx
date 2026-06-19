import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardList,
  Code2,
  DatabaseZap,
  Eye,
  FileText,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MousePointer2,
  Network,
  Phone,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X,
  Youtube,
} from "lucide-react";

const logoFullPath = "/fromvill-logo.png";
const logoWordmarkPath = "/fromvill-wordmark.png";
const contactEmail = "danial@fromvill.com";
const whatsappLink = "https://wa.me/923304516902";

const routes = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Process", path: "/process" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

const legacyHashes = {
  "#home": "/",
  "#about": "/about",
  "#services": "/services",
  "#work": "/work",
  "#process": "/process",
  "#pricing": "/pricing",
  "#contact": "/contact",
};

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591104654906&mibextid=wwXIfr&mibextid=wwXIfr",
    type: "letter",
    icon: "f",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fromvill72?igsh=OGdrb3RjODNvYThn&utm_source=qr",
    Icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@fromvill_ai?si=g8m70FxgZqVcR7Fd",
    Icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/fromvill/",
    Icon: Linkedin,
  },
];

const services = [
  {
    title: "AI & Machine Learning",
    Icon: BrainCircuit,
    description:
      "Custom ML models, prediction systems, recommendation engines, classification tools, and intelligent decision support.",
  },
  {
    title: "Computer Vision",
    Icon: Eye,
    description:
      "Object detection, segmentation, image classification, defect detection, visual inspection, and real-time vision systems.",
  },
  {
    title: "Chatbots & AI Agents",
    Icon: Bot,
    description:
      "Business assistants, customer support bots, research assistants, scheduling agents, task agents, and workflow agents.",
  },
  {
    title: "NLP Solutions",
    Icon: FileText,
    description:
      "Document analysis, summarization, sentiment analysis, text classification, extraction, and language automation.",
  },
  {
    title: "Research & Publication Support",
    Icon: SearchCheck,
    description:
      "Literature reviews, manuscript preparation, data analysis, figures, tables, formatting, and publication-ready support.",
  },
  {
    title: "Web & App Development",
    Icon: Code2,
    description:
      "Modern websites, dashboards, app interfaces, landing pages, digital platforms, and responsive product experiences.",
  },
  {
    title: "Automation & Workflow Tools",
    Icon: Workflow,
    description:
      "Reporting systems, Google Sheets automation, email flows, data pipelines, and AI-powered productivity tools.",
  },
  {
    title: "Data Analysis & Visualization",
    Icon: BarChart3,
    description:
      "Data cleaning, statistical analysis, model evaluation, dashboards, reports, and research-ready visual outputs.",
  },
];

const agents = [
  {
    title: "Scheduling Agent",
    description: "Automates bookings, reminders, appointment workflows, and schedule optimization.",
    Icon: CalendarClock,
  },
  {
    title: "Tasking Agent",
    description: "Handles repetitive tasks, form processing, document flows, and team operations.",
    Icon: ClipboardList,
  },
  {
    title: "Navigator Agent",
    description: "Guides users, answers FAQs, routes requests, and supports customer journeys.",
    Icon: MousePointer2,
  },
  {
    title: "Outreach Agent",
    description: "Supports campaigns, follow-ups, reminders, lead outreach, and engagement workflows.",
    Icon: Send,
  },
];

const benefits = [
  "AI-first development approach",
  "Research-backed solutions",
  "Custom systems, not generic templates",
  "Fast and scalable deployment",
  "Clear communication",
  "End-to-end support from idea to launch",
];

const processSteps = [
  {
    title: "Discover",
    description: "We clarify the business problem, research need, audience, constraints, and technical goal.",
  },
  {
    title: "Design",
    description: "We map the architecture, user flow, model approach, data needs, and delivery roadmap.",
  },
  {
    title: "Develop",
    description: "We build the AI model, website, automation, chatbot, dashboard, or software workflow.",
  },
  {
    title: "Deploy",
    description: "We prepare the project for practical use with testing, hosting, optimization, and handoff.",
  },
  {
    title: "Support",
    description: "We improve, maintain, document, and extend the system as the requirements mature.",
  },
];

const projects = [
  {
    title: "Vision-Based Defect Detection System",
    category: "Computer Vision",
    client: "Construction inspection team",
    image: "/case-studies/vision-defect-detection.png",
    summary: "An AI inspection workflow for identifying visual defects from site images and turning them into review-ready findings.",
    challenge: "Manual image review made defect tracking slow, inconsistent, and difficult to scale across inspection batches.",
    solution: "Designed a computer vision pipeline with detection classes, image preprocessing, confidence filtering, and export-ready review outputs.",
    outcome: "Faster review cycles, clearer defect evidence, and a repeatable workflow for image-based quality checks.",
    tags: ["YOLO", "Computer Vision", "Inspection AI"],
  },
  {
    title: "Research Paper Automation Toolkit",
    category: "Research AI",
    client: "Academic research group",
    image: "/case-studies/research-paper-automation.png",
    summary: "A structured research assistant workflow for literature review, manuscript preparation, figures, tables, and formatting.",
    challenge: "The team needed a cleaner way to organize references, draft sections, prepare outputs, and reduce repetitive publication tasks.",
    solution: "Built an AI-supported toolkit for review notes, manuscript structure, table generation, figure planning, and formatting checkpoints.",
    outcome: "More organized writing sprints, reusable research assets, and faster preparation for publication-ready submissions.",
    tags: ["Research AI", "Automation", "Publication Support"],
  },
  {
    title: "Custom Business Support Agent",
    category: "AI Agents",
    client: "Service-based business",
    image: "/case-studies/business-support-agent.png",
    summary: "A chatbot and service-routing assistant that answers FAQs, qualifies requests, and guides customers to the next step.",
    challenge: "Customer questions were repetitive, response quality varied, and simple inquiries were taking time away from core operations.",
    solution: "Planned a guided AI agent flow with business-specific response logic, service routing, escalation paths, and WhatsApp-friendly actions.",
    outcome: "Cleaner customer intake, quicker answers for common questions, and a more professional first-touch support experience.",
    tags: ["LLM", "Chatbot", "Workflow Agent"],
  },
  {
    title: "ML Classification Dashboard",
    category: "Machine Learning",
    client: "Analytics and data team",
    image: "/case-studies/ml-classification-dashboard.png",
    summary: "A model evaluation dashboard for comparing classification results, metrics, and experiment performance.",
    challenge: "Model results were scattered across notebooks and files, making it hard to compare accuracy, errors, and deployment readiness.",
    solution: "Created a dashboard-style interface for model comparison, evaluation metrics, confusion insights, and experiment summaries.",
    outcome: "Clearer model selection, easier reporting, and a more repeatable evaluation process for machine learning experiments.",
    tags: ["ML", "Dashboard", "Model Evaluation"],
  },
  {
    title: "Smart Data Analysis System",
    category: "Data Science",
    client: "Operations reporting team",
    image: "/case-studies/smart-data-analysis.png",
    summary: "An automated analytics workflow for cleaning data, preparing charts, generating reports, and identifying useful trends.",
    challenge: "Reporting required repeated spreadsheet cleanup, manual charting, and time-consuming summary preparation.",
    solution: "Developed a data pipeline structure with cleaning steps, visual summaries, report-ready outputs, and repeatable analysis logic.",
    outcome: "Reduced manual reporting effort, improved consistency, and gave the team clearer data views for decision-making.",
    tags: ["Data Pipeline", "Visualization", "Reports"],
  },
  {
    title: "AI Website & Digital Platform",
    category: "Web Development",
    client: "AI-focused brand",
    image: "/case-studies/ai-website-platform.png",
    summary: "A responsive AI brand platform with modern navigation, service pages, conversion actions, and deployment-ready structure.",
    challenge: "The client needed a credible digital presence that explained technical services without overwhelming visitors.",
    solution: "Built a Vite React website with routed pages, 3D-inspired visuals, clean service structure, contact actions, and deployment assets.",
    outcome: "A faster, clearer, and more professional web presence ready for Vercel or static hosting workflows.",
    tags: ["React", "UI/UX", "Vercel Ready"],
  },
];

const packages = [
  {
    name: "Starter",
    summary: "For landing pages, basic automation, consultation, small research tasks, and simple websites.",
    button: "Get Started",
    features: ["Project consultation", "Lean build plan", "Responsive delivery"],
  },
  {
    name: "Professional",
    summary: "For AI models, chatbots, dashboards, research support, business websites, and automation tools.",
    button: "Discuss Project",
    featured: true,
    features: ["Custom AI workflow", "Dashboard-ready output", "Deployment guidance"],
  },
  {
    name: "Enterprise / Custom",
    summary: "For full AI systems, advanced automation, custom software, long-term support, and digital platforms.",
    button: "Request Custom Quote",
    features: ["Advanced architecture", "Ongoing improvement", "Priority support"],
  },
];

const testimonials = [
  {
    quote: "Fromvill helped us turn a rough idea into a working AI-powered workflow with clear communication.",
    name: "Client testimonial",
    role: "Editable placeholder",
  },
  {
    quote: "The team understood the research context and the technical execution, which made the solution practical.",
    name: "Research partner",
    role: "Editable placeholder",
  },
  {
    quote: "Our automation process became easier to manage, and the dashboard gave us clearer decisions.",
    name: "Business client",
    role: "Editable placeholder",
  },
];

const pageMeta = {
  "/": {
    title: "Fromvill | AI, Research & Development Solutions",
    description:
      "Fromvill builds AI systems, research workflows, automation tools, chatbots, dashboards, and modern digital products.",
  },
  "/about": {
    title: "About Fromvill | AI, Research & Innovation",
    description: "Learn about Fromvill's AI-first approach to research, automation, software, and digital product development.",
  },
  "/services": {
    title: "Fromvill Services | AI, Automation, Research & Development",
    description: "Explore Fromvill AI development, machine learning, chatbots, computer vision, NLP, research, and web services.",
  },
  "/work": {
    title: "Fromvill Work | AI Project Areas",
    description: "Selected Fromvill project areas across AI, computer vision, research automation, dashboards, and web platforms.",
  },
  "/process": {
    title: "Fromvill Process | From Idea to Intelligent System",
    description: "Fromvill's delivery process for discovery, design, development, deployment, and ongoing support.",
  },
  "/pricing": {
    title: "Fromvill Pricing | Flexible Project Packages",
    description: "Flexible Fromvill packages for AI, automation, research, websites, dashboards, and custom software.",
  },
  "/contact": {
    title: "Contact Fromvill | Build Something Intelligent",
    description: "Contact Fromvill for AI development, research support, automation tools, chatbots, and digital products.",
  },
};

function getCurrentPath() {
  if (legacyHashes[window.location.hash]) {
    return legacyHashes[window.location.hash];
  }

  const path = window.location.pathname === "/index.html" ? "/" : window.location.pathname;
  return routes.some((route) => route.path === path) ? path : "/";
}

function useRouter() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    if (legacyHashes[window.location.hash]) {
      window.history.replaceState({}, "", legacyHashes[window.location.hash]);
    }

    const syncPath = () => setPath(getCurrentPath());
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  useEffect(() => {
    const meta = pageMeta[path] || pageMeta["/"];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  }, [path]);

  const navigate = (to) => {
    if (to === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { path, navigate };
}

function handleInternalClick(event, to, navigate) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
    return;
  }

  event.preventDefault();
  navigate(to);
}

function LogoMark({ compact = false, onNavigate }) {
  return (
    <a
      className={`brand-logo ${compact ? "brand-logo--compact" : ""}`}
      href="/"
      aria-label="Fromvill home"
      onClick={(event) => handleInternalClick(event, "/", onNavigate)}
    >
      <img src={logoWordmarkPath} alt="Fromvill logo" />
    </a>
  );
}

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? "social-links--compact" : ""}`}>
      {socialLinks.map(({ label, href, Icon, type, icon }) => (
        <a key={label} href={href} aria-label={label} title={label} target="_blank" rel="noreferrer">
          {type === "letter" ? <span>{icon}</span> : <Icon size={18} strokeWidth={2} />}
        </a>
      ))}
    </div>
  );
}

function Header({ activePath, navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (event, to) => {
    setOpen(false);
    handleInternalClick(event, to, navigate);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-shell">
        <LogoMark compact onNavigate={navigate} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className={activePath === route.path ? "is-active" : ""}
              onClick={(event) => go(event, route.path)}
            >
              {route.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button button--small button--ghost" href="/contact" onClick={(event) => go(event, "/contact")}>
            <CalendarClock size={16} />
            <span>Book a Call</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {routes.map((route) => (
          <a
            key={route.path}
            href={route.path}
            className={activePath === route.path ? "is-active" : ""}
            onClick={(event) => go(event, route.path)}
          >
            {route.label}
          </a>
        ))}
        <a className="button button--primary" href="/contact" onClick={(event) => go(event, "/contact")}>
          <CalendarClock size={17} />
          <span>Book a Call</span>
        </a>
        <SocialLinks />
      </div>
    </header>
  );
}

function ThreeDScene({ compact = false }) {
  return (
    <div className={`scene-3d ${compact ? "scene-3d--compact" : ""}`} aria-label="Fromvill 3D AI visual">
      <div className="scene-grid" />
      <div className="logo-disc">
        <img src={logoFullPath} alt="Fromvill logo" />
      </div>
      <div className="orbital-ring orbital-ring--one" />
      <div className="orbital-ring orbital-ring--two" />
      <div className="scene-card scene-card--one">
        <BrainCircuit size={20} />
        <span>AI Models</span>
      </div>
      <div className="scene-card scene-card--two">
        <Network size={20} />
        <span>Agents</span>
      </div>
      <div className="scene-card scene-card--three">
        <DatabaseZap size={20} />
        <span>Automation</span>
      </div>
    </div>
  );
}

function HomePage({ navigate }) {
  const featured = services.slice(0, 4);

  return (
    <>
      <section className="home-hero">
        <div className="hero-surface" />
        <ThreeDScene />
        <div className="container hero-content">
          <div className="eyebrow">
            <Sparkles size={17} />
            <span>Fromvill AI / Research / Innovation</span>
          </div>
          <h1>Engineering AI Architectures for Intelligent Automation and Research.</h1>
          <p>
            Fromvill helps businesses, researchers, startups, and professionals turn ideas into AI workflows,
            automation tools, chatbots, dashboards, and modern web products.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="/contact" onClick={(event) => handleInternalClick(event, "/contact", navigate)}>
              <ArrowRight size={18} />
              <span>Start a Project</span>
            </a>
            <a className="button button--light" href="/services" onClick={(event) => handleInternalClick(event, "/services", navigate)}>
              <Layers3 size={18} />
              <span>View Services</span>
            </a>
            <a className="button button--whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <section className="home-preview section-shell">
        <div className="container">
          <div className="preview-heading">
            <span>Focused Capabilities</span>
            <h2>Less scrolling. Clearer paths.</h2>
            <p>Use the menu pages for detail. The home page now stays concise and directs clients to the right area.</p>
          </div>
          <div className="preview-grid">
            {featured.map(({ title, description, Icon }) => (
              <article className="preview-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="route-cards">
            <RouteCard title="Services" text="Explore AI, automation, research, web, and data services." to="/services" navigate={navigate} />
            <RouteCard title="Work" text="Review selected project areas and implementation examples." to="/work" navigate={navigate} />
            <RouteCard title="Process" text="See how an idea becomes a usable intelligent system." to="/process" navigate={navigate} />
          </div>
        </div>
      </section>

      <CtaBand navigate={navigate} />
    </>
  );
}

function AboutPage() {
  return (
    <PageLayout
      eyebrow="About Fromvill"
      title="Advanced AI thinking, shaped into practical business and research systems."
      description="Fromvill bridges the gap between research-grade AI ideas and real-world digital execution."
    >
      <div className="split-panel">
        <div className="text-panel">
          <h2>Built for useful outcomes.</h2>
          <p>
            Fromvill helps clients transform ideas into intelligent systems, whether the goal is a chatbot, ML model,
            research project, automation workflow, dashboard, or complete web platform.
          </p>
          <p>
            The approach combines technical development, research thinking, and business-focused problem solving. Every
            project is designed to be useful, scalable, and ready for real-world impact.
          </p>
        </div>
        <div className="logo-showcase">
          <img src={logoFullPath} alt="Fromvill logo" />
        </div>
      </div>
      <SectionHeader eyebrow="Why Choose Fromvill" title="A clear technical partner for AI projects." />
      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit}>
            <Check size={18} />
            <h3>{benefit}</h3>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function ServicesPage() {
  return (
    <PageLayout
      eyebrow="Services"
      title="AI, Research & Development Services"
      description="Choose the capability area that matches your current project. Each service can be scoped as a focused task or a complete build."
    >
      <div className="service-grid">
        {services.map(({ title, description, Icon }) => (
          <article className="service-card" key={title}>
            <div className="icon-box">
              <Icon size={25} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <SectionHeader eyebrow="AI Agents" title="AI Agents Built for Real Work" />
      <div className="agent-grid">
        {agents.map(({ title, description, Icon }) => (
          <article className="agent-card" key={title}>
            <Icon size={25} />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function WorkPage({ navigate }) {
  return (
    <PageLayout
      eyebrow="Work"
      title="Client Case Studies & Project Outcomes"
      description="A closer look at Fromvill-style project work across AI products, research workflows, analytics systems, and digital platforms."
    >
      <div className="case-study-grid">
        {projects.map((project, index) => (
          <article className="case-study-card" key={project.title}>
            <div className="case-study-image">
              <span className="case-study-number">{String(index + 1).padStart(2, "0")}</span>
              <img src={project.image} alt={`${project.title} case study visual`} loading="lazy" />
            </div>
            <div className="case-study-content">
              <div className="case-study-copy">
                <div className="case-study-meta">
                  <span>{project.category}</span>
                  <small>{project.client}</small>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
                <a className="text-button" href="/contact" onClick={(event) => handleInternalClick(event, "/contact", navigate)}>
                  <span>Plan Similar Build</span>
                  <ChevronRight size={17} />
                </a>
              </div>
              <div className="case-study-details">
                <div>
                  <strong>Challenge</strong>
                  <p>{project.challenge}</p>
                </div>
                <div>
                  <strong>Solution</strong>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <strong>Outcome</strong>
                  <p>{project.outcome}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function ProcessPage() {
  return (
    <PageLayout
      eyebrow="Process"
      title="From Idea to Intelligent System"
      description="A structured delivery path for turning rough ideas into practical AI, research, automation, and software outcomes."
    >
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article className="process-step" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function PricingPage({ navigate }) {
  return (
    <PageLayout
      eyebrow="Pricing"
      title="Flexible Packages for Different Needs"
      description="Exact pricing depends on scope, complexity, timeline, and required support."
    >
      <div className="pricing-grid">
        {packages.map((plan) => (
          <article className={`pricing-card ${plan.featured ? "is-featured" : ""}`} key={plan.name}>
            <span>Contact for Quote</span>
            <h3>{plan.name}</h3>
            <p>{plan.summary}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a className="button button--primary" href="/contact" onClick={(event) => handleInternalClick(event, "/contact", navigate)}>
              {plan.button}
            </a>
          </article>
        ))}
      </div>
      <SectionHeader eyebrow="Testimonials" title="Editable client proof blocks" />
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.quote}>
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function ContactPage() {
  return (
    <PageLayout
      eyebrow="Contact"
      title="Let's Build Something Intelligent Together"
      description="Tell Fromvill what you want to build, automate, analyze, or publish."
    >
      <div className="contact-layout contact-layout--single">
        <div className="contact-panel contact-panel--center">
          <div>
            <h2>Project contact</h2>
            <p>Share the goal, timeline, and service area through email or WhatsApp. A clear brief makes the next step faster.</p>
          </div>
          <div className="contact-panel__content">
            <div className="contact-list">
              <a href={`mailto:${contactEmail}`}>
                <Mail size={19} />
                <span>{contactEmail}</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <Phone size={19} />
                <span>+923304516902</span>
              </a>
              <div>
                <MapPin size={19} />
                <span>Lahore, Punjab</span>
              </div>
            </div>
            <div className="contact-actions">
              <a className="button button--whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function PageLayout({ eyebrow, title, description, children }) {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-grid">
          <div>
            <div className="eyebrow">
              <Sparkles size={17} />
              <span>{eyebrow}</span>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <ThreeDScene compact />
        </div>
      </section>
      <section className="page-content">
        <div className="container">{children}</div>
      </section>
    </main>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-header">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function RouteCard({ title, text, to, navigate }) {
  return (
    <a className="route-card" href={to} onClick={(event) => handleInternalClick(event, to, navigate)}>
      <h3>{title}</h3>
      <p>{text}</p>
      <ArrowRight size={18} />
    </a>
  );
}

function CtaBand({ navigate }) {
  return (
    <section className="cta-band">
      <div className="container cta-grid">
        <div>
          <span>Ready when you are</span>
          <h2>Start with a focused project brief.</h2>
        </div>
        <a className="button button--primary" href="/contact" onClick={(event) => handleInternalClick(event, "/contact", navigate)}>
          Contact Fromvill
        </a>
      </div>
    </section>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <LogoMark onNavigate={navigate} />
          <p>AI / Research / Innovation</p>
          <span>Modern AI systems, research workflows, automation tools, dashboards, and digital products.</span>
          <SocialLinks />
        </div>
        <div>
          <h3>Pages</h3>
          {routes.map((route) => (
            <a key={route.path} href={route.path} onClick={(event) => handleInternalClick(event, route.path, navigate)}>
              {route.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 6).map((service) => (
            <a key={service.title} href="/services" onClick={(event) => handleInternalClick(event, "/services", navigate)}>
              {service.title}
            </a>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            +923304516902
          </a>
          <span>Lahore, Punjab</span>
          <a className="footer-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Fromvill. All rights reserved.</span>
        <a href="https://fromvill.com" target="_blank" rel="noreferrer">
          fromvill.com
        </a>
      </div>
    </footer>
  );
}

function App() {
  const { path, navigate } = useRouter();

  const page = useMemo(() => {
    switch (path) {
      case "/about":
        return <AboutPage />;
      case "/services":
        return <ServicesPage />;
      case "/work":
        return <WorkPage navigate={navigate} />;
      case "/process":
        return <ProcessPage />;
      case "/pricing":
        return <PricingPage navigate={navigate} />;
      case "/contact":
        return <ContactPage />;
      default:
        return (
          <main>
            <HomePage navigate={navigate} />
          </main>
        );
    }
  }, [path, navigate]);

  return (
    <>
      <Header activePath={path} navigate={navigate} />
      {page}
      <Footer navigate={navigate} />
    </>
  );
}

export default App;
