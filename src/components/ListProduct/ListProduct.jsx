import { useEffect, useState } from "react";
import Popup from "./../UI/Popup/Popup";
import ProductCard from "../UI/ProductCard/ProductCard";
import img from "./../../assets/ProductImage/product.png";
import img2 from "./../../assets/ProductImage/vegetables.png";

const ListProduct = () => {
  const [success, setSuccess] = useState(false);
  const [arr, setArr] = useState(() => {
    const storedArr = localStorage.getItem("cart");
    return storedArr ? JSON.parse(storedArr) : [];
  });

  const handleClick = (el, total, count) => {
    setArr((prevArr) => [...prevArr, { el, total, count }]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(arr));
  }, [arr]);

  let [count, setCount] = useState(0.5);
  const [total, setTotal] = useState(0);
  const [retail] = useState(0);
  const [wholesale] = useState(0);
  const [minWholesale] = useState(0);

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      countQuantity(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount > 0.5 ? prevCount - 0.5 : 0.5;
      countQuantity(newCount);
      return newCount;
    });
  };

  const countQuantity = (newCount) => {
    setTotal(retail * newCount);

    if (retail * newCount >= wholesale * minWholesale) {
      setTotal(wholesale * newCount);
    }
  };

  const products = [
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retails: 100,
      wholeSale: 90,
      min: 5,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retails: 150,
      wholeSale: 120,
      min: 15,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retails: 290,
      wholeSale: 275,
      min: 25,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retails: 310,
      wholeSale: 300,
      min: 35,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retails: 400,
      wholeSale: 394,
      min: 50,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retails: 500,
      wholeSale: 455,
      min: 10,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retails: 100,
      wholeSale: 90,
      min: 5,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retails: 150,
      wholeSale: 120,
      min: 15,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retails: 290,
      wholeSale: 275,
      min: 25,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retails: 310,
      wholeSale: 300,
      min: 35,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retails: 400,
      wholeSale: 394,
      min: 50,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retails: 500,
      wholeSale: 455,
      min: 10,
    },
  ];
  return (
    <>
      <div className="card-container">
        <h3 className="title-product">Фрукти</h3>
        <div className="product-container">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              id={index}
              name={product.name}
              min={product.min}
              retails={product.retails}
              wholeSale={product.wholeSale}
              img={product.img}
              setSuccess={setSuccess}
              handleClick={handleClick}
              decrement={decrement}
              increment={increment}
              total={total}
              el={product}
              count={count}
            />
          ))}

          {/* {fruit.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              retails={item.retails}
              wholeSale={item.wholeSale}
              min={item.min}
              setSuccess={setSuccess}
              el={item}
              handleClick={() => handleClick(item)}
            />
          ))} */}
        </div>
        <h3 className="title-product">Овочі</h3>
        <div className="product-container">
          {/* {vegetables.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              retails={item.retails}
              wholeSale={item.wholeSale}
              min={item.min}
              setSuccess={setSuccess}
              el={item}
              handleClick={(total) => handleClick(item, total)}
            />
          ))} */}
        </div>
      </div>
      {success && <Popup onClick={() => setSuccess(false)} />}
    </>
  );
};

export default ListProduct;
