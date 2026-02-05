import Link from "next/link";

export default function BowContentRights() {
  return (
    <div className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-6 py-12 text-left text-neutral-900">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black">
          Content Rights
        </h1>
        <p className="mb-1 text-lg text-neutral-800">
          Bow App
        </p>
        <p className="mb-8 text-sm text-neutral-800">
          Last updated: February 2026
        </p>

        <p className="mb-8 text-neutral-900">
          This document explains how user-generated content is handled in Bow.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          Ownership
        </h2>
        <p className="mb-6 text-neutral-900">
          You keep ownership of all content you create or upload, including messages, photos, and media.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          License to Bow
        </h2>
        <p className="mb-6 text-neutral-900">
          By posting content, you allow Bow to host and display it only to operate the app and its features.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          Visibility
        </h2>
        <p className="mb-6 text-neutral-900">
          Content may be visible to invited participants or publicly if enabled by the celebration owner.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          User Responsibility
        </h2>
        <ul className="mb-6 list-disc pl-6 space-y-1 text-neutral-900">
          <li>No illegal or offensive content</li>
          <li>No copyright or privacy violations</li>
          <li>No malicious software</li>
        </ul>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          Removal
        </h2>
        <p className="mb-6 text-neutral-900">
          You may delete your content or account at any time, subject to legal requirements.
        </p>

        <h2 className="mb-3 mt-10 text-xl font-bold text-black">
          Contact
        </h2>
        <p className="mb-2 text-neutral-900">
          Email:{" "}
          <Link
            href="mailto:legal@bow.app"
            className="text-blue-700 underline hover:text-blue-900 font-medium"
          >
            legal@bow.app
          </Link>
        </p>
      </article>
    </div>
  );
}
