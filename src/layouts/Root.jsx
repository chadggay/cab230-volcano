import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { UserProvider } from "../context/UserContext";

export default function Root() {
  return (
    <UserProvider>
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}
