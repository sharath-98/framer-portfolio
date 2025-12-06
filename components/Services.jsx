import React from "react";
import Image from "next/image";

const servicesData = [
	{
		icon: "assets/services/icon-1.svg",
		title: "Cloud Solutions",
		description:
			"Designing cloud infrastructure & developing secure, high performance solutions.",
	},
	{
		icon: "assets/services/icon-2.svg",
		title: "Full-Stack Web Apps",
		description:
			"Designing & developing robust, scalable applications across all devices.",
	},
	{
		icon: "/assets/services/icon-3.svg",
		title: "AI/ML Solutions",
		description: "Modelling & developing end-to-end AI / GenAI / ML solutions.",
	},
	{
		icon: "assets/services/icon-5.svg",
		title: "DevOps Solutions",
		description:
			"Automating complete build and deployment process through robust Pipelines.",
	},
];

const Services = () => {
	return (
		<section className="relative z-40" id="services">
			<div className="container mx-auto">
				<ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
					{servicesData.map((service, index) => {
						return (
							<li key={index} className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg">
								<Image
									src={service.icon}
									width={48}
									height={48}
									alt=""
									className="mg-4"
								/>
                <h3 className="text-[20px] text-primary font-semibold mb-3 mt-2">{service.title}</h3>
                <p className="text-[15px]">{service.description}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Services;
