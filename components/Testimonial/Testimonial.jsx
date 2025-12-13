import React from "react";
import { useState, useCallback } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import AnimatedText from "../AnimatedText";
import Image from "next/image";

const slides = [
	{
		img: "",
		name: "Tian Zhao",
		message:
			"Sharath was my Teaching Assistant for my programming language concept class. He is one of the best TA I have had. He works every quickly and efficiently in grading students' assignment. He develop testing scripts to run students submissions with well formatted rubrics. He requires minimal supervision to get the job done quickly and cleanly. I also attended Sharath's master thesis defense and was quite impressed by his work on emotion classification and intensity prediction on Tweets using machine learning approaches. I highly recommend Sharath to any potential employer because he is intelligent, efficient, and also a good communicator.",
	},
	{
		img: "",
		name: "John Boyland",
		message:
			"This student is one of the strongest international students in our program; he took compilers from me, which few students do. He did well and overall has a very high GPA. I would recommend him for any software development position.",
	},
	{
		img: "",
		name: "Jay Bayne",
		message:
			"Sharath is an excellent Computer Scientist, one skilled in Senior/Graduate level concepts and related software technologies. He has served as a Teaching Assistant to several of my classes on Operating Systems, with focus on Windows, Linux and MacOS compute platforms. In this capacity Sharath exhibited a polite, responsive, and professional manner while providing clear and concise help to graduate and undergraduate students of Computer Science at the University of Wisconsin Milwaukee. \nIt has been a great pleasure to know and work with Sharath. I strongly recommend him.",
	},
	{
		img: "",
		name: "Logan Lamars",
		message:
			"I have worked with Sharath during his internship with the Rat Genome Database. His ability to adapt and learn some of the genomics showed he is willing to go the extra mile to make a tool that fits the curators description. The tool he created will be beneficial to the curators by making the assignments of genes to an ontology and its children more efficiently.\nSharath was willing to present his masters thesis to our team and was impressed by how he used machine learning to classify tweets by emotion and how intense they are.\nI highly recommend Sharath to an employer who is looking for someone who is willing to learn and adapt to environment he is brought into.",
	},
];

const Testimonial = () => {
	const [swiperRef, setSwiperRef] = useState(null);
	const [activeSlide, setActiveSlide] = useState(0);

	const handlePrevious = useCallback(() => {
		swiperRef?.slidePrev();
	}, [swiperRef]);

	const handleNext = useCallback(() => {
		swiperRef?.slideNext();
	}, [swiperRef]);

	return (
		<div className="py-24 overflow-hidden">
			<div className="container mx-auto">
				<AnimatedText
					text="What People Say"
					textStyles="h2 mb-[30px] xl:mb-[60px]  text-center"
				/>
				<div className="flex justify-between gap-3">
					<button onClick={handlePrevious} className="text-2xl bg-accent w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300">
						<FiArrowLeft />
					</button>
					<button onClick={handleNext} className="text-2xl bg-accent w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300">
						<FiArrowRight />
					</button>
				</div>

				<div className="flex flex-col lg:flex-row gap-12">
					{/* <div className="w-max xl:w-[600px] flex flex-col items-center justify-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
						<ImQuotesLeft className="text-9xl text-accent/20 leading-none mb-4" />
						<h3 className="h3 mb-2">{slides[activeSlide].name}</h3>
						<p className="mb-8 max-w-[360px]">{slides[activeSlide].message}</p>
					</div> */}

					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						loop={true}
						onSwiper={setSwiperRef}
						breakpoints={{
							640: { slidesPerView: 1 },
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
							1280: { slidesPerView: 3 },
						}}
						onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
						modules={[Autoplay]}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						className="w-full h-[450px] xl:h-[500px]"
					>
						{slides.map((slide, index) => {
							return (
								<SwiperSlide key={index} className="h-full select-none">
									<div className="w-full h-full flex items-end">
										<div
											className={`h-full flex rounded-2xl overflow-hidden transition-all duration-500 relative w-full`}
										>
											{/* <Image
												src={slide.img}
												className="object-cover object-center"
												quality={100}
												fill
												alt=""
											/> */}

											<div className="w-max xl:w-[600px] flex flex-col items-center justify-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
												<ImQuotesLeft
													className={`${
														activeSlide === index ? "text-secondary" : "text-accent/20"
													} text-5xl leading-none mb-4`}
												/>
												<h3 className="h3 mb-2">{slide.name}</h3>
												<p className="mb-8 max-w-[360px]">{slide.message}</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
