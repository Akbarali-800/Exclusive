// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Wishlist from "./pages/Wishlist";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import { AuthProvider } from "./context/AuthContext"; // Login/Signup kontekst

// function App() {
//   // Global state
//   const [wishlist, setWishlist] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Product 1",
//       price: 49.99,
//       oldPrice: 69.99,
//       rating: 4,
//       image: "/assets/images/product1.png"
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 29.99,
//       oldPrice: 39.99,
//       rating: 5,
//       image: "/assets/images/product2.png"
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 19.99,
//       oldPrice: 24.99,
//       rating: 3,
//       image: "/assets/images/product3.png"
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       price: 59.99,
//       oldPrice: 79.99,
//       rating: 4,
//       image: "/assets/images/product4.png"
//     },
//     {
//       id: 5,
//       name: "Product 5",
//       price: 39.99,
//       oldPrice: 49.99,
//       rating: 5,
//       image: "/assets/images/product5.png"
//     },
//     {
//       id: 6,
//       name: "Product 6",
//       price: 24.99,
//       oldPrice: 34.99,
//       rating: 4,
//       image: "/assets/images/product6.png"
//     },
//     {
//       id: 7,
//       name: "Product 7",
//       price: 14.99,
//       oldPrice: 19.99,
//       rating: 3,
//       image: "/assets/images/product7.png"
//     }
//   ]);

//   // Wishlistga Add to Cart qilish funksiyasi
//   const addToCart = (product) => {
//     setCart((prev) => {
//       // Takrorlanmasin
//       if (!prev.find((p) => p.id === product.id)) {
//         return [...prev, product];
//       }
//       return prev;
//     });
//   };

//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Navbar wishlist={wishlist} cart={cart} />

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 wishlist={wishlist}
//                 setWishlist={setWishlist}
//                 cart={cart}
//                 setCart={setCart}
//                 products={products}
//                 addToCart={addToCart}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />

//           {/* Wishlist va Cart sahifalari */}
//           <Route
//             path="/wishlist"
//             element={
//               <Wishlist
//                 wishlist={wishlist}
//                 setWishlist={setWishlist}
//                 products={products}
//                 addToCart={addToCart}
//               />
//             }
//           />
//           <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

//           {/* Checkout sahifasi */}
//           <Route path="/checkout" element={<Checkout cart={cart} />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import { AuthProvider } from "./context/AuthContext";

function App() {
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [products] = useState([
        { id: 1, name: "Product 1", price: 49.99, oldPrice: 69.99, rating: 4, image: "/assets/images/product1.png" },
        { id: 2, name: "Product 2", price: 29.99, oldPrice: 39.99, rating: 5, image: "/assets/images/product2.png" },
        { id: 3, name: "Product 3", price: 19.99, oldPrice: 24.99, rating: 3, image: "/assets/images/product3.png" },
        { id: 4, name: "Product 4", price: 59.99, oldPrice: 79.99, rating: 4, image: "/assets/images/product4.png" },
        { id: 5, name: "Product 5", price: 39.99, oldPrice: 49.99, rating: 5, image: "/assets/images/product5.png" },
        { id: 6, name: "Product 6", price: 24.99, oldPrice: 34.99, rating: 4, image: "/assets/images/product6.png" },
        { id: 7, name: "Product 7", price: 14.99, oldPrice: 19.99, rating: 3, image: "/assets/images/product7.png" }
    ]);

    const addToCart = (product) => {
        setCart((prev) => (!prev.find((p) => p.id === product.id) ? [...prev, product] : prev));
    };

    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar wishlist={wishlist} cart={cart} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                wishlist={wishlist}
                                setWishlist={setWishlist}
                                cart={cart}
                                setCart={setCart}
                                products={products}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} products={products} addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                    <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
