import React from "react";
import { Book1, Home2, I24Support, UserSquare } from "iconsax-react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

const MobileSidebar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col fixed top-14 justify-center items-center  rounded-md">
      <div className="flex flex-col bg-slate-800 justify-start items-center w-[100%] rounded-md border-l-[2px] space-y-4 px-2 py-4">
        <Link href={"/dashboard"}>
          <div className="flex flex-col items-center justify-center space-y-1">
            <Home2
              size="24"
              color={
                router.pathname === "/dashboard" ||
                  router.pathname === "/dashboard/:path*"
                  ? "#FFF"
                  : "#596080"
              }
              variant="Bulk"
            />
            <p
              className={
                router.pathname === "/dashboard" ||
                  router.pathname === "/dashboard/:path*"
                  ? "text-[10px] text-[#FFF]  font-semibold"
                  : "text-[10px] text-[#596080]  font-semibold"
              }
            >
              Home
            </p>
          </div>
        </Link>
        <Link href={"/courses"}>
          <div className="flex flex-col items-center justify-center space-y-1">
            <Book1
              size="24"
              color={
                router.pathname === "/courses" ||
                  router.pathname === "/courses/:path*"
                  ? "#FFF"
                  : "#596080"
              }
              variant="Bulk"
            />
            <p
              className={
                router.pathname === "/courses" ||
                  router.pathname === "/courses/:path*"
                  ? "text-[10px] text-[#FFF]  font-semibold"
                  : "text-[10px] text-[#596080]  font-semibold"
              }
            >
              Courses
            </p>
          </div>
        </Link>

        <Link href={"/account"}>
          <div className="flex flex-col items-center  justify-center space-y-1">
            <UserSquare
              size="24"
              color={
                router.pathname === "/account" ||
                  router.pathname === "/account/:path*"
                  ? "#FFF"
                  : "#596080"
              }
              variant="Bulk"
            />
            <p
              className={
                router.pathname === "/account" ||
                  router.pathname === "/account/:path*"
                  ? "text-[10px] text-[#FFF]  font-semibold"
                  : "text-[10px] text-[#596080]  font-semibold"
              }
            >
              Account
            </p>
          </div>
        </Link>

        <Link href={"/support"}>
          <div className="flex flex-col items-center justify-center space-y-1">
            <I24Support
              size="24"
              color={
                router.pathname === "/support" ||
                  router.pathname === "/support/:path*"
                  ? "#FFF"
                  : "#596080"
              }
              variant="Bulk"
            />
            <p
              className={
                router.pathname === "/support" ||
                  router.pathname === "/support/:path*"
                  ? "text-[10px] text-[#FFF]  font-semibold"
                  : "text-[10px] text-[#596080]  font-semibold"
              }
            >
              Support
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileSidebar;
