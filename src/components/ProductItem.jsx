import React from "react";
import cl from "../styles/ProductItem.module.css";

const ProductItem = ({
  id,
  name,
  imageUrl,
  price,
  oldPrice,
  sale,
  clickProduct,
}) => {
  const onAddProduct = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      sale,
      oldPrice,
    };
    clickProduct(obj);
  };
  return (
    <div className={cl.product}>
      <div className={cl.imageCont}>
        <img src={imageUrl} alt={name}></img>
        <div className={cl.sale}> {sale} %</div>
      </div>
      <div className={cl.price}>
        <div>
          <div className={cl.currentPrice}>{price}</div>
          <div className={cl.oldPrice}>{oldPrice}</div>
        </div>
        <button className={cl.button} onClick={onAddProduct}>
          +
        </button>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default ProductItem;
