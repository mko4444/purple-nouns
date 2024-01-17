/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  ImageData,
  getNounSeedFromBlockHash,
  getNounData,
} from "@lilnounsdao/assets";
import { buildSVG } from "@nouns/sdk";
import chroma from "chroma-js";
import { Button } from "~/app/button";
import { origin_hash } from "~/constants";
import { Title } from "../title";
/**
 * Renders a single Purple Noun
 * @param {number} id - The id of the Purple Noun to render
 */

export default function Token({ params }: { params: { id: string } }) {
  const { svg, theme } = generateSVG(params.id);

  return (
    <div className="flex flex-col items-center justify-center">
      <Title />
      <h1 className="text-xl text-slate-700">Purple Noun #{params.id}</h1>
      <div className="h-3" />
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
          src={`data:image/svg+xml;base64,${svg}`}
        />
        <div
          className="h-full w-full"
          style={{
            zIndex: 0,
            position: "absolute",
            top: 0,
            left: 0,
            background: theme ? "#01144A" : "white",
            opacity: 0.9,
          }}
        />
      </div>
      <div className="h-3" />
      <Button />
    </div>
  );
}

/**
 * Generates a base64 encoded SVG for a given noun id
 * @returns {string} - The base64 encoded SVG
 */
function generateSVG(id: string) {
  // grab the nouns assets
  const seed = getNounSeedFromBlockHash(id, origin_hash);
  const { parts } = getNounData(seed);
  // light or dark based on the id
  const theme = parseInt(id, 10) % 4 === 0 ? "000001" : "9D59FF25";
  // generate the color palette
  const palette = ImageData.palette.filter(filter).map(colorize);
  // generate the SVG
  const svgBinary = buildSVG(parts, palette, theme);
  // encode the SVG and return
  return { svg: btoa(svgBinary), theme };
}

/**
 * The krabby patty secret formula - turns a noun purple
 * @param {string} c - The color to tint
 * @returns {string} - The tinted color
 */
function colorize(c: string) {
  return chroma
    .mix("#" + c, "5301FE", 0.5)
    .brighten(1.1)
    .saturate(1.1)
    .hex()
    .slice(1);
}

/**
 * Filters out empty strings
 * @param {string} c - The color to filter
 * @returns {boolean} - Whether or not the color is empty
 */
function filter(c: string) {
  return !!c;
}
