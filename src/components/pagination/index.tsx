import Link from "next/link";
import React from "react";

type PaginationProps = {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    itemsPerPage,
    totalItems,
    paginate,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center my-6">
                { pageNumbers.map((number) => (
                    <li key={number} className="mx-2">
                        <Link
                            onClick={() => paginate(number)}
                            href="#!"
                            className="hover:font-bold"
                        >
                            {number}
                        </Link>
                    </li>
                )
            )}
            </ul>
        </nav>
    );
};

export default Pagination;
