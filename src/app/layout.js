import LayerTop from "@/Components/navbar/LayerTop"
import LayerBottom from "@/Components/navbar/LayerBottom"
import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LayerTop />
          {children}
          <LayerBottom />
        </Providers>
      </body>
    </html>
  );
}