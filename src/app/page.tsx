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

export const revalidate = 0;

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
          .brighten(1.25)
          .saturate(1.25)
          .hex()
          .slice(1)
      : c,
  );

  const svgBinary = buildSVG(
    parts,
    purple_palette,
    randomBool ? "070010" : "07001003",
  );

  const svgBase64 = btoa(svgBinary);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="relative h-80 w-80 overflow-hidden bg-slate-100">
        <div
          className="h-full w-full"
          style={{
            zIndex: 99,
            position: "absolute",
            top: 0,
            left: 0,
            background: "white",
            mixBlendMode: "overlay",
            opacity: 0.25,
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
            opacity: 0.25,
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
            mixBlendMode: "soft-light",
            opacity: 1,
          }}
        />
        <img
          className="relative h-full w-full"
          style={{ zIndex: 1 }}
          src={`data:image/svg+xml;base64,${svgBase64}`}
        />
        <div
          className="h-full w-full"
          style={{
            zIndex: 0,
            position: "absolute",
            top: 0,
            left: 0,
            background: "white",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}
