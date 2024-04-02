import { getAllCategories } from "@/api/getAllCategories";
import { getAllProducts } from "@/api/getAllProducts";


export default async function Home() {
      const products = await getAllProducts();
      const categories = await getAllCategories();

  
  return (
    <main>
      <h1>MAXIME</h1>
    </main>
  );
}


