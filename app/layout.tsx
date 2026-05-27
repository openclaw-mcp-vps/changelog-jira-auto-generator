import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Jira Auto Generator – Automated Changelogs from Jira",
  description:
    "Connect to Jira, fetch completed tickets, and generate beautiful changelogs automatically using AI. Built for product managers, engineering managers, and DevRel teams."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="cdc7d90d-caf3-4417-a0f2-4d96ea77bfd1"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
