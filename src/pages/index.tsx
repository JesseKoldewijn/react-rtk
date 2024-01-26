const Home = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <section className="mx-4 flex flex-col items-center justify-center text-center md:mx-auto">
        <h1 className="text-xl font-bold md:text-3xl">Welcome to SolidRTK</h1>
        <p className="max-w-md text-sm md:text-lg">
          In this project I'll be using SolidJS, TailwindCSS and Vite to
          experiment with Redux and RTK.
        </p>
      </section>
    </div>
  );
};

export default Home;
