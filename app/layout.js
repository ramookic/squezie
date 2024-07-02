import "./globals.css";
import { ImageCompressorProvider } from "./_contexts/compressor/context";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import { satoshi } from "@/fonts";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s - Squezie",
    default: "Image Compressor - Squezie",
  },
  description:
    "The ultimate solution for lightning-fast image compression. With our inovative technology, you can optimize images in seconds, saving valuable time and bandwidth while maintaining exceptional quality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} antialiased scroll-smooth`}>
        <Navigation />
        <main>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "50px",
              },
            }}
          />
          <ImageCompressorProvider>{children}</ImageCompressorProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
