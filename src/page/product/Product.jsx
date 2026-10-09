import { DiscountBox } from "../../components/DiscountBox";
import { Tabs } from "../../components/Tabs";
import ContainerLayout from "../../layout/ContainerLayout"
import MainLayout from "../../layout/MainLayout"
import { ProductCard } from "./components/productCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useParams } from "react-router";
import { ProductService } from "../../services/ProductService";
import { useEffect, useState } from "react";
import { ProductDetailPage } from "./components/ProductDetailPage";

export const Product = () => {


    const [product, setProduct] = useState(null)
    const params = useParams()

    useEffect(() => {
        ProductService.GetProductsByID(params.PID)
            .then(product => {
                setProduct(product.data)

            })


    }, [])

    const productsMayLike = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
            desc: "Men Blazers Sets Elegant Formal",
            price: "$7.00 - $9.95",
            isCol: false
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=200&auto=format&fit=crop",
            desc: "Men Short Sleeve Polo Sportswear",
            price: "$7.00 - $9.95",
            isCol: false
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=200&auto=format&fit=crop",
            desc: "Apple Watch Series Space Gray",
            price: "$7.00 - $9.95",
            isCol: false
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=200&auto=format&fit=crop",
            desc: "Basketball Cap Jeans Long Staff",
            price: "$7.00 - $9.95",
            isCol: false
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=200&auto=format&fit=crop",
            desc: "Leather Coat Long Staff",
            price: "$7.00 - $9.95",
            isCol: false
        },


    ];
    const productsRelated = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300",
            desc: "Men Blazers Sets Elegant Formal",
            price: "$7.00 - $9.95",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300",
            desc: "Men Short Sleeve Polo Sportswear",
            price: "$7.00 - $9.95",
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300",
            desc: "Apple Watch Series Space Gray",
            price: "$7.00 - $9.95",
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
            desc: "Basketball Cap Jeans Long Staff",
            price: "$7.00 - $9.95",
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300",
            desc: "Leather Coat Long Staff",
            price: "$7.00 - $9.95",
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300",
            desc: "Men Blazers Sets Elegant Formal",
            price: "$7.00 - $9.95",
        },

    ];

    const supplier = { name: "hamza", country: "syria" }

    const tabs = [
        { id: "description", label: "Description" },
        { id: "reviews", label: "Reviews" },
        { id: "shipping", label: "Shipping" },
        { id: "about_seller", label: "About seller" }
    ];

    const tabsContent = {
        description: (
            <div className="dark:text-white ms-3 mt-5 space-y-5 ">
                <p className="font-bold">
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam,

                </p>
                <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                </p>

                <table>
                    <tbody className="border border-gray-200 dark:border-gray-600 ">
                        <tr className="border border-gray-200 text-center dark:border-gray-600">
                            <td className="bg-gray-300    dark:bg-gray-600 ">Model</td>
                            <td >#8786867</td>
                        </tr>
                        <tr className="border border-gray-200 dark:border-gray-600 text-center">
                            <td className="bg-gray-300  dark:bg-gray-600">Style</td>
                            <td >Classic style</td>
                        </tr>
                        <tr className="border border-gray-200 text-center dark:border-gray-600">
                            <td className="bg-gray-300  dark:bg-gray-600">Certificate</td>
                            <td >ISO-898921212</td>
                        </tr>
                        <tr className="border border-gray-200 text-center dark:border-gray-600">
                            <td className="bg-gray-300  dark:bg-gray-600">Size</td>
                            <td >34mm x 450mm x 19mm</td>
                        </tr>
                        <tr className="border border-gray-200 text-center dark:border-gray-600">
                            <td className="bg-gray-300  dark:bg-gray-600">Memory</td>
                            <td >36GB RAM</td>
                        </tr>
                    </tbody>
                </table>

                <ul className="space-y-3">
                    <li>Some great feature name here</li>
                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                    <li>Duis aute irure dolor in reprehenderit</li>
                    <li>Some great feature name here</li>
                </ul>
            </div>
        ),
        reviews: (
            <div className="dark:text-white ms-3 mt-5 space-y-5">
                <h2>Customer Reviews</h2>
                <p>No reviews yet.</p>
            </div>
        ),
        shipping: (
            <div className="dark:text-white ms-3 mt-5 space-y-5">
                <h2>Shipping Information</h2>
                <p>Standard shipping details go here.</p>
            </div>
        ),
        about_seller: (
            <div className="dark:text-white ms-3 mt-5 space-y-5">
                <h2>About Seller</h2>
                <p>Seller profile and background information go here.</p>
            </div>
        )
    };

    return (
        <MainLayout subscribeExist={false}>

            <ContainerLayout>

                <ProductDetailPage supplier={supplier} product={product} />

                <div className="grid md:grid-cols-12 my-5 gap-5">
                    <div className="md:col-span-9">

                        <Tabs tabs={tabs} tabsContent={tabsContent} />

                    </div>


                    <div className="lg:block md:col-span-3 hidden p-3 border border-gray-300 dark:border-gray-600 rounded-md">
                        <h2 className="text-xl mb-4 dark:text-white">You may like</h2>

                        <div className="grid grid-cols-1 gap-3">
                            {productsMayLike.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    img={product.img}
                                    desc={product.desc}
                                    price={product.price}
                                    isCol={product.isCol}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-5 p-4 border border-gray-300 dark:border-gray-600 rounded-md lg:block hidden">
                    <h2 className="text-xl mb-4 dark:text-white">Related Product</h2>

                    <div className="grid grid-cols-6 gap-4 ">
                        {productsRelated ? productsRelated.map((product) => (
                            <ProductCard
                                key={product.id}
                                img={product.img}
                                desc={product.desc}
                                price={product.price}
                                isCol={true}
                            />
                        )
                        ) : <></>}
                    </div>

                </div>


                <div className="block lg:hidden w-full">

                    <h2 className=" ms-5 text-xl dark:text-white">Related Product</h2>

                    <Swiper

                        spaceBetween={10}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        breakpoints={{

                            0: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            }

                        }}
                        modules={[Pagination]}
                        className="mySwiper shadow shadow-pink-300 h-84  my-4"

                    >
                        {productsRelated ? productsRelated.map((product) => (
                            <SwiperSlide key={product.id}
                                className="py-5 ">
                                <ProductCard
                                    key={product.id}
                                    img={product.img}
                                    desc={product.desc}
                                    price={product.price}
                                    isCol={true}
                                />
                            </SwiperSlide >
                        )
                        ) : <></>}
                    </Swiper>



                </div>

                <DiscountBox title={"Super discount on more than 100 usd"} description={"Have you ever finally just write dummy info"} />


            </ContainerLayout>
        </MainLayout>
    )
}
