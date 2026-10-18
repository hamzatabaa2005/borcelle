import Login from "./page/Auth/Login"
import Verification from "./page/Auth/Verification"
import { Routes, Route } from "react-router"
import Home from "./page/Home/Home"
import ContactUs from "./page/User/ContactUs"
import TermsAndCondition from "./page/User/TermsAndCondition"
import Profile from "./page/User/Profile"
import { Error404 } from "./page/Error/Error404"
import { Registration } from "./page/Auth/Registration"
import { Cart } from "./page/Cart/Cart"
import { Products } from "./page/products/Products"
import { Product } from "./page/product/Product"
import Payment from "./page/payment/Payment"
import { Favorite } from "./page/Favorite/Favorite"

import { AdminRoutes } from "./page/Admin/AdminRoutes"
import { Address } from "./page/User/Address"
import { Orders } from "./page/User/Orders"
import { MyProducts } from "./page/User/MyProducts"


import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {

  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n]);
  return (
    <div >


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Error404 />} />

        <Route path="/login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/my-products" element={<MyProducts />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/address" element={<Address />} />
        <Route path="/orders" element={<Orders />} />


        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:CatID" element={<Products />} />
        <Route path="/products/search/:Search" element={<Products />} />
        <Route path="/products/category/:CatID/search/:Search" element={<Products />} />

        <Route path="/product/:PID" element={<Product />} />


        <Route path="/admin/*" element={<AdminRoutes />} />


      </Routes>

    </div>
  )
}

export default App
