// // src/components/RequireAuthModal.jsx
// import React from "react";
// import "./RequireAuthModal.css"; // CSSni alohida faylga qo'yamiz

// export default function RequireAuthModal({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h3>E'lon</h3>
//         <p>Rasmiylashtirish uchun avval ro'yxatdan o'ting yoki login qiling.</p>
//         <button onClick={onClose}>OK</button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import "./RequireAuthModal.css";

export default function RequireAuthModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>E'lon</h3>
        <p>Rasmiylashtirish uchun avval ro'yxatdan o'ting yoki login qiling.</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
