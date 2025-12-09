// import React, { useState, useEffect } from "react";
// import "../styles/Checkout.css";

// export default function Checkout({ cart, currentUser }) {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     region: "",
//     cardType: "",
//     cardNumber: "",
//   });

//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 daqiqa

//   // Taymer
//   useEffect(() => {
//     if (!orderPlaced) return;

//     const interval = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [orderPlaced]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setOrderPlaced(true);
//   };

//   const formatTime = (secs) => {
//     const m = Math.floor(secs / 60);
//     const s = secs % 60;
//     return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };

//   return (
//     <div className="checkout-container">
//       <h2>Rasmiylashtirish</h2>

//       {!orderPlaced ? (
//         <form className="checkout-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Ism va Familiya"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Telefon raqam"
//             value={form.phone}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="region"
//             value={form.region}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Viloyatni tanlang</option>
//             <option value="Toshkent">Toshkent</option>
//             <option value="Samarqand">Samarqand</option>
//             <option value="Buxoro">Buxoro</option>
//             <option value="Farg'ona">Farg'ona</option>
//             <option value="Andijon">Andijon</option>
//             <option value="Namangan">Namangan</option>
//             <option value="Xorazm">Xorazm</option>
//             <option value="Qashqadaryo">Qashqadaryo</option>
//             <option value="Surxondaryo">Surxondaryo</option>
//             <option value="Jizzax">Jizzax</option>
//             <option value="Navoiy">Navoiy</option>
//             <option value="Sirdaryo">Sirdaryo</option>
//           </select>

//           <select
//             name="cardType"
//             value={form.cardType}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Kartani tanlang</option>
//             <option value="UzCard">UzCard</option>
//             <option value="Humo">Humo</option>
//             <option value="Visa">Visa</option>
//           </select>

//           <input
//             type="text"
//             name="cardNumber"
//             placeholder="Karta raqami"
//             value={form.cardNumber}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" className="place-order-btn">
//             Buyurtmani tasdiqlash
//           </button>
//         </form>
//       ) : (
//         <div className="order-success">
//           <h3>Buyurtma qabul qilindi!</h3>
//           <p>Yetkazib berish vaqti:</p>

//           <div className="delivery-timer">
//             <span className="timer">{formatTime(timeLeft)}</span>
//             <div className="progress-bar">
//               <div
//                 className="courier"
//                 style={{
//                   left: `${((25 * 60 - timeLeft) / (25 * 60)) * 100}%`,
//                 }}
//               >
//                 🚍
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// import React, { useState, useEffect, useContext } from "react";
// import "../styles/Checkout.css";
// import { AuthContext } from "../context/AuthContext";

// export default function Checkout({ cart, setCart }) {
//   const { currentUser } = useContext(AuthContext);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     region: "",
//     cardType: "",
//     cardNumber: "",
//   });

//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 daqiqa

//   // Taymer
//   useEffect(() => {
//     if (!orderPlaced) return;

//     const interval = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [orderPlaced]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!currentUser) {
//       alert("Iltimos, login qiling!");
//       return;
//     }

//     const purchaseDate = new Date().toLocaleString();

//     const allPurchases = JSON.parse(localStorage.getItem("purchases") || "[]");

//     cart.forEach((item) => {
//       allPurchases.push({
//         email: currentUser.email,
//         productName: item.name,
//         price: item.price,
//         image: item.image,
//         purchaseDate: purchaseDate,
//         cardType: form.cardType,
//         cardNumber: form.cardNumber,
//         address: form.address,
//         phone: form.phone,
//       });
//     });

//     localStorage.setItem("purchases", JSON.stringify(allPurchases));
//     setCart([]);
//     setOrderPlaced(true);
//   };

//   const formatTime = (secs) => {
//     const m = Math.floor(secs / 60);
//     const s = secs % 60;
//     return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };

//   return (
//     <div className="checkout-container">
//       <h2>Rasmiylashtirish</h2>

//       {!orderPlaced ? (
//         <form className="checkout-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Ism va Familiya"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Telefon raqam"
//             value={form.phone}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Manzil"
//             value={form.address}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="region"
//             value={form.region}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Viloyatni tanlang</option>
//             <option value="Toshkent">Toshkent</option>
//             <option value="Samarqand">Samarqand</option>
//             <option value="Buxoro">Buxoro</option>
//             <option value="Farg'ona">Farg'ona</option>
//             <option value="Andijon">Andijon</option>
//             <option value="Namangan">Namangan</option>
//             <option value="Xorazm">Xorazm</option>
//             <option value="Qashqadaryo">Qashqadaryo</option>
//             <option value="Surxondaryo">Surxondaryo</option>
//             <option value="Jizzax">Jizzax</option>
//             <option value="Navoiy">Navoiy</option>
//             <option value="Sirdaryo">Sirdaryo</option>
//           </select>

//           <select
//             name="cardType"
//             value={form.cardType}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Kartani tanlang</option>
//             <option value="UzCard">UzCard</option>
//             <option value="Humo">Humo</option>
//             <option value="Visa">Visa</option>
//           </select>

//           <input
//             type="text"
//             name="cardNumber"
//             placeholder="Karta raqami"
//             value={form.cardNumber}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" className="place-order-btn">
//             Buyurtmani tasdiqlash
//           </button>
//         </form>
//       ) : (
//         <div className="order-success">
//           <h3>Buyurtma qabul qilindi!</h3>
//           <p>Yetkazib berish vaqti:</p>

//           <div className="delivery-timer">
//             <span className="timer">{formatTime(timeLeft)}</span>
//             <div className="progress-bar">
//               <div
//                 className="courier"
//                 style={{
//                   left: `${((25 * 60 - timeLeft) / (25 * 60)) * 100}%`,
//                 }}
//               >
//                 🚍
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import RequireAuthModal from "../components/RequireAuthModal";
import "../styles/Checkout.css";

export default function Checkout({ cart, setCart }) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    region: "",
    cardType: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitOrder = (e) => {
    e.preventDefault();

    if (!currentUser) {
      setOpen(true);
      return;
    }

    const time = new Date().toLocaleString();

    const purchases = JSON.parse(localStorage.getItem("purchases") || "[]");

    cart.forEach((item) => {
      purchases.push({
        email: currentUser.email,
        productName: item.name,
        price: item.price,
        image: item.image,
        phone: form.phone,
        address: form.address,
        region: form.region,
        cardType: form.cardType,
        cardNumber: form.cardNumber,
        purchaseDate: time,
      });
    });

    localStorage.setItem("purchases", JSON.stringify(purchases));

    setCart([]);

    navigate("/profile");
  };

  return (
    <div className="checkout-container">
      <h2>Buyurtma rasmiylashtirish</h2>

      <form className="checkout-form" onSubmit={submitOrder}>
        <input name="name" placeholder="Ismingiz" onChange={handleChange} required />
        <input name="phone" placeholder="Telefon" onChange={handleChange} required />
        <input name="address" placeholder="Manzil" onChange={handleChange} required />

        <select name="region" onChange={handleChange} required>
          <option value="">Viloyatni tanlang</option>
          <option value="Toshkent">Toshkent</option>
          <option value="Samarqand">Samarqand</option>
          <option value="Buxoro">Buxoro</option>
          <option value="Farg'ona">Farg'ona</option>
        </select>

        <select name="cardType" onChange={handleChange} required>
          <option value="">Karta turi</option>
          <option value="UzCard">UzCard</option>
          <option value="Humo">Humo</option>
          <option value="Visa">Visa</option>
        </select>

        <input
          name="cardNumber"
          type="text"
          placeholder="Karta raqami"
          onChange={handleChange}
          required
        />

        <button type="submit">Buyurtmani tasdiqlash</button>
      </form>

      <RequireAuthModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
