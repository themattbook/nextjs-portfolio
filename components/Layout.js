import React, { useState } from "react";
import Footer from "./Footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="min-h-screen relative flex-col flex bg-zinc-900 text-gray-200">
      <main className="flex-1 flex flex-col p-4">{children}</main>
      <Footer />
    </div>
  );
}
