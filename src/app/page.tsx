import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MainAcceuil from "@/components/mainAccueil";



export default function Home() {
   
  return (
    <main className="font-LucioleRegular">
      <Navbar/>
      <MainAcceuil/>
      <Footer/>
    </main>
  );
}
