import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function AuthLayout() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
