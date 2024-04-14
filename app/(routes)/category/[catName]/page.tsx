import { getProductsByCategory } from "@/app/_api/strapi";

const page = async ({ params: { catName } }) => {
  const productList = await getProductsByCategory(catName);
  console.log(productList);

  return (
    <div>
      <h2 className="p-4 bg-primary text-white font-bold text-3xl text-center mb-5">{catName}</h2>
    </div>
  );
};

export default page;
