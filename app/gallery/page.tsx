import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
	const images = ["/sofia1.jpg", "/sofia2.jpg", "/sofia3.jpg"];

	return (
		<section className="mx-auto max-w-6xl px-6 py-12">
			<div className="flex items-end justify-between gap-4">
				<div>
					<h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
					<p className="mt-2 text-sm text-muted-foreground">
						A simple grid built with shadcn cards + Next/Image.
					</p>
				</div>
			</div>

			<div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
				{images.map((src) => (
					<Card key={src} className="overflow-hidden">
						<CardContent className="p-0">
							<div className="relative aspect-[3/4]">
								<Image
									src={src}
									alt="Sofia"
									fill
									className="object-cover"
								/>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
