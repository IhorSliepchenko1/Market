import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SwiperUI from "./components/UI/Swiper/SwiperUI";
import ListProduct from "./components/ListProduct/ListProduct";
import TestMail from "./components/TestMail";

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

  const makeOrder = () => {
    const testArr = [...arr];
    const arrReduce = testArr.map((item) => item.total).reduce((a, b) => a + b);

    console.log(testArr, arrReduce);
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
      />{" "}
      <SwiperUI />
      <main className="main container">
        <ListProduct setArr={setArr} />
        <TestMail />
      </main>
      <Footer />
    </div>
  );
};

export default App;
