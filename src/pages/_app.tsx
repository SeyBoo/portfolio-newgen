import { Loader } from "@/common/animations/src/loader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "typeface-poppins";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  return <>{loading ? <Component {...pageProps} /> : <Loader />}</>;
}
