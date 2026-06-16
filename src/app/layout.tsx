import type { Metadata } from "next";
import { unbounded, instrumentSans, ibmPlexMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "SpaceQuantum \u2014 Bringing Quantum Technologies to Space to Develop the Quantum Internet",
  description:
    "SpaceQuantum brings quantum technologies to space to develop the quantum internet \u2014 an orbital constellation delivering post-quantum security today and quantum communication tomorrow. Layer 7 of the Quantum Highway: Root-to-Qubit-to-Space.",
  openGraph: {
    title: "SpaceQuantum \u2014 The Quantum Internet, From Orbit",
    description:
      "A satellite constellation delivering post-quantum cryptographic keys to any device on Earth.",
    siteName: "SpaceQuantum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceQuantum \u2014 The Quantum Internet, From Orbit",
    description:
      "A satellite constellation delivering post-quantum cryptographic keys to any device on Earth.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${instrumentSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
