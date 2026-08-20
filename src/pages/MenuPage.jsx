import { useState } from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Scroller from "../components/menuPage/Scroller.jsx";
import Menu from "../components/menuPage/Menu.jsx";
import { menuCategories, menuItems } from "../data/menu.js";

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0]);
  const displayedItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  return(
    <>
    <Header />
    <main className="px-4 py-10 sm:px-6">
      <Scroller
        categories={menuCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Menu selectedCategory={selectedCategory}
            items={displayedItems}
      />
    </main>
    <Footer />
    </>
  );
} 
export default MenuPage;