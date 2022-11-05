import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
    }
    setKey(Math.random());
  }, [router.events, router.query, user.value]);

  const getCart = async () => {
    let body = { user: localStorage.getItem("token").slice(0, 36) };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getcart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let response = await res.json();
    console.log(response);
    response.length !== 0 && setCart(response[0].products);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart;
    if (cart === undefined) {
      newCart = {};
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    } else {
      newCart = cart;
      if (itemCode in cart) {
        newCart[itemCode].qty = cart[itemCode].qty + qty;
      } else {
        newCart[itemCode] = { qty: 1, price, name, size, variant };
      }
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setKey(Math.random());
    setUser({ value: null });
    router.push("/");
  };

  const saveCart = async (myCart) => {
    let body = { user: user.value.slice(0, 36), products: myCart };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/savecart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let response = await res.json();
    setKey(Math.random());
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = { itemCode: { qty: 1, price, name, size, variant } };
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };

  const removeFromCart = (itemCode, qty) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  return (
    <>
      <LoadingBar
        color="#6C58CE"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
        height={3}
      />
      {key && (
        <Navbar
          key={key}
          user={user}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}
          logoutHandler={logoutHandler}
          getCart={getCart}
        />
      )}
      <Component
        buyNow={buyNow}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        getCart={getCart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
