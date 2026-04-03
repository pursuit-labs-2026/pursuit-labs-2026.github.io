import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Vanishd. FAQs, troubleshooting, and contact information.",
};

const faqs = [
  {
    q: "How do I create a game?",
    a: 'Open the app, tap "Create Game" on the home screen, and share the 6-character lobby code with your friends. Once everyone has joined, assign roles and start the hunt.',
  },
  {
    q: "How do I join a game?",
    a: 'Tap "Join Game" and enter the 6-character code your friend shared, or open the invite link directly on your phone.',
  },
  {
    q: "Why does Vanishd need my location?",
    a: "Location is the core mechanic of the game. Your GPS position is used to show players on the map, detect proximity for catches, trigger reveals, and enforce the play area boundary. We only track your location during active games — never outside of them.",
  },
  {
    q: "Why does the app need background location access?",
    a: "During a game, your position needs to update even if the app is in the background (e.g. your phone is locked). Without background access, other players wouldn't see your movements. Background tracking stops automatically when the game ends.",
  },
  {
    q: "How does catching Agent X work?",
    a: "When a detective gets within 50 meters of Agent X, a catch button appears. Tap it and take a photo as proof. The game verifies your proximity server-side — no cheating possible.",
  },
  {
    q: "What is the Panic Button?",
    a: "The panic button is a safety feature that immediately ends the game for all players. Use it if you feel unsafe or if there's an emergency. Everyone in the game will be notified.",
  },
  {
    q: "How do special items work?",
    a: "Each role has 6 unique items with cooldown timers. Items can be toggled on or off by the host before the game starts. During the game, tap an item to activate it — effects happen in real time for all players.",
  },
  {
    q: "Can I play without items?",
    a: "Yes. The game host can disable items in the lobby settings before starting the game.",
  },
  {
    q: "What happens to my location data after a game?",
    a: "Location history is automatically deleted 7 days after a game ends. You can also delete your account at any time to remove all associated data immediately.",
  },
  {
    q: "How many players can join a game?",
    a: "Up to 8 detectives plus 1 Agent X, for a total of 9 active players. Additional friends can join as spectators to watch the chase live.",
  },
  {
    q: "How do I delete my account?",
    a: "Go to Profile > Settings > Delete Account. This will permanently remove your account and all associated data including game history, stats, and replays.",
  },
];

export default function Support() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <img
          src="/logo.png"
          alt="Vanishd"
          className="w-16 h-16 mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-text-primary mb-3">
          Support
        </h1>
        <p className="text-text-secondary max-w-md mx-auto">
          Need help with Vanishd? Check the FAQs below or reach out to us directly.
        </p>
      </div>

      {/* Contact */}
      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        <a
          href="mailto:privacy@pursuitlabs.dev"
          className="flex items-start gap-4 bg-bg-primary border border-border rounded-xl p-5 hover:border-accent/40 transition-colors"
        >
          <span className="text-2xl">📧</span>
          <div>
            <p className="text-text-primary font-medium text-sm">Email Us</p>
            <p className="text-text-muted text-xs mt-1">
              privacy@pursuitlabs.dev
            </p>
            <p className="text-text-secondary text-xs mt-1">
              We typically respond within 48 hours.
            </p>
          </div>
        </a>
        <Link
          href="/privacy"
          className="flex items-start gap-4 bg-bg-primary border border-border rounded-xl p-5 hover:border-accent/40 transition-colors"
        >
          <span className="text-2xl">🔒</span>
          <div>
            <p className="text-text-primary font-medium text-sm">Privacy Policy</p>
            <p className="text-text-muted text-xs mt-1">
              How we handle your data
            </p>
            <p className="text-text-secondary text-xs mt-1">
              Read our full privacy policy.
            </p>
          </div>
        </Link>
      </div>

      {/* FAQs */}
      <h2 className="text-2xl font-bold text-text-primary mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="border-b border-border pb-6 last:border-0"
          >
            <h3 className="text-text-primary font-medium mb-2">{faq.q}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      {/* Still need help */}
      <div className="mt-16 bg-bg-primary border border-border rounded-2xl p-8 text-center">
        <h3 className="text-text-primary font-bold text-lg mb-2">
          Still need help?
        </h3>
        <p className="text-text-secondary text-sm mb-5">
          If your question isn&apos;t answered above, don&apos;t hesitate to reach out.
        </p>
        <a
          href="mailto:privacy@pursuitlabs.dev"
          className="inline-block px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-light transition-colors text-sm"
        >
          Contact Pursuit Labs
        </a>
      </div>
    </div>
  );
}
