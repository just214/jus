import { Bebas_Neue } from "next/font/google";

import { Header } from "./_components/Header";
import { ThemeProvider } from "./_components/ThemeProvider";

import "./global.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${bebas.variable} surface-1 text-1`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {/* <Header /> */}
            <main className={`flex-1 p-6`}>{children}</main>
            {/* <footer className="p-6 text-sm w-full text-center surface-2">
              <p>© {new Date().getFullYear()} jus</p>
            </footer> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
