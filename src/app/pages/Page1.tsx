import { Navigation } from "../components/Navigation";
import { DixaLogo } from "../components/DixaLogo";
import heroImage from "@/assets/12543ccbc3d9490d80e11d1dd1a1b2c1bd0a1419.png";

export default function Page1() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 px-8 py-6 z-10">
        <DixaLogo />
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              Guide for CS Leaders • 2026
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              CX Platform <span className="text-[#4dd4d4]">Evaluation Guide</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              The defining question of 2026: How do you choose the right CX platform in the AI era?
            </p>
          </div>
          <div className="relative">
            <img src={heroImage} alt="Dixa Platform" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-[#1f1f1f] rounded-3xl p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">🤖</div>
            <div>
              <h2 className="text-3xl mb-4">AI-Platform vs. Point Solutions</h2>
              <p className="text-white/70 text-lg mb-6">
                The defining question in 2026 isn't who has the most AI features, but who has built a true CX AI platform that orchestrates intelligence across channels, teams, and decisions, while keeping humans in control.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-xl mb-3 text-[#4dd4d4]">Agentic workflows</h3>
              <p className="text-white/70">
                Systems that can act autonomously across customer journeys
              </p>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-xl mb-3 text-[#4dd4d4]">Modular AI components</h3>
              <p className="text-white/70">
                AI agents, copilots, orchestration layers that can evolve independently
              </p>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-xl mb-3 text-[#4dd4d4]">Human-in-the-loop design</h3>
              <p className="text-white/70">
                Clear escalation paths and human overrides for complexity
              </p>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-xl mb-3 text-[#4dd4d4]">Native AI integration</h3>
              <p className="text-white/70">
                AI delivers most value when native to the platform and enhancing agent workflows
              </p>
            </div>
          </div>
        </div>

        {/* Content Section 2 */}
        <div className="bg-[#1f1f1f] rounded-3xl p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">🔐</div>
            <div>
              <h2 className="text-3xl mb-4">Digital Sovereignty & Vendor Lock-in</h2>
              <p className="text-white/70 text-lg mb-6">
                For global companies, digital sovereignty will be a competitive advantage in 2026 - it determines whether a business can control its own data protection, performance, and scalability, or risk operational and financial consequences from vendor lock-in.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-2 h-2 rounded-full bg-[#4dd4d4] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Composable architecture</h3>
                <p className="text-white/60">Modular, open, and headless systems</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-2 h-2 rounded-full bg-[#4dd4d4] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Multi-cloud strategy</h3>
                <p className="text-white/60">
                  Distribution of workloads to reduce dependency on a single provider
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-2 h-2 rounded-full bg-[#4dd4d4] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Exit scenarios</h3>
                <p className="text-white/60">
                  Prepared pathways to migrate data if external circumstances require it
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-2 h-2 rounded-full bg-[#4dd4d4] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Open standards</h3>
                <p className="text-white/60">
                  Use open standards like containers and Infrastructure-as-Code
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#2a2a2a] rounded-xl">
              <div className="w-2 h-2 rounded-full bg-[#4dd4d4] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Data portability</h3>
                <p className="text-white/60">
                  Ability to export data anytime in industry-standard formats
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Navigation />

      {/* Page indicator */}
      <div className="fixed top-8 right-8 text-white/50 text-sm">1 / 3</div>
    </div>
  );
}