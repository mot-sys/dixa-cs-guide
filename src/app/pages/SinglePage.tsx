import { DixaLogo } from "../components/DixaLogo";
import { AlertTriangle, CheckCircle2, TrendingUp, ShieldCheck, Zap, Users, ArrowRight, Clock } from "lucide-react";
import imgAiChat from "@/assets/img-ai-chat.png";
import imgScalability from "@/assets/img-scalability.png";
import imgHeroBg from "@/assets/img-hero-bg.png";

// ── Reusable stat callout ──
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-5">
      <div className="text-3xl font-bold text-[#5644D8] mb-1">{value}</div>
      <div className="text-xs text-white/50 leading-snug max-w-[120px] mx-auto">{label}</div>
    </div>
  );
}

// ── Section heading ──
function SectionHead({ icon, title, subtitle }: { icon: string; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-4 mb-7">
      <span className="text-3xl flex-shrink-0">{icon}</span>
      <div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        {subtitle && <p className="text-white/60 leading-relaxed text-sm">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function SinglePage() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">

      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 px-10 py-4 bg-[#2a2a2a]/95 backdrop-blur-md border-b border-white/5 flex items-center justify-between">
        <DixaLogo />
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/50">
          <a href="#reality" className="hover:text-white transition-colors">Market Reality</a>
          <a href="#roi" className="hover:text-white transition-colors">ROI</a>
          <a href="#framework" className="hover:text-white transition-colors">Framework</a>
          <a href="#redflags" className="hover:text-white transition-colors">Red Flags</a>
          <a
            href="https://www.dixa.com/demo?utm_source=intent-signal&utm_medium=pdf-buyer-guide"
            className="ml-2 px-4 py-1.5 bg-[#5644D8] text-white rounded-full font-semibold hover:bg-[#4535c7] transition-colors"
          >
            Talk to Dixa
          </a>
        </nav>
      </header>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 space-y-10">

        {/* ══════════════ HERO ══════════════ */}
        <section
          className="relative rounded-2xl overflow-hidden pt-16 pb-14 px-10"
          style={{ backgroundImage: `url(${imgHeroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/80 via-[#2a2a2a]/70 to-[#1c1840]/60" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#5644D8]/15 border border-[#5644D8]/30 rounded-full text-sm text-[#a394f0] mb-6">
              <span>Enterprise Buyer Guide 2026</span>
              <span className="w-1 h-1 rounded-full bg-[#5644D8]" />
              <span>Based on Gartner, Forrester & IDC Research</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Choose the Right CX Platform <span className="text-[#a394f0]">Before It Costs You</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Gartner predicts <strong className="text-white">40%+ of agentic AI projects will be canceled by end of 2027</strong> due to cost overruns and unclear value. This guide gives you the rigorous framework to be in the winning 60%.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.dixa.com/demo?utm_source=intent-signal&utm_medium=pdf-buyer-guide"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5644D8] text-white rounded-full font-semibold hover:bg-[#4535c7] transition-colors"
              >
                Talk to Dixa <ArrowRight className="size-4" />
              </a>
              <a href="#roi" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/15 transition-colors text-sm">
                View ROI Benchmarks
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════ URGENCY BANNER ══════════════ */}
        <div className="flex items-center gap-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
          <Clock className="size-5 text-amber-400 flex-shrink-0" />
          <p className="text-sm text-white/80">
            <strong className="text-amber-400">EU AI Act — Full enforcement: August 2, 2026.</strong>{" "}
            Fines up to €35M or 7% of global turnover. Platforms with embedded compliance reduce your risk and accelerate deployment.
          </p>
        </div>

        {/* ══════════════ 5 NON-NEGOTIABLES ══════════════ */}
        <section id="reality" className="bg-[#1f1f1f] rounded-2xl p-8">
          <SectionHead
            icon="🎯"
            title="Five Non-Negotiable Truths for 2026 Buyers"
            subtitle="Synthesized from Gartner, Forrester, IDC, and Metrigy 2025–2026 research. Ignore these at your peril."
          />
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "AI-native architecture is now baseline",
                body: "Platforms bolting AI onto legacy systems will fall behind. Evaluate AI integration depth across the entire platform — not just chatbots. Forrester found a 'growing gap between vendors that bolt AI onto legacy architectures and those building truly unified, AI-native platforms.'",
              },
              {
                num: "02",
                title: "CCaaS–CRM convergence is accelerating",
                body: "Gartner explicitly flags this as a major market force for 2026. Platform decisions must account for how service, sales, and marketing capabilities will unify. Zendesk rose from Visionary to Leader; Pegasystems dropped the other direction — the market is moving fast.",
              },
              {
                num: "03",
                title: "Proven ROI requires realistic timelines",
                body: "Enterprise AI platforms should deliver positive ROI within 12–18 months. Demand vendor evidence beyond pilot results — ask for P&L impact data from production deployments, not demos.",
              },
              {
                num: "04",
                title: "Governance is your competitive advantage",
                body: "With EU AI Act fully effective August 2026 and AI governance spending approaching $500M globally, embedded compliance capabilities are no longer optional. 46% of software buyers chose vendors specifically for security certifications.",
              },
              {
                num: "05",
                title: "Composable architecture preserves your optionality",
                body: "In a market where vendor rankings shift dramatically year over year, API-first modular design is strategic insurance. The 2025 MACH Alliance research predicts 61% of enterprise tech stacks will be MACH-based by 2026.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-5 p-5 bg-[#2a2a2a] rounded-xl group hover:bg-[#303030] transition-colors">
                <div className="text-2xl font-bold text-[#5644D8]/40 flex-shrink-0 w-8">{num}</div>
                <div>
                  <h3 className="font-semibold mb-1.5">{title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ ROI BENCHMARKS ══════════════ */}
        <section id="roi" className="bg-[#1f1f1f] rounded-2xl p-8">
          <SectionHead
            icon="📈"
            title="Proven ROI — What the Data Actually Says"
            subtitle="Real numbers from enterprise deployments. Use these as your baseline when evaluating vendor claims."
          />

          {/* Big stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-[#2a2a2a] rounded-xl divide-x divide-white/5">
            <Stat value="212%" label="Total ROI over 3 years (Forrester TEI, Five9)" />
            <Stat value="$14.5M" label="Net Present Value for 500-agent org" />
            <Stat value="68%" label="Average cost reduction after AI implementation" />
            <Stat value="$3.50" label="ROI per dollar invested (avg) — top performers reach $8+" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["⚡", "120 sec saved", "Per interaction with AI assist (Forrester TEI)"],
              ["💰", "$0.20 vs $5.50", "Cost per AI interaction vs. human-only handling"],
              ["📉", "30% less turnover", "Agent turnover reduction with AI-augmented workflows"],
              ["📞", "4 min vs 6 hrs", "Response time improvement with AI-enabled platforms"],
              ["🛍️", "250% higher", "Purchase rates for customers using multiple channels"],
              ["🔒", "89% retention", "Omnichannel customer retention vs. single-channel peers"],
            ].map(([icon, value, label]) => (
              <div key={label as string} className="flex items-start gap-4 p-4 bg-[#2a2a2a] rounded-xl">
                <span className="text-xl">{icon as string}</span>
                <div>
                  <div className="font-semibold text-[#a394f0] mb-0.5">{value as string}</div>
                  <div className="text-xs text-white/55">{label as string}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 bg-[#5644D8]/10 border border-[#5644D8]/20 rounded-xl text-sm text-white/70 leading-relaxed">
            <strong className="text-[#a394f0]">Aberdeen Research:</strong> Firms with smart self-service achieve 2.2× greater decrease in customer effort, 39% greater YoY CSAT increase, and <strong className="text-white">9.3% annual revenue growth</strong> vs. 4.3% for peers.
          </div>
        </section>

        {/* ══════════════ AGENTIC AI REALITY CHECK ══════════════ */}
        <section className="bg-[#1f1f1f] rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <SectionHead
                icon="🤖"
                title="Agentic AI: Promise vs. Proven Delivery"
                subtitle="Early adopters report 27% revenue increase, 21% cost reduction, and 35% CSAT improvement. But the hype is real — know how to cut through it."
              />
              <div className="space-y-3 mb-6">
                {[
                  ["The opportunity", "By 2029, agentic AI will autonomously resolve 80% of common service issues, driving 30% cost reduction (Gartner)"],
                  ["The risk", "Only ~130 of thousands of claimed agentic AI vendors offer genuine autonomous capabilities. The rest is 'agent washing'."],
                  ["Agent-assist today", "39.4% adoption rate — reduces average handle time by 27.2% in live deployments"],
                  ["Human preference", "85% of consumers still prefer human interaction in complex situations — hybrid design wins"],
                ].map(([label, text]) => (
                  <div key={label as string} className="flex gap-3 text-sm">
                    <CheckCircle2 className="size-4 text-[#5644D8] flex-shrink-0 mt-0.5" />
                    <div><span className="text-white/40">{label as string}: </span><span className="text-white/70">{text as string}</span></div>
                  </div>
                ))}
              </div>
              <div className="bg-[#2a2a2a] rounded-xl p-4">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Ask every vendor</p>
                <ul className="space-y-1.5">
                  {[
                    "What % of your AI is genuinely autonomous vs. rebranded rules engines?",
                    "Can you demo agentic capabilities in live production — not a sandbox?",
                    "What governance frameworks manage AI lifecycle and drift?",
                    "Show real customer P&L impact, not just pilot results.",
                  ].map((q) => (
                    <li key={q} className="flex gap-2 text-xs text-white/60">
                      <span className="text-[#5644D8]">→</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img src={imgAiChat} alt="AI Chat Interface" className="w-full h-full object-cover min-h-72" />
          </div>
        </section>

        {/* ══════════════ 5-DIMENSION FRAMEWORK ══════════════ */}
        <section id="framework" className="border border-[#5644D8]/30 bg-[#5644D8]/5 rounded-2xl p-8">
          <SectionHead
            icon="🔬"
            title="Five-Dimension Evaluation Framework"
            subtitle="Based on the Concentrix Enterprise Evaluation Framework (Feb 2026). Score each vendor across all five dimensions — no shortcuts."
          />
          <div className="space-y-4">
            {[
              {
                icon: <Zap className="size-5 text-[#5644D8]" />,
                dim: "Architecture & Modularity",
                questions: ["Is it MACH-compliant (Microservices, API-first, Cloud-native, Headless)?", "Can you swap components without full platform migration?", "What's the average CCaaS deployment time? (Benchmark: 29 days cloud-native; 3–6 months complex)"],
              },
              {
                icon: <TrendingUp className="size-5 text-[#5644D8]" />,
                dim: "Agentic Capabilities",
                questions: ["Does AI genuinely plan, act, and adapt — or just route?", "What's the production deflection rate? (Benchmark: 45%+ in retail/travel)", "How do you prevent 'shadow AI' and configuration sprawl?"],
              },
              {
                icon: <Users className="size-5 text-[#5644D8]" />,
                dim: "Human-in-the-Loop Design",
                questions: ["Are escalation paths configurable and auditable?", "Can agents override AI decisions in real time?", "How does the platform support agent wellbeing and reduce burnout?"],
              },
              {
                icon: <ShieldCheck className="size-5 text-[#5644D8]" />,
                dim: "Governance & Trust",
                questions: ["Is EU AI Act compliance embedded — not bolted on?", "Do they hold SOC 2 Type II, ISO 27001, and PCI DSS v4.0?", "Can you verify data residency and AI model jurisdiction?"],
              },
              {
                icon: <CheckCircle2 className="size-5 text-[#5644D8]" />,
                dim: "Operational Proof",
                questions: ["Can they demonstrate platform uptime >99.99%?", "Do they have documented case studies with P&L impact from companies like yours?", "What is their track record in your specific industry vertical?"],
              },
            ].map(({ icon, dim, questions }) => (
              <div key={dim} className="bg-[#1f1f1f] rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  {icon}
                  <h3 className="font-semibold">{dim}</h3>
                </div>
                <ul className="space-y-1.5">
                  {questions.map((q) => (
                    <li key={q} className="flex gap-2 text-sm text-white/60">
                      <span className="text-[#5644D8] flex-shrink-0">›</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ ARCHITECTURE ══════════════ */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <SectionHead
            icon="🏗️"
            title="Architecture: Composable vs. Monolithic"
            subtitle="61% of enterprise tech stacks will be MACH-based by 2026. The other 39% will spend 2026 regretting legacy lock-in."
          />
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-[#2a2a2a] rounded-xl border border-[#5644D8]/20">
              <h3 className="text-sm font-semibold text-[#a394f0] mb-3">✓ Composable (MACH)</h3>
              <ul className="space-y-2 text-sm text-white/60">
                {["Swap components without full migration", "API-first — integrates with your CRM/ERP stack", "Deploy new capabilities in days, not months", "Data portability — export anytime in open formats", "Multi-cloud strategy reduces single-vendor risk"].map(i => (
                  <li key={i} className="flex gap-2"><span className="text-[#5644D8]">+</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="p-5 bg-[#2a2a2a] rounded-xl border border-red-500/20">
              <h3 className="text-sm font-semibold text-red-400 mb-3">✗ Monolithic (Legacy)</h3>
              <ul className="space-y-2 text-sm text-white/60">
                {["83% of data migrations fail or exceed budget", "Integration complexity affects 67% of deployments", "Configuration sprawl slows every change", "Vendor lock-in via proprietary data formats", "Average complex migration: 3–12+ months"].map(i => (
                  <li key={i} className="flex gap-2"><span className="text-red-400">−</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-4 bg-[#2a2a2a] rounded-xl text-sm text-white/60">
            <strong className="text-white">The market is moving:</strong> Pegasystems fell from Leader to Visionary in Gartner's CRM CEC Magic Quadrant. Zendesk rose from Visionary to Leader. In a market shifting this fast, composable architecture is your strategic insurance.
          </div>
        </section>

        {/* ══════════════ OMNICHANNEL ══════════════ */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <SectionHead
            icon="🔗"
            title="Omnichannel Maturity: The Business Case"
            subtitle="73% of shoppers use multiple channels. The data on what happens when you serve them well — or don't — is unambiguous."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["250% higher", "Purchase rates for omnichannel customers vs. single-channel", "📊"],
              ["89% retention", "Omnichannel companies retain customers vs. 33% for single-channel peers", "🔒"],
              ["30% higher", "Customer lifetime value with true omnichannel delivery", "💎"],
              ["45%+ deflection", "AI deflection rate for incoming queries (50%+ in retail & travel)", "🤖"],
              ["6 hrs → 4 min", "Response time improvement with AI-enabled platforms", "⚡"],
              ["True vs. Multi", "True omnichannel = one unified workspace. Multichannel = siloed data. Know the difference.", "⚠️"],
            ].map(([value, desc, icon]) => (
              <div key={value as string} className="flex items-start gap-4 p-4 bg-[#2a2a2a] rounded-xl">
                <span className="text-xl">{icon as string}</span>
                <div>
                  <div className="font-semibold text-[#a394f0] mb-0.5">{value as string}</div>
                  <div className="text-xs text-white/55 leading-snug">{desc as string}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ COMPLIANCE ══════════════ */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <SectionHead
            icon="🛡️"
            title="Compliance & Digital Sovereignty"
            subtitle="Security is now the second most important purchasing factor for enterprise software buyers (Gartner). 46% chose their current vendor specifically for security certifications."
          />
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {[
              ["End-to-end encryption", "Voice + messaging secured at rest and in transit"],
              ["Built-in compliance", "GDPR, CCPA, HIPAA, EU AI Act — embedded, not bolted on"],
              ["SOC 2 Type II + ISO 27001", "Non-negotiable certifications for enterprise deployments"],
              ["PCI DSS v4.0", "Required for any platform handling payment-adjacent data"],
              ["Data residency controls", "AI model jurisdiction + cross-border transfer protections"],
              ["Role-based access (RBAC)", "Immutable audit logs + SIEM integration for full traceability"],
            ].map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3 p-4 bg-[#2a2a2a] rounded-xl">
                <div className="w-0.5 h-10 rounded-full bg-[#5644D8] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold mb-0.5">{title}</h3>
                  <p className="text-xs text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-sm">
            <strong className="text-amber-400">EU AI Act milestones:</strong>
            <div className="mt-2 space-y-1 text-white/60 text-xs">
              <div><span className="text-white/40">Feb 2, 2025 ✓</span> — Prohibited AI practices + literacy obligations</div>
              <div><span className="text-white/40">Aug 2, 2025 ✓</span> — General-purpose AI transparency rules</div>
              <div><span className="text-amber-400 font-semibold">Aug 2, 2026 ⚠</span> — Full enforcement. Fines up to €35M or 7% of global revenue</div>
            </div>
          </div>
        </section>

        {/* ══════════════ SCALABILITY ══════════════ */}
        <section className="bg-[#1f1f1f] rounded-2xl overflow-hidden">
          <div className="p-8">
            <SectionHead
              icon="📈"
              title="Scalability & Operational Excellence"
              subtitle="67% of support leaders cite scalability as their #1 priority. The CX platform market reaches $15.5–22.4B in 2025, growing at 10–16% CAGR — your platform must grow with you."
            />
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              {[
                ["📊", ">99.99% uptime", "SOC 2 compliant SLA — non-negotiable for enterprise"],
                ["🌍", "Global infrastructure", "Multi-region deployment with data residency controls per market"],
                ["⚙️", "Low-code builders", "Custom workflows + industry-specific logic without engineering bottlenecks"],
              ].map(([icon, title, desc]) => (
                <div key={title as string} className="bg-[#2a2a2a] p-5 rounded-xl">
                  <div className="text-xl mb-3">{icon as string}</div>
                  <h3 className="text-sm font-semibold mb-1">{title as string}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{desc as string}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#2a2a2a] p-5 rounded-xl">
              <h3 className="text-sm font-semibold mb-1.5 text-[#a394f0]">Analytics & real-time insights</h3>
              <p className="text-sm text-white/60 leading-relaxed">Real-time dashboards tracking FRT, AHT, and full customer journey maps. AI-powered analytics that identify at-risk customers before churn — not after. Governance dashboards for AI model performance and compliance posture.</p>
            </div>
          </div>
          <img src={imgScalability} alt="Scalability dashboard" className="w-full object-cover max-h-72" />
        </section>

        {/* ══════════════ RED FLAGS ══════════════ */}
        <section id="redflags" className="border border-red-500/30 bg-red-500/5 rounded-2xl p-8">
          <SectionHead
            icon="⚠️"
            title="Red Flags: Walk Away From Vendors That..."
            subtitle="These are the vendor behaviors that correlate most strongly with failed deployments and wasted investment."
          />
          <div className="space-y-3">
            {[
              ["Can't show production P&L impact", "Pilot results and demos don't pay your bills. Demand proof from live, at-scale deployments in your industry."],
              ["Claim 'agentic AI' without proof", "Only ~130 of thousands of claimed agentic AI vendors deliver genuine autonomous capabilities. Ask for a production demo."],
              ["Use proprietary data formats", "Lock-in via proprietary formats means your data is a hostage. 83% of migrations that start from these fail or overrun budget."],
              ["Have no clear compliance roadmap", "EU AI Act is not optional from August 2026. A vendor without an embedded compliance strategy is your liability."],
              ["Can't demonstrate industry-specific expertise", "Generic CX platforms underperform in verticals. Ask for references from companies your size in your sector."],
              ["Offer long migration timelines as normal", "Cloud-native CCaaS deployments benchmark at 29 days. If they quote 6–12 months as standard, ask why."],
            ].map(([title, desc]) => (
              <div key={title as string} className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <AlertTriangle className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold mb-0.5">{title as string}</h3>
                  <p className="text-xs text-white/55 leading-snug">{desc as string}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ 4-PHASE DECISION PROCESS ══════════════ */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <SectionHead
            icon="🗓️"
            title="Your 14-Week Decision Process"
            subtitle="A structured approach from internal alignment to signed contract. Skip phases at your own risk."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { phase: "Phase 1", weeks: "Wks 1–2", title: "Internal Alignment", items: ["Define success metrics", "Map current pain points", "Align stakeholders across support, IT, marketing, sales"] },
              { phase: "Phase 2", weeks: "Wks 3–6", title: "Vendor Discovery", items: ["Score vendors on all 5 dimensions", "Request production case studies", "Issue structured RFI/RFP"] },
              { phase: "Phase 3", weeks: "Wks 7–10", title: "Technical Validation", items: ["Run POC in your environment", "Test integrations with your CRM/ERP stack", "Validate compliance documentation"] },
              { phase: "Phase 4", weeks: "Wks 11–14", title: "Decision & Contract", items: ["Negotiate SLAs tied to your benchmarks", "Confirm exit rights and data portability", "Define implementation milestones"] },
            ].map(({ phase, weeks, title, items }) => (
              <div key={phase} className="bg-[#2a2a2a] rounded-xl p-5">
                <div className="text-xs text-[#a394f0] font-semibold mb-1">{phase} · {weeks}</div>
                <h3 className="font-semibold mb-3">{title}</h3>
                <ul className="space-y-1.5">
                  {items.map(i => (
                    <li key={i} className="flex gap-2 text-xs text-white/55">
                      <span className="text-[#5644D8]">›</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ CTA ══════════════ */}
        <section id="contact" className="relative text-center py-16 px-8 bg-gradient-to-br from-[#1c1840] to-[#1f1f1f] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #5644D8 0%, transparent 60%), radial-gradient(circle at 80% 20%, #a394f0 0%, transparent 50%)" }} />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">The Agentic CS Platform Behind Exceptional Ecommerce Brands</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
              Resolve issues faster with agentic AI and intelligent handovers. Built for ecommerce brands where customer experience is the bread and butter.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.dixa.com/demo?utm_source=intent-signal&utm_medium=pdf-buyer-guide"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#5644D8] text-white rounded-full font-bold hover:bg-[#4535c7] transition-colors"
              >
                Talk to Dixa <ArrowRight className="size-4" />
              </a>
            </div>
            <p className="text-white/30 text-xs mt-6">Sources: Gartner Magic Quadrant CCaaS 2025, Forrester Wave CCaaS Q2 2025, Metrigy CX Optimization Study 2025–26, IDC, Aberdeen, McKinsey</p>
          </div>
        </section>

      </div>
    </div>
  );
}
