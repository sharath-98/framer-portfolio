import React from 'react'
import StatsItem from './StatsItem';

const statsData = [
	{
		endCountNum: 3,
		endCounttext: "+",
		text: "Yrs. of Experience",
	},
	{
		endCountNum: 20,
		endCounttext: "+",
		text: "Apps Built",
	},
	{
		endCountNum: 5,
		endCounttext: "+",
		text: "Publications",
	}
];

const Stats = () => {
  return (
				<section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
					{
            statsData.map((item, index) => {
						  return <StatsItem endCountNum={item.endCountNum} endCountText={item.endCounttext} text={item.text} key={index}/>
					  })
          }
				</section>
		);
}

export default Stats