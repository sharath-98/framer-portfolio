import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

const SkillCard = ({ icon, name, description, bg, shadow }) => {
	return (
		<div>
			<div
				className={`w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-accent hover:bg-primary/30 text-[#ffffff] hover:text-[#ffffff] transition-all duration-200`}
			>
				<Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
					{name}
				</Badge>
				<div className="items-center justify-center flex flex-col text-secondary hover:text-[#ffffff]">
					<div className="bg-white rounded-full p-3 w-[70px] h-[70px] transition-all duration-200 top-12 left-12 mb-5 text-white">
						<Image src={icon} width={70} height={70} alt="" />
					</div>
					<h4 className="">{description}</h4>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;
