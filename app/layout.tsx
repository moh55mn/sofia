import "./globals.css";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata = {
	title: "Serve Sofia",
	description: "Luxury, control, and financial devotion.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className="min-h-screen bg-background text-foreground">
				<header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
					<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
						<Link
							href="/"
							className="font-semibold tracking-tight"
						>
							Sofia
						</Link>

						<nav className="flex items-center gap-1">
							<Button variant="ghost" size="sm" asChild>
								<Link href="/about">About</Link>
							</Button>
							<Button variant="ghost" size="sm" asChild>
								<Link href="/gallery">Gallery</Link>
							</Button>
							<Button variant="ghost" size="sm" asChild>
								<Link href="/tribute">Tribute</Link>
							</Button>
							<Button variant="outline" size="sm" asChild>
								<Link
									href="https://x.com/servesofia_"
									target="_blank"
									rel="noreferrer"
								>
									X
								</Link>
							</Button>
						</nav>
					</div>
				</header>

				<main>{children}</main>
			</body>
		</html>
	);
}
