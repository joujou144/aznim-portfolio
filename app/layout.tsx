import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Aznim Rahman Crawford | Front-end Engineer | Creative Developer",
  description:
    "Aznim is a front-end developer with 3 years experience creating user-centric web applications and responsive designs.",
  icons: {
    icon: ["./favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="relative overflow-x-hidden select-none text-charcoal bg-gray-200 bg-opacity-85">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
