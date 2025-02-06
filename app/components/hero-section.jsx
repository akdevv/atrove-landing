import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";

export default function HeroSection() {
	return (
		<section>
			<div>
				{/* Text Content */}
				<div>
					<h1 className="text-4xl font-bold">
						Share Your Style, <br /> Borrow the <br /> Trend.
					</h1>
					<p className="text-lg text-black/50 max-w-md">
						Discover, rent, and refresh your wardrobe with trendy
						styles from the community
					</p>
					<button>Download Now</button>
				</div>
			</div>
		</section>
		// <section className="pt-10">
		// 	<div className="relative flex flex-col lg:flex-row items-center">
		// 		{/* Text Content */}
		// 		<div className="w-full lg:w-1/2 space-y-6 z-10">
		// 			<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1A1A1A] lg:max-w-3xl lg:translate-x-8">
		// 				Share Your Style, Borrow the Trend.
		// 			</h1>
		// 			<p className="text-lg md:text-xl text-black/60 max-w-md">
		// 				Discover, rent, and refresh your wardrobe with trendy
		// 				styles from the community
		// 			</p>
		// 			<button className="flex items-center gap-2 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
		// 				<span>Download Now</span>
		// 				<RxArrowTopRight className="text-lg" />
		// 			</button>
		// 		</div>

		// 		{/* Image Container */}
		// 		<div className="w-full lg:w-1/2 mt-8 lg:mt-0">
		// 			<div className="relative aspect-square">
		// 				<Image
		// 					src="/images/hero.png"
		// 					alt="Collection of trendy clothes"
		// 					fill
		// 					className="object-cover"
		// 					priority
		// 				/>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	);
}
