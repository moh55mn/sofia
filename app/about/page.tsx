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
		<section
			className="w-full min-h-[calc(100vh-4rem)] bg-cover bg-center"
			style={{ backgroundImage: "url('/sofia3.jpg')" }}
		>
			<div className="max-w-4xl mx-auto px-6 py-12">
				<h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-10">
					About
				</h2>

				<div className="grid md:grid-cols-2 gap-6">
					{rules.map((rule, i) => (
						<div
							key={i}
							className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm"
						>
							<p className="text-zinc-200">{rule}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}