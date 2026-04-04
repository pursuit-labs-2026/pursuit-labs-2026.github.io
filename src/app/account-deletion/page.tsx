import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion",
  description: "Delete your Vanishd account and all associated data.",
};

export default function AccountDeletion() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-text-primary mb-2">
        Delete Your Account
      </h1>
      <p className="text-text-muted text-sm mb-8">
        Vanishd &mdash; Pursuit Labs
      </p>

      <p className="text-text-secondary mb-8 leading-relaxed">
        If you would like to delete your Vanishd account and all associated
        data, you have two options:
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-accent mb-4">
          Option 1: In the App
        </h2>
        <p className="text-text-secondary text-sm leading-relaxed">
          Open Vanishd, go to the <strong className="text-text-body">Profile</strong> tab,
          and tap <strong className="text-text-body">Delete Account</strong>. This will
          immediately delete your account and all associated data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-accent mb-4">
          Option 2: Email Request
        </h2>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          Send an email to{" "}
          <a
            href="mailto:privacy@pursuitlabs.dev?subject=Account%20Deletion%20Request"
            className="text-accent hover:underline"
          >
            privacy@pursuitlabs.dev
          </a>{" "}
          from the email address associated with your account, with the subject
          line &ldquo;Account Deletion Request&rdquo;.
        </p>
        <p className="text-text-secondary text-sm">
          We will process your request within 7 business days.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-accent mb-4">
          What Gets Deleted
        </h2>
        <ul className="list-disc list-inside text-text-secondary text-sm space-y-2">
          <li>Your account and authentication credentials</li>
          <li>Your display name and profile information</li>
          <li>Your game statistics and history</li>
          <li>Your location history from past games</li>
          <li>Any photos submitted as catch proof</li>
        </ul>
      </section>

      <div className="bg-bg-primary border border-border rounded-xl p-5 mb-10">
        <p className="text-text-secondary text-sm">
          <strong className="text-text-body">Note:</strong> If you are currently
          in an active game, please finish or leave the game before deleting your
          account. Account deletion is permanent and cannot be undone.
        </p>
      </div>

      <a
        href="mailto:privacy@pursuitlabs.dev?subject=Account%20Deletion%20Request"
        className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Request Account Deletion
      </a>

      <div className="border-t border-border mt-12 pt-6">
        <p className="text-text-muted text-xs">
          &copy; 2026 Pursuit Labs. All rights reserved.
        </p>
      </div>
    </div>
  );
}
