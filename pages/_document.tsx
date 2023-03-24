import { Html, Head, Main, NextScript } from "next/document";
import TailwindWrapper from "./component/layout/tailwindWrapper";
import Navbar from "./component/layout/Header";

export default function Document({ children }: { children: React.ReactNode }) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <TailwindWrapper>
          <Navbar />
          {children}
          <Main />
          <NextScript />
        </TailwindWrapper>
      </body>
    </Html>
  );
}
