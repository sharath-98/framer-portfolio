"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import {Link as ScrollLink} from 'react-scroll'


const Intro = () => {
  return (
			<section className="h-[800px] relative bg-accent/10 xl:bg-white">
				{/* {Header } */}
				<div>Header</div>
				<div className="container mx-auto h-full">
					<div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-center justify-center text-center xl:text-left pt-10">
						<h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
							<span className="text-accent">I Architect And</span> Build Powerful
							<TypeAnimation
								preRenderFirstString={true}
								sequence={[
									" Applications",
									2000,
									" AI/ML Models",
									2000,
									" Cloud Soln.",
									2000
								]} repeat={Infinity}
                                speed={50}
                                wrapper='span'
                                cursor={false}
                                className='ml-2 xl:ml-4'
							/>
						</h1>
                        <p className='lead max-w-[476px] mb-7'>
                            Delivering powerful, scalable and performant products.
                        </p>
                        <ScrollLink to="contact" smooth>
                            <button className='btn btn-accent mb-8'>Contact me</button>
                        </ScrollLink>
                        
                        {/* {Stats} */}
                        <div>Stats</div>
					</div>
				</div>
			</section>
		);
}

export default Intro