import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import CTA from "./components/CTA";
import Testimonials from "./components/testimonials";
import FounderSection from "./components/founder-section";
import DiscoverySection from "./components/discovery-section";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div className="font-manrope bg-white">
			<Navbar />
			<main className="space-y-12 my-12">
				<HeroSection />
				<DiscoverySection />
				<FounderSection />
				<Testimonials />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}
