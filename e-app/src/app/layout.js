import { Inter, Roboto, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import { AppProvider } from "./components/AppContext"


const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Shopper",
  description: "Welcome ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={''}>

        <main className="w-screen h-auto  ">
          <AppProvider>
            <Header />
            {children}
          </AppProvider>
        </main>

      </body>
    </html>
  );
}
