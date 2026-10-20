import MainLayout from "../../layout/MainLayout"
import { SectionLayout } from "../../layout/SectionLayout";
import { ServiceCard } from "./components/ServiceCard";
import { SuppliersByRegion } from "./components/SuppliersByRegion"
import ContainerLayout from "../../layout/ContainerLayout"

import { ProductCard } from "./components/ProductCard";
import { SalesProductCard } from "./components/SalesProductCard";
import { Inquiry } from "./components/Inquiry";
import { HeroSection } from "./components/HeroSection";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../assets/Group 970.png'
import service1 from '../../assets/0c52058c7fecb736fb193ed3a0a046668cf87a58.png'
import service2 from '../../assets/4b08c60c3829236b56ad902eb0d7bc9954d83888.png'
import service3 from '../../assets/b564a957ce3a966c5d76f6c21ddcaeba336dd251.png'
import { Pagination } from 'swiper/modules';
import { DefaultLink } from "../../components/BrandBtn";
import { BiRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { ProductService } from "../../services/ProductService";
import { RecommendedSection } from "./components/recProduct/RecommendedSection";
import { ProductsSection } from "./components/Product/ProductsSection";
import DaysTimer from "../../components/DaysTimer";
import { DealsAndOffersSection } from "./components/Sales/DealsAndOffersSection";

const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ew-fOXFAF47udIn7-GVGAGFEahx2wN3sEmLqdHmTRQ&s=10'
const Home = () => {

    const suppliersData = [
        {
            "country": "Arabic Emirates",
            "supplierName": "shopName.ae",
            "img": "https://flagcdn.com/w40/ae.png "
        },
        {
            "country": "Australia",
            "supplierName": "shopName.ae",
            "img": "https://flagcdn.com/w40/au.png"
        },
        {
            "country": "United States",
            "supplierName": "shopName.ae",
            "img": "https://flagcdn.com/w40/us.png"
        },
        {
            "country": "Russia",
            "supplierName": "shopName.ru",
            "img": "https://flagcdn.com/w40/ru.png"
        },
        {
            "country": "Italy",
            "supplierName": "shopName.it",
            "img": "https://flagcdn.com/w40/it.png"
        },
        {
            "country": "Denmark",
            "supplierName": "denmark.com.dk",
            "img": "https://flagcdn.com/w40/dk.png"
        },
        {
            "country": "France",
            "supplierName": "shopName.com.fr",
            "img": "https://flagcdn.com/w40/fr.png"
        },
        {
            "country": "Arabic Emirates",
            "supplierName": "shopName.ae",
            "img": "https://flagcdn.com/w40/ae.png"
        },
        {
            "country": "China",
            "supplierName": "shopName.ae",
            "img": "https://flagcdn.com/w40/cn.png"
        },
        {
            "country": "Great Britain",
            "supplierName": "shopName.co.uk",
            "img": "https://flagcdn.com/w40/gb.png"
        }
    ];
    const services = [{
        "serviceName": "Source from Industry Hubs",
        "icon": "🏭",
        "img": service1
    },
    {
        "serviceName": "Customize Your Products",
        "icon": "🚢",
        "img": service2
    },
    {
        "serviceName": "Fast, reliable shipping by ocean or air",
        "icon": "⚙️", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFL7ATCKeVfOPM-0gcTop58XCdhyIPi8LUTq-66H26Q&s=10"
    },
    {
        "serviceName": "Product monitoring and inspection",
        "icon": "🔍", "img": service3
    }
    ];
    const initialSeconds = 4 * 86400 + 13 * 3600 + 34 * 60 + 56;

    const [seconds, setSeconds] = useState(initialSeconds);
    const [recProducts, setRecProducts] = useState(null)
    const [products, setProducts] = useState(null)
    const [salesProducts, setSalesProducts] = useState(null)

    useEffect(() => {
        ProductService.GetProducts()
            .then(products => {
                setRecProducts(products.data)
                setProducts(products.data)
            })
        ProductService.GetProductsByCategory(16)
            .then(products => {
                setSalesProducts(products.data)
            })
    }, [])



    return (
        <MainLayout>
            <ContainerLayout>

                <HeroSection />

                <DealsAndOffersSection salesProducts={salesProducts} />

                <div className="block lg:hidden w-full dark:text-white">

                    <div className="flex justify-between  ">
                        <div className="ms-5"> <h2 className=" text-xl">Deals and offers</h2>
                            <p className="text-gray-700dark:text-white">
                                Electronic equipment   </p></div>
                        <div>   <DaysTimer seconds={seconds} setSeconds={setSeconds} /></div>
                    </div>

                    <Swiper
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
                        spaceBetween={10}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper  my-4"

                    >
                        {salesProducts ? salesProducts.map((product) => (
                            <SwiperSlide key={product.id}

                                className=" rounded-sm ">
                                <SalesProductCard
                                    title={product.name}
                                    sale={product.sale}
                                    img={product.image}
                                    id={product.id}

                                />
                            </SwiperSlide>
                        )) : <></>}
                    </Swiper>


                </div>

                <ProductsSection products={products} img={img2} sectionTitle={"Home and Out Door"} />

                <div className="block lg:hidden w-full dark:text-white">

                    <h2 className=" ms-5 text-xl">Home and Out Door</h2>

                    <Swiper
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
                        spaceBetween={10}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper shadow  my-4"

                    >
                        {products ? products.map(product => (
                            <SwiperSlide key={product.id}
                                className=" rounded-sm">
                                <ProductCard
                                    id={product.id}
                                    title={product.name}
                                    currency={product.currency}
                                    price={product.price}
                                    img={product.image}
                                    isCol={true}
                                />
                            </SwiperSlide >
                        )) : <></>}
                    </Swiper>

                    <DefaultLink title="source Now " btnStyle={"text-pink-600 ms-5 before:rounded-md rounded-md dark:bg-gray-700 "}
                        icon={<BiRightArrow />} />

                </div>


                <ProductsSection products={products} img={img1} sectionTitle={"Latest trending Electronic items"} from={7} to={15} />


                <div className="block lg:hidden w-full dark:text-white">

                    <h2 className=" ms-5 text-xl ">Consumer electronics</h2>

                    <Swiper
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
                        spaceBetween={10}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper shadow my-4"

                    >
                        {products ? products.map(product => (
                            <SwiperSlide key={product.id}
                                className=" rounded-sm">
                                <ProductCard
                                    id={product.id}
                                    title={product.name}
                                    currency={product.currency}
                                    price={product.price}
                                    img={product.image}
                                    isCol={true}
                                />
                            </SwiperSlide >
                        )) : <></>}
                    </Swiper>

                    <DefaultLink title="source Now " btnStyle={"text-pink-600 ms-5 before:rounded-md  rounded-md dark:bg-gray-700 "}
                        icon={<BiRightArrow />} />

                </div>

                <SectionLayout>
                    <Inquiry />
                </SectionLayout>

                <RecommendedSection recProducts={recProducts} />

                <SectionLayout styleSection={"space-y-5 "} title={"Our extra services"}>

                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 ">
                        {services.map((service, index) => (<ServiceCard key={index}
                            img={service.img} icon={service.icon} serviceName={
                                service.serviceName
                            }
                            className="w-full h-full"
                        />)
                        )}
                    </div>

                </SectionLayout>


                <SectionLayout styleSection={"space-y-5 "} title={"Suppliers by region"}>

                    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 space-y-2  gap-x-10 py-10">
                        {suppliersData.map((item, index) => (
                            <SuppliersByRegion
                                key={index}
                                img={item.img}
                                country={item.country}
                                supplierName={item.supplierName}

                            />))}

                    </div>

                </SectionLayout>

            </ContainerLayout >

        </MainLayout >
    )
}

export default Home