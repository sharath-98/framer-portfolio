import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const About = () => {
	return (
		<section className="relative pt-12 pb-24" id="about">
			<div className="container mx-auto h-full">
				<div className="h-full flex items-center justify-center">
					{/* Image and experience highlights */}
					<div className="hidden xl:flex flex-1 pl-8">
						<div className="relative w-full max-w-[380px]">
							<div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>

							{/* About me Image */}
							<div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
								<Image
									src="/assets/about/img.png"
									width={350}
									height={478}
									quality={100}
									priority
									alt=""
								/>
							</div>

							{/* rotating shape */}
							<div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
								<motion.div
									animate={{
										rotate: [0, 360],
									}}
									transition={{
										duration: 10,
										ease: "linear",
										repeat: Infinity,
									}}
								>
									<Image
										src="/assets/about/shape-1.svg"
										width={160}
										height={160}
										alt=""
									/>
								</motion.div>
								<div className="absolute text-center text-white">
									<div className="text-5xl font-bold leading-none">3+</div>
									<div className="leading-none text-center">
										Years of <br />
										Experience
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Description */}
					<div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-auto xl:mx-0 flex flex-col gap-6">
						<div>
							<AnimatedText
								text="I'm Sharath Chander Pugazhenthi"
								textStyles="h2 mb-2"
							/>
							<p className="text-lg">Full-Stack Software Developer & AI/ML Engineer</p>
						</div>
						<p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
							I am a results-oriented Software Engineer with a Master's degree in
							Computer Science and a proven track record of architecting and delivering
							high-performance, scalable full-stack applications and advanced AI/ML
							solutions. My experience at Barclays involved leading critical
							infrastructure migrations, developing robust API-driven microservices,
							and pioneering machine learning initiatives that delivered significant
							financial and operational improvements.
						</p>
						<div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
							{/* Item 1 */}
							<div className="max-w-max">
								<div className="uppercase font-bold text-primary">Age</div>
								<p>27 years</p>
							</div>
							{/* Item 2 */}
							<div className="max-w-max">
								<div className="uppercase font-bold text-primary">Phone</div>
								<p>+1 (414)-739-7754</p>
							</div>
							{/* Item 3 */}
							<div className="max-w-max">
								<div className="uppercase font-bold text-primary">Email</div>
								<p>sharathchander.p@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
