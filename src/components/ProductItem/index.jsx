import React from "react";
import { useDispatch } from "react-redux";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { addToCartAction } from "../../store/reducers/cartReducer";
import Host from "../../common/Host";
import { loadSingleProduct } from "../../store/reducers/singleProductReducer";
import {DiscontValue} from "../../common/FinalPrice";

export const ProductItem = ({
  id,
  title,
  price,
  discont_price,
  image,
}) => {
  const dispatch = useDispatch();

  const add_to_cart = () =>
    dispatch(addToCartAction({ id, title, price, image, discont_price, discont_value }));

  const create_single_product= () => dispatch(loadSingleProduct({ id, title, price, image, discont_price, discont_value }))
  
  const img_link = [Host(), image].join("");

  const product_route = `/products/${id}`;

  const discont_value = DiscontValue(price, discont_price);
  return (
    <div>
      <div className={s.card}>
        <Link className={s.link} to={product_route} onClick={create_single_product}>
          <img src={img_link} alt={title} className={s.card_img} />
          <p></p>
          <div className={s.price_container}>
            <p className={s.main_price}>
              {discont_value !== 100 ? discont_price : price} $
            </p>
            <p className={s.discont_p}>{discont_value !== 100 ? price + " $" : ""} </p>
            <p className={s.discont_v}>
              {discont_value !== 100 ? "-" + discont_value + "%" : ""}
            </p>
          </div>
          <p className={s.products_title}>{title}</p>
        </Link>
        <div className={s.add_btn} onClick={add_to_cart}>
          Add to cart
        </div>
      </div>
    </div>
  );
};
