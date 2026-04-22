import { useState, useEffect, useRef } from "react";
import "./App.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiPython,
  SiPostman,
  SiVercel,
  SiGoogleanalytics,
  SiGithub,
  SiUpwork,
} from "react-icons/si";
import CLP from "./assets/calmlinewelnessPortfolio.png";
import JBP from "./assets/JbeautyloungePortfolio.png";
import ECP from "./assets/ecomercewebPortfolio.png";
import REP from "./assets/realestatePortfolio.png";
import NBP from "./assets/blog.png";
import DAP from "./assets/digitalagency.png";
// ─── NAV ───────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#hero" className="nav__logo">
        <img src={"./favicon.svg"} alt="Logo" className="nav__logo-img" />
        ysha Saeed<span>.</span>
      </a>
      <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="nav__burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────
// function Hero() {
//   const words = ["Developer", "Designer", "Creator"];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [fade, setFade] = useState(true);
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setWordIndex((i) => (i + 1) % words.length);
//         setFade(true);
//       }, 400);
//     }, 2400);
//     return () => clearInterval(interval);
//   }, []);
//
//   return (
//     <section id="hero" className="hero">
//       <div className="hero__bg-grid" aria-hidden="true" />
//
//       <div className="hero__content">
//         <h1 className="hero__name">
//           <span className="hero__line hero__line--1">Hi, I'm</span>
//           <span className="hero__line hero__line--2">
//             <span className="hero__accent">Aysha Saeed</span>
//             <span className="hero__dot">.</span>
//           </span>
//           <span className="hero__line hero__line--3">
//             Full Stack{" "}
//             <span
//               className={`hero__word ${fade ? "hero__word--in" : "hero__word--out"}`}
//             >
//               {words[wordIndex]}
//             </span>
//           </span>
//         </h1>
//
//         <p className="hero__sub">
//           a Full-Stack Developer & experienced UI/UX Designer with 3+ years of
//           delivering custom websites, UI/UX solutions & more, basically I build
//           the things you wish existed.
//         </p>
//
//         <div className="hero__cta">
//           <a href="#projects" className="btn btn--primary">
//             View My Work
//             <svg viewBox="0 0 20 20" fill="currentColor" className="btn__arrow">
//               <path
//                 fillRule="evenodd"
//                 d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </a>
//           <a
//             href="https://tally.so/r/KYDjKK"
//             target="_blank"
//             rel="noreferrer"
//             className="btn btn--outline"
//           >
//             I Want to discuss my project
//           </a>
//         </div>
//
//         <div className="hero__stats">
//           <div className="stat">
//             <span className="stat__num">3+</span>
//             <span className="stat__label">Years Exp.</span>
//           </div>
//           <div className="stat__divider" />
//           <div className="stat">
//             <span className="stat__num">10+</span>
//             <span className="stat__label">Projects Built</span>
//           </div>
//           <div className="stat__divider" />
//           <div className="stat">
//             <span className="stat__num">5</span>
//             <span className="stat__label">Tech Stacks</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
function Hero() {
  const words = ["Developer", "Designer", "Creator"];
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setFade(true);
      }, 400);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="hero__content">
        {/* LEFT — text */}
        <div className="hero__text">
          <h1 className="hero__name">
            <span className="hero__line hero__line--1">Hi, I'm</span>
            <span className="hero__line hero__line--2">
              <span className="hero__accent">Aysha Saeed</span>
              <span className="hero__dot">.</span>
            </span>
            <span className="hero__line hero__line--3">
              Full Stack{" "}
              <span
                className={`hero__word ${fade ? "hero__word--in" : "hero__word--out"}`}
              >
                {words[wordIndex]}
              </span>
            </span>
          </h1>
          <div className="hero__photo-wrap hero__photo-mobile">
            <div className="hero__photo-blob" aria-hidden="true" />
            <img
              src={"./aysha.webp"}
              alt="Aysha Saeed"
              className="hero__photo"
              loading="eager"
              decoding="async"
            />
          </div>
          <p className="hero__sub">
            a Full-Stack Developer & experienced UI/UX Designer with 2+ years of
            building custom websites, UI/UX solutions & more, basically I build
            the things you wish existed.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View My Work
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="btn__arrow"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://tally.so/r/KYDjKK"
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              Discuss a Project
            </a>
          </div>

          <div className="hero__stats">
            <div className="stat">
              <span className="stat__num">2+</span>
              <span className="stat__label">Years Exp.</span>
            </div>
            <div className="stat__divider" />
            <div className="stat">
              <span className="stat__num">10+</span>
              <span className="stat__label">Projects Built</span>
            </div>
            <div className="stat__divider" />
            <div className="stat">
              <span className="stat__num">8+</span>
              <span className="stat__label">Tech Stacks</span>
            </div>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="hero__photo-wrap hero__photo-desktop">
          <div className="hero__photo-blob" aria-hidden="true" />
          <img
            src={"./aysha.webp"}
            alt="Aysha Saeed"
            className="hero__photo"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ─────────────────────────────────────────────────────────────────

const MAIN_TECHS = [
  { name: "JavaScript", icon: SiJavascript, iconColor: "#f7df1e" },
  { name: "HTML", icon: SiHtml5, iconColor: "#e34f26" },
  { name: "CSS", icon: SiCss, iconColor: "#1572b6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "#06b6d4" },
  { name: "React.js", icon: SiReact, iconColor: "#61dafb" },
  { name: "Express.js", icon: SiExpress, iconColor: "#888888" },
  { name: "Node.js", icon: SiNodedotjs, iconColor: "#3c873a" },
  { name: "MongoDB", icon: SiMongodb, iconColor: "#47a248" },
  { name: "Figma", icon: SiFigma, iconColor: "#a259ff" },
  { name: "Python", icon: SiPython, iconColor: "#3776ab" },
  { name: "Analytics", icon: SiGoogleanalytics, iconColor: "#ffde21" },
];

const SMALL_TECHS = [
  { name: "Postman", icon: SiPostman, iconColor: "#ff6c37" },
  { name: "Vercel", icon: SiVercel, iconColor: "#000000" },
  { name: "Git / GitHub", icon: SiGithub, iconColor: "#333333" },
];

function TechCluster() {
  const containerRef = useRef(null);
  const stateRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const wrap = containerRef.current;
    if (!wrap) return;

    const pills = Array.from(wrap.querySelectorAll(".ab-pill"));
    const W = wrap.offsetWidth;
    const H = wrap.offsetHeight;

    stateRef.current = pills.map((el) => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      return {
        el,
        x: Math.random() * Math.max(0, W - w),
        y: Math.random() * Math.max(0, H - h),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        phase: Math.random() * Math.PI * 2,
      };
    });

    stateRef.current.forEach((s) => {
      s.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
    });

    let t = 0;

    function tick() {
      t += 0.009;

      const W2 = wrap.offsetWidth;
      const H2 = wrap.offsetHeight;

      // ── 1. COLLISION AVOIDANCE ──
      for (let i = 0; i < stateRef.current.length; i++) {
        for (let j = i + 1; j < stateRef.current.length; j++) {
          const a = stateRef.current[i];
          const b = stateRef.current[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const minDist = 60; // adjust if needed

          if (dist < minDist) {
            const angle = Math.atan2(dy, dx);
            const force = (minDist - dist) * 0.02;

            a.vx += Math.cos(angle) * force;
            a.vy += Math.sin(angle) * force;

            b.vx -= Math.cos(angle) * force;
            b.vy -= Math.sin(angle) * force;
          }
        }
      }

      // ── 2. MOVEMENT + BOUNDS ──
      stateRef.current.forEach((s) => {
        const w = s.el.offsetWidth;
        const h = s.el.offsetHeight;

        // organic floating motion
        s.x += s.vx + Math.sin(t + s.phase) * 0.2;
        s.y += s.vy + Math.cos(t + s.phase * 1.4) * 0.2;

        // boundary collision
        if (s.x <= 0) {
          s.x = 0;
          s.vx = Math.abs(s.vx);
        }
        if (s.x >= W2 - w) {
          s.x = W2 - w;
          s.vx = -Math.abs(s.vx);
        }
        if (s.y <= 0) {
          s.y = 0;
          s.vy = Math.abs(s.vy);
        }
        if (s.y >= H2 - h) {
          s.y = H2 - h;
          s.vy = -Math.abs(s.vy);
        }

        // ── 3. DAMPING (stability) ──
        s.vx *= 0.98;
        s.vy *= 0.98;

        s.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
      });

      frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div className="ab-cluster" ref={containerRef}>
      {MAIN_TECHS.map(({ name, icon: Icon, iconColor }) => (
        <span key={name} className="ab-pill ab-pill--main">
          <Icon style={{ color: iconColor, fontSize: 15, flexShrink: 0 }} />
          {name}
        </span>
      ))}
      {SMALL_TECHS.map(({ name, icon: Icon, iconColor }) => (
        <span key={name} className="ab-pill ab-pill--small">
          <Icon style={{ color: iconColor, fontSize: 13, flexShrink: 0 }} />
          {name}
        </span>
      ))}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about section">
      <div className="container ab-grid">
        {/* LEFT — floating tech cluster */}
        <div className="ab-left">
          <TechCluster />
        </div>

        {/* RIGHT — text */}
        <div className="ab-right">
          <p className="section__eyebrow">About Me</p>

          <h2 className="ab-title">
            Developer who <span className="ab-hl">designs</span>.<br />
            Designer who <span className="ab-hl ab-hl--delay">codes</span>.
          </h2>

          <p className="about__desc">
            I'm a <mark className="ab-mark">Full Stack Developer</mark> and{" "}
            <mark className="ab-mark">UI/UX Designer</mark> based in Sialkot,
            Pakistan, currently pursuing my Associate's degree in Computer
            Science. With <mark className="ab-mark">3+ years</mark> of hands-on
            experience, I've built everything from e-commerce platforms to blog
            systems with custom authentication.
          </p>

          <p className="about__desc">
            My background in{" "}
            <mark className="ab-mark ab-mark--purple">copywriting</mark> means I
            don't just build websites — I understand how users think, what grabs
            attention, and what drives action. That combination of technical
            depth and communication clarity is what sets my work apart.
          </p>

          <div className="ab-badges">
            <span className="ab-badge">
              <span className="ab-dot ab-dot--green" />
              Available for work
            </span>
            <span className="ab-badge">
              <span className="ab-dot ab-dot--blue" />
              Remote Worldwide
            </span>
            <span className="ab-badge">
              <span className="ab-dot ab-dot--purple" />
              3+ Years Exp.
            </span>
          </div>

          <a href="#contact" className="btn btn--primary ab-cta">
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ────────────────────────────────────────────────────────────────
function Skills() {
  const categories = [
    {
      label: "Frontend",
      icon: "◈",
      items: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Figma"],
    },
    {
      label: "Backend",
      icon: "⬡",
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Python"],
    },
    {
      label: "Tools",
      icon: "◇",
      items: ["Git / GitHub", "AWS", "Google Cloud", "Figma", "Vercel"],
    },
    {
      label: "Soft Skills",
      icon: "○",
      items: [
        "UI/UX Design",
        "Copywriting",
        "Social Media",
        "Communication",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section__title center">Tech Stack</h2>
        <div className="skills__grid">
          {categories.map((cat) => (
            <div key={cat.label} className="skill-card">
              <div className="skill-card__icon">{cat.icon}</div>
              <h3 className="skill-card__label">{cat.label}</h3>
              <ul className="skill-card__list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
//-- tech --- animation
function TechWeUse() {
  const icons = [
    "/icons/react.png",
    "/icons/js.png",
    "/icons/tailwind.png",
    "/icons/node.png",
    "/icons/redux.png",
    "/icons/figma.png",
    "/icons/mongo.png",
    "/icons/postman.png",
    "/icons/git.png",
    "/icons/css.png",
    "/icons/html.png",
    "/icons/shopfy.png",
    "/icons/chrome.png",
    "/icons/adobe.png",
    "/icons/wordpress.png",
  ];

  const scrollingList = [...icons, ...icons];

  return (
    <section className="tech-wrapper">
      <div className="tech-overlay">
        <div className="tech-slider-mask">
          <div className="tech-slider-track">
            {scrollingList.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="technology icon"
                className="tech-icon"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── PORTFOLIO DATA ─────────────────────────────────────────────────────────
const portfolioData = [
  {
    id: 1,
    title: "JBeauty Lounge — Luxury Salon Landing Page & Booking System",
    category: "Full-Stack Web App",
    image: JBP,
    description:
      "A high-end salon experience built for conversion and elegance. Features online booking, portfolio gallery, and a smooth client-facing UX. Architected with React, Node.js, and MongoDB for scalability.",
    liveUrl: "https://jbeautylounge.vercel.app/",
    githubUrl: "https://github.com/AyshaSaeed-Alpha",
    upworkUrl:
      "https://www.upwork.com/freelancers/~01b3c4706288536a95?p=2028689169995845632",
  },
  {
    id: 2,
    title: "Coffee & Beans Brand E-Commerce with Admin Dashboards",
    category: "E-Commerce",
    image: ECP,
    description:
      "End-to-end e-commerce platform built for a specialty coffee brand. Includes admin dashboards, real-time inventory, Stripe payments, and order analytics. Built on the MERN stack with full Stripe integration.",
    liveUrl: "https://coffeeandbeans.vercel.app/",
    githubUrl: "https://github.com/AyshaSaeed-Alpha",
    upworkUrl:
      "https://www.upwork.com/freelancers/~01b3c4706288536a95?p=2028694948773679104",
  },
  {
    id: 3,
    title: "NeuroByteTalks — JWT-Auth Blog & Article Publishing Platform",
    category: "Full-Stack Web App",
    image: NBP,
    description:
      "Full-stack MVP blog platform with JWT auth via Appwrite, TinyMCE rich text editing, Cloudinary image uploads, and slug-based SEO routing. Supports draft/publish workflows with author-only edit/delete access control. Built on React, Redux Toolkit, MongoDB, and Node.js.",
    liveUrl: "https://neurotalks.vercel.app/",
    githubUrl: "https://github.com/AyshaSaeed-Alpha",
    upworkUrl:
      "https://www.upwork.com/freelancers/~01b3c4706288536a95?p=2044669573253566464",
  },

  {
    id: 4,
    title: "Calmline Wellness —Coach Booking LandingPage",
    category: "Landing Page / SaaS",
    image: CLP,
    description:
      "Conversion-focused wellness landing page built to book therapy, coaching, and mindfulness sessions. Featuring animated sections, seamless booking flows, and a mobile-first design. Stack: React, Vite, Tailwind CSS, MongoDB, and Express.",
    liveUrl: "https://calmlinewellness.vercel.app/",
    githubUrl: "https://github.com/AyshaSaeed-Alpha",
    upworkUrl:
      "https://www.upwork.com/freelancers/~01b3c4706288536a95?p=2041241060486742016",
  },
  {
    id: 5,
    title: "Multi-Page Digital Agency Portfolio & Lead Capture Website",
    category: "Full-Stack Web App",
    image: DAP,
    description:
      "Multi-page business portfolio for a digital agency with service showcases, case studies, industry pages, and a structured lead capture flow. Built for scalability and client conversion with a clean UI/UX. Stack: React.js, Node.js, Express.js, Tailwind CSS.",
    liveUrl: "https://alphatomdynamics.vercel.app/",
    githubUrl: "https://github.com/AyshaSaeed-Alpha",
    upworkUrl: "https://www.upwork.com/freelancers/~01b3c4706288536a95",
  },
  {
    id: 6,
    title: "HavenNest Properties — Real Estate Portfolio & Inquiry Website",
    category: "Real Estate",
    image: REP,
    description:
      "Dynamic property listing platform with SEO-optimized architecture and a built-in inquiry system. Designed for agents and brokers who need a professional web presence with backend integrations.",
    liveUrl: "https://havennest.properties.vercel.app/",
    githubUrl: "https://github.com/AyshaSaeed-Alpha",
    upworkUrl:
      "https://www.upwork.com/freelancers/~01b3c4706288536a95?p=2028730983155027968",
  },
];

// ─── PORTFOLIO CARD ────────────────────────────────────────────────────────
const DESCRIPTION_LIMIT = 120;

function PortfolioCard({ item, index, cardRef }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = item.description.length > DESCRIPTION_LIMIT;
  const displayText =
    expanded || !isLong
      ? item.description
      : item.description.slice(0, DESCRIPTION_LIMIT).trimEnd() + "…";

  return (
    <div
      className="home-portfolio-card hidden"
      ref={cardRef}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="image-wrapper">
        <img src={item.image} alt={item.title} />
        <div className="card-overlay">
          <div className="overlay-icons">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-icon-btn"
                title="View Live Site"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>Live</span>
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-icon-btn"
                title="View on GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            )}
            {item.upworkUrl && (
              <a
                href={item.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-icon-btn overlay-icon-upwork"
                title="View on Upwork"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
                <span>Upwork</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="card-content">
        <span className="card-category">{item.category}</span>
        <h3>{item.title}</h3>
        <p>
          {displayText}
          {isLong && (
            <button
              className="read-toggle"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? " Show less" : " More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

// ─── PROJECTS ──────────────────────────────────────────────────────────────
function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    const elements = cardsRef.current;
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="projects" className="home-portfolio">
      <div className="home-portfolio-header">
        <span className="portfolio-label">Work</span>
        <h2 className="home-portfolio-heading">Projects That Shipped</h2>
        <p className="home-portfolio-subheading">
          A curated selection of web platforms, e-commerce systems, and digital
          experiences built by Aysha Saeed.
        </p>
      </div>
      <div className="home-portfolio-grid">
        {portfolioData.map((item, index) => (
          <PortfolioCard
            key={item.id}
            item={item}
            index={index}
            cardRef={(el) => (cardsRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ───────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="hc-section">
      <div className="hc-blob" aria-hidden="true" />
      <div className="hc-inner">
        <div className="hc-copy">
          <span className="hc-eyebrow">Open for Work</span>
          <h2 className="hc-heading">
            Have a project? <br />
            <span className="hc-heading-accent">Let's build it together.</span>
          </h2>
          <p className="hc-body">
            I'm Aysha — a full-stack developer and UI/UX designer based in
            Sialkot, Pakistan. I take on freelance projects remotely and love
            turning ideas into polished, functional products.
          </p>
          <div className="hc-info-list">
            <div className="hc-info-item">
              <span className="hc-dot" />
              <span>Available for new projects</span>
            </div>
            <div className="hc-info-item">
              <span className="hc-dot" />
              <span>Quick replies · Usually within a few hours</span>
            </div>
            <div className="hc-info-item">
              <span className="hc-dot" />
              <span>Working with clients worldwide</span>
            </div>
          </div>
        </div>
        <div className="hc-right">
          <div className="hc-card">
            <p className="hc-card-label">Ready to start?</p>
            <div className="hc-btns">
              <a
                href="https://tally.so/r/KYDjKK"
                target="_blank"
                rel="noreferrer"
                className="hc-btn hc-btn-whatsapp"
              >
                I Want to discuss my project
              </a>
              <a
                href="https://cal.com/ayshasaeed"
                target="_blank"
                rel="noreferrer"
                className="hc-btn hc-btn-calendar"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hc-btn-ico"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book a Call with Aysha
              </a>
            </div>
            <div className="hc-divider" />
            <div className="hc-contact-row">
              <a
                href="mailto:aysha.saeedbu@gmail.com"
                className="hc-contact-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                aysha.saeedbu@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">
          Aysha Saeed<span>.</span>
        </p>
        <p className="footer__copy">+92 3174662321 | Sialkot, Pakistan</p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/alphatomdynamics" target="_blank">
            <FaInstagram />
          </a>

          <a href="https://github.com/AyshaSaeed-Alpha" target="_blank">
            <FaGithub />
          </a>

          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01b3c4706288536a95?viewMode=1"
            target="_blank"
          >
            <SiUpwork />
          </a>
        </div>
        <p className="footer__made">
          Copyright © All rights reserved. {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechWeUse />
        <Skills />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
