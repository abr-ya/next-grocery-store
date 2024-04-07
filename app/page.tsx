import { getCategories, getProducts, getSlider } from "./_api/strapi";
import { CategoryList, ProductList, Slider } from "./_components";

const Home = async () => {
  const sliderData = await getSlider(1);
  const categoriesData = await getCategories(); // todo: один запрос вместо двух (+ Header)
  const productsData = await getProducts();

  return (
    <main className="flex flex-col p-8 px-16">
      {/* Slider  */}
      <Slider data={sliderData} />
      {/* Category List  */}
      <CategoryList data={categoriesData} />
      {/* Product List */}
      <ProductList data={productsData} />
      {/* Banner  */}
    </main>
  );
};

export default Home;
