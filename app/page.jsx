import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import CTA from "./components/CTA";
import Testimonials from "./components/testimonials";
import FounderSection from "./components/founder-section";
import DiscoverySection from "./components/discovery-section";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<CTA />
			<Testimonials />
			<FounderSection />
			<DiscoverySection />
			<Footer />
		</div>
	);
}
