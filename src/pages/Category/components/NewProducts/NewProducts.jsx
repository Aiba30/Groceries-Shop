import { ProductCard } from "@/common/components/ProductCard";
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

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <NotFound />;
  return (
    <>
      {products.length ? (
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
        })
      ) : (
        <p style={{ fontSize: 30, margin: "100px auto" }}>
          Пока нет новых товаров
        </p>
      )}
      <Paginate
        totalPages={totalPages}
        currentPage={page}
        handlePage={handlePage}
      />
    </>
  );
}
