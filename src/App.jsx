import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import GameProfile from "./components/pages/GameProfile";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Library from "./components/pages/Library";
import Wishlist from "./components/pages/Wishlist";
import Lenis from "lenis";

const App = () => {
  const isAuthed = Boolean(localStorage.getItem("pv-user"));
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {});
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/gameprofile/:id" element={<GameProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={isAuthed ? <Cart /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/checkout"
            element={isAuthed ? <Checkout /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/library"
            element={isAuthed ? <Library /> : <Navigate to="/login" replace />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
