import "./globals.css";

export const metadata = {
	title: "Atrove",
	description: "Share Your Style, Borrow the Trend.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
