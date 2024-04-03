import { getSlider } from "./_api/strapi";
import { Slider } from "./_components";

const Home = async () => {
  const sliderData = await getSlider();

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      {/* Slider  */}
      <Slider data={sliderData} />
      {/* Category List  */}
      {/* Product List */}
      {/* Banner  */}
    </main>
  );
};

export default Home;
