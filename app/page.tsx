import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: "url('/sofia4.jpg')" }}
				/>
				<div className="absolute inset-0 bg-background/75" />

				<div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28">
					<h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
						Princess Sofia
					</h1>
					<p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
						i'm literally one of wun or whatever gunna said
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<Button asChild>
							<Link href="/gallery">View Gallery</Link>
						</Button>
						<Button variant="secondary" asChild>
							<Link href="/about">About</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="/tribute">Send Tribute</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
