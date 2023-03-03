import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import NavBar from "~/components/NavBar";
import BottomTabs from "~/components/BottomTabs";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <main className="layout-1 mt-4">
        <Component {...pageProps} />
      </main>
      <BottomTabs />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
