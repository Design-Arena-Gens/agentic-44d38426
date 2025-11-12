import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beginner Hackathon Website Ideas",
  description: "Practical website structure ideas tailored for beginner-friendly hackathon projects."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
