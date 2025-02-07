import Image from "next/image";
import { FaApple } from "react-icons/fa";

export default function CTA() {
	return (
		<setion className="flex flex-col md:flex-row w-full md:items-center md:justify-center px-4 mx-auto max-w-7xl">
			<div className="space-y-2 md:space-y-4">
				<h2 className="text-black/50 text-2xl md:text-5xl font-semibold">
					Download our app now!
				</h2>
				<p className="text-sm md:text-xl">
					Experience the whole new world of fashion
				</p>
				<button className="flex gap-1 bg-black text-white border border-black/50 px-4 py-2 rounded-md items-center justify-center">
					<FaApple className="text-[36px] md:text-[44px]" />
					<div className="flex flex-col">
						<span className="text-xs md:text-sm">
							Download on the
						</span>
						<span className="text-lg md:text-2xl font-semibold -mt-1">
							App Store
						</span>
					</div>
				</button>
			</div>
			<div>
				<Image
					src="/images/cta-cover.png"
					alt="CTA"
					width={600}
					height={600}
				/>
			</div>
		</setion>
	);
}
