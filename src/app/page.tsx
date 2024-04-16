import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MainAcceuil from "@/components/mainAccueil";

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="font-LucioleRegular">
                <MainAcceuil />
            </main>
            <Footer />
        </div>
    );
}
