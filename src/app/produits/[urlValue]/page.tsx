"use client";

import BarSearch from "@/components/barSearch";
import ButtonFilter from "@/components/buttonFilter";
import FilterProvider from "@/components/context/categorieFilterContext";
import Footer from "@/components/footer";
import MainProduits from "@/components/mainProduits";
import Navbar from "@/components/navbar";
import { useParams } from "next/navigation";

export default function Produits() {
  const { urlValue } = useParams();

    return (
        <main className="font-LucioleRegular">
            <FilterProvider>
                <BarSearch/>
                <Navbar/>
                <ButtonFilter/>
                <MainProduits urlValue={urlValue}/>
                <Footer/>
            </FilterProvider>
        </main>
    );
}
