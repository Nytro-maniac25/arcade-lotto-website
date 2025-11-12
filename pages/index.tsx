import Head from "next/head";
import Home from "@/src/views/Home";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [load, setLoad] = useState(false);
  if (typeof window !== "undefined") {
    window?.addEventListener("load", () => {
      setLoad(true);
    });
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoad(true);
    } else {
      window.addEventListener("load", () => setLoad(true));
      return () => document.removeEventListener("load", () => setLoad(true));
    }
  }, []);

  return (
    <main className={`${load ? "" : "no-scroll"}`}>
      <div className={` ${load ? "hidden" : "preloader"}`}>
        <img
          src="/images/hero-logo.png"
          alt=""
          className="pointer-events-none"
        />
      </div>
      <Home />
    </main>
  );
}
