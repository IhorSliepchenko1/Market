import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SwiperUI from "./components/UI/Swiper/SwiperUI";
import ListProduct from "./components/ListProduct/ListProduct";

const App = () => {
  const storedData = localStorage.getItem("cart");
  const [arr, setArr] = useState(() => {
    return storedData ? JSON.parse(storedData) : [];
  });
  const [local, setLocal] = useState([]);

  useEffect(() => {
    if (storedData) {
      setLocal(JSON.parse(storedData));
    }
  }, [storedData]);

  const deleteBasketEl = (index) => {
    const updatedLocal = [...local];
    updatedLocal.splice(index, 1);
    setLocal(updatedLocal);

    const updatedArr = [...arr];
    updatedArr.splice(index, 1);
    setArr(updatedArr);

    localStorage.setItem("cart", JSON.stringify(updatedLocal));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(arr));
  }, [arr]);

  const removeLocal = () => {
    localStorage.removeItem("cart");
    setLocal([]);
    setArr([]);
  };

  const makeOrder = async () => {
    const data = arr.map((item) => ({
      product_name: item.el.name,
      quantity: item.count,
      purchase_amount: item.total,
    }));

    console.log(data);
  };

  return (
    <div className="wrapper">
      <Header
        basketCount={arr.length}
        local={local}
        setLocal={setLocal}
        deleteBasketEl={deleteBasketEl}
        arr={arr}
        onClick={() => removeLocal()}
        makeOrder={makeOrder}
      />
      <SwiperUI />
      <main className="main container">
        <ListProduct setArr={setArr} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
