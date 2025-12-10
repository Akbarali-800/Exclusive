// import React from "react";
// import { Link } from "react-router-dom";
// import "./Wishlist.css";

// const Wishlist = ({ wishlist, setWishlist, products, addToCart }) => {
//   if (wishlist.length === 0) {
//     return <p className="empty-msg">Your wishlist is empty.</p>;
//   }

//   return (
//     <div className="wishlist-page">
//       <h2>My Wishlist</h2>
//       <div className="wishlist-products">
//         {wishlist.map(id => {
//           const product = products.find(p => p.id === id);
//           if (!product) return null;
//           return (
//             <div key={product.id} className="wishlist-card">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p className="price">
//                 <span className="current">${product.price.toFixed(2)}</span>{" "}
//                 <span className="old">${product.oldPrice.toFixed(2)}</span>
//               </p>
//               <button className="add-cart-btn" onClick={() => addToCart(product)}>
//                 Add to Cart
//               </button>
//               <button className="remove-btn" onClick={() =>
//                 setWishlist(prev => prev.filter(pid => pid !== product.id))
//               }>
//                 Remove
//               </button>
//             </div>
//           );
//         })}
//       </div>
//       {/* <Link to="/cart" className="go-cart-btn">Go to Cart</Link> */}
//     </div>
//   );
// };

// export default Wishlist;


import React from "react";
import { allProducts } from "../pages/Home"; // BARCHA PRODUCTLAR SHU YERDAN KELADI
import "./Wishlist.css";

export default function Wishlist({ wishlist, setWishlist }) {
  // Wishlist ichidagi barcha productlarni topamiz
  const items = allProducts.filter((p) => wishlist.includes(p.id));

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist</h2>

      {items.length === 0 && (
        <p className="empty-text">Wishlist bo‘sh 😔</p>
      )}

      <div className="wishlist-grid">
        {items.map((item) => (
          <div key={item.id} className="wishlist-card">
            <img src={item.image} className="wishlist-img" alt={item.name} />

            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>

            <button
              className="remove-btn"
              onClick={() =>
                setWishlist((prev) => prev.filter((id) => id !== item.id))
              }
            >
              Remove ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
