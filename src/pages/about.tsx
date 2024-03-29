const About = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-14">
      <section className="mx-4 flex flex-col items-center justify-center text-center md:mx-auto">
        <h1 className="text-xl font-bold md:text-3xl">About me</h1>
        <p className="max-w-md text-pretty text-sm md:text-lg">
          On this page you can find some information about me.
        </p>
      </section>
      <section className="mx-4 flex flex-col items-center justify-center text-center md:mx-auto">
        <h1 className="text-xl font-semibold md:text-2xl">
          Want to check the source-code?
        </h1>
        <p className="mb-4 max-w-md text-sm md:text-lg">
          Feel free to check the source-code of this project by clicking on the
          button below.
        </p>
      </section>
    </div>
  );
};

export default About;
