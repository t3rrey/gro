import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import "./globals.css";
import { supabase } from "@/lib/supabase";
import Layout from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Layout>{/* <Component {...pageProps} /> */}</Layout>
      <Analytics />
    </SessionContextProvider>
  );
}
export default MyApp;
