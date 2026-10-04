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

function App() {

  return (
    <div >


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Error404 />} />

        <Route path="/login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/payment" element={<Payment />} />


        <Route path="/profile" element={<Profile />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/contact-us" element={<ContactUs />} />


        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />


        <Route path="/products" element={<Products />} />


        <Route path="/product/:PID" element={<Product />} />


      </Routes>

    </div>
  )
}

export default App
