import { useState } from "react";

const S = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Lora',Georgia,serif;background:#1a3a2a;color:#2a2015;}
:root{--felt:#1a3a2a;--card:#f5f0e8;--red:#8b1a1a;--ink:#1c1c1c;--gold:#c9a84c;--text:#2a2015;--muted:#7a6a52;}
.wrap{min-height:100vh;background:radial-gradient(ellipse at 30% 0%,#1f4a32,#1a3a2a 55%,#0d2018);position:relative;}
.wrap::after{content:'';position:fixed;inset:0;pointer-events:none;z-index:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23f)' opacity='0.1'/%3E%3C/svg%3E");opacity:0.38;}
.nav{position:sticky;top:0;z-index:200;background:rgba(8,24,16,0.97);backdrop-filter:blur(14px);border-bottom:1px solid rgba(201,168,76,0.22);padding:0 30px;height:58px;display:flex;align-items:center;justify-content:space-between;}
.nav-logo{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:700;color:#c9a84c;text-decoration:none;letter-spacing:0.06em;}
.nav-ul{display:flex;gap:20px;list-style:none;align-items:center;}
.nav-ul a{font-family:'Lora',serif;font-size:0.72rem;color:rgba(245,240,232,0.6);text-decoration:none;letter-spacing:0.12em;text-transform:uppercase;transition:color 0.2s;}
.nav-ul a:hover{color:#c9a84c;}
.nav-res{border:1px solid #c9a84c!important;color:#c9a84c!important;padding:4px 14px!important;border-radius:3px;}
.nav-res:hover{background:#c9a84c!important;color:#1c1c1c!important;}
.table{position:relative;z-index:1;max-width:960px;margin:0 auto;padding:60px 20px 80px;display:flex;flex-direction:column;gap:54px;}
.card{background:#f5f0e8;border:1.5px solid #c9a84c;border-radius:14px;padding:58px 64px 64px;position:relative;overflow:hidden;box-shadow:0 2px 4px rgba(0,0,0,0.1),0 10px 28px rgba(0,0,0,0.28),0 28px 72px rgba(0,0,0,0.22),0 56px 100px rgba(0,0,0,0.14),inset 0 1px 0 rgba(255,255,255,0.55);transition:transform 0.38s cubic-bezier(.25,.46,.45,.94),box-shadow 0.38s ease;}
.card::before{content:'';position:absolute;inset:0;border-radius:13px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23f)' opacity='0.038'/%3E%3C/svg%3E");pointer-events:none;z-index:0;}
.c1{transform:rotate(-1deg);animation:deal 0.75s 0.1s ease both;}
.c2{transform:rotate(0.6deg);animation:deal 0.75s 0.3s ease both;}
.c3{transform:rotate(-0.45deg);animation:deal 0.75s 0.5s ease both;}
.c4{transform:rotate(0.9deg);animation:deal 0.75s 0.7s ease both;}
.c5{transform:rotate(-1.3deg);animation:deal 0.75s 0.9s ease both;}
.c1:hover{transform:rotate(-1deg) translateY(-10px);box-shadow:0 6px 14px rgba(0,0,0,0.18),0 20px 48px rgba(0,0,0,0.36),0 48px 90px rgba(0,0,0,0.26);}
.c2:hover{transform:rotate(0.6deg) translateY(-10px);box-shadow:0 6px 14px rgba(0,0,0,0.18),0 20px 48px rgba(0,0,0,0.36),0 48px 90px rgba(0,0,0,0.26);}
.c3:hover{transform:rotate(-0.45deg) translateY(-10px);box-shadow:0 6px 14px rgba(0,0,0,0.18),0 20px 48px rgba(0,0,0,0.36),0 48px 90px rgba(0,0,0,0.26);}
.c4:hover{transform:rotate(0.9deg) translateY(-10px);box-shadow:0 6px 14px rgba(0,0,0,0.18),0 20px 48px rgba(0,0,0,0.36),0 48px 90px rgba(0,0,0,0.26);}
.c5:hover{transform:rotate(-1.3deg) translateY(-10px);box-shadow:0 6px 14px rgba(0,0,0,0.18),0 20px 48px rgba(0,0,0,0.36),0 48px 90px rgba(0,0,0,0.26);}
@keyframes deal{from{opacity:0;transform:translateX(110px) rotate(10deg);}to{opacity:1;}}
.ci{position:absolute;display:flex;flex-direction:column;align-items:center;line-height:1.1;z-index:10;user-select:none;}
.ci.tl{top:18px;left:22px;}
.ci.br{bottom:18px;right:22px;transform:rotate(180deg);}
.ci-rank{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:700;line-height:1;}
.ci-suit{font-size:0.95rem;line-height:1;margin-top:1px;}
.wm{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:260px;line-height:1;opacity:0.032;pointer-events:none;z-index:0;user-select:none;}
.cc{position:relative;z-index:1;}
.rule{display:flex;align-items:center;gap:14px;margin:28px 0;color:#c9a84c;}
.rule::before,.rule::after{content:'';flex:1;height:1px;background:linear-gradient(to right,transparent,#c9a84c,transparent);}
.rule span{font-size:0.88rem;opacity:0.75;flex-shrink:0;}
.eyebrow{display:block;font-family:'Lora',serif;font-size:0.64rem;color:#c9a84c;letter-spacing:0.22em;text-transform:uppercase;margin-bottom:7px;}
.btn{display:inline-block;padding:10px 24px;border-radius:4px;font-family:'Lora',serif;font-size:0.84rem;letter-spacing:0.06em;text-decoration:none;transition:all 0.2s;cursor:pointer;border:none;}
.btn-dark{background:#1c1c1c;color:#f5f0e8;border:1px solid #1c1c1c;}
.btn-dark:hover{background:#c9a84c;border-color:#c9a84c;color:#1c1c1c;}
.btn-out{background:transparent;color:#1c1c1c;border:1px solid #c9a84c;}
.btn-out:hover{background:#c9a84c;color:#1c1c1c;}
.hero-hi{font-family:'Lora',serif;font-size:1rem;color:#c9a84c;font-style:italic;margin-bottom:8px;}
.hero-name{font-family:'Cormorant Garamond',serif;font-size:clamp(2.8rem,6vw,5rem);font-weight:700;color:#1c1c1c;line-height:0.95;margin-bottom:14px;}
.hero-role{font-family:'Cormorant Garamond',serif;font-size:clamp(1.3rem,3vw,2rem);font-weight:400;color:#8b1a1a;font-style:italic;margin-bottom:18px;}
.hero-tag{font-size:0.93rem;color:#7a6a52;line-height:1.78;max-width:530px;margin-bottom:26px;}
.cta{display:flex;gap:13px;flex-wrap:wrap;}
.abt p{font-size:0.92rem;line-height:1.86;color:#2a2015;margin-bottom:13px;}
.abt strong{color:#1c1c1c;font-weight:600;}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(201,168,76,0.36);border:1px solid rgba(201,168,76,0.36);border-radius:6px;overflow:hidden;margin-top:22px;}
.stat{background:#f5f0e8;padding:13px 10px;text-align:center;}
.stat-l{font-size:0.59rem;color:#c9a84c;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:5px;}
.stat-v{font-family:'Cormorant Garamond',serif;font-size:0.93rem;font-weight:600;color:#1c1c1c;}
.card-h{font-family:'Cormorant Garamond',serif;font-size:1.9rem;font-weight:700;color:#1c1c1c;margin-bottom:26px;}
.proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.proj{background:rgba(26,58,42,0.05);border:1px solid rgba(201,168,76,0.23);border-radius:8px;padding:17px;transition:all 0.22s;display:flex;flex-direction:column;gap:7px;}
.proj:hover{border-color:#c9a84c;background:rgba(26,58,42,0.09);transform:translateY(-2px);}
.proj-cat{display:inline-block;font-size:0.57rem;color:#8b1a1a;letter-spacing:0.12em;text-transform:uppercase;border:1px solid rgba(139,26,26,0.28);border-radius:3px;padding:2px 6px;width:fit-content;}
.proj-title{font-family:'Cormorant Garamond',serif;font-size:1.07rem;font-weight:700;color:#1c1c1c;}
.proj-desc{font-size:0.76rem;color:#7a6a52;line-height:1.7;flex:1;}
.tech{display:flex;flex-wrap:wrap;gap:4px;}
.tech span{font-size:0.59rem;color:#7a6a52;background:rgba(201,168,76,0.11);border:1px solid rgba(201,168,76,0.27);border-radius:3px;padding:2px 5px;}
.plinks{display:flex;gap:11px;margin-top:3px;}
.plink{font-size:0.69rem;color:#c9a84c;text-decoration:none;border-bottom:1px solid transparent;transition:border-color 0.2s;}
.plink:hover{border-bottom-color:#c9a84c;}
.sk-tbl{width:100%;border-collapse:collapse;}
.sk-tbl tr{border-bottom:1px solid rgba(201,168,76,0.16);}
.sk-tbl tr:last-child{border-bottom:none;}
.sk-tbl td{padding:12px 13px;vertical-align:top;}
.sk-cat{font-family:'Cormorant Garamond',serif;font-size:0.94rem;font-weight:600;color:#8b1a1a;white-space:nowrap;min-width:150px;display:block;}
.sk-tags{display:flex;flex-wrap:wrap;gap:6px;}
.sk-tag{font-size:0.7rem;color:#2a2015;background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.29);border-radius:3px;padding:3px 8px;}
.sk-tag::before{content:'♦️ ';color:#8b1a1a;font-size:0.56rem;}
.half-h{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:700;color:#1c1c1c;margin-bottom:18px;}
.tl{display:flex;flex-direction:column;}
.tl-item{padding:17px 0 17px 28px;border-left:2px solid rgba(201,168,76,0.33);position:relative;}
.tl-item::before{content:'♣️';position:absolute;left:-11px;top:20px;background:#f5f0e8;color:#c9a84c;font-size:0.8rem;padding:2px 2px;line-height:1;}
.exp-role{font-family:'Cormorant Garamond',serif;font-size:1.03rem;font-weight:700;color:#1c1c1c;}
.exp-co{color:#8b1a1a;font-style:italic;}
.exp-per{display:block;font-size:0.7rem;color:#c9a84c;letter-spacing:0.08em;margin:3px 0 7px;}
.exp-ul{list-style:none;}
.exp-ul li{font-size:0.78rem;color:#7a6a52;line-height:1.72;padding-left:15px;position:relative;margin-bottom:3px;}
.exp-ul li::before{content:'▸';position:absolute;left:0;color:#c9a84c;font-size:0.62rem;top:4px;}
.rp{background:rgba(139,26,26,0.04);border:1px solid rgba(139,26,26,0.16);border-radius:8px;padding:24px;}
.rp-title{font-family:'Cormorant Garamond',serif;font-size:1.07rem;font-weight:700;color:#1c1c1c;line-height:1.42;margin-bottom:9px;}
.rp-authors{font-size:0.78rem;color:#8b1a1a;font-style:italic;margin-bottom:9px;}
.rp-meta{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:13px;}
.rp-meta span{font-size:0.66rem;color:#7a6a52;background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.23);border-radius:3px;padding:3px 8px;}
.rp-abs{font-size:0.78rem;color:#2a2015;line-height:1.82;font-style:italic;border-left:3px solid #c9a84c;padding-left:13px;margin-bottom:13px;}
.rp-kws{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:15px;}
.rp-kw{font-size:0.6rem;color:#8b1a1a;border:1px solid rgba(139,26,26,0.27);border-radius:3px;padding:3px 7px;}
.contact-intro{font-size:0.92rem;color:#7a6a52;line-height:1.76;max-width:520px;font-style:italic;margin-bottom:30px;}
.contact-cols{display:grid;grid-template-columns:1fr 1fr;gap:44px;}
.cf{display:flex;flex-direction:column;gap:12px;}
.fi{font-family:'Lora',serif;font-size:0.84rem;background:rgba(26,58,42,0.06);border:1px solid rgba(201,168,76,0.33);border-radius:5px;padding:10px 14px;color:#2a2015;outline:none;transition:border-color 0.2s;width:100%;}
.fi:focus{border-color:#c9a84c;}
.fta{font-family:'Lora',serif;font-size:0.84rem;background:rgba(26,58,42,0.06);border:1px solid rgba(201,168,76,0.33);border-radius:5px;padding:10px 14px;color:#2a2015;outline:none;transition:border-color 0.2s;width:100%;resize:vertical;min-height:108px;}
.fta:focus{border-color:#c9a84c;}
.fsub{font-family:'Lora',serif;font-size:0.84rem;background:#1c1c1c;color:#f5f0e8;border:1px solid #1c1c1c;border-radius:4px;padding:10px 24px;cursor:pointer;letter-spacing:0.05em;transition:all 0.2s;align-self:flex-start;}
.fsub:hover{background:#c9a84c;border-color:#c9a84c;color:#1c1c1c;}
.fsub:disabled{opacity:0.6;cursor:not-allowed;}
.fst-ok{font-size:0.8rem;color:#2d7a4a;font-style:italic;}
.fst-err{font-size:0.8rem;color:#8b1a1a;font-style:italic;}
.cl{display:flex;flex-direction:column;}
.cla{display:flex;align-items:center;gap:13px;text-decoration:none;color:#2a2015;font-size:0.84rem;padding:12px 0;border-bottom:1px solid rgba(201,168,76,0.16);transition:color 0.2s;}
.cla:last-child{border-bottom:none;}
.cla:hover{color:#c9a84c;}
.cla-icon{width:28px;height:28px;background:rgba(201,168,76,0.11);border:1px solid rgba(201,168,76,0.28);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:0.76rem;color:#c9a84c;flex-shrink:0;}
.foot{text-align:center;padding:34px 20px;position:relative;z-index:1;}
.foot p{font-size:0.72rem;color:rgba(245,240,232,0.3);letter-spacing:0.1em;}
@media(max-width:800px){
  .nav{padding:0 18px;}.nav-ul li:not(:last-child):not(:nth-last-child(2)){display:none;}
  .card{padding:46px 26px 40px;}.proj-grid{grid-template-columns:1fr;}
  .stats{grid-template-columns:repeat(2,1fr);}.contact-cols{grid-template-columns:1fr;}
  .wm{font-size:150px;}.sk-tbl td:first-child{display:block;padding-bottom:5px;}
}
`;

const PROJECTS = [
    { title: "Gastro-XAI", cat: "AI / Medical Imaging", desc: "Explainable AI system for gastrointestinal disease classification and polyp segmentation using deep learning with Grad-CAM visualizations and automated report generation.", tech: ["Python", "PyTorch", "Flask", "React", "Grad-CAM"], gh: "https://github.com/sarthakpapneja/Gastro-XAI", live: null },
    { title: "ModelAuditAI", cat: "AI / ML Auditing", desc: "Production-grade ML audit system evaluating models for Performance, Fairness, Drift, Overfitting, and Leakage. Provides comprehensive model health reports.", tech: ["TypeScript", "React", "Python", "FastAPI", "AI/ML"], gh: "https://github.com/sarthakpapneja/ML-Auditor", live: null },
    { title: "Resume Analyzer", cat: "AI / NLP", desc: "Intelligent resume parsing and analysis tool providing actionable insights, skill gap analysis, and ATS compatibility scoring for job seekers.", tech: ["TypeScript", "React", "Python", "NLP"], gh: "https://github.com/sarthakpapneja/resume-analyzer", live: null },
    { title: "Finance Track", cat: "Full-Stack / FinTech", desc: "MERN stack finance tracker with transaction management, balance calculation, data visualization, and a modern responsive dashboard.", tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express"], gh: "https://github.com/sarthakpapneja/Finance-Track", live: null },
    { title: "Regulatory Reporting Assistant", cat: "AI / FinTech", desc: "AI-powered assistant for regulatory compliance and financial reporting, streamlining complex reporting workflows with intelligent automation.", tech: ["Python", "Flask", "AI/ML"], gh: "https://github.com/sarthakpapneja/Regulatory-Reporting-Assistant", live: null },
    { title: "RoadVision VMS", cat: "Computer Vision", desc: "Vehicle Management System leveraging computer vision for road monitoring, traffic analysis, and automated vehicle tracking.", tech: ["Python", "Computer Vision", "Deep Learning"], gh: "https://github.com/sarthakpapneja/RoadVision-VMS", live: null },
    { title: "School Website", cat: "Web Development", desc: "Full-featured school website with dynamic content, event management, video integration, and a modern responsive design.", tech: ["JavaScript", "React", "Vite", "CSS"], gh: "https://github.com/sarthakpapneja/school-website-", live: "https://school-website-murex-seven.vercel.app/" },
    { title: "Bank Security System", cat: "Database Systems", desc: "Comprehensive bank management application ensuring data segregation and integrity with Role-Based Access Control (RBAC).", tech: ["Python", "MySQL", "RBAC"], gh: "https://github.com/sarthakpapneja/banksecuritysystem", live: null },
    { title: "Table Detection Model", cat: "Data Science", desc: "Encoder-decoder deep learning model (TableNet-inspired) for table detection. Integrated OCR for automated tabular data extraction.", tech: ["Deep Learning", "Python", "OCR", "VGG-19"], gh: null, live: "https://colab.research.google.com/drive/1xpn7qXNKuUoMzCklZjbyLiv23v8SheIN?usp=sharing" },
];

const SKILLS = [
    { cat: "Core Concepts", tags: ["Computer Architecture", "AI", "DBMS", "OS", "Computer Networks", "OOP"] },
    { cat: "Languages", tags: ["C", "C++", "Java", "JavaScript", "Python", "TypeScript"] },
    { cat: "Web / Tools", tags: ["ReactJS", "Next.js", "Tailwind CSS", "HTML", "CSS", "Figma", "Flask", "FastAPI", "Node.js"] },
    { cat: "AI / ML", tags: ["PyTorch", "Deep Learning", "Computer Vision", "NLP", "Grad-CAM", "XAI", "Streamlit"] },
    { cat: "Data Tools", tags: ["SQL", "PowerBI", "Excel", "Tableau", "MySQL", "MongoDB"] },
    { cat: "Cloud", tags: ["AWS — EC2", "IAM", "VPC", "S3", "RDS", "CloudFront"] },
    { cat: "Hardware", tags: ["Raspberry Pi", "Arduino"] },
];

const EXP = [
    { role: "Cloud Intern", company: "Velocis Systems, Noida", period: "June 2025 – July 2025", bullets: ["Worked with AWS and Google Cloud (EC2, IAM, VPC, RDS, CloudFront, Load Balancer).", "Supported enterprise-grade solutions in fast-paced project environments."] },
    { role: "Operations Member", company: "Android Club VIT Chennai", period: "June 2023 – Present", bullets: ["Organized and executed club events; delivered a UI/UX session during a seminar.", "Collaborated with project teams to ensure timely task execution.", "Contributed to operational improvements through leadership and process enhancements."] },
    { role: "UI/UX Member", company: "Microsoft Innovations Club VIT Chennai", period: "September 2023 – November 2023", bullets: ["Optimized event club interfaces using advanced UI principles.", "Boosted user access by 30% and sped up event registrations by 20%."] },
    { role: "Participant", company: "Hackathons & Activities", period: "Various", bullets: ["Core developer in Smart India Hackathon."] },
];

const RKW = ["Post-Quantum Cryptography", "SPHINCS+", "IPFS", "Verifiable Credentials", "Decentralized Notary", "Quantum-Resistant Security"];

function CI({ rank, suit, color }: { rank: string, suit: string, color: string }) {
    return (<>
        <div className="ci tl" style={{ color }}><div className="ci-rank">{rank}</div>{suit && <div className="ci-suit">{suit}</div>}</div>
        <div className="ci br" style={{ color }}><div className="ci-rank">{rank}</div>{suit && <div className="ci-suit">{suit}</div>}</div>
    </>);
}

export default function Portfolio() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const upd = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
    const submit = async (e: React.FormEvent) => {
        e.preventDefault(); setStatus('sending');
        try {
            const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ access_key: 'd9743274-bd82-40a7-9d2b-b6b785c6c275', subject: 'New Contact from Portfolio', from_name: 'Portfolio Contact Form', ...form }) });
            if (r.ok) { setStatus('ok'); setForm({ name: '', email: '', message: '' }); } else setStatus('err');
        } catch { setStatus('err'); }
    };

    return (<>
        <style>{S}</style>
        <div className="wrap">
            <nav className="nav">
                <a href="#" className="nav-logo">SP.</a>
                <ul className="nav-ul">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="https://drive.google.com/file/d/1u3hQLi61BAbKneym4_QYbEXHYJYvHuio/view?usp=sharing" target="_blank" className="nav-res">Resume</a></li>
                </ul>
            </nav>

            <div className="table">

                <section id="about">
                    <div className="card c1">
                        <CI rank="A" suit="♠️" color="#1c1c1c" />
                        <div className="wm" style={{ color: '#1c1c1c' }}>♠️</div>
                        <div className="cc">
                            <p className="hero-hi">Hi, I'm</p>
                            <h1 className="hero-name">Sarthak Papneja.</h1>
                            <h2 className="hero-role">Aspiring Software Engineer.</h2>
                            <p className="hero-tag">Building scalable solutions with a focus on AI-driven applications, secure systems, and cloud architecture.</p>
                            <div className="cta">
                                <a href="#projects" className="btn btn-dark">View My Work</a>
                                <a href="#contact" className="btn btn-out">Contact Me</a>
                            </div>
                            <div className="rule"><span>♠️</span></div>
                            <span className="eyebrow">About Me</span>
                            <div className="abt">
                                <p>I am a Computer Science Engineering student at <strong>VIT University, Chennai</strong> (2022–2026) with a CGPA of <strong>8.67</strong>. My passion lies in solving complex problems through technology, whether it's developing secure banking systems, creating AI models for data extraction, or building full-stack web applications.</p>
                                <p>I have hands-on experience in full-stack development, cloud computing (AWS), data analytics, and AI/ML. I'm also a published researcher in <strong>post-quantum cryptography</strong>. I enjoy working in fast-paced environments and collaborating with teams to deliver impactful solutions.</p>
                            </div>
                            <div className="stats">
                                <div className="stat"><div className="stat-l">University</div><div className="stat-v">VIT Chennai</div></div>
                                <div className="stat"><div className="stat-l">Degree</div><div className="stat-v">B.Tech CSE</div></div>
                                <div className="stat"><div className="stat-l">CGPA</div><div className="stat-v">8.67 / 10</div></div>
                                <div className="stat"><div className="stat-l">Graduation</div><div className="stat-v">2026</div></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects">
                    <div className="card c2">
                        <CI rank="K" suit="♥️" color="#8b1a1a" />
                        <div className="wm" style={{ color: '#8b1a1a' }}>♥️</div>
                        <div className="cc">
                            <span className="eyebrow">Some Things I've Built</span>
                            <h2 className="card-h">Projects</h2>
                            <div className="proj-grid">
                                {PROJECTS.map(p => (
                                    <div className="proj" key={p.title}>
                                        <span className="proj-cat">{p.cat}</span>
                                        <div className="proj-title">{p.title}</div>
                                        <p className="proj-desc">{p.desc}</p>
                                        <div className="tech">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                                        <div className="plinks">
                                            {p.gh && <a href={p.gh} target="_blank" className="plink">GitHub →</a>}
                                            {p.live && <a href={p.live} target="_blank" className="plink">Live →</a>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills">
                    <div className="card c3">
                        <CI rank="Q" suit="♦️" color="#8b1a1a" />
                        <div className="wm" style={{ color: '#8b1a1a' }}>♦️</div>
                        <div className="cc">
                            <span className="eyebrow">The Arsenal</span>
                            <h2 className="card-h">Skills & Stack</h2>
                            <table className="sk-tbl">
                                <tbody>
                                    {SKILLS.map(s => (
                                        <tr key={s.cat}>
                                            <td><span className="sk-cat">{s.cat}</span></td>
                                            <td><div className="sk-tags">{s.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}</div></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section id="experience">
                    <div className="card c4">
                        <CI rank="J" suit="♣️" color="#1c1c1c" />
                        <div className="wm" style={{ color: '#1c1c1c' }}>♣️</div>
                        <div className="cc">
                            <span className="eyebrow">The Track Record</span>
                            <h2 className="card-h" style={{ marginBottom: 8 }}>Experience & Research</h2>
                            <h3 className="half-h">Experience</h3>
                            <div className="tl">
                                {EXP.map(e => (
                                    <div className="tl-item" key={e.company}>
                                        <div className="exp-role">{e.role} <span className="exp-co">@ {e.company}</span></div>
                                        <span className="exp-per">{e.period}</span>
                                        <ul className="exp-ul">{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                                    </div>
                                ))}
                            </div>
                            <div className="rule"><span>♣️</span></div>
                            <h3 className="half-h">Research</h3>
                            <div className="rp">
                                <h4 className="rp-title">Q-Notary: A Decentralized, Quantum-Resistant Notary for Verifiable Collaborative Workflows</h4>
                                <p className="rp-authors">Sarthak Papneja · Romit Gupta · Dr. Neelanarayanan V</p>
                                <div className="rp-meta">
                                    <span>International Journal of Versatile Research and Analysis (IJVRA)</span>
                                    <span>Vol 4, Issue 1</span><span>January 2026</span>
                                    <span>DOI: 10.13140/RG.2.2.35802.20169</span>
                                </div>
                                <p className="rp-abs">Long-lived digital records are at risk from quantum computing advances that threaten classical signature schemes. Q-Notary presents a decentralized, post-quantum secure notary framework integrating SPHINCS+, IPFS, and W3C Verifiable Credentials for portable, tamper-evident notarizations and a Verifiable Workflow Chain for collaborative approvals.</p>
                                <div className="rp-kws">{RKW.map(k => <span key={k} className="rp-kw">{k}</span>)}</div>
                                <a href="https://www.researchgate.net/publication/399985730_Q-Notary_A_Decentralized_Quantum-Resistant_Notary_for_Verifiable_Collaborative_Workflows" target="_blank" className="btn btn-out" style={{ fontSize: '0.78rem', padding: '8px 18px' }}>View on ResearchGate →</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="card c5">
                        <CI rank="★" suit="J" color="#c9a84c" />
                        <div className="wm" style={{ color: '#c9a84c', fontSize: '190px', opacity: 0.028 }}>★</div>
                        <div className="cc">
                            <span className="eyebrow">Get In Touch</span>
                            <h2 className="card-h">Let's Talk</h2>
                            <p className="contact-intro">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                            <div className="contact-cols">
                                <form className="cf" onSubmit={submit}>
                                    <input className="fi" placeholder="Name" value={form.name} onChange={e => upd('name', e.target.value)} required />
                                    <input className="fi" type="email" placeholder="Email" value={form.email} onChange={e => upd('email', e.target.value)} required />
                                    <textarea className="fta" placeholder="Message" value={form.message} onChange={e => upd('message', e.target.value)} required />
                                    <button type="submit" className="fsub" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
                                    {status === 'ok' && <p className="fst-ok">Thanks! I'll get back to you soon.</p>}
                                    {status === 'err' && <p className="fst-err">Something went wrong. Try emailing directly.</p>}
                                </form>
                                <div className="cl">
                                    <a href="mailto:sarthakpapneja01@gmail.com" className="cla"><span className="cla-icon">✉</span>sarthakpapneja01@gmail.com</a>
                                    <a href="https://www.linkedin.com/in/sarthak-papneja-485118232/" target="_blank" className="cla"><span className="cla-icon" style={{ fontWeight: 700 }}>in</span>LinkedIn</a>
                                    <a href="https://github.com/sarthakpapneja" target="_blank" className="cla"><span className="cla-icon" style={{ fontSize: '0.65rem' }}>GH</span>GitHub</a>
                                    <a href="https://www.researchgate.net/profile/Sarthak-Papneja" target="_blank" className="cla"><span className="cla-icon" style={{ fontSize: '0.6rem' }}>RG</span>ResearchGate</a>
                                    <a href="https://drive.google.com/file/d/1u3hQLi61BAbKneym4_QYbEXHYJYvHuio/view?usp=sharing" target="_blank" className="cla"><span className="cla-icon">↓</span>Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <footer className="foot"><p>Designed & Built by Sarthak Papneja</p></footer>
        </div>
    </>);
}
