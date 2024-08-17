// page
import Hero from "../components/Hero";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <Hero />
      <div className="">
        <div className="Mycontainer mt-7">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Home;
