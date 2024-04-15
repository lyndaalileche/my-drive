import Footer from "@/components/footer";
import MainProduitDetail from "@/components/mainProduitDetail";
import Navbar from "@/components/navbar";

export default async function Produit({
  params,
}: {
  params: { id_produit: string };
}) {
  const id_produit = parseInt(params.id_produit);
  return (
    <div>
      <Navbar/>
      <main>
      <MainProduitDetail
        params={{
          id_produit: id_produit,
        }}
      />
      </main>
      <Footer/>
    </div>
  );
}
