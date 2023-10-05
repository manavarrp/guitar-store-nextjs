import "../app/styles/globals.css";
import { Roboto } from "next/font/google";
import { ContextCarritoProduct } from "./context/CarritoContext";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "GuitarLA - Inicio",
  description: "Pagina de guitarras y algo mas...",
};

export default function RootLayout({ children }) {

  
  return   (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        />
      </head>
      <body className={roboto.className}>
        <ContextCarritoProduct>{children}</ContextCarritoProduct>
      </body>
    </html>
  ) 
}
