import Footer from "@/components/footer";
import MainMdpModifier from "@/components/mainMdpModifier";
import PasswordRecoveryForm from "@/components/mainMdpOublier";
import Navbar from "@/components/navbar";


export default async function MdpOublier() {
   
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