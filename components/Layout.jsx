import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>The Global English Academy, Bannu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Empowering Minds, Shaping Futures - Professional computer courses and English language training in Bannu" />
      </Head>

      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

