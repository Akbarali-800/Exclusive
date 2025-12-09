import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import RequireAuthModal from "../components/RequireAuthModal";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart({ cart, setCart }) {
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const checkout = () => {
    if (!currentUser) {
      setOpen(true); // Modal ochiladi
    } else {
      // Mahsulotlarni localStorage ga saqlash
      const allPurchases = JSON.parse(localStorage.getItem("purchases") || "[]");

      cart.forEach((item) => {
        allPurchases.push({
          email: currentUser.email,
          productName: item.name,
          price: item.price,
          image: item.image,
        });
      });

      localStorage.setItem("purchases", JSON.stringify(allPurchases));

      setCart([]); // Cartni bo'shatish
      navigate("/checkout");
    }
  };

  return (
    <div className="cart-page">
      <h2 className="savat_h2">Savat</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Savat bo‘sh</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="checkout-btn" onClick={checkout}>
        Rasmiylashtirish
      </button>

      <RequireAuthModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
