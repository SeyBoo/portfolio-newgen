import { Loader } from "@/common/animations/src/loader";
import { ContactButton } from "@/common/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect, useState } from "react";
import "typeface-poppins";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  return (
    <>
      <Script src="//embed.typeform.com/next/embed.js" />
      {loading ? <Component {...pageProps} /> : <Loader />}
     <ContactButton />
    </>
  );
}
