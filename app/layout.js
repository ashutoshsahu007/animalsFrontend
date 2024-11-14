import { Poppins } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import NextUIProviders from "@/providers/next-ui";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProviders>
          <NavbarComponent />
          {children}
          <Footer />

        </NextUIProviders>
      </body>
    </html>
  );
}
