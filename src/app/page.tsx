/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ImageData,
  getNounSeedFromBlockHash,
  getNounData,
} from "@lilnounsdao/assets";
import { buildSVG } from "@nouns/sdk";
const { palette } = ImageData; // Used with `buildSVG``
import chroma from "chroma-js";
import { Londrina_Solid } from "next/font/google";
import { Button } from "./button";

export const revalidate = 0;

const inter = Londrina_Solid({
  weight: "900",
  subsets: ["latin"],
});

export default function HomePage() {
  const latestBlockHash =
    "0xc48631ed6b16a5915103ec03d436aeb5f7f62eaf6e4ed546e6abbf12e342b88d";
  // random number between 0 and 10000
  const nextNounId = Math.floor(Math.random() * 10000);
  const randomBool = Math.random() > 0.5;

  const seed = getNounSeedFromBlockHash(nextNounId, latestBlockHash);
  const { parts } = getNounData(seed);

  const purple_palette = palette.map((c) =>
    c
      ? chroma
          .mix("#" + c, "5301FE", 0.5)
          .brighten(1.1)
          .saturate(1.1)
          .hex()
          .slice(1)
      : c,
  );

  const svgBinary = buildSVG(
    parts,
    purple_palette,
    randomBool ? "000001" : "9D59FF25",
  );

  const svgBase64 = btoa(svgBinary);

  return (
    <div
      style={{ backgroundColor: "#822AFF05" }}
      className="flex h-screen w-screen flex-col items-center justify-center"
    >
      <span
        style={{
          position: "relative",
          textTransform: "uppercase",
          fontSize: "48px",
          letterSpacing: "0.05em",
          ...inter.style,
          height: 44,
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            filter: "saturate(5) brightness(1.1)",
          }}
        />
        <span style={{ color: "#57A4FF" }}>P</span>
        <span style={{ color: "#FF21FF" }}>U</span>
        <span style={{ color: "#EABCFF" }}>R</span>
        <span style={{ color: "#9D59FF" }}>P</span>
        <span style={{ color: "#FE51FF" }}>L</span>
        <span style={{ color: "#822AFF" }}>E</span>
      </span>
      <span
        style={{
          height: 50,
          position: "relative",
          fontSize: "58px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          ...inter.style,
        }}
      >
        <span style={{ color: "#EABCFF" }}>N</span>
        <span style={{ color: "#9D59FF" }}>O</span>
        <span style={{ color: "#822AFF" }}>U</span>
        <span style={{ color: "#FE51FF" }}>N</span>
        <span style={{ color: "#7C68FF" }}>S</span>
      </span>
      <div className="h-10" />
      <div className="relative h-40 w-40 overflow-hidden bg-slate-100">
        <div
          className="h-full w-full"
          style={{
            zIndex: 102,
            position: "absolute",
            top: 0,
            left: 0,
            filter: "saturate(.5) brightness(1.2)",
            opacity: 0.95,
          }}
        />
        <div
          className="h-full w-full"
          style={{
            zIndex: 101,
            position: "absolute",
            top: 0,
            left: 0,
            background: "#00B2FF",
            mixBlendMode: "overlay",
            opacity: 0.5,
          }}
        />
        <div
          className="h-full w-full"
          style={{
            zIndex: 100,
            position: "absolute",
            top: 0,
            left: 0,
            background: "#5301FE",
            mixBlendMode: "overlay",
            opacity: 0.5,
          }}
        />
        <div
          className="h-full w-full"
          style={{
            zIndex: 99,
            position: "absolute",
            top: 0,
            left: 0,
            background: "#5F45FF",
            mixBlendMode: "screen",
            opacity: 0.25,
          }}
        />
        <img
          className="relative h-full w-full"
          style={{
            zIndex: 1,
            filter: "saturate(.8) brightness(1.1)",
          }}
          src={`data:image/svg+xml;base64,${svgBase64}`}
        />
        <div
          className="h-full w-full"
          style={{
            zIndex: 0,
            position: "absolute",
            top: 0,
            left: 0,
            background: randomBool ? "#01144A" : "white",
            opacity: 0.9,
          }}
        />
      </div>
      <div className="h-5" />
      <Button />
    </div>
  );
}
