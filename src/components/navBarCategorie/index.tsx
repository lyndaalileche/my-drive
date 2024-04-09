import { Categorie } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBarCategorie() {
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const filteredCategories = data.filter(
          (categorie: Categorie) => categorie.type === 1
        );
        setCategories(filteredCategories);
      } catch (error) {
        console.log("Error fetching data from useEffect:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {categories.map((categorie) => (
        <div key={categorie.id_categorie}>
          <Link
            href={`/produits/${categorie.id_categorie}`}
            className="flex flex-col justify-center items-center w-52"
          >
            <img
              className="w-36 h-36 mt-4"
              src={categorie.image ?? ""}
              alt={categorie.name}
            />
            <p>{categorie.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
