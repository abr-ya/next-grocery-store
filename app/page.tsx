import { getCategories, getSlider } from "./_api/strapi";
import { CategoryList, Slider } from "./_components";

const Home = async () => {
  const sliderData = await getSlider(1);
  const categoriesData = await getCategories(); // todo: один запрос вместо двух (+ Header)

  return (
    <main className="flex flex-col p-8 px-16">
      {/* Slider  */}
      <Slider data={sliderData} />
      {/* Category List  */}
      <CategoryList data={categoriesData} />
      {/* Product List */}
      {/* Banner  */}
    </main>
  );
};

export default Home;
