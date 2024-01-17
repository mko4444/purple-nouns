/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  ImageData,
  getNounSeedFromBlockHash,
  getNounData,
} from "@lilnounsdao/assets";
import { buildSVG } from "@nouns/sdk";
const { palette } = ImageData; // Used with `buildSVG``
import chroma from "chroma-js";

export function Noun({ number }: { number: number }) {
  const latestBlockHash =
    "0xc48631ed6b16a5915103ec03d436aeb5f7f62eaf6e4ed546e6abbf12e342b88d";
  // random number between 0 and 10000
  const nextNounId = number;
  const randomBool = number % 4 === 0;

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
  );
}
