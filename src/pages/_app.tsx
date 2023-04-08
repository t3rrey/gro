import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import "./globals.css";
import { supabase } from "@/lib/supabase";

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
      <div className="h-screen bg-gray-100">
        <div className="h-full">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionContextProvider>
  );
}
export default MyApp;
