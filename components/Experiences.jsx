import React from "react";
import CodeconyLogo from "../public/550x550.png";
import NextImage from "./ui/NextImage";
import Experience from "./Experience";
import { experiencesData } from "@/data/data";

export default function Experiences() {
  return (
    <div className="wrapper space-y-20">
      <h2 className="">Experiences</h2>
      {experiencesData.map((experience) => (
        <Experience key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
