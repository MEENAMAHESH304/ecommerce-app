import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
function App() {

  // Load the cart from localStorage when the application starts
  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("shopEaseCart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });


  // Save the cart to localStorage whenever cart changes
  useEffect(() => {

    localStorage.setItem(
      "shopEaseCart",
      JSON.stringify(cart)
    );

  }, [cart]);


  // Add product to cart
  const addToCart = (product) => {

    setCart((currentCart) => {

      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );


      // If product already exists,
      // increase its quantity
      if (existingProduct) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }


      // If product doesn't exist,
      // add it with quantity 1
      return [
        ...currentCart,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  };


  return (
    <BrowserRouter>

      <Navbar cart={cart} />

      <Routes>

        {/* Home Page */}

        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
            />
          }
        />


        {/* Products Page */}

        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
            />
          }
        />


        {/* Product Details */}

        <Route
          path="/products/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
            />
          }
        />


        {/* Cart Page */}

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />


        {/* About Page */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* Checkout Page */}

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* 404 Page */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;