import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import { clearCartAction } from "../../store/reducers/cartReducer";
import Container from "../UI/Container";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import PostOrderForm from "../PostOrderForm";

export default function CartContainer() {
  const dispatch = useDispatch();

  const cart_state = useSelector((state) => state.cart);

  const total = cart_state.reduce(
    (acc, { price, count }) => acc + price * count,
    0
  );
  const back_btn_route = `/products`;
  return (
    <Container className={s.container}>
      <h2>Shopping cart</h2>

      <Link className={s.back_btn} to={back_btn_route}>
        Back to the store{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M4.49653 1.19763C4.37465 1.19763 4.26567 1.27146 4.21879 1.38396C4.17309 1.49763 4.20004 1.62654 4.28793 1.71208L10.0758 7.49998L4.28793 13.2879C4.20942 13.3629 4.17778 13.4754 4.2059 13.5797C4.23286 13.6851 4.31489 13.7672 4.42036 13.7941C4.52465 13.8222 4.63715 13.7906 4.71215 13.7121L10.7122 7.71208C10.8293 7.5949 10.8293 7.40505 10.7122 7.28787L4.71215 1.28787C4.6559 1.22927 4.57856 1.19763 4.49653 1.19763Z"
            fill="black"
          />
        </svg>
      </Link>
      <div className={s.order_box}>
        <div className={s.card_container}>
          {cart_state.map((el) => (
            <CartItem key={el.id} {...el} />
          ))}
        </div>
        <div className={s.details_box}>
          <h3>Order details</h3>
          <div className={s.total_box}>
            <p className={s.total_title}>Total: </p>
            <p className={s.total_price}>{total} $</p>
          </div>
          <PostOrderForm/>
          {/* Можно добавить кнопку для очистки корзины она ниже */}
          {/* <button onClick={() => dispatch(clearCartAction())}>
            Clear cart
          </button> */}
        </div>
      </div>
    </Container>
  );
}
