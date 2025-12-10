// import React, { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar/Sidebar";
// import "./About.css";
// import "./Home.css";

// import HomeImg from "../assets/images/Home_img.png";

// // Product images
// import product1 from "../assets/images/product1.png";
// import product2 from "../assets/images/product2.png";
// import product3 from "../assets/images/product3.png";
// import product4 from "../assets/images/product4.png";
// import product5 from "../assets/images/product5.png";
// import product6 from "../assets/images/product6.png";
// import product7 from "../assets/images/product7.png";
// import product8 from "../assets/images/product8.png";
// import product9 from "../assets/images/product9.png";
// import product10 from "../assets/images/product10.png";
// import product11 from "../assets/images/product11.png";

// import service4 from "../assets/images/Services4.png";
// import service5 from "../assets/images/Services5.png";
// import service6 from "../assets/images/Services6.png";

// // Explore products (12–19)
// import product12 from "../assets/images/product12.png";
// import product13 from "../assets/images/product13.png";
// import product14 from "../assets/images/product14.png";
// import product15 from "../assets/images/product15.png";
// import product16 from "../assets/images/product16.png";
// import product17 from "../assets/images/product17.png";
// import product18 from "../assets/images/product18.png";
// import product19 from "../assets/images/product19.png";

// // Category images
// import category1 from "../assets/images/category1.png";
// import category2 from "../assets/images/category2.png";
// import category3 from "../assets/images/category3.png";
// import category4 from "../assets/images/category4.png";
// import category5 from "../assets/images/category5.png";
// import category6 from "../assets/images/category6.png";

// import home3 from "../assets/images/home3.png";

// import app_store from "../assets/images/appstore.png";
// import google_play from "../assets/images/google_p.png";
// import qr from "../assets/images/qr_code.png";



// import socials from "../assets/images/socials.png";
// import send_icon from "../assets/images/icon-send.png";

// // FLASH SALES products
// const products = [
//   { id: 1, name: "HAVIT HV-G92 Gamepad", price: 49.99, oldPrice: 69.99, rating: 4, image: product1 },
//   { id: 2, name: "AK-900 Wired Keyboard", price: 29.99, oldPrice: 39.99, rating: 5, image: product2 },
//   { id: 3, name: "IPS LCD Gaming Monitor", price: 19.99, oldPrice: 24.99, rating: 3, image: product3 },
//   { id: 4, name: "S-Series Comfort Chair", price: 59.99, oldPrice: 79.99, rating: 4, image: product4 },
//   { id: 7, name: "S-Series Monitor LCD 7", price: 14.99, oldPrice: 19.99, rating: 3, image: product7 },
// ];

// // Top Products (8–11)
// const topProducts = [
//   { id: 8, name: "The north coat", price: 960, rating: 5, image: product8 },
//   { id: 9, name: "Gucci duffle bag", price: 260, rating: 4, image: product9 },
//   { id: 10, name: "RGB liquid CPU Cooler", price: 14.99, rating: 2, image: product10 },
//   { id: 11, name: "Small BookSelf", price: 124.99, rating: 3, image: product11 },
// ];

// const topProductss = [
//   { id: 16, name: "Product 16", price: 59.99, rating: 5, image: product16 },
//   { id: 17, name: "Product 17", price: 69.99, rating: 3, image: product17 },
//   { id: 18, name: "Product 18", price: 79.99, rating: 4, image: product18 },
//   { id: 19, name: "Product 19", price: 89.99, rating: 5, image: product19 },
// ];

// // Explore products (12–19)
// const exploreMore = [
//   { id: 12, name: "Product 12", price: 19.99, rating: 4, image: product12 },
//   { id: 13, name: "Product 13", price: 29.99, rating: 3, image: product13 },
//   { id: 14, name: "Product 14", price: 39.99, rating: 5, image: product14 },
//   { id: 15, name: "Product 15", price: 49.99, rating: 4, image: product15 },
// ];

// // Categories
// const categories = [
//   { id: 1, name: "Phones", image: category1 },
//   { id: 2, name: "Computers", image: category2 },
//   { id: 3, name: "SmartWatch", image: category3 },
//   { id: 4, name: "Camera", image: category4 },
//   { id: 5, name: "HeadPhones", image: category5 },
//   { id: 6, name: "Gaming", image: category6 },
// ];

// const Home = ({ wishlist, setWishlist, cart, setCart }) => {
//   const [timeLeft, setTimeLeft] = useState(2 * 24 * 60 * 60);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const formatTime = (secs) => {
//     const d = Math.floor(secs / (24 * 3600));
//     const h = Math.floor((secs % (24 * 3600)) / 3600);
//     const m = Math.floor((secs % 3600) / 60);
//     const s = secs % 60;
//     return `${d} : ${h} : ${m} : ${s}`;
//   };

//   const toggleWishlist = (id) => {
//     setWishlist(prev =>
//       prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
//     );
//   };

//   const addToCart = (product) => {
//     setCart(prev => [...prev, product]);
//   };

//   return (
//     <div className="home-container">
//       <Sidebar />
//       <div className="home-content">

//         <img src={HomeImg} alt="Home Banner" className="home-banner" />

//         {/* Flash Sales */}
//         <section className="flash-sales">
//           <div className="flash-header">
//             <h2 className="flash_sale">Flash Sales ⏰</h2>
//             <span className="timer">{formatTime(timeLeft)}</span>
//           </div>

//           <div className="flash-products">
//             {products.map(product => (
//               <div key={product.id} className="product-card">
//                 <div
//                   className={`heart ${wishlist.includes(product.id) ? "active" : ""}`}
//                   onClick={() => toggleWishlist(product.id)}
//                 >
//                   {wishlist.includes(product.id) ? "❤️" : "🤍"}
//                 </div>

//                 <img src={product.image} alt={product.name} className="product-image" />
//                 <h3>{product.name}</h3>

//                 <p className="price">
//                   <span className="current">${product.price.toFixed(2)}</span>
//                   <span className="old">${product.oldPrice.toFixed(2)}</span>
//                 </p>

//                 <p className="rating">
//                   {"★".repeat(product.rating)}
//                   {"☆".repeat(5 - product.rating)}
//                 </p>

//                 <button className="add-cart-btn" onClick={() => addToCart(product)}>
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Categories */}
//         <section className="categories-section">
//           <div className="kate_div">
//             <div className="div_red"></div>
//             <h2 className="categories-title">Categories</h2>
//           </div>

//           <div className="categories-container">
//             {categories.map(cat => (
//               <div key={cat.id} className="category-card">
//                 <img src={cat.image} alt={cat.name} className="category-image" />
//                 <h4>{cat.name}</h4>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Top Products */}
//         <section className="featured-products-section">
//           <div className="kate_div">
//             <div className="div_red"></div>
//             <h2 className="categories-title">Top Products</h2>
//           </div>

//           <div className="featured-products-container">
//             {topProducts.map(product => (
//               <div key={product.id} className="product-card2">
//                 <div
//                   className={`heart ${wishlist.includes(product.id) ? "active" : ""}`}
//                   onClick={() => toggleWishlist(product.id)}
//                 >
//                   {wishlist.includes(product.id) ? "❤️" : "🤍"}
//                 </div>

//                 <img src={product.image} alt={product.name} className="product-image" />
//                 <h3>{product.name}</h3>
//                 <p className="price2">${product.price.toFixed(2)}</p>

//                 <p className="rating2">
//                   {"★".repeat(product.rating)}
//                   {"☆".repeat(5 - product.rating)}
//                 </p>

//                 <button className="add-cart-btn" onClick={() => addToCart(product)}>
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Banner */}
//         <section>
//           <div className="home3_div">
//             <img src={home3} alt="" className="home3_img" />
//           </div>
//         </section>

//         {/* Explore Products */}
//         <section className="explore-products-section">

//           <div className="kate_div">
//             <div className="div_red"></div>
//             <h2 className="categories-title">Our Products</h2>
//           </div>

//           <h2 className="explore-title">Explore Our Products</h2>

//           <div className="explore-products-container">
//             {topProductss.map(product => (
//               <div key={product.id} className="explore-card">

//                 <div
//                   className={`heart explore-heart ${wishlist.includes(product.id) ? "active" : ""}`}
//                   onClick={() => toggleWishlist(product.id)}
//                 >
//                   {wishlist.includes(product.id) ? "❤️" : "🤍"}
//                 </div>

//                 <img src={product.image} alt={product.name} className="explore-image" />

//                 <h3 className="explore-name">{product.name}</h3>

//                 <p className="explore-price">${product.price.toFixed(2)}</p>

//                 <p className="explore-rating">
//                   {"★".repeat(product.rating)}
//                   {"☆".repeat(5 - product.rating)}
//                 </p>

//                 <button className="explore-cart-btn" onClick={() => addToCart(product)}>
//                   Add To Cart
//                 </button>

//               </div>
//             ))}
//           </div>

//           {/* View All → yana product12–15 chiqadi */}
//           {showAll && (
//             <div className="explore-products-container">
//               {exploreMore.slice(0, 4).map(product => (
//                 <div key={product.id} className="explore-card">

//                   <div
//                     className={`heart explore-heart ${wishlist.includes(product.id) ? "active" : ""}`}
//                     onClick={() => toggleWishlist(product.id)}
//                   >
//                     {wishlist.includes(product.id) ? "❤️" : "🤍"}
//                   </div>

//                   <img src={product.image} alt={product.name} className="explore-image" />

//                   <h3 className="explore-name">{product.name}</h3>
//                   <p className="explore-price">${product.price.toFixed(2)}</p>
//                   <p className="explore-rating">
//                     {"★".repeat(product.rating)}
//                     {"☆".repeat(5 - product.rating)}
//                   </p>

//                   <button className="explore-cart-btn" onClick={() => addToCart(product)}>
//                     Add To Cart
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="explore-btn-wrapper">
//             {!showAll && (
//               <button className="view-all-btn" onClick={() => setShowAll(true)}>
//                 View All Products
//               </button>
//             )}
//           </div>

//         </section>

//         <section>
//           <div className="box_container">
//             <div className="box_div">
//               <img src={service4} alt="" className="img_s" />
//               <p className="bold_p">FREE AND FAST DELIVERY </p>
//               <p className="text_p">Free delivery for all orders over $140</p>
//             </div>

//             <div className="box_div">
//               <img src={service5} alt="" className="img_s" />
//               <p className="bold_p">24/7 CUSTOMER SERVICE </p>
//               <p className="text_p">Friendly 24/7 customer support</p>
//             </div>

//             <div className="box_div">
//               <img src={service6} alt="" className="img_s" />
//               <p className="bold_p">MONEY BACK GUARANTEE </p>
//               <p className="text_p">We reurn money within 30 days</p>
//             </div>
//           </div>
//         </section>

//         <footer>
//           <div className="main_footer_div">

//             <div className="foot1">
//               <h5 className="f1_h5">Exclusive</h5>
//               <p>Subscribe</p>
//               <p>Get 10% off your first order</p>
//               <div className="input_div">
//                 <input type="text" className="inp1" placeholder="Enter your email" />
//                 <img src={send_icon} alt="" className="icon_img" />
//               </div>
//             </div>



//             <div className="foot1">
//               <h5 className="f1_h5">Account</h5>
//               <p>My Account</p>
//               <p>Cart</p>
//               <p>Wishlist</p>
//             </div>

//             <div className="foot1">
//               <h5 className="f1_h5">Quick Link</h5>
//               <p>Privacy Policy</p>
//               <p>Terms Of Use</p>
//               <p>FAQ</p>
//             </div>

//             <div className="foot1">
//               <h5 className="f1_h5">Download App</h5>
//               <p>Save $3 with App New User Only</p>
//               <div className="img_div">
//                 <img src={qr} alt="" />
//                 <div className="instal_apps">
//                   <img src={google_play} alt="" />
//                   <img src={app_store} alt="" />
//                 </div>
//               </div>
//             </div>

//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Home;





import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./About.css";
import "./Home.css";

import HomeImg from "../assets/images/Home_img.png";

// Product images
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";
import product9 from "../assets/images/product9.png";
import product10 from "../assets/images/product10.png";
import product11 from "../assets/images/product11.png";

import service4 from "../assets/images/Services4.png";
import service5 from "../assets/images/Services5.png";
import service6 from "../assets/images/Services6.png";

// Explore products (12–19)
import product12 from "../assets/images/product12.png";
import product13 from "../assets/images/product13.png";
import product14 from "../assets/images/product14.png";
import product15 from "../assets/images/product15.png";
import product16 from "../assets/images/product16.png";
import product17 from "../assets/images/product17.png";
import product18 from "../assets/images/product18.png";
import product19 from "../assets/images/product19.png";

// Category images
import category1 from "../assets/images/category1.png";
import category2 from "../assets/images/category2.png";
import category3 from "../assets/images/category3.png";
import category4 from "../assets/images/category4.png";
import category5 from "../assets/images/category5.png";
import category6 from "../assets/images/category6.png";

import home3 from "../assets/images/home3.png";

import app_store from "../assets/images/appstore.png";
import google_play from "../assets/images/google_p.png";
import qr from "../assets/images/qr_code.png";

import socials from "../assets/images/socials.png";
import send_icon from "../assets/images/icon-send.png";

// ------ PRODUCT ARRAYS ------

// FLASH SALES products
const products = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", price: 49.99, oldPrice: 69.99, rating: 4, image: product1 },
  { id: 2, name: "AK-900 Wired Keyboard", price: 29.99, oldPrice: 39.99, rating: 5, image: product2 },
  { id: 3, name: "IPS LCD Gaming Monitor", price: 19.99, oldPrice: 24.99, rating: 3, image: product3 },
  { id: 4, name: "S-Series Comfort Chair", price: 59.99, oldPrice: 79.99, rating: 4, image: product4 },
  { id: 7, name: "S-Series Monitor LCD 7", price: 14.99, oldPrice: 19.99, rating: 3, image: product7 },
];

// Top Products (8–11)
const topProducts = [
  { id: 8, name: "The north coat", price: 960, rating: 5, image: product8 },
  { id: 9, name: "Gucci duffle bag", price: 260, rating: 4, image: product9 },
  { id: 10, name: "RGB liquid CPU Cooler", price: 14.99, rating: 2, image: product10 },
  { id: 11, name: "Small BookSelf", price: 124.99, rating: 3, image: product11 },
];

// Another products group
const topProductss = [
  { id: 16, name: "Product 16", price: 59.99, rating: 5, image: product16 },
  { id: 17, name: "Product 17", price: 69.99, rating: 3, image: product17 },
  { id: 18, name: "Product 18", price: 79.99, rating: 4, image: product18 },
  { id: 19, name: "Product 19", price: 89.99, rating: 5, image: product19 },
];

// Explore products (12–15)
const exploreMore = [
  { id: 12, name: "Product 12", price: 19.99, rating: 4, image: product12 },
  { id: 13, name: "Product 13", price: 29.99, rating: 3, image: product13 },
  { id: 14, name: "Product 14", price: 39.99, rating: 5, image: product14 },
  { id: 15, name: "Product 15", price: 49.99, rating: 4, image: product15 },
];

// Categories
const categories = [
  { id: 1, name: "Phones", image: category1 },
  { id: 2, name: "Computers", image: category2 },
  { id: 3, name: "SmartWatch", image: category3 },
  { id: 4, name: "Camera", image: category4 },
  { id: 5, name: "HeadPhones", image: category5 },
  { id: 6, name: "Gaming", image: category6 },
];

// ------ BARCHA PRODUCTLARNI BIRLASHTIRAMIZ ------
const allProducts = [
  ...products,
  ...topProducts,
  ...topProductss,
  ...exploreMore,
];

// ------ Home Component ------
const Home = ({ wishlist, setWishlist, cart, setCart }) => {
  const [timeLeft, setTimeLeft] = useState(2 * 24 * 60 * 60);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    const d = Math.floor(secs / (24 * 3600));
    const h = Math.floor((secs % (24 * 3600)) / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${d} : ${h} : ${m} : ${s}`;
  };

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-content">

        <img src={HomeImg} alt="Home Banner" className="home-banner" />

        {/* Flash Sales */}
        <section className="flash-sales">
          <div className="flash-header">
            <h2 className="flash_sale">Flash Sales ⏰</h2>
            <span className="timer">{formatTime(timeLeft)}</span>
          </div>

          <div className="flash-products">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div
                  className={`heart ${wishlist.includes(product.id) ? "active" : ""}`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  {wishlist.includes(product.id) ? "❤️" : "🤍"}
                </div>

                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>

                <p className="price">
                  <span className="current">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="old">${product.oldPrice.toFixed(2)}</span>
                  )}
                </p>

                <p className="rating">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </p>

                <button className="add-cart-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="categories-section">
          <div className="kate_div">
            <div className="div_red"></div>
            <h2 className="categories-title">Categories</h2>
          </div>

          <div className="categories-container">
            {categories.map(cat => (
              <div key={cat.id} className="category-card">
                <img src={cat.image} alt={cat.name} className="category-image" />
                <h4>{cat.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Top Products */}
        <section className="featured-products-section">
          <div className="kate_div">
            <div className="div_red"></div>
            <h2 className="categories-title">Top Products</h2>
          </div>

          <div className="featured-products-container">
            {topProducts.map(product => (
              <div key={product.id} className="product-card2">
                <div
                  className={`heart ${wishlist.includes(product.id) ? "active" : ""}`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  {wishlist.includes(product.id) ? "❤️" : "🤍"}
                </div>

                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p className="price2">${product.price.toFixed(2)}</p>

                <p className="rating2">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </p>

                <button className="add-cart-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Middle Banner */}
        <section>
          <div className="home3_div">
            <img src={home3} alt="" className="home3_img" />
          </div>
        </section>

        {/* Explore Products */}
        <section className="explore-products-section">
          <div className="kate_div">
            <div className="div_red"></div>
            <h2 className="categories-title">Our Products</h2>
          </div>

          <h2 className="explore-title">Explore Our Products</h2>

          <div className="explore-products-container">
            {topProductss.map(product => (
              <div key={product.id} className="explore-card">
                <div
                  className={`heart explore-heart ${wishlist.includes(product.id) ? "active" : ""}`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  {wishlist.includes(product.id) ? "❤️" : "🤍"}
                </div>

                <img src={product.image} alt={product.name} className="explore-image" />
                <h3 className="explore-name">{product.name}</h3>
                <p className="explore-price">${product.price.toFixed(2)}</p>
                <p className="explore-rating">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </p>

                <button className="explore-cart-btn" onClick={() => addToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>

          {showAll && (
            <div className="explore-products-container">
              {exploreMore.map(product => (
                <div key={product.id} className="explore-card">
                  <div
                    className={`heart explore-heart ${wishlist.includes(product.id) ? "active" : ""}`}
                    onClick={() => toggleWishlist(product.id)}
                  >
                    {wishlist.includes(product.id) ? "❤️" : "🤍"}
                  </div>

                  <img src={product.image} alt={product.name} className="explore-image" />
                  <h3 className="explore-name">{product.name}</h3>
                  <p className="explore-price">${product.price.toFixed(2)}</p>
                  <p className="explore-rating">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </p>

                  <button className="explore-cart-btn" onClick={() => addToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="explore-btn-wrapper">
            {!showAll && (
              <button className="view-all-btn" onClick={() => setShowAll(true)}>
                View All Products
              </button>
            )}
          </div>
        </section>

        {/* Services Boxes */}
        <section>
          <div className="box_container">
            <div className="box_div">
              <img src={service4} alt="" className="img_s" />
              <p className="bold_p">FREE AND FAST DELIVERY</p>
              <p className="text_p">Free delivery for all orders over $140</p>
            </div>

            <div className="box_div">
              <img src={service5} alt="" className="img_s" />
              <p className="bold_p">24/7 CUSTOMER SERVICE</p>
              <p className="text_p">Friendly 24/7 customer support</p>
            </div>

            <div className="box_div">
              <img src={service6} alt="" class classname="img_s" />
              <p className="bold_p">MONEY BACK GUARANTEE</p>
              <p className="text_p">We return money within 30 days</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="main_footer_div">
            <div className="foot1">
              <h5 className="f1_h5">Exclusive</h5>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>
              <div className="input_div">
                <input type="text" className="inp1" placeholder="Enter your email" />
                <img src={send_icon} alt="" className="icon_img" />
              </div>
            </div>

            <div className="foot1">
              <h5 className="f1_h5">Account</h5>
              <p>My Account</p>
              <p>Cart</p>
              <p>Wishlist</p>
            </div>

            <div className="foot1">
              <h5 className="f1_h5">Quick Link</h5>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
            </div>

            <div className="foot1">
              <h5 className="f1_h5">Download App</h5>
              <p>Save $3 with App New User Only</p>
              <div className="img_div">
                <img src={qr} alt="" />
                <div className="instal_apps">
                  <img src={google_play} alt="" />
                  <img src={app_store} alt="" />
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export { allProducts };
export default Home;
