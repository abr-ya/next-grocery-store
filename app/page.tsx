import { getSlider } from "./_api/strapi";
import { Slider } from "./_components";

const Home = async () => {
  const sliderData = await getSlider();

  return (
    <main className="flex p-8 px-16">
      {/* Slider  */}
      <Slider data={sliderData} />
      {/* Category List  */}
      {/* Product List */}
      {/* Banner  */}
    </main>
  );
};

export default Home;
