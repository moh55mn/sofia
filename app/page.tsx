export default function Home() { return ( <section className="h-[calc(100vh-4rem)] w-full flex items-center justify-center px-6 text-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/sofia4.jpg')" }}> <div className="max-w-5xl mx-auto"> <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.95]"> Princess Sofia </h1> <p className="text-pink-200 max-w-2xl mx-auto mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed"> i'm literally one of wun or whatever gunna said. </p> <div className="mt-8 sm:mt-10"> <a
href="/tribute"
className="inline-block px-10 py-4 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow-lg"
> Send Tribute </a> </div> </div> </section> ); }
