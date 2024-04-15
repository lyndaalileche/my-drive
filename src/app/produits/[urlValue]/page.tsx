"use client";

import BarSearch from "@/components/barSearch";
import ButtonFilter from "@/components/buttonFilter";
import FilterProvider from "@/components/context/categorieFilterContext";
import MainProduits from "@/components/mainProduits";
import { useParams } from "next/navigation";


export default function Produits(){
    const { urlValue } = useParams();


    return (
        <main className="font-LucioleRegular">
            <FilterProvider>
                <BarSearch/>
                <ButtonFilter/>
                <MainProduits urlValue={urlValue}/>
            </FilterProvider>
        </main>
    );
}
