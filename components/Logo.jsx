import React from 'react'
import Link from 'next/link'
import { color } from 'framer-motion'

const Logo = ({light=false}) => {
const colorClass = light ? "text-white": "text-primary"
  return (
			<Link href="/" className="font-primary text-2xl tracking-[4px]">
				<span className={colorClass}>Sharath Chander Pugazhenthi</span>,
				<span className="text-sm"> MS(CS), BE</span>
			</Link>
		);
}

export default Logo