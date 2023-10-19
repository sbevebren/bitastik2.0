import { SessionProvider, useSession } from "next-auth/react";
import "../styles/globals.css";
import Layout from "@/components/layout/Layout";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
