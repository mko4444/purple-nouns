"use client";

import { Londrina_Solid } from "next/font/google";

const colors = [
  "#57A4FF",
  "#FF21FF",
  "#9D59FF",
  "#822AFF",
  "#9D59FF",
  "#822AFF",
  "#7C68FF",
];

const inter = Londrina_Solid({
  weight: "900",
  subsets: ["latin"],
});

export function Button() {
  return (
    <button
      onClick={() => window.location.reload()}
      style={{
        fontFamily: inter.style.fontFamily,
        fontSize: 30,
        padding: "12px 24px",
        letterSpacing: ".12em",
        fontWeight: 100,
        filter: "saturate(.66) brightness(1.1)",
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        color: "white",
      }}
    >
      Refresh
    </button>
  );
}
