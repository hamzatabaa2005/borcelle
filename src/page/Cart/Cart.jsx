import { DiscountBox } from "../../components/DiscountBox"
import ContainerLayout from "../../layout/ContainerLayout"
import MainLayout from "../../layout/MainLayout"
import { SectionLayout } from "../../layout/SectionLayout"
import { SavedProductCard } from "./components/SavedProductCard"
import { Lock, MessageSquare, Truck } from 'lucide-react';
import { ServiceCard } from "./components/ServiceCard"
import { Coupon } from "./components/Coupon"
import { BrandLink, DefaultBtn } from "../../components/BrandBtn"
import { CartProduct } from "./components/CartProduct"
import { Bill } from "./components/Bill"
import { NavLink } from "react-router"
import { BiLeftArrow } from "react-icons/bi"
import { useContext, useEffect, useState } from "react"
import { ProductService } from "../../services/ProductService"
import { CartContext } from "../../context/CartContext/CartContext"
import { CartService } from "../../services/CartService"
import { UserContext } from "../../context/UserContext/UserContext"

const servicesData = [
    {
        id: 1,
        icon: <Lock className="w-5 h-5 text-gray-600" />,
        serviceName: "Secure payment",
        description: "Have you ever finally just",
    },
    {
        id: 2,
        icon: <MessageSquare className="w-5 h-5 text-gray-600" />,
        serviceName: "Customer support",
        description: "Have you ever finally just",
    },
    {
        id: 3,
        icon: <Truck className="w-5 h-5 text-gray-600" />,
        serviceName: "Free delivery",
        description: "Have you ever finally just",
    },
];


export const Cart = () => {

    const { user } = useContext(UserContext)

    const { cart, setCart } = useContext(CartContext)

    const [savedProducts, setSavedProducts] = useState(null)

    useEffect(() => {

        ProductService.GetProducts()
            .then(products => {
                setSavedProducts(products.data)
            })

        if (!user || !user.token) {
            setCart(null)
            return;
        }

        CartService.GetCart(user.token
        ).then(product => {
            setCart(product.data)
        })


    }, [])



    return (
        <MainLayout searchExist={false} SecondaryNavExist={false}
            subscribeExist={false} >

            <div className="lg:hidden bg-white dark:bg-gray-600 shadow-xl fixed w-screen top-0 left-0 right-0 z-100 h-16 flex items-center ps-5">
                <NavLink to={"/"} className={"flex items-center gap-2"}>
                    <BiLeftArrow /> Shopping cart
                </NavLink>
            </div>

            <ContainerLayout>

                <div className="grid lg:grid-cols-5 grid-cols-1 
                
                ">
                    <div className="md:col-span-3">


                        <SectionLayout styleSection={"border border-gray-200 dark:border-gray-600 rounded-md p-5"}>

                            {
                                cart ? cart.map((item, index) => {
                                    return (
                                        <CartProduct
                                            key={index}
                                            img={item.product.image}
                                            desc={item.product.description}
                                            size={item.product.size}
                                            seller={item.product.seller}
                                            price={item.product.price}
                                            quantity={item.quantity}
                                            id={item.product.id}
                                            containerId={item.id}
                                        />
                                    )
                                }) : <p >No Item Added To Cart Yet</p>
                            }


                            <div className="flex px-5 justify-between py-5 ">
                                <BrandLink to={"/"} title={"Back to shop"} btnStyle={" hover:bg-pink-500 dark:bg-gray-700 rounded-md"} />
                                <DefaultBtn title={"Remove all "} btnStyle={"shadow-none border border-gray-200 rounded-md text-pink-600 w-32 ms-2 before:rounded-md dark:bg-gray-700 "} onClick={() => {
                                    setCart(null)
                                }} />


                            </div>
                        </SectionLayout>


                        <div className="lg:grid hidden gap-5 grid-cols-3 lg:ms-5 ">

                            {servicesData.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    icon={service.icon}
                                    serviceName={service.serviceName}
                                    description={service.description}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="
                    grid lg:grid-cols-1 sm:grid-cols-12
                    md:col-span-2 sm:me-8 sm:ms-5 mx-8 md:my-15  lg:gap-0 sm:gap-6 gap-3">
                        <div className="md:col-span-8 sm:col-span-6">
                            <Bill subtotal={1403.97} discount={60.00}
                                tax={14.00} />
                        </div>
                        <div className="lg:-order-1 md:col-span-4 sm:col-span-6">
                            <Coupon />
                        </div>
                    </div>
                </div>

                <SectionLayout title={"Saved for later"} styleSection={"border border-gray-200 dark:border-gray-600 rounded-md p-5 "}>
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {savedProducts ? savedProducts.map((product, index) => {
                            if (index < 11 && index > 6)
                                return (
                                    <SavedProductCard
                                        key={product.id}
                                        img={product.image}
                                        price={product.price}
                                        title={product.name}
                                        id={product.id}
                                    />
                                )
                        }) : <></>}
                    </div>
                </SectionLayout>

                <DiscountBox title={"Super discount on more than 100 usd"} description={"Have you ever finally just write dummy info"} />

            </ContainerLayout>

        </MainLayout>
    )
}
