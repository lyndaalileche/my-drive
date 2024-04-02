import { getAllProducts } from "@/api/getAllProducts";


export default async function Home() {
      const products = await getAllProducts();

  
  return (
    <main>
      <h1>MAXIME</h1>
    </main>
  );
}
