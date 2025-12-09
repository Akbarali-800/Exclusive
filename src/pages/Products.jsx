// import "./Products.css";

// function Products() {
//   return (
//     <div className="products-container">
//       {/* Example product cards */}
//       <div className="product-card">
//         <h3 className="product-title">Product 1</h3>
//         <p className="product-price">$29.99</p>
//       </div>
//       <div className="product-card">
//         <h3 className="product-title">Product 2</h3>
//         <p className="product-price">$49.99</p>
//       </div>
//       <div className="product-card">
//         <h3 className="product-title">Product 3</h3>
//         <p className="product-price">$19.99</p>
//       </div>
//     </div>
//   );
// }

// export default Products;


import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext"; // AuthContext joylashgan joyni to'g'rilang
import "./Products.css";

const Product = () => {
  const { currentUser } = useContext(AuthContext);
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  useEffect(() => {
    if (currentUser) {
      // Foydalanuvchining sotib olgan mahsulotlarini localStorage dan olish
      const allPurchases = JSON.parse(localStorage.getItem("purchases") || "[]");
      const userPurchases = allPurchases.filter(
        (p) => p.email === currentUser.email
      );
      setPurchasedProducts(userPurchases);
    }
  }, [currentUser]);

  if (!currentUser) {
    return <p>Iltimos, ro'yxatdan o'ting yoki kiring.</p>;
  }

  return (
    <div>
   

      <h3 className="h3_p">Siz sotib olgan mahsulotlar:</h3>
      {purchasedProducts.length === 0 ? (
        <p  className="h3_p">Siz hali mahsulot sotib olmadingiz.</p>
      ) : (
        <ul>
          {purchasedProducts.map((p, index) => (
            <li className="li_p" key={index}>
              {p.productName} - {p.price} UZS
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Product;
