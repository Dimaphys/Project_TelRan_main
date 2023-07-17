import React, { useEffect } from "react";
import { getSingleProduct } from "../../async_actions/products_req";
import { addToCartAction } from "../../store/reducers/cartReducer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import Host from "../../common/Host";
import Container from "../../components/UI/Container";

export default function ProductDescriptionPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product_state = useSelector((state) => state.singleProduct[0]);
  const { title, description, price, image, category,discont_price} = product_state;

  const discont_value = Math.round(((price - discont_price) / price) * 100);

  const img_link = [Host(), image].join("");
  const add_to_cart = () =>
    dispatch(addToCartAction({ id: +id, title, price, image }));

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  return (
    <Container>
      <div className={s.product}>
        <div>
          <img src={img_link} alt={title} />
        </div>
          <div>
          <div className={s.price_container}>
            <p className={s.main_price}>
              {discont_value !== 100 ? discont_price : price} $
            </p>
            <p className={s.discont_p}>{discont_value !== 100 ? price + " $" : ""} </p>
            <p className={s.discont_v}>
              {discont_value !== 100 ? "-" + discont_value + "%" : ""}
            </p>
          </div>
           <div className={s.add_btn} onClick={add_to_cart}>
          To cart
        </div>
        </div>
        <Link to={`/categories/${category}`}>
          <div className={s.category}>{category}</div>
        </Link>
        
      </div>
    </Container>
  );
}
