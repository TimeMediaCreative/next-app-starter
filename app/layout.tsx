import type { Metadata } from "next";
import "@/public/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://UPDATE.ME"),
  title: {
    default: "Update Me",
    template: "%s | Update Me",
  },
  description: "Lorem ipsum",
  creator: "Update Me Creative",
  publisher: "Update Me Creative",
  authors: [{ name: "Your Name", url: "https://www.yoursite.com" }],
  // icons: {
  //   apple: "/apple-touch-icon.png",
  //   icon: "/android-chrome-384x384.png",
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  // openGraph: {
  //   title: {
  //     default: "Update Me",
  //     template: "%s | Update Me",
  //   },
  //   description:
  //     "Lorem ipsum",
  //   url: "https://UPDATE.ME",
  //   siteName: "Update Me",
  //   images: [{ url: "/logos/OGLogo.webp", width: 1366, height: 798 }],
  //   locale: "en-US",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
