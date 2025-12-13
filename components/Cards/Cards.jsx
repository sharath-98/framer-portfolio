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
import SkillCard from "./SkillCard";

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
		icon: "/assets/work/code.png",
		name: "Languages",
		duration: "",
		description: "Javascript, Typescript, C#, Python, Java, C/C++, ",
	},
	{
		type: "skill",
		icon: "/assets/work/frontend.png",
		name: "Frontend",
		duration: "",
		description:
			"ReactJS, Redux, Angular, HTML5, CSS, Tailwind CSS, Bootstrap, AgGrid, Framer-motion",
	},
	{
		type: "skill",
		icon: "/assets/work/right-arrow.gif",
		name: "Backend",
		duration: "",
		description: ".NET, Flask, Django, Spring Boot, NodeJS, Junit, Selenium",
	},
	{
		type: "skill",
		icon: "/assets/work/database.png",
		name: "Database",
		duration: "",
		description: "Oracle, MySQL, PostgreSQL, MongoDB (NoSQL)",
	},
	{
		type: "skill",
		icon: "/assets/work/tools.png",
		name: "DevOps & Cloud",
		duration: "",
		description: "AWS, Docker, Shell Scripting, Gitlab, Nolio, Teamcity, Jenkins",
	},
	{
		type: "skill",
		icon: "/assets/work/ai-2.png",
		name: "AI-ML",
		duration: "",
		description:
			"Machine Learning, Deep Learning, Natural Language Processing, Artificial Intelligence, Tensorflow, Keras, Pandas, GenAI Model Development",
	},

	// REsearch Publications
	{
		type: "publication",
		journal: "Master's Thesis",
		logoUrl: "/assets/journey/education/uwm.png",
		title: "Emotion Classification and Intensity Prediction on Tweets",
		duration: "2023",
		description:
			"This thesis addresses the critical task of understanding social behavior by analyzing emotions expressed on microblogging platforms like Twitter. The developed system first classifies tweets into four core emotions (anger, joy, sadness, fear) with high accuracy. Following classification, the second phase uses regressors to predict the precise intensity of the detected emotion. Both the classification and intensity prediction systems were rigorously evaluated on a competition dataset, where the regressors notably outperformed the competition's best system.",
	},
	{
		type: "publication",
		journal: "Robot Intelligence Technology and Applications",
		logoUrl: "/assets/work/rita-2018.jpeg",
		title:
			"Brain Tumour Detection and Classification Using K-Means Clustering and SVM Classifier",
		duration: "2020",
		description:
			"Brain tumor detection is a critical step in treating this life-threatening malignancy. Utilizing Magnetic Resonance Imaging (MRI) is essential, as it overcomes the limitations of CT and Ultrasound by providing superior soft tissue contrast and allowing functional imaging. This paper presents an improved system for detection and classification: MRI images are first subjected to segmentation using an adaptive k-means clustering method to accurately isolate the tumor mass. The segmented image is then passed to a Support Vector Machine (SVM) classifier to determine the tumor type. Comparative analysis showed that the linear kernel function of the SVM achieved the highest classification accuracy.",
	},
	{
		type: "publication",
		journal: "IEEE",
		logoUrl: "/assets/work/ieee.png",
		title: "Audio Hiding in an Image Using Steganographic Methods",
		duration: "2018",
		description:
			"Data security remains a critical concern, leading to the development of various protection techniques. Steganography addresses the limitations of cryptography by securely hiding secret data (such as audio, video, or text) within a seemingly harmless cover medium, like an image. This paper focuses on embedding a secret audio message into a two-dimensional color image. The implementation demonstrates the superior performance of the Least Significant Bit (LSB) algorithm over other techniques, like Discrete Wavelet Transform (DWT), for this specific task of audio steganography.",
	},
	{
		type: "publication",
		journal: "IEEE",
		logoUrl: "/assets/work/ieee.png",
		title: "Data Analysıs of Natural Language Queryıng Usıng NLP Interface",
		duration: "2020",
		description:
			"The difficulty non-experts face in interacting with databases using Structured Query Language (SQL)—due to the need for specific keywords, syntactic rules, and knowledge of underlying table schemas—presents a major barrier to data access. This project aims to solve this limitation by incorporating a Natural Language Interface Relational Database System (NLIRDS), which combines features of Artificial Intelligence (AI) with the Relational Database Management System (RDBMS). Unlike previous systems that required manual creation of semantic maps, this NLIRDS automatically generates these maps, allowing users to effortlessly query the database using natural language.",
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
					<TabsTrigger value="publication">Publications</TabsTrigger>
					<TabsTrigger value="award">Certifications / Awards</TabsTrigger>
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
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
						<AnimatePresence>
							{journey
								.filter((item) => item.type == "skill")
								.map((card, index) => {
									return (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3 }}
										>
											<SkillCard {...card} />
										</motion.div>
									);
								})}
						</AnimatePresence>
					</div>
				</TabsContent>

				<TabsContent value="publication" className="w-full">
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3 }}
						>
							{journey
								.filter((item) => item.type == "publication")
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
