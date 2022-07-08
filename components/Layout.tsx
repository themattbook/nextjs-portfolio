import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: any) {
  const { children } = props;
  return (
    <div className="min-h-screen relative flex-col flex bg-zinc-900 text-gray-200">
      <main className="flex-1 flex flex-col p-4">{children}</main>
      <Footer />
    </div>
  );
}
