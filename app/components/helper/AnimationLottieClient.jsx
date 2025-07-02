"use client";
import dynamic from "next/dynamic";

const AnimationLottie = dynamic(() => import("./animation-lottie"), { ssr: false });

export default AnimationLottie;