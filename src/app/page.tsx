import Navbar from "@/components/navbar";
import MainAcceuil from "@/components/mainAccueil";
export default async function Home() {
  return (
    <div>
      <Navbar/>
      <main className="font-LucioleRegular">
      <MainAcceuil/>  
      </main>
    </div>
  );
}
