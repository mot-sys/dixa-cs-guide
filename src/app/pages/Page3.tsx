import { Navigation } from "../components/Navigation";
import { DixaLogo } from "../components/DixaLogo";
import { AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";

export default function Page3() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 px-8 py-6 z-10 bg-[#2a2a2a]/80 backdrop-blur-sm">
        <DixaLogo />
      </header>

      <div className="pt-32 px-8 max-w-7xl mx-auto space-y-12">
        {/* Skalerbarhed */}
        <section className="bg-[#1f1f1f] rounded-3xl p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">📈</div>
            <div>
              <h2 className="text-3xl mb-4">Scalability & Operational Excellence</h2>
              <p className="text-white/70 text-lg mb-6">
                67% of support leaders say scalability and flexibility are their top priorities in 2026.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#4dd4d4]/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="size-6 text-[#4dd4d4]" />
              </div>
              <h3 className="text-xl mb-3">Platform uptime</h3>
              <p className="text-white/70">&gt;99.99% with SOC2 compliance</p>
            </div>

            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#4dd4d4]/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="size-6 text-[#4dd4d4]" />
              </div>
              <h3 className="text-xl mb-3">Global reach</h3>
              <p className="text-white/70">
                Your 2026 growth requires platforms that work wherever your customers are
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#4dd4d4]/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="size-6 text-[#4dd4d4]" />
              </div>
              <h3 className="text-xl mb-3">Customization</h3>
              <p className="text-white/70">
                Low-code builders for custom workflows and industry-specific logic
              </p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-[#2a2a2a] rounded-xl">
            <h3 className="text-xl mb-3 text-[#4dd4d4]">Analytics & insights</h3>
            <p className="text-white/70">
              Real-time dashboards tracking FRT, AHT, customer journey maps, and AI-powered analytics that predict at-risk customers before they churn.
            </p>
          </div>
        </section>

        {/* Governance */}
        <section className="bg-[#1f1f1f] rounded-3xl p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">💡</div>
            <div>
              <h2 className="text-3xl mb-4">Governance & Observability</h2>
              <p className="text-white/70 text-lg mb-6">
                Platforms that win in 2026 allow AI to act autonomously where appropriate, bring humans into moments of judgment, and maintain visibility, trust, and control across the entire experience lifecycle.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-xl mb-3">Governance by design</h3>
              <p className="text-white/70">
                Visibility into decisions, compliance controls, performance across AI systems
              </p>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-xl mb-3">Model performance tracking</h3>
              <p className="text-white/70">Models must forecast behavior</p>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-xl mb-3">Transparent change management</h3>
              <p className="text-white/70">Clearly documented release processes</p>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-xl mb-3">Vendor SLAs</h3>
              <p className="text-white/70">
                Service level agreements related to security, uptime, and incident response
              </p>
            </div>
          </div>
        </section>

        {/* Evaluationsproces */}
        <section className="bg-gradient-to-br from-[#4dd4d4]/10 to-transparent border border-[#4dd4d4]/30 rounded-3xl p-12">
          <div className="flex items-start gap-4 mb-8">
            <div className="text-4xl">🎯</div>
            <h2 className="text-3xl">Evaluation Process</h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#4dd4d4] text-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl mb-2">Define your goals</h3>
                <p className="text-white/70">
                  Start by defining organizational goals and identifying specific customer experience challenges
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#4dd4d4] text-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl mb-2">Engage stakeholders</h3>
                <p className="text-white/70">
                  Involve people from customer support, marketing, sales, and IT early
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#4dd4d4] text-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl mb-2">Run pilots</h3>
                <p className="text-white/70">
                  Evaluate partners on whether they'll be there for the long term - not just a build phase, but an ongoing co-management relationship
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#4dd4d4] text-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl mb-2">Ask critical questions</h3>
                <ul className="text-white/70 space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-[#4dd4d4] flex-shrink-0 mt-0.5" />
                    <span>
                      How is the data architecture structured to support real-time modeling?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-[#4dd4d4] flex-shrink-0 mt-0.5" />
                    <span>What measurable outcomes can you demonstrate?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-[#4dd4d4] flex-shrink-0 mt-0.5" />
                    <span>How quickly can you integrate into our CRM/contact-center stack?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-[#4dd4d4] flex-shrink-0 mt-0.5" />
                    <span>How do you avoid "AI washing"?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-3xl p-12">
          <div className="flex items-start gap-4 mb-8">
            <div className="text-4xl">⚠️</div>
            <h2 className="text-3xl">Red Flags</h2>
          </div>

          <p className="text-white/70 text-lg mb-6">Avoid platforms that:</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
              <AlertTriangle className="size-6 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">
                Only offer features without proven operational scale
              </p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
              <AlertTriangle className="size-6 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">Cannot demonstrate industry-specific expertise</p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
              <AlertTriangle className="size-6 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">Have proprietary formats that lock you in</p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
              <AlertTriangle className="size-6 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">Lack clear governance frameworks</p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
              <AlertTriangle className="size-6 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">
                Cannot show real business impact with case studies
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6">Ready for the next step?</h2>
            <p className="text-white/70 text-lg mb-8">
              With these evaluation criteria, you can ensure your CX platform not only meets today's needs, but is built to scale and adapt to tomorrow's demands for AI-driven, human-centered, and sovereign customer experience.
            </p>
            <div className="inline-block px-8 py-4 bg-[#4dd4d4] text-[#2a2a2a] rounded-full text-lg hover:bg-[#3dbdbd] transition-colors cursor-pointer">
              Contact us today
            </div>
          </div>
        </section>
      </div>

      <Navigation />
      <div className="fixed top-8 right-8 text-white/50 text-sm">3 / 3</div>
    </div>
  );
}