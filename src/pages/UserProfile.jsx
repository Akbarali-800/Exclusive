import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Profile.css";

export default function UserProfile() {
    const { currentUser } = useContext(AuthContext);
    const [list, setList] = useState([]);

    useEffect(() => {
        if (currentUser) {
            const all = JSON.parse(localStorage.getItem("purchases") || "[]");
            setList(all.filter((p) => p.email === currentUser.email));
        }
    }, [currentUser]);

    return (
        <div className="profile-page">
            <p className="profil">Profil</p>
            <h2 className="profile_h2">Salom, {currentUser?.name}!</h2>
            <p className="profile_p">Email: {currentUser?.email}</p>

            <h3>Sizning buyurtmalaringiz:</h3>

            {list.length === 0 ? (
                <p>Hali hech narsa sotib olmadingiz.</p>
            ) : (
                <table className="profile-table">
                    <thead>
                        <tr>
                            <th>Rasm</th>
                            <th>Mahsulot</th>
                            <th>Narx</th>
                            <th>Vaqt</th>
                            <th>Karta</th>
                            <th>Manzil</th>
                            <th>Telefon</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map((p, i) => (
                            <tr key={i}>
                                <td>
                                    <img src={p.image} width="60" />
                                </td>
                                <td>{p.productName}</td>
                                <td>${p.price}</td>
                                <td>{p.purchaseDate}</td>
                                <td>{p.cardType} {p.cardNumber}</td>
                                <td>{p.address}, {p.region}</td>
                                <td>{p.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}



// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

// const UserProfile = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [purchasedProducts, setPurchasedProducts] = useState([]);

//   useEffect(() => {
//     if (currentUser) {
//       const allPurchases = JSON.parse(localStorage.getItem("purchases") || "[]");
//       const userPurchases = allPurchases.filter(
//         (p) => p.email === currentUser.email
//       );
//       setPurchasedProducts(userPurchases);
//     }
//   }, [currentUser]);

//   if (!currentUser) return <p>Iltimos, ro'yxatdan o'ting.</p>;

//   return (
//     <div className="user-profile">
//       <h2>Salom, {currentUser.name}!</h2>
//       <p>Email: {currentUser.email}</p>

//       <h3>Siz sotib olgan mahsulotlar:</h3>
//       {purchasedProducts.length === 0 ? (
//         <p>Siz hali mahsulot sotib olmadingiz.</p>
//       ) : (
//         <table border="1" cellPadding="8">
//           <thead>
//             <tr>
//               <th>Rasm</th>
//               <th>Mahsulot</th>
//               <th>Narx</th>
//               <th>Sotib olish vaqti</th>
//               <th>Karta</th>
//               <th>Manzil</th>
//               <th>Telefon</th>
//             </tr>
//           </thead>
//           <tbody>
//             {purchasedProducts.map((p, index) => (
//               <tr key={index}>
//                 <td>
//                   <img src={p.image} alt={p.productName} width="50" />
//                 </td>
//                 <td>{p.productName}</td>
//                 <td>${p.price.toFixed(2)}</td>
//                 <td>{p.purchaseDate}</td>
//                 <td>{p.cardType} {p.cardNumber}</td>
//                 <td>{p.address}, {p.region}</td>
//                 <td>{p.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UserProfile;


