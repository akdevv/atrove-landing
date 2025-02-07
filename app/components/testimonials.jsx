"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const demoTestimonials = [
	{
		testimonial:
			"This is a sample testimonial. It is a short testimonial that is used to test the testimonial component. It is a short testimonial that is used to test the testimonial component. 001",
		author: "Whitney Shaw",
		authorImage: "/images/person1.png",
	},
	{
		testimonial:
			"This is a sample testimonial. It is a short testimonial that is used to test the testimonial component. It is a short testimonial that is used to test the testimonial component. 002",
		author: "Whitney Shaw",
		authorImage: "/images/person1.png",
	},
	{
		testimonial:
			"This is a sample testimonial. It is a short testimonial that is used to test the testimonial component. It is a short testimonial that is used to test the testimonial component. 003",
		author: "Whitney Shaw",
		authorImage: "/images/person1.png",
	},
	{
		testimonial:
			"This is a sample testimonial. It is a short testimonial that is used to test the testimonial component. It is a short testimonial that is used to test the testimonial component. 004",
		author: "Whitney Shaw",
		authorImage: "/images/person1.png",
	},
	{
		testimonial:
			"This is a sample testimonial. It is a short testimonial that is used to test the testimonial component. It is a short testimonial that is used to test the testimonial component. 005",
		author: "Whitney Shaw",
		authorImage: "/images/person1.png",
	},
];

const TestimonialCard = ({ testimonial, author, authorImage }) => {
	return (
		<div className="flex flex-col gap-4 bg-white p-4 rounded-xl border border-black w-fit">
			<p className="text-xs md:text-lg max-w-md text-center">
				{testimonial}
			</p>
			<div className="flex items-center justify-center gap-2">
				<div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
					<Image
						src={authorImage}
						alt={author}
						width={40}
						height={40}
						className="object-cover"
					/>
				</div>
				<p className="text-sm md:text-xl">{author}</p>
			</div>
		</div>
	);
};

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === demoTestimonials.length - 3 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? demoTestimonials.length - 3 : prevIndex - 1
		);
	};

	return (
		<section className="bg-primary">
			<div className="px-4 mx-auto max-w-7xl py-20">
				<div className="flex items-center justify-between">
					<h2 className="text-black/50 text-2xl md:text-5xl font-semibold">
						Hear from our users
					</h2>

					{/* arrow controls */}
					<div className="flex items-center gap-4">
						<button
							onClick={handlePrev}
							className="text-black/50 hover:text-black active:scale-95 transition-all duration-300"
						>
							<FaArrowLeft />
						</button>
						<button
							onClick={handleNext}
							className="text-black/50 hover:text-black active:scale-95 transition-all duration-300"
						>
							<FaArrowRight />
						</button>
					</div>
				</div>
				<div className="relative overflow-hidden mt-12">
					<div
						className="flex gap-4 transition-transform duration-300 ease-in-out"
						style={{
							transform: `translateX(-${
								currentIndex * (100 / 3)
							}%)`,
						}}
					>
						{demoTestimonials.map((testimonial, idx) => (
							<div
								key={idx}
								className="min-w-[calc(33.333%-1rem)]"
							>
								<TestimonialCard {...testimonial} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
