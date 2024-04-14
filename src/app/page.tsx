import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MainAcceuil from "@/components/mainAccueil";
import Footer from "@/components/footer";
import BarSearch from "@/components/barSearch";
export default async function Home() {
import Navbar from "@/components/navbar";

export default function Home() {
   
  return (
    <div>
      <Navbar/>
      <main className="font-LucioleRegular">
      <MainAcceuil/> 
      <Footer/>
      </main>
    </div>
    <main className="font-LucioleRegular">
      <Navbar/>
      <MainAcceuil/>
      <Footer/>
    </main>
  );
}
