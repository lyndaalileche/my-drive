import Footer from "@/components/footer";
import MainCharteDonneePersonnel from "@/components/mainCharteDonneePersonnel";
import Navbar from "@/components/navbar";
import React from "react";

export default function CharteDesDonnees() {
  return (
    <div>
      <Navbar/>
      <main>
        <MainCharteDonneePersonnel/>
      </main>
      <div className="bottom-0 fixed w-full">
      <Footer/>
      </div>
    </div>
  );
}
