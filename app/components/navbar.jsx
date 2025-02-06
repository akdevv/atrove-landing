import Image from "next/image";

export default function Navbar() {
	return (
		<nav>
			<div className="flex w-full justify-center items-center py-4">
				<Image
					src="/images/atrove-logo.svg"
					alt="logo"
					width={100}
					height={100}
				/>
			</div>
		</nav>
	);
}
