"use client";

import { educationData } from "@/data/data";
import { IoIosSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

export default function Educations() {
  return (
    <div className="wrapper space-y-20" id="education">
      <h2 className="text-2xl font-bold border-b border-[#3C4B55] pb-2">
        Education
      </h2>

      <VerticalTimeline>
        {educationData.map((data) => (
          <VerticalTimelineElement
            visible={true}
            key={data.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F5F5F5", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={data.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoIosSchool />}
          >
            <div className="space-y-7">
              <div className="flex gap-2">
                <div>
                  <Image
                    className="object-contain w-20"
                    src={data.src}
                    alt={data.alt}
                    draggable={false}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">{data.institution}</span>
                  <span className="vertical-timeline-element-title">
                    {data.degree}
                  </span>
                  <span className="text-gray-500 text-sm">{data.location}</span>
                </div>
              </div>
              <div className="space-y-4">
                {data.skills.length > 0 && (
                  <p>
                    <span className="font-bold">Skills:</span> {data.skills}
                  </p>
                )}
                {data.grade && (
                  <p>
                    <span className="font-bold">Grade:</span> {data.grade}
                  </p>
                )}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
