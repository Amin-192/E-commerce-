import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile business",
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
