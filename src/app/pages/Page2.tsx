import { Navigation } from "../components/Navigation";
import { DixaLogo } from "../components/DixaLogo";
import chatImage from "@/assets/2ca0310c81f5502debf0b41d0600c387c2291e39.png";

export default function Page2() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 px-8 py-6 z-10 bg-[#2a2a2a]/80 backdrop-blur-sm">
        <DixaLogo />
      </header>

      <div className="pt-32 px-8 max-w-7xl mx-auto space-y-12">
        {/* Data Arkitektur */}
        <section className="bg-[#1f1f1f] rounded-3xl p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">📊</div>
            <div>
              <h2 className="text-3xl mb-4">Data Architecture & Real-Time Orchestration</h2>
              <p className="text-white/70 text-lg mb-6">
                In 2026, customers expect brands to recognize their intent instantly and adjust the experience immediately - real-time orchestration means combining live behavioral data, AI decision-making, and dynamic content in one continuous system.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2a2a2a] p-6 rounded-xl border-l-4 border-[#4dd4d4]">
              <h3 className="text-xl mb-3">Unified customer profiles</h3>
              <p className="text-white/70">
                Consolidated data from all touchpoints in one real-time view
              </p>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl border-l-4 border-[#4dd4d4]">
              <h3 className="text-xl mb-3">Customer Data Platform (CDP)</h3>
              <p className="text-white/70">
                CDPs drive personalization, analytics, and AI across the entire organization
              </p>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl border-l-4 border-[#4dd4d4]">
              <h3 className="text-xl mb-3">Data consolidation</h3>
              <p className="text-white/70">
                The ability to ingest, unify, and analyze multiple touchpoints
              </p>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl border-l-4 border-[#4dd4d4]">
              <h3 className="text-xl mb-3">Predictive capabilities</h3>
              <p className="text-white/70">
                Models that predict behavior and feed downstream workflows
              </p>
            </div>
          </div>
        </section>

        {/* Menneske + AI */}
        <section className="bg-[#1f1f1f] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🤝</div>
                <h2 className="text-3xl">Human + AI Hybrid Model</h2>
              </div>
              <p className="text-white/70 text-lg mb-6">
                AI will run more of the work behind the scenes, but winning brands will be those that use it to make human experiences better, not make them disappear.
              </p>

              <div className="space-y-4">
                <div className="bg-[#2a2a2a] p-4 rounded-xl">
                  <h3 className="text-lg mb-2 text-[#4dd4d4]">AI Copilot capabilities</h3>
                  <p className="text-white/60 text-sm">
                    Handles repetitive tasks so agents can focus on complex problems
                  </p>
                </div>

                <div className="bg-[#2a2a2a] p-4 rounded-xl">
                  <h3 className="text-lg mb-2 text-[#4dd4d4]">Escalation paths</h3>
                  <p className="text-white/60 text-sm">
                    Clear rules for when AI hands over to humans
                  </p>
                </div>

                <div className="bg-[#2a2a2a] p-4 rounded-xl">
                  <h3 className="text-lg mb-2 text-[#4dd4d4]">Agent empowerment</h3>
                  <p className="text-white/60 text-sm">
                    AI accelerates work while human judgment ensures quality
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[400px]">
              <img
                src={chatImage}
                alt="AI Chat Interface"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Omnichannel */}
        <section className="bg-[#1f1f1f] rounded-3xl p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">🔗</div>
            <div>
              <h2 className="text-3xl mb-4">Omnichannel & Integration</h2>
              <p className="text-white/70 text-lg mb-6">
                True omnichannel connects all the dots - unlike multichannel (separate silos) where a customer who asks on WhatsApp and then calls gets their full chat history instantly shown to the agent.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4">
              <div className="w-6 h-6 rounded-full bg-[#4dd4d4] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#2a2a2a] text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg mb-1">True omnichannel</h3>
                <p className="text-white/60 text-sm">Built-from-ground-up solution with unified workspace</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="w-6 h-6 rounded-full bg-[#4dd4d4] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#2a2a2a] text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg mb-1">Seamless integrations</h3>
                <p className="text-white/60 text-sm">Pre-built connectors without major disruptions</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="w-6 h-6 rounded-full bg-[#4dd4d4] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#2a2a2a] text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg mb-1">API & connectors</h3>
                <p className="text-white/60 text-sm">Well-documented APIs for CRM, contact center, ERP</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="w-6 h-6 rounded-full bg-[#4dd4d4] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#2a2a2a] text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg mb-1">Context preservation</h3>
                <p className="text-white/60 text-sm">Context follows across channels</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sikkerhed */}
        <section className="bg-[#1f1f1f] rounded-3xl p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">🛡️</div>
            <div>
              <h2 className="text-3xl mb-4">Security, Compliance & Privacy</h2>
              <p className="text-white/70 text-lg mb-6">
                In 2026 and beyond, security isn't optional - it's your license to operate globally.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-1 h-12 bg-[#4dd4d4] rounded-full" />
              <div className="flex-1">
                <h3 className="text-lg">End-to-end encryption</h3>
                <p className="text-white/60 text-sm">Voice + messaging secured at rest and in transit</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-1 h-12 bg-[#4dd4d4] rounded-full" />
              <div className="flex-1">
                <h3 className="text-lg">Built-in compliance</h3>
                <p className="text-white/60 text-sm">GDPR, CCPA, HIPAA compliance - not bolted on</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-1 h-12 bg-[#4dd4d4] rounded-full" />
              <div className="flex-1">
                <h3 className="text-lg">Role-based access control (RBAC)</h3>
                <p className="text-white/60 text-sm">Agents see only what they need</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-1 h-12 bg-[#4dd4d4] rounded-full" />
              <div className="flex-1">
                <h3 className="text-lg">Zero-trust framework</h3>
                <p className="text-white/60 text-sm">
                  Precise control over data, network access, and residency
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-1 h-12 bg-[#4dd4d4] rounded-full" />
              <div className="flex-1">
                <h3 className="text-lg">Audit trails</h3>
                <p className="text-white/60 text-sm">
                  Immutable audit logs and integration with SIEM systems
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Navigation />
      <div className="fixed top-8 right-8 text-white/50 text-sm">2 / 3</div>
    </div>
  );
}