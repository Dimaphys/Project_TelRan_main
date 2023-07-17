import React from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { deleteCartItemAction } from "../../store/reducers/cartReducer";
import {
  incrementCountAction,
  decrementCountAction,
} from "../../store/reducers/cartReducer";
import Host from "../../common/Host";

export default function CartItem({ id, title, price, image, count, discont_price, discont_value }) {
  const dispatch = useDispatch();

  const delete_item = () => dispatch(deleteCartItemAction(id));

  const increment_count = () => dispatch(incrementCountAction(id));
  const decrement_count = () => dispatch(decrementCountAction(id));
  const img_link = [Host(), image].join("");

  return (
    <div className={s.wrapper}>
      <div className={s.cart_item}>
        <img src={img_link} alt={title} />
        <div className={s.title_box}>
          <p className={s.title}>{title}</p>
          <div className={s.count_box}>
            <button onClick={decrement_count}>-</button>
              <p>{count}</p>
            <button onClick={increment_count}>
                +
              </button>
          </div>
        </div>
        <p className={s.final_price}>{(discont_value !== 100 ? discont_price : price) * count} $</p>
        <p className={s.main_price}>{discont_value !== 100 ? price * count + " $" : ""}</p>
        
        
        <span onClick={delete_item}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icons8-multiply 1">
              <path
                id="Vector"
                d="M8.6438 7.79999L7.80005 8.64374L14.175 15L7.80005 21.3562L8.6438 22.2L15.0375 15.8437L21.4125 22.2L22.2563 21.3562L15.8813 15L22.2563 8.64374L21.4125 7.79999L15.0375 14.1562L8.6438 7.79999Z"
                fill="black"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}
