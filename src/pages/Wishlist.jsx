// import React from "react";
// import "../styles/Wishlist.css"; // CSS faylga ulaymiz

// export default function Wishlist({ wishlist, setWishlist, products, addToCart }) {
//   // Wishlistdan mahsulotni o'chirish
//   const removeFromWishlist = (id) => {
//     setWishlist(prev => prev.filter(pid => pid !== id));
//   };

//   // Wishlistdagi mahsulotlar ma'lumotini olish
//   const wishlistProducts = products.filter(p => wishlist.includes(p.id));

//   if (wishlistProducts.length === 0) {
//     return <p className="empty-msg">Your wishlist is empty 😢</p>;
//   }

//   return (
//     <div className="wishlist-container">
//       <h2>My Wishlist</h2>
//       <div className="wishlist-grid">
//         {wishlistProducts.map(product => (
//           <div key={product.id} className="wishlist-card">
//             <div className="wishlist-image-wrapper">
//               <img src={product.image} alt={product.name} className="wishlist-image" />
//               <button 
//                 className="remove-btn" 
//                 onClick={() => removeFromWishlist(product.id)}
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="wishlist-info">
//               <h3>{product.name}</h3>
//               <p className="price">
//                 <span className="current">${product.price.toFixed(2)}</span>{" "}
//                 <span className="old">${product.oldPrice.toFixed(2)}</span>
//               </p>
//               <p className="rating">
//                 {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
//               </p>
//               <button className="add-cart-btn" onClick={() => addToCart(product)}>
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = ({ wishlist, setWishlist, products, addToCart }) => {
  if (wishlist.length === 0) {
    return <p className="empty-msg">Your wishlist is empty.</p>;
  }

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      <div className="wishlist-products">
        {wishlist.map(id => {
          const product = products.find(p => p.id === id);
          if (!product) return null;
          return (
            <div key={product.id} className="wishlist-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">
                <span className="current">${product.price.toFixed(2)}</span>{" "}
                <span className="old">${product.oldPrice.toFixed(2)}</span>
              </p>
              <button className="add-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              <button className="remove-btn" onClick={() =>
                setWishlist(prev => prev.filter(pid => pid !== product.id))
              }>
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <Link to="/cart" className="go-cart-btn">Go to Cart</Link>
    </div>
  );
};

export default Wishlist;
