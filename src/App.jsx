import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import SingleProduct from "./Pages/SingleProduct";
import Register from "./Pages/Register";

function App() {

  const [cartCount, setCartCount] = useState(0);

  const location = useLocation();

  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/register";

  const userId = localStorage.getItem("userid")


  const updateCartCount = async () => {
      const response = await axios.get(`http://localhost:3000/cart?userId=${userId}`);
      const cartItems = response.data;

      let total = 0;
      cartItems.forEach(item => {
          total += item.qty;
      });

      setCartCount(total);
  };

  useEffect(() => {
    updateCartCount();
  }, [userId]);

  return (
    <>
      <ToastContainer position="top-center" />
      {!hideHeaderFooter && <Header cartCount={cartCount}/>}
      <Routes>
        <Route index path="/" element={<Home updateCartCount={updateCartCount}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/product" element={<Shop updateCartCount={updateCartCount}/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart updateCartCount={updateCartCount}/>}></Route>
        <Route path="/login" element={<><Login/></>}></Route>
        <Route path="/register" element={<><Register/></>}></Route>
        <Route path="/singleProduct/:id" element={<SingleProduct updateCartCount={updateCartCount}/>}></Route>
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default App
