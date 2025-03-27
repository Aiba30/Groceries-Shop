import { ProductCard } from "@/common/components/ProductCard";
import { useGetNewProductsQuery } from "@/store/api/productsApi";

export function NewProducts() {
  const { data: products } = useGetNewProductsQuery({
    page: 1,
    perPage: 6,
  });
  return (
    <>
      {products?.length ? (
        products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              price={product.price}
              discountedPrice={product.discountedPrice}
              name={product.name}
            />
          );
        })
      ) : (
        <p style={{ fontSize: 30, margin: "100px auto" }}>
          Пока нет новых товаров
        </p>
      )}
    </>
  );
}
