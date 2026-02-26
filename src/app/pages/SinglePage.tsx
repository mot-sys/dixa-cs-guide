import { DixaLogo } from "../components/DixaLogo";
import { AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";
import imgHero from "@/assets/img-hero.png";
import imgVendor from "@/assets/img-vendor.png";
import imgAiChat from "@/assets/img-ai-chat.png";

export default function SinglePage() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 px-10 py-5 z-10 bg-[#2a2a2a]/90 backdrop-blur-sm border-b border-white/5">
        <DixaLogo />
      </header>

      <div className="max-w-5xl mx-auto px-10 py-16 space-y-10">

        {/* Hero */}
        <section className="pb-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm mb-5">
              Guide for CS Leaders • 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
              CX Platform <span className="text-[#4dd4d4]">Evaluation Guide</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              The defining question of 2026: How do you choose the right CX platform in the AI era?
            </p>
          </div>
          <div>
            <img src={imgHero} alt="Dixa CX Platform" className="rounded-2xl w-full object-cover shadow-2xl" />
          </div>
        </section>

        {/* ── Section 1: AI Platform ── */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">🤖</span>
            <div>
              <h2 className="text-2xl font-semibold mb-3">AI-Platform vs. Point Solutions</h2>
              <p className="text-white/60 leading-relaxed">
                The defining question in 2026 isn't who has the most AI features, but who has built a true CX AI platform that orchestrates intelligence across channels, teams, and decisions — while keeping humans in control.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Agentic workflows", "Systems that can act autonomously across customer journeys"],
              ["Modular AI components", "AI agents, copilots, orchestration layers that can evolve independently"],
              ["Human-in-the-loop design", "Clear escalation paths and human overrides for complexity"],
              ["Native AI integration", "AI delivers most value when native to the platform and enhancing agent workflows"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#2a2a2a] p-5 rounded-xl">
                <h3 className="text-base font-medium mb-1.5 text-[#4dd4d4]">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: Digital Sovereignty ── */}
        <section className="bg-[#1f1f1f] rounded-2xl overflow-hidden">
          <img src={imgVendor} alt="Vendor Lock-in" className="w-full object-cover max-h-64" />
          <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">🔐</span>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Digital Sovereignty &amp; Vendor Lock-in</h2>
              <p className="text-white/60 leading-relaxed">
                For global companies, digital sovereignty will be a competitive advantage in 2026 — it determines whether a business can control its own data protection, performance, and scalability.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              ["Composable architecture", "Modular, open, and headless systems"],
              ["Multi-cloud strategy", "Distribution of workloads to reduce dependency on a single provider"],
              ["Exit scenarios", "Prepared pathways to migrate data if external circumstances require it"],
              ["Open standards", "Use open standards like containers and Infrastructure-as-Code"],
              ["Data portability", "Ability to export data anytime in industry-standard formats"],
            ].map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3 p-4 bg-[#2a2a2a] rounded-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4dd4d4] flex-shrink-0 mt-2" />
                <div>
                  <h3 className="text-sm font-medium mb-0.5">{title}</h3>
                  <p className="text-sm text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* ── Section 3: Data Architecture ── */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">📊</span>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Data Architecture &amp; Real-Time Orchestration</h2>
              <p className="text-white/60 leading-relaxed">
                Real-time orchestration means combining live behavioral data, AI decision-making, and dynamic content in one continuous system.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Unified customer profiles", "Consolidated data from all touchpoints in one real-time view"],
              ["Customer Data Platform (CDP)", "CDPs drive personalization, analytics, and AI across the entire org"],
              ["Data consolidation", "The ability to ingest, unify, and analyze multiple touchpoints"],
              ["Predictive capabilities", "Models that predict behavior and feed downstream workflows"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#2a2a2a] p-5 rounded-xl border-l-4 border-[#4dd4d4]">
                <h3 className="text-sm font-medium mb-1.5">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: Human + AI ── */}
        <section className="bg-[#1f1f1f] rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">🤝</span>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Human + AI Hybrid Model</h2>
              <p className="text-white/60 leading-relaxed">
                Winning brands will use AI to make human experiences better — not make them disappear.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["AI Copilot capabilities", "Handles repetitive tasks so agents can focus on complex problems"],
              ["Escalation paths", "Clear rules for when AI hands over to humans"],
              ["Agent empowerment", "AI accelerates work while human judgment ensures quality"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#2a2a2a] p-5 rounded-xl">
                <h3 className="text-sm font-medium mb-1.5 text-[#4dd4d4]">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
            </div>
            <img src={imgAiChat} alt="AI Chat Interface" className="w-full h-full object-cover min-h-64" />
          </div>
        </section>

        {/* ── Section 5: Omnichannel ── */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">🔗</span>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Omnichannel &amp; Integration</h2>
              <p className="text-white/60 leading-relaxed">
                True omnichannel connects all the dots — a customer who asks on WhatsApp and then calls gets their full chat history instantly shown to the agent.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["True omnichannel", "Built-from-ground-up solution with unified workspace"],
              ["Seamless integrations", "Pre-built connectors without major disruptions"],
              ["API & connectors", "Well-documented APIs for CRM, contact center, ERP"],
              ["Context preservation", "Context follows across channels"],
            ].map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3 p-4">
                <div className="w-5 h-5 rounded-full bg-[#4dd4d4] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#2a2a2a] text-xs font-bold">✓</div>
                <div>
                  <h3 className="text-sm font-medium mb-0.5">{title}</h3>
                  <p className="text-sm text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6: Security ── */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">🛡️</span>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Security, Compliance &amp; Privacy</h2>
              <p className="text-white/60 leading-relaxed">
                In 2026 and beyond, security isn't optional — it's your license to operate globally.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              ["End-to-end encryption", "Voice + messaging secured at rest and in transit"],
              ["Built-in compliance", "GDPR, CCPA, HIPAA compliance — not bolted on"],
              ["Role-based access control (RBAC)", "Agents see only what they need"],
              ["Zero-trust framework", "Precise control over data, network access, and residency"],
              ["Audit trails", "Immutable audit logs and integration with SIEM systems"],
            ].map(([title, desc]) => (
              <div key={title} className="flex items-center gap-4 p-4 bg-[#2a2a2a] rounded-xl">
                <div className="w-0.5 h-10 rounded-full bg-[#4dd4d4] flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium">{title}</h3>
                  <p className="text-sm text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 7: Scalability ── */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">📈</span>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Scalability &amp; Operational Excellence</h2>
              <p className="text-white/60">67% of support leaders say scalability and flexibility are their top priorities in 2026.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              ["📊", "Platform uptime", ">99.99% with SOC2 compliance"],
              ["🌍", "Global reach", "Platforms that work wherever your customers are"],
              ["⚙️", "Customization", "Low-code builders for custom workflows"],
            ].map(([icon, title, desc]) => (
              <div key={title as string} className="bg-[#2a2a2a] p-5 rounded-xl">
                <div className="text-xl mb-3">{icon}</div>
                <h3 className="text-sm font-medium mb-1">{title as string}</h3>
                <p className="text-sm text-white/60">{desc as string}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#2a2a2a] p-5 rounded-xl">
            <h3 className="text-sm font-medium mb-1.5 text-[#4dd4d4]">Analytics &amp; insights</h3>
            <p className="text-sm text-white/60 leading-relaxed">Real-time dashboards tracking FRT, AHT, customer journey maps, and AI-powered analytics that predict at-risk customers before they churn.</p>
          </div>
        </section>

        {/* ── Section 8: Governance ── */}
        <section className="bg-[#1f1f1f] rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">💡</span>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Governance &amp; Observability</h2>
              <p className="text-white/60 leading-relaxed">
                Platforms that win in 2026 maintain visibility, trust, and control across the entire experience lifecycle.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Governance by design", "Visibility into decisions, compliance controls, performance across AI systems"],
              ["Model performance tracking", "Models must forecast behavior"],
              ["Transparent change management", "Clearly documented release processes"],
              ["Vendor SLAs", "Service level agreements for security, uptime, and incident response"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#2a2a2a] p-5 rounded-xl">
                <h3 className="text-sm font-medium mb-1.5">{title}</h3>
                <p className="text-sm text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 9: Evaluation Process ── */}
        <section className="border border-[#4dd4d4]/30 bg-[#4dd4d4]/5 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-8">
            <span className="text-3xl">🎯</span>
            <h2 className="text-2xl font-semibold">Evaluation Process</h2>
          </div>
          <div className="space-y-6">
            {[
              ["Define your goals", "Start by defining organizational goals and identifying specific customer experience challenges"],
              ["Engage stakeholders", "Involve people from customer support, marketing, sales, and IT early"],
              ["Run pilots", "Evaluate partners on long-term fit — not just build phase, but ongoing co-management"],
            ].map(([title, desc], i) => (
              <div key={title} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#4dd4d4] text-[#2a2a2a] flex items-center justify-center font-bold flex-shrink-0 text-sm">{i + 1}</div>
                <div>
                  <h3 className="font-medium mb-1">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#4dd4d4] text-[#2a2a2a] flex items-center justify-center font-bold flex-shrink-0 text-sm">4</div>
              <div>
                <h3 className="font-medium mb-2">Ask critical questions</h3>
                <ul className="space-y-2">
                  {[
                    "How is the data architecture structured to support real-time modeling?",
                    "What measurable outcomes can you demonstrate?",
                    "How quickly can you integrate into our CRM/contact-center stack?",
                    "How do you avoid \"AI washing\"?",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-2 text-sm text-white/60">
                      <CheckCircle2 className="size-4 text-[#4dd4d4] flex-shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 10: Red Flags ── */}
        <section className="border border-red-500/30 bg-red-500/5 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">⚠️</span>
            <div>
              <h2 className="text-2xl font-semibold mb-1">Red Flags</h2>
              <p className="text-white/60 text-sm">Avoid platforms that:</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              "Only offer features without proven operational scale",
              "Cannot demonstrate industry-specific expertise",
              "Have proprietary formats that lock you in",
              "Lack clear governance frameworks",
              "Cannot show real business impact with case studies",
            ].map((flag) => (
              <div key={flag} className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <AlertTriangle className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">{flag}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Ready for the next step?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            With these evaluation criteria, you can ensure your CX platform not only meets today's needs, but is built to scale and adapt to tomorrow's demands.
          </p>
          <a href="https://dixa.com" className="inline-block px-8 py-3 bg-[#4dd4d4] text-[#2a2a2a] rounded-full font-semibold hover:bg-[#3dbdbd] transition-colors">
            Contact us today
          </a>
        </section>

      </div>
    </div>
  );
}
