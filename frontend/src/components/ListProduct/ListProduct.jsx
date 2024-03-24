import { useState } from "react";
import Popup from "./../UI/Popup/Popup";
import ProductCard from "../UI/ProductCard/ProductCard";
import img from "./../../assets/ProductImage/product.png";
import img2 from "./../../assets/ProductImage/vegetables.png";

const ListProduct = ({ setArr }) => {
  const products = [
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retail: 100,
      wholeSale: 90,
      min: 5,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retail: 150,
      wholeSale: 120,
      min: 15,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retail: 290,
      wholeSale: 275,
      min: 25,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retail: 310,
      wholeSale: 300,
      min: 35,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retail: 400,
      wholeSale: 394,
      min: 50,
    },
    {
      type: "fruit",
      name: "Назва",
      img: img,
      retail: 500,
      wholeSale: 455,
      min: 10,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retail: 100,
      wholeSale: 90,
      min: 5,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retail: 150,
      wholeSale: 120,
      min: 15,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retail: 290,
      wholeSale: 275,
      min: 25,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retail: 310,
      wholeSale: 300,
      min: 35,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retail: 400,
      wholeSale: 394,
      min: 50,
    },
    {
      type: "vegetable",
      name: "Назва",
      img: img2,
      retail: 500,
      wholeSale: 455,
      min: 10,
    },
  ];

  const [success, setSuccess] = useState(false);
  const [count, setCount] = useState(products.map(() => 0.5));
  const [total, setTotal] = useState(products.map(() => 0));

  const handleClick = (el, total, count) => {
    setArr((prevArr) => [...prevArr, { el, total, count }]);
  };

  const increment = (index) => {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[index] += 0.5;
      return newCount;
    });
  };

  const decrement = (index) => {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[index] = newCount[index] > 0.5 ? newCount[index] - 0.5 : 0.5;
      return newCount;
    });
  };

  const updateTotal = (index, total) => {
    setTotal((prevTotal) => {
      const newTotal = [...prevTotal];
      newTotal[index] = total;
      return newTotal;
    });
  };

  const fruitProducts = products.filter((product) => product.type === "fruit");
  const vegetableProducts = products.filter(
    (product) => product.type === "vegetable"
  );
  return (
    <>
      <div className="card-container">
        <h3 className="title-product fruits">Фрукти</h3>
        <div className="product-container">
          {fruitProducts.map((product, index) => (
            <ProductCard
              key={index}
              el={product}
              id={index}
              name={product.name}
              min={product.min}
              retail={product.retail}
              wholeSale={product.wholeSale}
              img={product.img}
              setSuccess={setSuccess}
              handleClick={handleClick}
              decrement={() => decrement(index)}
              increment={() => increment(index)}
              total={total[index]}
              count={count[index]}
              setTotal={(total) => updateTotal(index, total)}
            />
          ))}
        </div>
        <h3 className="title-product">Овочі</h3>
        <div className="product-container">
          {vegetableProducts.map((product, index) => (
            <ProductCard
              key={index}
              el={product}
              id={index}
              name={product.name}
              min={product.min}
              retail={product.retail}
              wholeSale={product.wholeSale}
              img={product.img}
              setSuccess={setSuccess}
              handleClick={handleClick}
              decrement={() => decrement(index)}
              increment={() => increment(index)}
              total={total[index]}
              count={count[index]}
              setTotal={(total) => updateTotal(index, total)}
            />
          ))}
        </div>
      </div>
      {success && <Popup onClick={() => setSuccess(false)} />}
    </>
  );
};

export default ListProduct;
