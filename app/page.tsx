export default function Home() {
  const faqs = [
    {
      q: "How quickly will I get alerted?",
      a: "Endpoints are checked every 60 seconds. You receive an SMS within seconds of a failure being detected."
    },
    {
      q: "What counts as a failure?",
      a: "Any non-2xx HTTP response, a timeout over 10 seconds, or a DNS/connection error triggers an alert."
    },
    {
      q: "Can I silence alerts during maintenance?",
      a: "Yes. You can pause monitoring for any endpoint or set a maintenance window to suppress alerts."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know when your API goes down —{" "}
          <span className="text-[#58a6ff]">before your users do</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor any API endpoint every minute. Get an instant SMS via Twilio the moment it fails or times out, with smart escalation and retry logic built in.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "60-second checks", desc: "Endpoints polled every minute around the clock." },
            { icon: "📱", title: "Instant SMS", desc: "Twilio-powered alerts reach you in seconds." },
            { icon: "🔁", title: "Escalation rules", desc: "Retry logic and multi-contact escalation built in." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Up to 20 monitored endpoints",
              "60-second check intervals",
              "Unlimited SMS alerts via Twilio",
              "Escalation rules & retry logic",
              "Maintenance window support",
              "Email + SMS notifications"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#8b949e] mt-12">
          &copy; {new Date().getFullYear()} API SMS Alerter. Built for developers who care about uptime.
        </p>
      </section>
    </main>
  );
}
