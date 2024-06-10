"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function Experience(props) {
  const {
    timeRange,
    skills,
    listItems,
    logo,
    name,
    designation,
    href,
    address,
    jobDescription,
  } = props.data;

  const [formattedTimeRange, setFormattedTimeRange] = useState(timeRange);

  // calculate time difference
  useEffect(() => {
    const calculateTimeDifference = (start, end) => {
      const startDate = new Date(start);
      const endDate = end === "Now" ? new Date() : new Date(end);
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
    <div className="flex flex-col lg:flex-row justify-between gap-2.5 ">
      <p className="text-sm text-mute">{formattedTimeRange}</p>

      <div className="w-96">
        <Link className="hover:underline" href={href} target="_blank">
          <p className="font-medium">
            {designation} at {name}
            <FiArrowUpRight className="ml-1 inline-block mb-1" size={18} />
          </p>
        </Link>
        <p className="text-mute">{address}</p>
        <p className="mt-2 text-mute">{jobDescription}</p>
      </div>
    </div>
  );
}
