import Link from "next/link";

export default function BowPrivacyPolicies() {
  return (
    <div className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-6 py-12 text-left text-neutral-900">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black">
          Privacy Policy – Bow App
        </h1>
        <p className="mb-8 text-sm text-neutral-800">
          Last updated: February 2026
        </p>

        <p className="mb-8 text-neutral-900">
          Bow (&quot;we&quot;, &quot;our&quot;, or &quot;the App&quot;) respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, store, and share information when you use the Bow mobile or web application.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          1. Information We Collect
        </h2>
        <p className="mb-3 text-neutral-900">
          We may collect the following types of information:
        </p>

        <h3 className="mb-2 mt-6 font-bold text-black">
          a) Personal Information
        </h3>
        <ul className="mb-4 list-disc pl-6 space-y-1 text-neutral-900">
          <li>Name or nickname</li>
          <li>Email address</li>
          <li>Date of birth</li>
          <li>Profile photo (optional)</li>
          <li>Time zone and locale</li>
        </ul>

        <h3 className="mb-2 mt-6 font-bold text-black">
          b) User-Generated Content
        </h3>
        <ul className="mb-4 list-disc pl-6 space-y-1 text-neutral-900">
          <li>Messages written on celebration walls</li>
          <li>Photos or media uploaded by users</li>
          <li>Comments, reactions, and related interactions</li>
        </ul>

        <h3 className="mb-2 mt-6 font-bold text-black">
          c) Financial &amp; Transactional Data
        </h3>
        <ul className="mb-2 list-disc pl-6 space-y-1 text-neutral-900">
          <li>Contribution amounts</li>
          <li>Payment confirmations and transaction metadata</li>
        </ul>
        <p className="mb-4 text-sm italic text-neutral-900">
          <strong>Note:</strong> Bow does not store full credit card or bank details; payments are processed by third-party payment providers.
        </p>

        <h3 className="mb-2 mt-6 font-bold text-black">
          d) Usage &amp; Technical Data
        </h3>
        <ul className="mb-6 list-disc pl-6 space-y-1 text-neutral-900">
          <li>Device type, operating system, and app version</li>
          <li>IP address (for security and fraud prevention)</li>
          <li>App usage statistics and interaction logs</li>
        </ul>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          2. How We Use Your Information
        </h2>
        <ul className="mb-6 list-disc pl-6 space-y-1 text-neutral-900">
          <li>Provide and operate the Bow service</li>
          <li>Enable gift pooling and birthday celebrations</li>
          <li>Deliver reminders and notifications</li>
          <li>Display celebration walls and archives</li>
          <li>Improve app functionality and user experience</li>
          <li>Prevent fraud and ensure platform security</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          3. Sharing of Information
        </h2>
        <p className="mb-3 text-neutral-900">
          We may share information:
        </p>
        <ul className="mb-3 list-disc pl-6 space-y-1 text-neutral-900">
          <li>With other users, as part of celebration walls (messages, photos, names)</li>
          <li>With payment processors, solely to complete transactions</li>
          <li>With service providers that help operate the app (hosting, analytics, notifications)</li>
          <li>When required by law or legal process</li>
        </ul>
        <p className="mb-6 text-neutral-900">
          We do not sell personal data.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          4. Public &amp; Social Features
        </h2>
        <p className="mb-6 text-neutral-900">
          Some features of Bow are social by nature. Celebration walls may be visible to invited users or, if enabled, publicly. You are responsible for the content you choose to share.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          5. Data Retention
        </h2>
        <p className="mb-6 text-neutral-900">
          We retain personal data as long as your account is active or as needed to provide the service. Celebration content may be stored as part of a user&apos;s birthday archive unless deleted by the user.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          6. User Rights
        </h2>
        <p className="mb-3 text-neutral-900">
          Depending on your location, you may have rights to:
        </p>
        <ul className="mb-3 list-disc pl-6 space-y-1 text-neutral-900">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your account and data</li>
          <li>Withdraw consent where applicable</li>
        </ul>
        <p className="mb-6 text-neutral-900">
          Requests can be made through in-app settings or by contacting support.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          7. Children&apos;s Privacy
        </h2>
        <p className="mb-6 text-neutral-900">
          Bow is not intended for children under the age of 13 (or the minimum age required by local law). We do not knowingly collect data from children.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          8. Security
        </h2>
        <p className="mb-6 text-neutral-900">
          We use reasonable technical and organizational measures to protect your data, but no system is 100% secure.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          9. International Use
        </h2>
        <p className="mb-6 text-neutral-900">
          Your data may be processed in countries other than your own, subject to applicable data protection laws.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          10. Changes to This Policy
        </h2>
        <p className="mb-6 text-neutral-900">
          We may update this Privacy Policy from time to time. Continued use of Bow after changes means acceptance of the updated policy.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          11. Contact
        </h2>
        <p className="mb-2 text-neutral-900">
          For questions about privacy, contact:{" "}
          <Link
            href="mailto:privacy@bow.app"
            className="text-blue-700 underline hover:text-blue-900 font-medium"
          >
            privacy@bow.app
          </Link>
        </p>
      </article>
    </div>
  );
}
