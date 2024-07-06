import Hero from "../../Components/Header/Hero/Hero";

const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <div className="bg-hero-pattern min-h-[800px] bg-cover w-full fixed">
        <Hero />
      </div>

    </div>
  );
};

export default Home;
