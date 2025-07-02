"use client";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("./experience"));

export default function ExperienceClient(props) {
  return <Experience {...props} />;
}