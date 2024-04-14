"use client";

import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/categorieFilterContext";

export default function ButtonFilter() {
    const [dataNameCategories, setDataNameCategories] = useState<any>([]);

    const { setFilter }: any = useContext(FilterContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/categories");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setDataNameCategories(data.map((item: any) => item.name));
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (event: any) => {
        const type = event.target.value;
        if (type !== "Tout les produits") {
            setFilter(type);
        } else {
            setFilter("Tout les produits");
        }
    };

    return (
        <div className="flex justify-center items-end p-4 sm:justify-end">
            <select
                onChange={handleChange}
                className="bg-white text-bleuFonce rounded-full shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] cursor-pointer p-2 text-center">
                <option
                    key={dataNameCategories[16]}
                    value={dataNameCategories[16]}
                >
                    {dataNameCategories[16]}
                </option>
                <option
                    key={dataNameCategories[17]}
                    value={dataNameCategories[17]}
                >
                    {dataNameCategories[17]}
                </option>
                <option
                    key={dataNameCategories[0]}
                    value={dataNameCategories[0]}
                >
                    {dataNameCategories[0]}
                </option>
                <option
                    key={dataNameCategories[1]}
                    value={dataNameCategories[1]}
                >
                    {dataNameCategories[1]}
                </option>
                <option
                    key={dataNameCategories[2]}
                    value={dataNameCategories[2]}
                >
                    {dataNameCategories[2]}
                </option>
                <option
                    key={dataNameCategories[3]}
                    value={dataNameCategories[3]}
                >
                    {dataNameCategories[3]}
                </option>                
                <option
                    key={dataNameCategories[4]}
                    value={dataNameCategories[4]}
                >
                    {dataNameCategories[4]}
                </option>                
                <option
                    key={dataNameCategories[5]}
                    value={dataNameCategories[5]}
                >
                    {dataNameCategories[5]}
                </option>                
                <option
                    key={dataNameCategories[6]}
                    value={dataNameCategories[6]}
                >
                    {dataNameCategories[6]}
                </option>                
                <option
                    key={dataNameCategories[7]}
                    value={dataNameCategories[7]}
                >
                    {dataNameCategories[7]}
                </option>                
                <option
                    key={dataNameCategories[8]}
                    value={dataNameCategories[8]}
                >
                    {dataNameCategories[8]}
                </option>
                <option
                    key={dataNameCategories[9]}
                    value={dataNameCategories[9]}
                >
                    {dataNameCategories[9]}
                </option> 
                <option
                    key={dataNameCategories[10]}
                    value={dataNameCategories[10]}
                >
                    {dataNameCategories[10]}
                </option> 
                <option
                    key={dataNameCategories[11]}
                    value={dataNameCategories[11]}
                >
                    {dataNameCategories[11]}
                </option> 
                <option
                    key={dataNameCategories[12]}
                    value={dataNameCategories[12]}
                >
                    {dataNameCategories[12]}
                </option> 
                <option
                    key={dataNameCategories[13]}
                    value={dataNameCategories[13]}
                >
                    {dataNameCategories[13]}
                </option>
                <option
                    key={dataNameCategories[14]}
                    value={dataNameCategories[14]}
                >
                    {dataNameCategories[14]}
                </option>
                <option
                    key={dataNameCategories[15]}
                    value={dataNameCategories[15]}
                >
                    {dataNameCategories[15]}
                </option>
                <option
                    key={dataNameCategories[18]}
                    value={dataNameCategories[18]}
                >
                    {dataNameCategories[18]}
                </option>
                <option
                    key={dataNameCategories[19]}
                    value={dataNameCategories[19]}
                >
                    {dataNameCategories[19]}
                </option>
            </select>
        </div>
    );
}
