// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const savedUser = localStorage.getItem("currentUser");
//     if (savedUser) {
//       setCurrentUser(JSON.parse(savedUser));
//     }
//   }, []);

//   const signup = (name, email, password) => {
//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     const userExists = users.some((u) => u.email === email);
//     if (userExists) return { success: false, msg: "Email oldin ishlatilgan" };

//     const newUser = { name, email, password };
//     users.push(newUser);

//     localStorage.setItem("users", JSON.stringify(users));
//     localStorage.setItem("currentUser", JSON.stringify(newUser));
//     setCurrentUser(newUser);

//     return { success: true };
//   };

//   const login = (email, password) => {
//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     const found = users.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (!found) return { success: false, msg: "Email yoki parol noto'g'ri" };

//     localStorage.setItem("currentUser", JSON.stringify(found));
//     setCurrentUser(found);

//     return { success: true };
//   };

//   const logout = () => {
//     localStorage.removeItem("currentUser");
//     setCurrentUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.some((u) => u.email === email);
    if (userExists) return { success: false, msg: "Email oldin ishlatilgan" };

    const newUser = { name, email, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setCurrentUser(newUser);

    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) return { success: false, msg: "Email yoki parol noto'g'ri" };

    localStorage.setItem("currentUser", JSON.stringify(found));
    setCurrentUser(found);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

