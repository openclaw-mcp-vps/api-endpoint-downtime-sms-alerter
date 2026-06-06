import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Downtime SMS Alerter — Know Before Your Users Do",
  description: "Monitor API endpoints and get instant SMS alerts when they go down. Configurable escalation rules and retry logic for solo devs and small SaaS teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a2f80448-b261-4c39-8711-2937bc48096f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
