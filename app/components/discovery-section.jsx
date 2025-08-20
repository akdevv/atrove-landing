"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const demoDiscovery = [
	{
		title: "Discovery",
		desc: "Explore a curated selection of fashion finds shared by other users. Each post includes a direct link to the product, making it effortless to shop for pieces you love.",
		image: "/images/discovery1.png",
	},
	{
		title: "Upload Product",
		desc: "Easily upload and share your favorite fashion pieces. Choose to list items publicly on Discovery for others to shop via direct links, or share them privately in groups, allowing trusted friends to request to borrow them.",
		image: "/images/discovery2.png",
	},
	{
		title: "Private Groups",
		desc: "Create and join exclusive groups with friends and family to share and borrow clothing in a trusted space. Each group includes a built-in chat for seamless communication and transparency throughout the borrowing process.",
		image: "/images/discovery3.png",
	},
];

const DiscoveryCard = () => {
	const containerRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	useEffect(() => {
		const unsubscribe = scrollYProgress.on("change", (latest) => {
			const progress = latest * (demoDiscovery.length - 1);
			const index = Math.round(progress);
			setCurrentIndex(index);
		});

		return () => unsubscribe();
	}, [scrollYProgress]);

	return (
		<div ref={containerRef} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen flex items-center justify-center w-full">
				<div className="flex flex-col md:flex-row items-center gap-8 px-4 w-full max-w-7xl mx-auto">
					{/* Image container */}
					<motion.div className="relative aspect-square w-full max-w-[600px] bg-white border border-black rounded-2xl overflow-hidden">
						<Image
							src={demoDiscovery[currentIndex].image}
							alt={demoDiscovery[currentIndex].title}
							fill
							className="object-contain p-8"
						/>
					</motion.div>
					<motion.div
						className="p-4 space-y-10"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						key={currentIndex}
						transition={{ duration: 0.5 }}
					>
						<h3 className="text-4xl md:text-6xl font-semibold">
							{demoDiscovery[currentIndex].title}
						</h3>
						<p className="text-xl md:text-2xl max-w-lg">
							{demoDiscovery[currentIndex].desc}
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default function DiscoverySection() {
	return (
		<section className="bg-primary">
			<div className="px-4 mx-auto max-w-7xl py-20">
				<h2 className="text-black/50 text-2xl md:text-5xl font-semibold max-w-2xl">
					List your possessions, enable borrowing, and facilitate
					seamless sharing.
				</h2>

				<div className="w-full h-[1px] bg-black/20 mt-12" />

				<DiscoveryCard />
			</div>
		</section>
	);
}
