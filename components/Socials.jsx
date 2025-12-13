import React from "react";
import Link from "next/link";
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaMedium,
	FaStackOverflow,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
	{
		icon: <FaLinkedin />,
		path: "https://www.linkedin.com/in/sharath-cp/",
	},
	{
		icon: <FaGithub />,
		path: "https://github.com/sharath-98",
	},
	{
		icon: <FaMedium />,
		path: "",
	},
	{
		icon: <FaStackOverflow />,
		path: "",
	},
];

const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link href={item.path} target="_blank" key={index} className={iconStyles}>
						<span>{item.icon}</span>
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
