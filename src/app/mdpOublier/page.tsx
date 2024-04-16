import Footer from "@/components/footer";
import PasswordRecoveryForm from "@/components/mainMdpOublier";
import Navbar from "@/components/navbar";


export default async function MdpOublier() {
   
    return (
      <div>
        <Navbar/>
        <PasswordRecoveryForm/>
        <div className=" fixed bottom-0 w-full">
        <Footer/>
        </div>
      </div>
    );
  }
  