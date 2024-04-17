import Footer from "@/components/footer";
import MainMdpModifier from "@/components/mainMdpModifier";
import Navbar from "@/components/navbar";


export default async function MdpModifier() {
   
    return (
      <div>
        <Navbar/>
        <MainMdpModifier/>
        <div className=" fixed bottom-0 w-full">
        <Footer/>
        </div>
      </div>
    );
  }