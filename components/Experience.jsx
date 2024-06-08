"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import NextImage from "./ui/NextImage";

export default function Experience(props) {
  const { timeRange, skills, listItems, logo, name, position } =
    props.experience;

  const [formattedTimeRange, setFormattedTimeRange] = useState(timeRange);

  // calculate time difference
  useEffect(() => {
    const calculateTimeDifference = (start, end) => {
      const startDate = new Date(start);
      const endDate = end === "Present" ? new Date() : new Date(end);
      const diffTime = Math.abs(endDate - startDate);
      const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
      const diffMonths = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      return `${
        diffYears > 0 ? `${diffYears} year${diffYears > 1 ? "s" : ""}` : ""
      } ${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
    };

    const [start, end] = timeRange.split(" - ");
    const duration = calculateTimeDifference(start, end);
    setFormattedTimeRange(`${timeRange} - ${duration}`);
  }, [timeRange]);

  return (
    <div
      className="grid col-span-1 gap-10 lg:grid-cols-3"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="col-span-1 ">
        <span>{formattedTimeRange}</span>
      </div>
      <div className="col-span-2 ">
        <div className="space-lg">
          <div className="flex items-center gap-5">
            <Link href="#" alt="logo">
              <NextImage className="border" src={logo} width={80} height={80} />
            </Link>
            <div>
              <a href="#" className="hover:underline transition">
                <h2 className="flex items-center gap-2 font-medium ">
                  {name}
                  <FiExternalLink />
                </h2>
              </a>
              <p>{position}</p>
            </div>
          </div>

          <ul className="list-disc pl-6 space-y-2 max-w-md">
            {listItems.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>

          <p className="flex w-96 flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 rounded-full border-gray-400 border"
              >
                {skill}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
