import Link from "next/link";

export default function BowSupport() {
  return (
    <div className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-6 py-12 text-left text-neutral-900">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black">
          Support – Bow App
        </h1>
        <p className="mb-8 text-sm text-neutral-800">
          Get help with Bow
        </p>

        <p className="mb-8 text-neutral-900">
          Need assistance with Bow? We&apos;re here to help with account issues, celebrations, payments, or any questions about the app.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          Contact support
        </h2>
        <p className="mb-4 text-neutral-900">
          For general support, feature questions, or technical issues:
        </p>
        <p className="mb-6 text-neutral-900">
          <Link
            href="mailto:support@bow.app"
            className="text-blue-700 underline hover:text-blue-900 font-medium"
          >
            support@bow.app
          </Link>
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          Other contacts
        </h2>
        <ul className="mb-6 list-none space-y-2 text-neutral-900">
          <li>
            <strong>Privacy:</strong>{" "}
            <Link
              href="mailto:privacy@bow.app"
              className="text-blue-700 underline hover:text-blue-900"
            >
              privacy@bow.app
            </Link>
          </li>
          <li>
            <strong>Legal / content:</strong>{" "}
            <Link
              href="mailto:legal@bow.app"
              className="text-blue-700 underline hover:text-blue-900"
            >
              legal@bow.app
            </Link>
          </li>
        </ul>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          Related
        </h2>
        <ul className="mb-6 list-disc pl-6 space-y-1 text-neutral-900">
          <li>
            <Link
              href="/bow-privacy-policies"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/bow-content-rights"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Content Rights
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
