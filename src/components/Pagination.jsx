import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Pagination = () => {
    let [num, setNum] = useState(1);

    let [currentPage, setCurrentPage] = useState(1)

    const pages = [
        { page: num },
        { page: num + 1 },
        { page: num + 2 },
        { page: num + 3 }

    ]

    function Next() {
        setNum(++num)
    }
    function Prev() {
        num > 1 && setNum(--num)
    }

    return (
        <div className="flex bg-white dark:bg-gray-800 rounded-lg dark:text-pink dark:text-white">

            <button onClick={Prev} className="flex items-center justify-center h-12 border-2 border-r-0 border-pink-700 hover:bg-pink-500 w-12 rounded-lg rounded-e-none" >
                <ArrowLeft />
            </button>

            {
                pages.map((page, index) => (
                    <button onClick={() => setCurrentPage(page.page)}
                        key={index} className={`h-12 border-2 border-r-0 border-pink-700 w-12 hover:bg-pink-500 ${currentPage === page.page && "bg-pink-500"}`}>
                        {page.page}
                    </button>
                ))
            }


            <button onClick={Next} className="flex items-center justify-center rounded-s-none h-12 border-2  border-pink-700 hover:bg-pink-500 w-12 rounded-lg" >
                <ArrowRight />
            </button>

        </div>
    )
}
