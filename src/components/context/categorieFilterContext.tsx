"use client"

import { createContext, useState } from "react";

interface FilterContextType {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = createContext<FilterContextType | string> ("");


export default function FilterProvider ({ children }: any) {
    const [filter, setFilter] = useState<string>("");

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    );
};