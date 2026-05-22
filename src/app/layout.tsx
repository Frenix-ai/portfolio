import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { TransitionProvider } from "@/components/TransitionProvider";

export const metadata: Metadata = {
  title: "Hiren Ahlawat — Creative Web Design & Development",
  description: "I create living, breathing websites for brands that want to be felt, not just seen.",
  keywords: ["Web Design", "Creative Development", "Next.js", "Tailwind CSS", "Brand Experience"],
  authors: [{ name: "Hiren Ahlawat" }],
  verification: {
    google: "IjecYNWDim7Ue0gt3r1hFh0D9eeB_0geBrbyWcApysY",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=melodrama@300,400,500,600,700&f[]=satoshi@300,400,500,700&display=swap" />
      </head>
      <body className="bg-bg-sand text-brand-green font-sans relative">
        {/* Subtle, highly performant film grain texture overlay */}
        <div className="bg-grain pointer-events-none" aria-hidden="true" />
        
        <LenisProvider>
          <TransitionProvider>
            {/* Main Content wrapper */}
            <div className="z-20">
              {children}
            </div>
          </TransitionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
