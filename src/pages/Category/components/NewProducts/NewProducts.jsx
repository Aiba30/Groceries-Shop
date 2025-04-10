import { ProductCard } from "@/common/components/ProductCard";
import { Loader } from "@/common/ui/Loader";
import { Paginate } from "@/common/ui/Paginate";
import { useGetNewProductsQuery } from "@/store/api/productsApi";
import { useState } from "react";

export function NewProducts({ minPrice, maxPrice }) {
  const [page, setPage] = useState(1);
  const {
    data: response,
    isLoading,
    isError,
  } = useGetNewProductsQuery({
    page,
    perPage: 6,
    minPrice,
    maxPrice,
  });
  const products = response?.data || [];
  const totalPages = response?.pages || 0;

  function handlePage(targetPage) {
    setPage(targetPage);
  }

  if (isLoading) return <Loader />;
  if (isError) return <p style={{ fontSize: 18 }}>товары не загрузились</p>;
  return (
    <>
      {products.length &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              discountedPrice={product.discountedPrice}
              name={product.name}
            />
          );
        })}
      <Paginate
        totalPages={totalPages}
        currentPage={page}
        handlePage={handlePage}
      />
    </>
  );
}
