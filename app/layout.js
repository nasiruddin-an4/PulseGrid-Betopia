
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export const metadata = {
  title: "PulseGrid – Smart Solar Solutions | a Betopia Company",
  description: "PulseGrid is a trusted provider of smart solar solutions. We specialize in designing, installing, and maintaining high-performance solar energy systems for residential, commercial, and industrial clients. Based in Lahore, Pakistan, we are committed to delivering reliable, cost-effective, and sustainable energy solutions that empower our customers and contribute to a greener future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
