import { Inter, Roboto, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";


const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Shopper",
  description: "Welcome ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={''}>

        <main className="max-w-4xl p-4 mx-auto ">
         
            <Header />
            {children}
         
        </main>

      </body>
    </html>
  );
}
