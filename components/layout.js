import React, { useEffect } from "react";


// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";
import { useUser } from "../data/use-data.js";
import { useRouter } from "next/router";



export default function Layout({ children, card, statsList, wizard, loginRequired}) {
  const { user, loading, loggedOut } = useUser();
  const router = useRouter();
  useEffect(() => (loggedOut && loginRequired ? router.push("/auth/login") : null));
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blue-50">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats card={card}  statsList={statsList} wizard={wizard}/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
