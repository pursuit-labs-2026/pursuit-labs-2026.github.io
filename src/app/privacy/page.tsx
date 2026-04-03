import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vanishd by Pursuit Labs.",
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold text-accent mt-10 mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-3 py-2 bg-bg-primary border border-border text-text-body font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2 border border-border text-text-secondary"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tocItems = [
  { id: "s1", label: "What Information Do We Collect?" },
  { id: "s2", label: "How Do We Process Your Information?" },
  { id: "s3", label: "What Legal Bases Do We Rely On?" },
  { id: "s4", label: "When and With Whom Do We Share Your Information?" },
  { id: "s5", label: "How Long Do We Keep Your Information?" },
  { id: "s6", label: "How Do We Keep Your Information Safe?" },
  { id: "s7", label: "Do We Collect Information From Minors?" },
  { id: "s8", label: "What Are Your Privacy Rights?" },
  { id: "s9", label: "Do United States Residents Have Specific Privacy Rights?" },
  { id: "s10", label: "Do European Residents Have Specific Privacy Rights?" },
  { id: "s11", label: "Controls for Do-Not-Track Features" },
  { id: "s12", label: "Do We Make Updates to This Policy?" },
  { id: "s13", label: "How Can You Contact Us?" },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-text-primary mb-2">Privacy Policy</h1>
      <p className="text-text-muted text-sm mb-8">
        Vanishd &mdash; Pursuit Labs | Last updated: April 2026
      </p>

      <p className="text-text-secondary mb-6 leading-relaxed">
        This Privacy Policy describes how Pursuit Labs (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and shares your
        personal information when you use the Vanishd mobile application (the
        &ldquo;App&rdquo;). By using the App you agree to the practices described
        below.
      </p>

      {/* Table of Contents */}
      <nav className="bg-bg-primary border border-border rounded-xl p-5 mb-10">
        <p className="text-text-primary font-semibold mb-3">Table of Contents</p>
        <ol className="list-decimal list-inside space-y-1">
          {tocItems.map((item) => (
            <li key={item.id} className="text-sm">
              <a
                href={`#${item.id}`}
                className="text-accent hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 1 */}
      <Section id="s1" title="1. What Information Do We Collect?">
        <h3 className="text-text-primary font-semibold mt-5 mb-2">
          Personal Information You Provide
        </h3>
        <p className="text-text-secondary text-sm mb-3">
          We collect information you voluntarily provide when you create an account,
          join a game, or contact us.
        </p>
        <ul className="list-disc list-inside text-text-secondary text-sm space-y-2 mb-4">
          <li>
            <strong className="text-text-body">Account data:</strong> Email address,
            chosen display name, and password (or authentication token when signing in
            with Google or Apple).
          </li>
          <li>
            <strong className="text-text-body">Photos:</strong> When a detective
            attempts to catch Agent X, a photo is captured through the device camera as
            proof of proximity. This photo is stored only in the context of that game
            session.
          </li>
        </ul>

        <h3 className="text-text-primary font-semibold mt-5 mb-2">
          Information Collected Automatically
        </h3>
        <Table
          headers={["Category", "Examples", "Purpose"]}
          rows={[
            [
              "Precise Geolocation",
              "GPS coordinates (latitude, longitude)",
              "Core gameplay: player positions on the map, proximity for catches, reveals",
            ],
            [
              "Device Information",
              "Push notification token (FCM)",
              "Delivering in-game notifications",
            ],
            [
              "Game Activity Data",
              "Roles, movement routes, item usage, game outcomes, timestamps",
              "Game functionality, replays, statistics, leaderboards",
            ],
          ]}
        />

        <h3 className="text-text-primary font-semibold mt-5 mb-2">
          Background Location
        </h3>
        <p className="text-text-secondary text-sm mb-3">
          During an active game session the App collects your precise GPS location in
          the background (approximately every 10 seconds) even when the App is not in
          the foreground. This is necessary so other players can see your position on
          the game map.{" "}
          <strong className="text-text-body">
            Background location tracking is only active during a game session.
          </strong>{" "}
          We do not track your location outside of active games.
        </p>
        <p className="text-text-secondary text-sm">
          Location history for a game is{" "}
          <strong className="text-text-body">
            automatically deleted after 7 days
          </strong>
          . You can stop background location at any time by ending the game or revoking
          location permissions in your device settings.
        </p>
      </Section>

      {/* 2 */}
      <Section id="s2" title="2. How Do We Process Your Information?">
        <ul className="list-disc list-inside text-text-secondary text-sm space-y-2">
          <li>
            <strong className="text-text-body">To provide the game:</strong> Account
            management, game sessions, map display, catch processing, reveals.
          </li>
          <li>
            <strong className="text-text-body">To enable social features:</strong>{" "}
            Lobbies, invite links, spectator mode, game results sharing.
          </li>
          <li>
            <strong className="text-text-body">To send notifications:</strong> Reveals,
            proximity alerts, catches, game state changes.
          </li>
          <li>
            <strong className="text-text-body">To maintain statistics:</strong>{" "}
            Leaderboards, personal game history, game replays.
          </li>
          <li>
            <strong className="text-text-body">To ensure safety:</strong> Panic button
            processing, server-side rule enforcement.
          </li>
          <li>
            <strong className="text-text-body">To improve the App:</strong> Identifying
            bugs, crashes, and performance issues.
          </li>
        </ul>
      </Section>

      {/* 3 */}
      <Section id="s3" title="3. What Legal Bases Do We Rely On?">
        <p className="text-text-secondary text-sm mb-3">
          If you are located in the European Economic Area (EEA), UK, or Switzerland,
          we rely on the following legal bases under the GDPR:
        </p>
        <Table
          headers={["Legal Basis", "Applies To"]}
          rows={[
            [
              "Consent",
              "Precise location tracking (foreground & background), camera / photo access, push notifications",
            ],
            [
              "Contract Performance",
              "Account creation, game functionality, processing game actions (catches, items, reveals)",
            ],
            [
              "Legitimate Interests",
              "Crash reporting, security monitoring, fraud prevention, App improvement",
            ],
            [
              "Legal Obligation",
              "Responding to lawful data access requests from authorities",
            ],
          ]}
        />
        <p className="text-text-secondary text-sm">
          You may withdraw consent at any time by adjusting your device permissions or
          contacting us. Withdrawal does not affect the lawfulness of processing
          performed before withdrawal.
        </p>
      </Section>

      {/* 4 */}
      <Section id="s4" title="4. When and With Whom Do We Share Your Information?">
        <p className="text-text-secondary text-sm mb-4">
          We do <strong className="text-text-body">not</strong> sell or rent your
          personal data. We may share information in these limited situations:
        </p>

        <h3 className="text-text-primary font-semibold mt-5 mb-2">Other Players</h3>
        <p className="text-text-secondary text-sm mb-4">
          Your display name, role, and in-game location are visible to other
          participants in the same game session, including spectators. Movement routes
          are visible in post-game replays.
        </p>

        <h3 className="text-text-primary font-semibold mt-5 mb-2">
          Service Providers
        </h3>
        <Table
          headers={["Provider", "Purpose"]}
          rows={[
            [
              "Google Firebase",
              "Authentication, database, cloud functions, file storage, push notifications",
            ],
            ["Google Maps", "Map display and rendering"],
            ["Expo / EAS", "Push notifications, over-the-air updates"],
          ]}
        />

        <h3 className="text-text-primary font-semibold mt-5 mb-2">
          Legal Requirements
        </h3>
        <p className="text-text-secondary text-sm">
          We may disclose your information if required by law, regulation, or legal
          process, or to protect the rights, safety, or property of our users or the
          public.
        </p>
      </Section>

      {/* 5 */}
      <Section id="s5" title="5. How Long Do We Keep Your Information?">
        <ul className="list-disc list-inside text-text-secondary text-sm space-y-2">
          <li>
            <strong className="text-text-body">Account data:</strong> Retained while
            your account is active. Deleted upon account deletion request.
          </li>
          <li>
            <strong className="text-text-body">Location history:</strong> Automatically
            deleted 7 days after a game ends.
          </li>
          <li>
            <strong className="text-text-body">
              Game data (replays, stats, catch photos):
            </strong>{" "}
            Retained to enable replays and statistics. Deleted when you delete your
            account.
          </li>
        </ul>
        <p className="text-text-secondary text-sm mt-3">
          You may request deletion of your account and all associated data at any time
          (see <a href="#s8" className="text-accent hover:underline">Section 8</a>).
        </p>
      </Section>

      {/* 6 */}
      <Section id="s6" title="6. How Do We Keep Your Information Safe?">
        <p className="text-text-secondary text-sm mb-3">
          We implement appropriate technical and organizational measures:
        </p>
        <ul className="list-disc list-inside text-text-secondary text-sm space-y-2">
          <li>Encrypted data transmission (TLS / SSL)</li>
          <li>
            Firebase Security Rules restricting database access to game participants
          </li>
          <li>
            Server-side validation of all game mutations through Cloud Functions
          </li>
          <li>Authentication required for all data access</li>
        </ul>
        <p className="text-text-secondary text-sm mt-3">
          No electronic transmission or storage method is 100% secure. We cannot
          guarantee absolute security.
        </p>
      </Section>

      {/* 7 */}
      <Section id="s7" title="7. Do We Collect Information From Minors?">
        <p className="text-text-secondary text-sm">
          The App is not directed at children under the age of 16. We do not knowingly
          collect personal information from children under 16. If you are a parent or
          guardian and believe your child has provided us with personal data, please
          contact us and we will delete it promptly.
        </p>
      </Section>

      {/* 8 */}
      <Section id="s8" title="8. What Are Your Privacy Rights?">
        <p className="text-text-secondary text-sm mb-3">
          Depending on your location, applicable privacy laws may give you the
          following rights:
        </p>
        <ul className="list-disc list-inside text-text-secondary text-sm space-y-2">
          <li>
            <strong className="text-text-body">Access:</strong> Request a copy of the
            personal data we hold about you.
          </li>
          <li>
            <strong className="text-text-body">Rectification:</strong> Request
            correction of inaccurate or incomplete data.
          </li>
          <li>
            <strong className="text-text-body">Deletion:</strong> Request deletion of
            your personal data.
          </li>
          <li>
            <strong className="text-text-body">Portability:</strong> Request a
            machine-readable copy of your data.
          </li>
          <li>
            <strong className="text-text-body">Withdrawal of consent:</strong> Revoke
            location or notification permissions at any time through your device
            settings.
          </li>
          <li>
            <strong className="text-text-body">Objection:</strong> Object to processing
            based on legitimate interests.
          </li>
          <li>
            <strong className="text-text-body">Complaint:</strong> Lodge a complaint
            with your local data protection authority.
          </li>
        </ul>
        <p className="text-text-secondary text-sm mt-3">
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:privacy@pursuitlabs.dev"
            className="text-accent hover:underline"
          >
            privacy@pursuitlabs.dev
          </a>
          . We will respond within 30 days.
        </p>
      </Section>

      {/* 9 */}
      <Section
        id="s9"
        title="9. Do United States Residents Have Specific Privacy Rights?"
      >
        <h3 className="text-text-primary font-semibold mt-5 mb-2">
          California (CCPA / CPRA)
        </h3>
        <p className="text-text-secondary text-sm mb-3">
          If you are a California resident you have the right to:
        </p>
        <ul className="list-disc list-inside text-text-secondary text-sm space-y-2 mb-4">
          <li>Know what personal information we collect and how it is used</li>
          <li>Request deletion of your personal information</li>
          <li>
            Opt out of the sale or sharing of personal information &mdash;{" "}
            <strong className="text-text-body">
              we do not sell or share your personal information
            </strong>
          </li>
          <li>Non-discrimination for exercising your privacy rights</li>
        </ul>

        <Table
          headers={["CCPA Category", "Collected", "Sold"]}
          rows={[
            ["Identifiers (name, email)", "Yes", "No"],
            ["Geolocation data", "Yes", "No"],
            ["Internet / network activity", "No", "No"],
            ["Audio / visual information (photos)", "Yes", "No"],
            ["Inferences", "No", "No"],
          ]}
        />

        <h3 className="text-text-primary font-semibold mt-5 mb-2">Other US States</h3>
        <p className="text-text-secondary text-sm">
          Residents of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), and other
          states with privacy laws may have similar rights to access, delete, and opt
          out. Contact us to exercise these rights.
        </p>
      </Section>

      {/* 10 */}
      <Section
        id="s10"
        title="10. Do European Residents Have Specific Privacy Rights?"
      >
        <p className="text-text-secondary text-sm mb-3">
          If you are in the EEA, UK, or Switzerland, you have rights under the GDPR
          including:
        </p>
        <ul className="list-disc list-inside text-text-secondary text-sm space-y-2 mb-4">
          <li>Right of access (Art.&nbsp;15 GDPR)</li>
          <li>Right to rectification (Art.&nbsp;16 GDPR)</li>
          <li>Right to erasure (Art.&nbsp;17 GDPR)</li>
          <li>Right to restriction of processing (Art.&nbsp;18 GDPR)</li>
          <li>Right to data portability (Art.&nbsp;20 GDPR)</li>
          <li>Right to object (Art.&nbsp;21 GDPR)</li>
        </ul>
        <p className="text-text-secondary text-sm mb-3">
          Our third-party service providers may transfer data outside the EEA. Such
          transfers are covered by Standard Contractual Clauses (SCCs) or other approved
          transfer mechanisms.
        </p>
        <p className="text-text-secondary text-sm">
          You have the right to lodge a complaint with your supervisory authority.
          Please contact us first so we can try to resolve your concern.
        </p>
      </Section>

      {/* 11 */}
      <Section id="s11" title="11. Controls for Do-Not-Track Features">
        <p className="text-text-secondary text-sm">
          Most web browsers and some mobile operating systems include a Do-Not-Track
          (&ldquo;DNT&rdquo;) feature. Because there is no uniform standard for DNT
          signals, we do not currently respond to them.
        </p>
      </Section>

      {/* 12 */}
      <Section id="s12" title="12. Do We Make Updates to This Policy?">
        <p className="text-text-secondary text-sm">
          We may update this Privacy Policy from time to time. The updated version will
          be indicated by the &ldquo;Last updated&rdquo; date at the top. If we make
          material changes we will notify you through the App or by other means.
        </p>
      </Section>

      {/* 13 */}
      <Section id="s13" title="13. How Can You Contact Us?">
        <p className="text-text-secondary text-sm mb-3">
          If you have questions about this Privacy Policy, wish to exercise your data
          rights, or want to submit a complaint:
        </p>
        <p className="text-text-secondary text-sm">
          Pursuit Labs
          <br />
          Email:{" "}
          <a
            href="mailto:privacy@pursuitlabs.dev"
            className="text-accent hover:underline"
          >
            privacy@pursuitlabs.dev
          </a>
        </p>
      </Section>

      <div className="border-t border-border mt-12 pt-6">
        <p className="text-text-muted text-xs">
          &copy; 2026 Pursuit Labs. All rights reserved.
        </p>
      </div>
    </div>
  );
}
