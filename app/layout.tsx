import "./styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Anchor – The Last Productivity Tool You'll Ever Need",
  description: "Built by and for neurodivergent minds. Join the waitlist for Anchor.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/dark.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-backgroundLight text-background min-h-screen font-funnel">
        {children}
      </body>
    </html>
  );
}
