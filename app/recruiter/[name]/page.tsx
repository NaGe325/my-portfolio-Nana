import React from "react";
import { 
  FaGithub, FaLinkedin, FaReact, FaEnvelope, 
  FaFilePdf, FaCheckCircle, FaPhone, FaTrophy, 
  FaPaperPlane, FaJava, FaPython, FaDocker, FaAws 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiApachekafka, SiNextdotjs, SiPostgresql, 
  SiPytorch, SiJenkins, SiFastapi, SiRedis 
} from 'react-icons/si';

// --- 1. 数据层 ---
const PROFILE = {
  name: "Na Ge",
  title: "CMU Grad Student | Backend & AI Engineer",
  status: "Available for Summer 2026 Internship", 
  email: "nage@andrew.cmu.edu",
  phone: "(412) 589-0720",
  linkedin: "https://www.linkedin.com/in/na-ge",
  github: "https://github.com/NaGe325",
  resume: "/resume.pdf", 
  photos: [
    "/p21.jpg", 
    "/p1.jpg", 
    "/p3.jpg", 
  ],
  techStack: [
    { icon: FaJava, name: "Java" },
    { icon: SiSpringboot, name: "Spring Boot" },
    { icon: FaPython, name: "Python" },
    { icon: SiPytorch, name: "PyTorch" },
    { icon: SiApachekafka, name: "Kafka" },
    { icon: FaDocker, name: "Docker" },
    { icon: SiJenkins, name: "Jenkins" },
    { icon: SiPostgresql, name: "SQL" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiFastapi, name: "FastAPI" },
  ],
  
  // --- 修复点：将数组重组为对象结构，以匹配渲染逻辑 ---
  highlights: {
    backend: {
      bullets: [
        "Built Spring Boot REST APIs that reduced reporting workflow time by 50%.",
        "Improved transformer serving with caching + batch inference — 60% lower P95 latency and 5× higher QPS.",
        "Designed telemetry ingestion with C agents + Kafka to move high-volume signals reliably.",
      ],
      closingLine: "I like owning backend end-to-end: clean interfaces, performance under real load, and fewer production surprises."
    },

    infra: {
      bullets: [
        "Reduced rollback incidents by 40% by improving observability with Prometheus/Grafana.",
        "Implemented CI/CD quality + security gating using Jenkins, Sonarqube, and Trivy.",
        "Shipped anomaly-detection microservices that boosted throughput by 22% and reduced packet loss by 8%.",
      ],
      closingLine: "I’m happiest when systems are easy to operate — clear signals, safe releases, and problems caught early."
    },

    ai: {
      bullets: [
        "Built Django APIs + LangChain retrieval workflows and orchestrated with Airflow, cutting analyst prep time by 70%.",
        "Containerized and deployed Gradient Boosting + Transformer models as production-ready services.",
        "Engineered a sub-50ms closed-loop BCI system and used DQN-based RL to adapt stimulation in real time.",
      ],
      closingLine: "My ML focus is practical: shipable systems with latency budgets, monitoring, and measurable impact."
    },

    default: {
      bullets: [
        "Delivered measurable wins: 50% faster reporting workflows, 70% less analyst prep time, and 40% fewer rollbacks.",
        "Performance-minded engineer: 5× higher QPS and 60% lower P95 latency for transformer inference serving.",
        "Built distributed pipelines and microservices that improved throughput and reduced packet loss.",
      ],
      closingLine: "I work best at the intersection of distributed systems + applied AI — turning messy requirements into reliable, fast production systems."
    },
  },

  experience: [
    {
      company: "Beijing Creative & Interactive",
      role: "Software Engineer Intern",
      period: "July 2024 - Oct 2024",
      logo: "/p4.jpg", 
      responsibilities: [
        "Architected resilient batch/real-time pipelines using Python, SQL, and Airflow.", 
        "Built backend APIs with Django & LangChain (RAG) for semantic retrieval services.", 
        "Refactored legacy web systems using Next.js & Headless CMS architecture." 
      ],
      achievement: "Cut analyst prep time by 70% and boosted Lighthouse performance from 23 to 86.", 
      tags: ["Django", "LangChain", "Airflow", "Next.js"]
    },
    {
      company: "Frost & Sullivan",
      role: "Software Engineering Intern",
      period: "Jan 2024 - Mar 2024",
      logo: "/p6.jpg", 
      responsibilities: [
        "Developed high-performance REST APIs with Java Spring Boot for critical metrics.", 
        "Engineered production-ready Gradient Boosting Models for market forecasting.", 
        "Containerized Python microservices for reliable internal deployment." 
      ],
      achievement: "Reduced manual reporting time by 50% with a full SDLC implementation.", 
      tags: ["Java", "Spring Boot", "Microservices", "Docker"]
    },
    {
      company: "China Mobile",
      role: "Software Engineering Intern",
      period: "July 2023 - Oct 2023",
      logo: "/p5.jpg", 
      responsibilities: [
        "Architected telemetry pipelines using C Agents (low-latency) and Kafka.", 
        "Implemented multi-stage Jenkins CI/CD pipelines with Sonarqube security gating.", 
        "Deployed Prometheus/Grafana stacks for comprehensive cloud observability." 
      ],
      achievement: "Reduced packet loss by 8% and deployment rollbacks by 40%.", 
      tags: ["Kafka", "C", "Jenkins", "Observability"]
    }
  ]
};

// --- 2. SEO / Metadata 生成 ---
export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = await params;
  const rawName = decodeURIComponent(resolvedParams.name || "Recruiter");
  
  return {
    title: `Hi ${rawName}! - Na Ge's Portfolio`,
    description: `I'm Na Ge, a CMU Master's student and Full Stack Engineer. I prepared this interactive resume specifically for ${rawName}.`,
    openGraph: {
      title: `Portfolio: Na Ge for ${rawName}`,
      description: "CMU Grad | Java & Python Backend Engineer | Distributed Systems",
      images: ['/og-image.jpg'], 
    },
  };
}

// --- 3. 组件层 ---
const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative bg-white/70 backdrop-blur-2xl border border-white/60 shadow-xl rounded-[32px] overflow-hidden ${className}`}>
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-70"></div>
    {children}
  </div>
);

export default async function RecruiterPage({
  params,
  searchParams
}: {
  params: Promise<{ name: string }>,
  searchParams: Promise<{ role?: string, company?: string }> 
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const rawName = decodeURIComponent(resolvedParams.name);
  const formatName = (str: string) => str.split(/[-_ ]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const recruiterName = formatName(rawName);

  const targetCompany = resolvedSearchParams.company || "your company"; 
  const displayCompany = resolvedSearchParams.company || "your team";
  const targetRole = resolvedSearchParams.role || "Software Engineer";
  const roleParam = targetRole.toLowerCase();

  const today = new Date().toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  // 确定激活的 Key
  let activeSectionKey: keyof typeof PROFILE.highlights = 'default';

  if (roleParam.includes('ai') || roleParam.includes('ml') || roleParam.includes('data')) {
    activeSectionKey = 'ai';
  } else if (roleParam.includes('infra') || roleParam.includes('cloud') || roleParam.includes('devops') || roleParam.includes('sre')) {
    activeSectionKey = 'infra';
  } else if (roleParam.includes('backend') || roleParam.includes('java') || roleParam.includes('sde') || roleParam.includes('api')) {
    activeSectionKey = 'backend';
  }

  // 获取当前高亮数据对象
  const content = PROFILE.highlights[activeSectionKey];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans text-gray-900 bg-gray-50/50 relative overflow-hidden selection:bg-blue-100">
      
      {/* 背景光斑 */}
      <div className="fixed inset-0 -z-10 translate-z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] rounded-full bg-blue-400/20 blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] rounded-full bg-purple-400/20 blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">

        {/* --- Hero Section --- */}
        <section className="flex flex-col md:flex-row gap-6 items-stretch">
          <GlassCard className="w-full md:w-[70%] p-8 md:p-10 flex flex-col items-center text-center relative">
            <div className="absolute top-0 right-0 p-6 opacity-[0.06]">
              <FaReact className="text-9xl text-blue-600" />
            </div>

            {/* 状态胶囊 */}
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/80 border border-green-200 text-green-700 text-xs font-bold tracking-wide uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {PROFILE.status}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900 relative z-10">
              Hi <span className="text-blue-600">{recruiterName}</span>!
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-500 font-medium mb-6 relative z-10">
              I'm <span className="text-gray-800 font-semibold">{PROFILE.name}</span>
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl font-medium mb-8 relative z-10">
              I noticed you're hiring for <strong className="text-blue-600">{targetRole}</strong> at <strong className="text-gray-900">{displayCompany}</strong>. 
              I am a builder at heart, combining CMU-level system design with hands-on expertise in <span className="text-gray-900 font-semibold">high-concurrency Java backends</span> and <span className="text-gray-900 font-semibold">scalable AI architectures</span>. 
              I don't just write code—I ship production-grade solutions that impact users.
            </p>

            {/* --- Updated Why Me Box (适配精简版数据) --- */}
            <div className="w-full bg-blue-50/80 border border-blue-100 rounded-2xl p-6 mb-8 text-left relative overflow-hidden shadow-inner">
               <div className="flex justify-between items-center mb-4">
                 <h3 className="text-gray-900 font-extrabold text-lg flex items-center gap-2">
                   Why I'm a Great Fit
                 </h3>
               </div>
               
               {/* 列表渲染 (使用 content.bullets) */}
               <div className="space-y-3 mb-5">
                 {content.bullets.map((item, idx) => (
                   <div key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base font-medium leading-snug">
                     <FaCheckCircle className="text-blue-600 mt-1 min-w-[14px] shrink-0" />
                     <span>{item}</span>
                   </div>
                 ))}
               </div>

               {/* Closing Line */}
               <div className="mt-4 pt-4 border-t border-blue-200/50 text-sm md:text-base font-semibold text-blue-800 italic">
                 "{content.closingLine}"
               </div>

               {/* 技术栈图标 */}
               <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-blue-200/50 mt-4">
                  <span className="text-xs font-bold text-blue-400 uppercase mr-1">Tech Stack:</span>
                  {PROFILE.techStack.map((tech, i) => (
                    <div key={i} className="text-gray-500 hover:text-blue-600 transition transform hover:scale-110" title={tech.name}>
                       {/* @ts-ignore */}
                       <tech.icon className="text-xl" />
                    </div>
                  ))}
               </div>
            </div>

            {/* --- 按钮组 --- */}
            <div className="w-full max-w-md flex flex-col gap-4 relative z-10">
              
              {/* 1. Resume */}
              <a 
                href={PROFILE.resume} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-full flex justify-center items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition">
                  <FaFilePdf className="text-base" />
                </div>
                <span className="text-lg tracking-wide">Resume</span> 
              </a>

              {/* 2. Email */}
              <a href={`mailto:${PROFILE.email}`} className="w-full flex justify-center items-center gap-2 bg-white/80 hover:bg-white text-gray-900 border border-gray-200 px-6 py-3.5 rounded-xl font-bold transition shadow-sm hover:shadow-md">
                <FaEnvelope className="text-gray-600 text-base"/> 
                Email Me Directly
              </a>

              {/* 3. Socials */}
              <div className="grid grid-cols-2 gap-3">
                  <a href={PROFILE.linkedin} target="_blank" className="flex justify-center items-center gap-2 bg-white/60 border border-gray-200 text-[#0077b5] px-4 py-3 rounded-xl hover:bg-white transition text-sm font-semibold shadow-sm">
                    <FaLinkedin className="text-base" /> LinkedIn
                  </a>
                  <a href={PROFILE.github} target="_blank" className="flex justify-center items-center gap-2 bg-white/60 border border-gray-200 text-gray-800 px-4 py-3 rounded-xl hover:bg-white transition text-sm font-semibold shadow-sm">
                    <FaGithub className="text-base" /> GitHub
                  </a>
              </div>
            </div>

          </GlassCard>

          {/* 右侧照片 - 修改后：手机端也能看到，且在卡片下方 */}
         <div className="w-full md:w-[30%] flex flex-col gap-4 mt-6 md:mt-0">
            {PROFILE.photos.map((photoUrl, index) => (
              <GlassCard key={index} className="flex-1 min-h-[140px] !rounded-[24px] border border-white/80 shadow-md group">
                <img src={photoUrl} alt={`Photo ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </GlassCard>
            ))}
          </div>
        </section>

        {/* --- Cover Letter --- */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 mt-4 uppercase tracking-widest">
            Cover Letter
          </h2>
          <GlassCard className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-40 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-gray-200/50 pb-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{PROFILE.name}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 font-medium gap-1 sm:gap-3">
                    <a href={`mailto:${PROFILE.email}`} className="hover:text-blue-600 transition flex items-center gap-1"><FaEnvelope className="text-xs"/> {PROFILE.email}</a>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <span className="flex items-center gap-1"><FaPhone className="text-xs"/> {PROFILE.phone}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-sm font-bold text-gray-400 font-mono">
                  {today}
                </div>
              </div>
              <div className="space-y-6 text-gray-800 leading-relaxed text-[16px] md:text-lg max-w-4xl mx-auto font-serif">
                <p>Dear {recruiterName}:</p>
                <p>
                  I am writing to express my strong interest in the Summer 2026 Intern position at
                  <span className="font-semibold text-gray-900 border-b border-gray-300 border-dashed pb-0.5"> {targetCompany} </span>.
                  Your team tackles some of the industry's most complex challenges in distributed systems and scalable infrastructure—challenges that align perfectly with my background. 
                  Currently pursuing my Master's at Carnegie Mellon University, I have honed my expertise in building high-concurrency logging systems, optimizing microservices latency, and deploying AI-enabled pipelines in production environments.
                </p>
                <p>
                  My engineering philosophy centers on measurable impact. At China Mobile, I didn't just write code; I architected a telemetry pipeline with C Agents and Kafka that reduced packet loss by 8%. At Frost & Sullivan, I developed Java Spring Boot services that cut reporting time by 50%. Whether it's refactoring legacy systems to boost Lighthouse scores from 23 to 86 or engineering sub-50ms latency BCI systems, I am driven by the challenge of optimizing performance and reliability at scale.
                </p>
                <p>
                  I am eager to bring this blend of rigorous system design and practical, production-ready coding skills to your team. I would welcome the opportunity to discuss how I can contribute to the innovative work being done at {targetCompany}.
                </p>
                <p className="pt-4">
                  Sincerely,
                  <br /><br />
                  <strong className="text-gray-900 text-xl italic">Na Ge</strong>
                </p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* --- Experience History --- */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6 ml-2 uppercase tracking-wide text-xs">Experience History</h2>
          
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-8 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {PROFILE.experience.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-6">
                
               <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-4 border-white shadow-lg bg-white overflow-hidden">
                   <img 
                      src={exp.logo} 
                      alt={`${exp.company} Logo`} 
                      className="h-full w-full object-contain p-2" 
                   />
                </div>

                <GlassCard className="flex-1 p-6 transition-all hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 border-b border-gray-100 pb-4">
                    <div>
                        <h3 className="text-xl font-extrabold text-gray-900">{exp.company}</h3>
                        <div className="text-blue-600 font-semibold text-sm mt-1">{exp.role}</div>
                    </div>
                    <span className="mt-2 md:mt-0 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">{exp.period}</span>
                  </div>
                  
                  <ul className="mb-4 space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300"></span>
                            <span>{resp}</span>
                        </li>
                    ))}
                  </ul>

                  <div className="flex items-start gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-transparent p-4 border-l-4 border-blue-500">
                    <FaTrophy className="shrink-0 text-yellow-500 text-lg mt-0.5" />
                    <p className="text-sm font-bold text-gray-800 leading-relaxed">
                        {exp.achievement}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-50">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider uppercase text-blue-600 bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </section>

        {/* --- Footer --- */}
        <section className="mt-8 mb-12">
           <GlassCard className="py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
             <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-blue-100/40 to-transparent -z-10"></div>
             
             <div className="text-center md:text-left">
               <h2 className="text-2xl font-extrabold text-gray-900 flex items-center justify-center md:justify-start gap-3">
                 <span className="text-3xl"></span> Let's make this happen.
               </h2>
               <p className="text-gray-600 font-medium mt-2 text-sm md:text-base max-w-lg">
                 I'm ready to ship code that matters. If you think I'm a good fit for {displayCompany}, let's connect.
               </p>
             </div>

             <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
               <a 
                 href={`mailto:${PROFILE.email}`} 
                 className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-black transition-transform hover:-translate-y-1 text-sm whitespace-nowrap"
               >
                 <FaPaperPlane /> Send Email
               </a>
               <a 
                 href={PROFILE.linkedin} 
                 target="_blank"
                 className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-transform hover:-translate-y-1 text-sm whitespace-nowrap"
               >
                 <FaLinkedin /> LinkedIn
               </a>
             </div>
           </GlassCard>
           
           <div className="text-center text-gray-400 text-xs mt-6">
             Designed & Built by {PROFILE.name}
           </div>
        </section>

      </div>
    </div>
  );
}