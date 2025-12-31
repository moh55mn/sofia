import { Card, CardContent } from "@/components/ui/card";

export default function About() {
	const rules = [
		"i love knowing i'm hot and flaunting it in my subs faces to get my own way",
		"i'm sorry if i said you were the prettiest i lied. i am",
		"listen to me giggle on facetime whilst i max out your credit card",
		"who needs an actual boyfriend when i have the most loyal devoted puppies who strive to give me the princess life i deserve?",
		"i love being a petite brunette with ass",
		"i'm a greedy brat so if you can't afford me don't even bother",
	];

	return (
		<section className="relative overflow-hidden">
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: "url('/sofia3.jpg')" }}
			/>
			<div className="absolute inset-0 bg-background/75" />

			<div className="relative mx-auto max-w-6xl px-6 py-12">
				<h1 className="text-3xl font-semibold tracking-tight">About</h1>

				<div className="mt-8 grid gap-4 md:grid-cols-2">
					{rules.map((rule) => (
						<Card key={rule}>
							<CardContent className="p-6">
								<p className="text-sm leading-relaxed text-foreground">
									{rule}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}