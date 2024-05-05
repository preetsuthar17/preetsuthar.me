export const Services = () => {
  return (
    <>
      <section
        className="services pt-[4rem] w-full mx-auto max-w-[95%] overflow-hidden"
        id="services"
      >
        <div className="relative border border-t-0 border-l-0 border-r-0">
          <h2 className="text-5xl pb-[5rem]">
            I can help you with <span className="animate-ping">.</span>
            <span
              className="animate-ping"
              style={{
                animationDelay: "0.4s",
              }}
            >
              .
            </span>
            <span
              className="animate-ping"
              style={{
                animationDelay: "0.5s",
              }}
            >
              .
            </span>
          </h2>
          <div className="absolute bottom-[7.5px] left-2">
            <span className="absolute w-[1px] h-4 rotate-90 bg-black"></span>
            <span className="absolute w-[1px] h-4  bg-black"></span>
          </div>
          <div className="absolute bottom-[7.5px] right-2">
            <span className="absolute w-[1px] h-4 rotate-90 bg-black"></span>
            <span className="absolute w-[1px] h-4  bg-black"></span>
          </div>
        </div>
        <div className="py-[6rem] flex gap-[5rem] justify-evenly max-[850px]:flex-col overflow-hidden">
          <div className="flex flex-col gap-4 max-w-[20rem] max-[850px]:max-w-full w-full grow">
            <small className="opacity-40">01</small>
            <hr />
            <h3 className="text-2xl font-medium">Design</h3>
            <p className="opacity-90">
              With a solid record in designing, I deliver awesome and modern
              designs for new or existing businesses that skyrocket their
              impressions! (since 2024 with development work)
            </p>
          </div>
          <div className="flex flex-col gap-4 max-w-[20rem] max-[850px]:max-w-full w-full grow">
            <small className="opacity-40">02</small>
            <hr />
            <h3 className="text-2xl font-medium">Development</h3>
            <p className="opacity-90">
              I can help you create a large, scalable website that fits my
              design with animations and micro-interactions. Let's turn your
              idea into reality together!
            </p>
          </div>
          <div className="flex flex-col gap-4 max-w-[20rem] max-[850px]:max-w-full w-full grow">
            <small className="opacity-40">03</small>
            <hr />
            <h3 className="text-2xl font-medium">✦ Combo</h3>
            <p className="opacity-90">
              The combo includes the process of designing and developing a
              website with maximum optimization for SEO and website speed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
