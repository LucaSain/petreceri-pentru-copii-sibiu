import Transition from "./Transition";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen relative z-[0]"
      style={{
        backgroundImage: "url(/bgtruetrue.png)",
      }}
    >
      <div className="hero-overlay bg-transparent   bg-opacity-60"></div>
      <div className=" hero-content text-neutral-content text-center relative z-[90]">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            Contact
          </button>
        </div>
      </div>
      <Transition />
    </div>
  );
}
