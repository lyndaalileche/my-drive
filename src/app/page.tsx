import Footer from "@/components/footer";
import MainAcceuil from "@/components/mainAccueil";
import Navbar from "@/components/navbar";

export default function Home() {
   
  return (
    <main className="font-LucioleRegular">
      <Navbar/>
      <MainAcceuil/>
      <Footer/>
    </main>
  );
}
