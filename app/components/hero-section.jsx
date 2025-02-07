import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";

export default function HeroSection() {
	return (
		<section className="px-4 mx-auto max-w-7xl overflow-hidden">
			<div className="flex flex-col lg:flex-row items-center">
				{/* Text Content */}
				<div className="relative w-full lg:w-1/2 space-y-6 z-10 lg:translate-x-8">
					<h1 className="text-4xl md:text-5xl lg:text-8xl font-bold whitespace-nowrap text-black/70">
						Share Your Style, <br /> Borrow the <br /> Trend.
					</h1>
					<p className="text-lg md:text-xl text-black/60 max-w-lg">
						Discover, rent, and refresh your wardrobe with trendy
						styles from the community
					</p>
					<button className="flex items-center gap-2 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all active:scale-95 duration-300">
						<span>Download Now</span>
						<RxArrowTopRight className="text-lg" />
					</button>
				</div>

				{/* Image Container */}
				<div className="w-full lg:w-1/2 mt-8 lg:mt-0">
					<div className="relative aspect-square">
						<Image
							src="/images/hero.png"
							alt="Collection of trendy clothes"
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
