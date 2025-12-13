import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

const data = [
	{
		href: "https://delicious-e372a.web.app/",
		category: "full-stack",
		img: "/assets/work/chef1.png",
		title: "Delicious",
	},
	{
		href: "https://clone-55587.web.app/",
		category: "full-stack",
		img: "/assets/work/amazon_logo.jpeg",
		title: "Amazon Shopping",
	},
	{
		href: "https://github.com/sharath-98/spotify",
		category: "full-stack",
		img: "/assets/work/Spotify-logo.png",
		title: "Spotify",
	},
	{
		href: "https://github.com/sharath-98/whatsapp",
		category: "full-stack",
		img: "/assets/work/WhatsApp.png",
		title: "WhatsApp",
	},
	{
		href: "https://github.com/sharath-98/URL_Shortner",
		category: "full-stack",
		img: "/assets/work/url_short.jpeg",
		title: "URL Shortener",
	},
	{
		href: "",
		category: "mobile apps",
		img: "/assets/work/cycle.png",
		title: "Bublr 2.0",
	},
	{
		href: "",
		category: "mobile apps",
		img: "/assets/work/chatbox.png",
		title: "Chatbox",
	},
	{
		href: "https://uni-vise.com",
		category: "AI-ML",
		img: "/assets/work/univise.png",
		title: "Univise - University Recommender App",
	},
	{
		href: "https://github.com/sharath-98/Kidney-disease-prediction",
		category: "AI-ML",
		img: "/assets/work/kidney.jpeg",
		title: "Kidney Disease Detection",
	},
	{
		href: "https://github.com/sharath-98/Detecting-Malaraia",
		category: "AI-ML",
		img: "/assets/work/malaria.jpeg",
		title: "Malaria detection",
	},
	{
		href: "https://github.com/sharath-98/Breast-Cancer-Detection",
		category: "AI-ML",
		img: "/assets/work/cancer.webp",
		title: "Breast Cancer detection",
	},
];

const Work = () => {
	const uniqueCategories = Array.from(
		new Set(data.map((item) => item.category))
	);
	const tabData = [
		{ category: "all" },
		...uniqueCategories.map((category) => ({ category })),
	];
	const [tabValue, setTabValue] = useState("all");
	const [visibleItems, setVisibleItems] = useState(6);
	const filterWork =
		tabValue == "all"
			? data.filter((item) => item.category !== "all")
			: data.filter((item) => item.category === tabValue);

	const loadMoreItems = () => {
		setVisibleItems((prev) => prev + 2);
	};

	return (
		<section className="pt-34px min-h-[1000px] " id="work">
			<div className="container mx-auto">
				<Tabs defaultValue="all" className="w-full flex flex-col">
					<div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px] mt-[50px]">
						<AnimatedText text="My Latest Work" textStyles="h2 mb-[30px] xl:mb-0" />
						<TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
							{tabData.map((item, index) => {
								return (
									<TabsTrigger
										value={item.category}
										key={index}
										className="capitalize w-[120px]"
										onClick={() => setTabValue(item.category)}
									>
										{item.category}
									</TabsTrigger>
								);
							})}
						</TabsList>
					</div>

					<TabsContent value={tabValue} className="w-full">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
							<AnimatePresence>
								{filterWork.slice(0, visibleItems).map((item, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3 }}
									>
										<WorkItem {...item} />
									</motion.div>
								))}
							</AnimatePresence>
						</div>
						{visibleItems < filterWork.length && (
							<div className="flex justify-center mt-12">
								<button onClick={loadMoreItems} className="btn btn-accent">
									Load More
								</button>
							</div>
						)}
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};

export default Work;
