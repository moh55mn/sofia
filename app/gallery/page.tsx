import Image from "next/image";

export default function Gallery() { const images = ["/sofia1.jpg", "/sofia2.jpg", "/sofia3.jpg"];

return ( <section className="max-w-6xl mx-auto px-6"> <h2 className="text-4xl font-bold mb-10 text-center">Gallery</h2> <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"> {images.map((src, i) => ( <div
key={i}
className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
> <Image src={src} alt="Sofia" fill className="object-cover" /> </div> ))} </div> </section> ); }
