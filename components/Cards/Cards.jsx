"use client";
import React from "react";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaAngular,
	FaAws,
	FaGitlab,
	FaBrain,
	FaChartLine,
	FaRobot,
	FaCheckCircle,
	FaExclamationTriangle,
	FaServer,
	FaCloud,
	FaDatabase,
} from "react-icons/fa";

const journey = [
	{
		type: "experience",
		company: "Barclays",
		logoUrl: "/assets/journey/experience/barclays_logo.svg",
		position: " - Full-Stack Software Developer",
		duration: "Jun 2023 - Present",
		description:
			"Architected & implemented high-performance web apps and robust microservices using a diverse stack (Angular, React, Java, .NET 8, Python, DBs). Led DevOps modernization, migrated legacy .NET services and 50+ projects to CI/CD with zero downtime. AI/ML and Gen AI initiatives delivered substantial time reduction and millions in financial benefits.",
	},
	{
		type: "experience",
		company: "Medical College of Wisconsin",
		logoUrl: "/assets/journey/experience/mcw.png",
		position: " - Full-Stack Java Developer Intern",
		duration: "Mar 2023 - May 2023",
		description:
			"Designed and developed the Gene Binning tool for the Rat Genome Database Portal using Spring/VueJS. I created integrated statistical dashboards that yielded a 65% reduction in manhours and optimized Oracle/Java services, cutting the data response time from seven hours to just 12 minutes.",
	},
	{
		type: "experience",
		company: "University of Wisconsin",
		logoUrl: "/assets/journey/experience/uwm.png",
		position: " - Graduate Teaching Assistant",
		duration: "Sep 2022 - May 2023",
		description:
			"Guided students on 3 core CS courses: Programming Language Concepts (CS431), Operating Systems (CS557), and Advanced Object-Oriented Programming (CS552). The instruction focused on critical concepts including syntax, semantics, process/memory management, and advanced design patterns.",
	},
	{
		type: "experience",
		company: "University of Wisconsin",
		logoUrl: "/assets/journey/experience/uwm.png",
		position: " - Google Developer Club | Android Lead",
		duration: "Jan 2023 - May 2023",
		description: "",
	},
	{
		type: "experience",
		company: "Kyyba Innovations",
		logoUrl: "/assets/journey/experience/kyyba.png",
		position: " - Software Developer Intern",
		duration: "Jun 2022 - Dec 2022 & Jan 2020 - Dec 2020",
		description: "",
	},
	// {
	// 	type: "experience",
	// 	company: "CEMILAC",
	// 	logoUrl: "/assets/journey/experience/cemilac.png",
	// 	position: "Web Developer Intern",
	// 	duration: "May 2019 - Jul 2019",
	// 	description: "",
	// },
	// {
	// 	type: "experience",
	// 	company: "Hindustan Aeronautics Limited",
	// 	logoUrl: "/assets/journey/experience/barclays_logo.png.webp",
	// 	position: "Developer Intern",
	// 	duration: "May 2018 - Jul 2018",
	// 	description: "",
	// },

	// Education
	{
		type: "education",
		instituition: "University of Wisconsin",
		logoUrl: "/assets/journey/education/uwm.png",
		qualification: "M.Sc - Computer Science",
		duration: "Sep 2021 - May 2023",
		description: "",
	},
	{
		type: "education",
		instituition: "Anna University",
		logoUrl: "/assets/journey/education/annauniv.png",
		qualification: "B.E - Computer Science & Engineering",
		duration: "Jul 2016 - Mar 2020",
		description: "",
	},

	// Skills
	{
		type: "skill",
		icon: <FaAws />,
		name: "Languages",
		duration: "",
		description: "Javascript, Typescript, C#, C/C++, Python, Java, HTML5/CSS3",
	},
	{
		type: "skill",
		icon: <FaAws />,
		name: "Frameworks",
		duration: "",
		description:
			"ReactJS, Redux, Spring Boot, NodeJS, Angular, .NET, Babel, Flask, Django, Webix",
	},
	{
		type: "skill",
		icon: <FaAws />,
		name: "Cloud",
		duration: "",
		description: "AWS, Docker, Shell Scripting, Gitlab, Nolio, Teamcity, Jenkins",
	},
	{
		type: "skill",
		icon: <FaGitlab />,
		name: "DevOps",
		duration: "",
		description: "AWS, Docker, Shell Scripting, Gitlab, Nolio, Teamcity, Jenkins",
	},
	{
		type: "skill",
		icon: <FaDatabase />,
		name: "Database",
		duration: "",
		description: "Oracle, MySQL, PostgreSQL, MongoDB (NoSQL)",
	},
	{
		type: "skill",
		icon: <FaBrain />,
		name: "AI-ML",
		duration: "",
		description:
			"Machine Learning, Deep Learning, Natural Language Processing, Artificial Intelligence, Tensorflow, Keras, GenAI Model Development",
	},
	{
		type: "skill",
		icon: <FaAws />,
		name: "Others",
		duration: "",
		description:
			"Git, Bitbucket, Github, Selenium automation testing, Junit, Jest",
	},
];

const Cards = () => {
	return (
		<>
			<Tabs
				defaultValue="experience"
				className="w-full flex flex-col items-center"
			>
				<TabsList className="max-w-max mb-[30px]">
					<TabsTrigger value="experience">Experience</TabsTrigger>
					<TabsTrigger value="education">Education</TabsTrigger>
					<TabsTrigger value="skill">Skills</TabsTrigger>
					<TabsTrigger value="award">Awards</TabsTrigger>
				</TabsList>

				<TabsContent value="experience" className="w-full">
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3 }}
						>
							{journey
								.filter((item) => item.type == "experience")
								.map((card, index) => {
									return <Card key={index} {...card} />;
								})}
						</motion.div>
					</AnimatePresence>
				</TabsContent>

				<TabsContent value="education" className="w-full">
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3 }}
						>
							{journey
								.filter((item) => item.type == "education")
								.map((card, index) => {
									return <Card key={index} {...card} />;
								})}
						</motion.div>
					</AnimatePresence>
				</TabsContent>

				<TabsContent value="skill" className="w-full">
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3 }}
						>
							{journey
								.filter((item) => item.type == "skill")
								.map((card, index) => {
									return <Card key={index} {...card} />;
								})}
						</motion.div>
					</AnimatePresence>
				</TabsContent>

				<TabsContent value="award" className="w-full">
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3 }}
						>
							{journey
								.filter((item) => item.type == "award")
								.map((card, index) => {
									return <Card key={index} {...card} />;
								})}
						</motion.div>
					</AnimatePresence>
				</TabsContent>
			</Tabs>
		</>
	);
};

export default Cards;
