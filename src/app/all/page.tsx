/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Noun } from "../noun";

export default function HomePage() {
  return (
    <div
      style={{ backgroundColor: "#822AFF05" }}
      className="flex h-screen w-screen flex-row flex-wrap items-center justify-center gap-4"
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <div className="relative flex flex-col gap-1" key={i}>
          <Noun number={i} />
          <span
            className="absolute ml-2 mt-2 flex h-6 flex-col items-center justify-center bg-white pl-1.5 pr-1.5 text-sm text-slate-800"
            style={{
              fontWeight: 400,
              zIndex: 100,
            }}
          >
            {i}
          </span>
        </div>
      ))}
    </div>
  );
}
