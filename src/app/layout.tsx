import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const LucioleBoldItalic = localFont({
  src: '../../public/font/Luciole-Bold-Italic.ttf',
  display: 'swap',
  variable: '--font-LucioleBoldItalic',
});

const LucioleBold = localFont({
  src: '../../public/font/Luciole-Bold.ttf',
  display: 'swap',
  variable: '--font-LucioleBold',
});

const LucioleRegularItalic = localFont({
  src: '../../public/font/Luciole-Regular-Italic.ttf',
  display: 'swap',
  variable: '--font-LucioleRegularItalic',
});

const LucioleRegular = localFont({
  src: '../../public/font/Luciole-Regular.ttf',
  display: 'swap',
  variable: '--font-LucioleRegular',
});
export const metadata: Metadata = {
  title: "Perfect Drive",
  description: "Un drive parfait pour des courses parfaites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${LucioleBoldItalic.variable} ${LucioleBold.variable} ${LucioleRegular.variable} ${LucioleRegularItalic.variable}`}>{children}</body>
    </html>
  );
}
