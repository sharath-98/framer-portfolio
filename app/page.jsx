"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Intro from "@/components/Intro";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import Work from "@/components/Work/Work";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		const loadLocomotiveScroll = async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		};
		loadLocomotiveScroll();
	}, []);
	return (
		<>
			<Intro />
			<FixedMenu />
			<Services />
			<About />
			<Journey />
			<Work />
			<Testimonial />
			<Contact />
			<div className="h-[3000px]"></div>
		</>
	);
};

export default Home;
