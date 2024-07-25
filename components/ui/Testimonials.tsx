export default function Testimoniale() {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold py-10">
        {" "}
        Testimoniale{" "}
      </h1>
      <div className="w-screen h-max flex justify-center gap-4 bg-base-300 rounded-xl p-4">
        <div className="h-40 p-4 text-lg basis-1/3 bg-base-100 rounded-lg"></div>
        <div className="h-40 p-4 text-lg basis-1/3 bg-base-100 rounded-lg"></div>
        <div className="h-40 p-4 text-lg basis-1/3 bg-base-100 rounded-lg"></div>
      </div>
    </>
  );
}
