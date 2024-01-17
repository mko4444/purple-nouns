/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button } from "./button";
import { Noun } from "./noun";
import { Title } from "./title";

export const revalidate = 0;

export default function HomePage() {
  return (
    <div
      style={{ backgroundColor: "#822AFF05" }}
      className="flex h-screen w-screen flex-col items-center justify-center"
    >
      <Title />
      <Noun number={Math.floor(Math.random() * 10000)} />
      <div className="h-5" />
      <Button />
    </div>
  );
}
