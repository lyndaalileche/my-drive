import Navbar from "@/components/navbar";
import MainAcceuil from "@/components/mainAccueil";
import Footer from "@/components/footer";
import BarSearch from "@/components/barSearch";
export default async function Home() {
  return (
    <div>
      <Navbar/>
      <main className="font-LucioleRegular">
      <MainAcceuil/> 
      <Footer/>
      </main>
    </div>
  );
}
