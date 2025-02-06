import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="bg-black text-white px-2 pt-10 md:pt-20 pb-10 md:pb-0">
			<div className="flex flex-col lg:flex-row gap-5">
				<div className="w-full md:w-[70%]">
					<Image
						src="/images/footer-logo.svg"
						alt="logo"
						width={900}
						height={900}
					/>
				</div>
				<div className="w-full md:w-[30%] flex flex-col md:flex-row gap-4 md:gap-8 font-bold">
					<div className="flex flex-row md:flex-col gap-4 mx-auto md:mx-0">
						<Link href="/" className="hover:text-white/70">
							Home
						</Link>
						<Link href="/" className="hover:text-white/70">
							How it works
						</Link>
						<Link href="/" className="hover:text-white/70">
							Get the App
						</Link>
					</div>
					<div className="flex flex-col gap-2 md:gap-4 mx-auto md:mx-0">
						<p>Follow us</p>
						<div className="flex gap-4">
							<Link href="/" className="hover:text-white/70">
								<FaInstagram size={24} />
							</Link>
							<Link href="/" className="hover:text-white/70">
								<FaXTwitter size={24} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
