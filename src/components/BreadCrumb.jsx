import { useEffect, useState } from "react"
import { NavLink } from "react-router"

export const Breadcrumb = () => {
    const [breadcrumbs, setBreadcrumbs] = useState([])

    useEffect(() => {
        const breadcrumbData = [

            { label: "Home", path: '/' },
            { label: "products", path: '/products' }
        ];

        setBreadcrumbs(breadcrumbData)
    }
        , [])

    return (
        <nav >
            <ol className="flex items-center gap-2" >
                {
                    breadcrumbs.map((breadcrumb, index) => (
                        <li key={index} className="me-2 ">
                            {index === breadcrumbs.length - 1 ?
                                (
                                    <span className="dark:text-white">
                                        {breadcrumb.label}
                                    </span>
                                ) : (
                                    <>
                                        <NavLink className={"text-gray-500 dark:text-gray-300"} to={breadcrumb.path}>
                                            {breadcrumb.label}
                                        </NavLink>
                                        <span className="ms-2 dark:text-gray-300">
                                            /
                                        </span>
                                    </>

                                )
                            }
                        </li>
                    ))
                }
            </ol>
        </nav>
    )
}
