import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// adding the title and description for the website
export const metadeta: Metadata = {
  title: "Devoverflow",
  description:
    "Your go-to platform for collaborative coding. Find quick answers, share insights, and connect with a global community of developers. Enhance your coding journey with real-time collaboration and a user-friendly interface. Join us today",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

//  Import and configure Inter font with all weights and Latin subset
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

// Import and configure space grotesk font with all weights and Latin subset
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      // changing the appearance of the clerkprovider
      appearance={{
        elements: {
          formButtonPrimary: "primary-grdient",
          formActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
