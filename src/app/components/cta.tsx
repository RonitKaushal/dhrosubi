export default function Cta() {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-auto bg-light-green border-4 border-black mt-10 py-5 md:py-10">
        <div className="relative flex justify-between items-center flex-wrap w-[95%] md:w-[90%] max-w-[1200px] h-auto">
          <div className="relative flex justify-center items-center md:justify-start md:items-start md:w-auto w-full flex-col h-auto">
            <h2 className="anton-regular text-3xl md:text-4xl lg:text-5xl uppercase">
              Ready to get started?
            </h2>
            <p className="inter text-xl md:text-2xl lg:text-2xl">
              Sign up for a free account today.
            </p>
          </div>
          <div className="flex justify-center md:items-end items-center w-full md:w-auto h-auto">
          <button className="relative uppercase inter font-bold text-base md:text-lg lg:text-xl md:w-52 md:h-16 w-36 h-10 rounded-lg border-2 border-b-4 border-l-4 border-black bg-cream text-black my-5 md:my-0">
            Call now
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
