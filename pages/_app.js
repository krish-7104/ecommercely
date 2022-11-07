import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();
  const router = useRouter();

  const updateQuantityCart = async (slug, type, amount) => {
    let body = { slug, type, amount };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/changeqty`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let response = await res.json();
    getCart();
  };

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
    getCart();
    setKey(Math.random());
  }, [router.events, router.query, user.value]);

  const getCart = async () => {
    if (localStorage.getItem("token")) {
      let body = { user: localStorage.getItem("token").slice(0, 36) };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getcart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let response = await res.json();
      response.length !== 0 && setSubTotal(response[0].subTotal);
      response.length !== 0 && setCart(response[0].products);
    }
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    updateQuantityCart(itemCode, "add", 1);
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
    setSubTotal(subTotal + price);
    setCart(newCart);
    saveCart(newCart, subTotal + price);
    router.replace(router.asPath);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setKey(Math.random());
    setUser({ value: null });
    router.push("/");
    setCart({});
  };

  const saveCart = async (myCart, price, type) => {
    if (Object.keys(myCart).length === 0) {
      let body = { user: user.value.slice(0, 36) };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/deletecart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let response = await res.json();
      if (response.success === false) {
        toast.error("Something Went Wrong!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      let body = {
        user: user.value.slice(0, 36),
        products: myCart,
        subTotal: price,
      };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/savecart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let response = await res.json();
      if (response.success === false) {
        toast.error("Something Went Wrong!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
    setKey(Math.random());
  };

  const clearCart = () => {
    setSubTotal(0);
    Object.keys(cart).forEach((item) => {
      updateQuantityCart(item, "remove", cart[item].qty);
    });
    setCart({});
    saveCart({});
    toast("Cart Cleared Successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    router.asPath !== "/checkout" && router.push("/");
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    setSubTotal(price);
    let newCart = { [itemCode]: { qty: 1, price, name, size, variant } };
    updateQuantityCart(itemCode, "add", qty);
    setCart(newCart);
    saveCart(newCart, price);
    router.push("/checkout");
  };

  const removeFromCart = (itemCode, qty, price) => {
    setSubTotal(subTotal - price);
    router.replace(router.asPath);
    updateQuantityCart(itemCode, "remove", 1);
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart, subTotal - price);
    router.replace(router.asPath);
  };
  return (
    <>
      <LoadingBar
        color="#00A881"
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
      <ToastContainer />
      <Footer />
    </>
  );
}

export default MyApp;
