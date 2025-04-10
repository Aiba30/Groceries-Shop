import { useSelector } from "react-redux";
import styles from "./favorites.module.scss";
import { ProductCard } from "@/common/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import EmptyFavorites from "@/assets/icons/favorites_empty.svg";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";
import { ROUTER_PATHS } from "@/routes/routerPaths";
import { AppContainer } from "@/layouts/AppContainer";

export function Favorites() {
  const { favorites } = useSelector((state) => state.favoritesSlice);
  return (
    <main className={styles.main}>
      <AppContainer>
        <Breadcrumbs
          items={[
            { path: "/", label: "Главная" },
            { path: ROUTER_PATHS.favorites, label: "Избранное" },
          ]}
        />
        <div className={styles.favorites}>
          {favorites.length > 1 ? (
            favorites.map((favorite) => {
              if (!favorite) return null;
              return (
                <motion.div
                  key={favorite.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard
                    id={favorite.id}
                    image={favorite.image}
                    price={favorite.price}
                    discountedPrice={favorite.discountedPrice}
                    name={favorite.name}
                  />
                </motion.div>
              );
            })
          ) : (
            <div className={styles.empty}>
              <img src={EmptyFavorites} alt="Нет избранного" />
              <h3>У вас нет избранных</h3>
            </div>
          )}
        </div>
      </AppContainer>
    </main>
  );
}
