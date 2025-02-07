"use client";
import Image from "next/image";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const founders = [
	{
		id: 1,
		name: "Whitney Shaw",
		image: "/images/person1.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	},
	{
		id: 2,
		name: "Sarah Johnson",
		image: "/images/person1.png",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
	},
	{
		id: 3,
		name: "Michael Chen",
		image: "/images/person1.png",
		description:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
	},
];

export default function FounderSection() {
	const [currentFounder, setCurrentFounder] = useState(0);

	const nextFounder = () => {
		setCurrentFounder((prev) => (prev + 1) % founders.length);
	};

	const prevFounder = () => {
		setCurrentFounder(
			(prev) => (prev - 1 + founders.length) % founders.length
		);
	};

	return (
		<section className="px-4 mx-auto max-w-7xl py-20">
			<div className="flex flex-col lg:flex-row justify-between">
				{/* Content */}
				<div className="flex flex-col w-full lg:w-1/2">
					{/* Divider */}
					<div className="flex items-center -mt-[7px]">
						<div className="w-4 h-4 border border-black rounded-full" />
						<div className="w-full h-[1px] bg-black" />
					</div>
					{/* Founder */}
					<div className="flex flex-col h-full justify-center">
						<h2 className="text-black/50 text-2xl md:text-5xl font-semibold">
							Our Founders
						</h2>

						<div className="space-y-4">
							<h3 className="text-3xl md:text-4xl font-medium">
								{founders[currentFounder].name}
							</h3>
							<p className="text-lg text-gray-700 max-w-md">
								{founders[currentFounder].description}
							</p>
						</div>

						<div className="flex gap-2 items-center">
							<button
								onClick={prevFounder}
								className="p-2 hover:bg-gray-100 rounded-full transition-colors"
								aria-label="Previous founder"
							>
								<BsArrowLeft className="text-xl" />
							</button>
							<button
								onClick={nextFounder}
								className="p-2 hover:bg-gray-100 rounded-full transition-colors"
								aria-label="Next founder"
							>
								<BsArrowRight className="text-xl" />
							</button>
						</div>
					</div>
				</div>

				{/* Image */}
				<div className="w-full lg:w-1/2 mt-8 lg:mt-0">
					<div className="relative aspect-[4/5] w-full">
						<Image
							src={founders[currentFounder].image}
							alt={founders[currentFounder].name}
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
