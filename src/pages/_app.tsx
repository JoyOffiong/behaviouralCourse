import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Sidebar from "@/components/SideBar/SideBar";
import useCachedResources from "@/core/hooks/useCacheResource";
import GlobalContext from "@/core/context/global-context";
import { Messages1 } from "iconsax-react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const { isLoadingComplete, user, setUser } = useCachedResources();
  if (!isLoadingComplete) return null;

  if (Component.getLayout) {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <GlobalContext.Provider value={{ user, setUser }}>
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="block md:hidden">
          <MobileHeader />
        </div>

        <div className="flex flex-row">
          <div className="hidden md:block">
            <Sidebar />
          </div>

          <div className="md:w-[78%]  w-[90%] mx-[auto]">
            <Component {...pageProps} />
          </div>
          <div>
            <div className="hidden md:flex fixed justify-center items-center bottom-10 right-10  h-[30px] w-[30px] rounded-[50%] bg-[#2D41A5]">
              <Messages1 className="" size="16" color="#FFF" />
            </div>
          </div>
        </div>
      </GlobalContext.Provider>
    </SessionProvider>
  );
}
