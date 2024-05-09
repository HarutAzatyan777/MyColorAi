import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', "500", "600", "700"],
  variable: '--font-ibm-plex' // Adjust the variable name to start with '--'
});

export const metadata: Metadata = {
  title: "Mycolor",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary:'#624cf5'}
    }}>
      <html lang="en">
      <head>
          <link rel="icon" href="/Public/facicon.ico" />
        </head>
        <body className={cn("font_IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
