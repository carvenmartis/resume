import type { Metadata } from "next";
import "./globals.css";
import { EditorShell } from "@/components/editor-shell";

export const metadata: Metadata = {
  title: "Resume Editor",
  description: "Edit and export your resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;600;700&family=Raleway:wght@300;400;600;700&family=Cormorant+Garamond:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-950">
        <EditorShell>{children}</EditorShell>
      </body>
    </html>
  );
}
