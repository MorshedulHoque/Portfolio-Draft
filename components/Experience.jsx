"use client";

import { fadeInUp } from "@/utils/animation";
import { calculateTimeDifference } from "@/utils/timeCalculate";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  // calculate time difference
  useEffect(() => {
    const [start, end] = timeRange.split(" - ");
    const duration = calculateTimeDifference(start, end);
    setFormattedTimeRange(`${timeRange} - ${duration}`);
  }, [timeRange]);

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col lg:flex-row justify-between gap-2.5"
        initial="hidden"
        animate={hasBeenInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <p className="text-sm text-secondary min-w-60">{formattedTimeRange}</p>

        <div className="md:w-96">
          <Link className="hover:underline" href={href} target="_blank">
            <h2 className="font-semibold text-base">
              {designation} at {name}
              <FiArrowUpRight className="ml-1 inline-block mb-1" size={18} />
            </h2>
          </Link>
          <p className="text-secondary">{address}</p>
          <p className="mt-2 text-secondary">{jobDescription}</p>
        </div>
      </motion.div>
    </div>
  );
}
