import Link from "next/link";

const features = [
  {
    icon: "📍",
    title: "Real-World GPS Chase",
    description:
      "Your city becomes the playing field. Track and hunt using real GPS positions on a live interactive map.",
  },
  {
    icon: "🕵️",
    title: "Agent X vs Detectives",
    description:
      "One player vanishes into the city as Agent X. The rest team up as detectives to track them down.",
  },
  {
    icon: "⚡",
    title: "12 Special Items",
    description:
      "Ghost Mode, Decoys, Radar Pulse, Tracker Drone — use powerful items to outsmart the other side.",
  },
  {
    icon: "🗺️",
    title: "Live Map & Reveals",
    description:
      "Agent X's location is revealed at intervals. Detectives must coordinate to close in before time runs out.",
  },
  {
    icon: "📸",
    title: "Photo Catch Proof",
    description:
      "Get within 50 meters and snap a photo to catch Agent X. No cheap wins — you have to earn it.",
  },
  {
    icon: "🏆",
    title: "Replay & Leaderboards",
    description:
      "Watch every route after the game ends. Climb the leaderboard and track your stats over time.",
  },
];

const agentXItems = [
  { icon: "👻", name: "Ghost Mode", desc: "Skip the next location reveal" },
  { icon: "🎭", name: "Decoy", desc: "Place a fake blip on the detective map" },
  { icon: "🌑", name: "Blackout", desc: "Black out detective screens" },
  { icon: "🌀", name: "Scrambler", desc: "Randomize detective positions" },
  { icon: "🔔", name: "Alarm Trigger", desc: "Vibrate the nearest detective's phone" },
  { icon: "💨", name: "Smoke Screen", desc: "Go invisible to nearby detectives" },
];

const detectiveItems = [
  { icon: "📡", name: "Radar Pulse", desc: "Reveal distance to Agent X" },
  { icon: "🧊", name: "Hot/Cold Compass", desc: "Color indicator of proximity" },
  { icon: "🚁", name: "Tracker Drone", desc: "Exact position for 15 seconds" },
  { icon: "🚨", name: "Siren", desc: "Trigger siren on Agent X's phone" },
  { icon: "🔦", name: "Spotlight", desc: "Illuminate a 150m area" },
  { icon: "📐", name: "Triangulation", desc: "3+ detectives reveal Agent X" },
];

function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Create a Lobby",
      description: "Start a game and share the 6-character code with your friends.",
    },
    {
      step: "2",
      title: "Assign Roles",
      description:
        "One player becomes Agent X. The others become Detectives. Spectators can watch too.",
    },
    {
      step: "3",
      title: "The Hunt Begins",
      description:
        "Agent X gets a 60-second head start to vanish. Then the detectives start tracking.",
    },
    {
      step: "4",
      title: "Catch or Escape",
      description:
        "Detectives must get within 50m and snap a photo. If time runs out, Agent X wins.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary text-center mb-4">
          How It Works
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
          Get a group of friends together, head outside, and start the chase.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="text-text-primary font-semibold mb-2">{s.title}</h3>
              <p className="text-text-secondary text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 sm:py-32 text-center">
          <img
            src="/logo.png"
            alt="Vanishd"
            className="w-28 h-28 mx-auto mb-8 drop-shadow-[0_0_40px_rgba(233,69,96,0.3)]"
          />
          <h1 className="text-5xl sm:text-6xl font-black text-text-primary tracking-tight mb-4">
            Vanish<span className="text-accent">d</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-lg mx-auto mb-3">
            One hides. The rest hunt.
            <br />
            Your city is the game board.
          </p>
          <p className="text-text-muted mb-10">
            Real-time GPS chase game for friends &mdash; coming soon to iOS &amp; Android
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bg-primary border border-border text-text-secondary text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Coming to App Store
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bg-primary border border-border text-text-secondary text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 010 1.726l-2.834 1.64-2.532-2.532 2.532-2.474zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
              </svg>
              Coming to Google Play
            </span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Features grid */}
      <section className="py-20 px-6 bg-bg-primary/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-4">
            Features
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Everything you need for the ultimate real-world chase experience.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-bg-primary border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors"
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-text-primary font-semibold text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Items showcase */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-4">
            Special Items
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
            12 unique items — 6 for Agent X, 6 for Detectives. Use them wisely.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Agent X */}
            <div>
              <h3 className="text-accent font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent" />
                Agent X
              </h3>
              <div className="space-y-3">
                {agentXItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 bg-bg-primary border border-border rounded-xl px-4 py-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-text-primary text-sm font-medium">
                        {item.name}
                      </p>
                      <p className="text-text-muted text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Detective */}
            <div>
              <h3 className="text-info font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-info" />
                Detective
              </h3>
              <div className="space-y-3">
                {detectiveItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 bg-bg-primary border border-border rounded-xl px-4 py-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-text-primary text-sm font-medium">
                        {item.name}
                      </p>
                      <p className="text-text-muted text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game settings */}
      <section className="py-20 px-6 bg-bg-primary/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Fully Customizable
          </h2>
          <p className="text-text-secondary mb-10">
            Tweak the game to your group&apos;s style.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Game Timer", value: "Up to 120 min" },
              { label: "Play Area", value: "Custom radius" },
              { label: "Reveal Interval", value: "Adjustable" },
              { label: "Items", value: "On / Off" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-bg-deep border border-border rounded-xl p-4"
              >
                <p className="text-accent font-bold text-lg">{s.value}</p>
                <p className="text-text-muted text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Built for Safety
          </h2>
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            Vanishd is designed for fun outdoor play with friends. Safety
            features are built in from the start.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="bg-bg-primary border border-border rounded-xl p-5">
              <p className="text-xl mb-2">🚨</p>
              <p className="text-text-primary font-medium text-sm">Panic Button</p>
              <p className="text-text-muted text-xs mt-1">
                Emergency stop that immediately ends the game for everyone.
              </p>
            </div>
            <div className="bg-bg-primary border border-border rounded-xl p-5">
              <p className="text-xl mb-2">🔒</p>
              <p className="text-text-primary font-medium text-sm">Play Area Boundary</p>
              <p className="text-text-muted text-xs mt-1">
                Configurable boundary keeps all players in a safe, defined area.
              </p>
            </div>
            <div className="bg-bg-primary border border-border rounded-xl p-5">
              <p className="text-xl mb-2">👁️</p>
              <p className="text-text-primary font-medium text-sm">Spectator Mode</p>
              <p className="text-text-muted text-xs mt-1">
                Friends can watch the game live without physically participating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-accent/5 via-transparent to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Ready to Vanish?
          </h2>
          <p className="text-text-secondary mb-8">
            Vanishd is coming soon to iOS and Android. Gather your friends and
            get ready for the chase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-light transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/privacy"
              className="px-6 py-3 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
