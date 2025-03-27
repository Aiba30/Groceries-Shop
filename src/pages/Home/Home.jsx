import { AppContainer } from "@/layouts/AppContainer";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { SpecialOffers } from "./components/SpecialOffers";
import { StoreFinder } from "@/common/components/StoreFinder";
import { Articles } from "./components/Articles";

export function Home() {
  return (
    <main>
      <Hero />
      <AppContainer>
        <Products />
        <SpecialOffers />
        <StoreFinder />
        <Articles />
      </AppContainer>
    </main>
  );
}
