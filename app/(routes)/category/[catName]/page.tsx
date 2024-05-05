import { getCategories, getProductsByCategory } from "@/app/_api/strapi";
import CategoryMenu from "./_components/CategoryMenu";
import { ProductList } from "@/app/_components";

const page = async ({ params: { catName } }: { params: { catName: string } }) => {
  const productList = await getProductsByCategory(catName);
  const categoryList = await getCategories();

  return (
    <div>
      <h1 className="page-header">{catName}</h1>
      <CategoryMenu data={categoryList} active={catName} />
      <div className="px-5 md:px-10">
        {productList?.length ? (
          <ProductList data={productList} title="Category Products" />
        ) : (
          <h3 className="mt-5">There are not any products in this category</h3>
        )}
      </div>
    </div>
  );
};

export default page;
