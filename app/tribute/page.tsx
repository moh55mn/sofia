export default function Tribute() {
  const buttonClass =
    "block w-full px-10 py-4 bg-pink-600 rounded-full text-white hover:bg-pink-700 transition shadow-lg";

  return (
    <section
      className="h-[calc(100vh-4rem)] w-full flex items-center justify-center px-6 text-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/sofia2.jpg')" }}
    >
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-6">Tribute</h2>
        <p className="text-pink-200 mb-12">
        </p>

        <div className="space-y-6">
          <a href="https://throne.com/servesofia" target="_blank" className={buttonClass}>
            Throne
          </a>

          <a href="https://youpay.me/servesofia" target="_blank" className={buttonClass}>
            YouPay
          </a>

          <a
            href="https://www.loyalfans.com/servesofia_"
            target="_blank"
            className={buttonClass}
          >
            LoyalFans
          </a>
        </div>
      </div>
    </section>
  );
}
