import React, { useEffect } from "react";
import { getSingleProduct } from "../../async_actions/products_req";
import { addToCartAction } from "../../store/reducers/cartReducer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import Host from "../../common/Host";
import Container from "../../components/UI/Container";
import { DiscontValue } from "../../common/FinalPrice";

export default function ProductDescriptionPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product_state = useSelector((state) => state.singleProduct);


  const { title, description, price, image, discont_price} = product_state;

  const discont_value = DiscontValue(price, discont_price);
  const img_link = [Host(), image].join("");
  const add_to_cart = () =>
    dispatch(addToCartAction({ id: +id, title, price, image }));

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  return (
    <Container>
      <h3 className={s.title_text}>{title}</h3>
      <div className={s.product}>
          <div>
            <img className={s.product_img} src={img_link} alt={title} />
          </div>
          <div className={s.price_description_container}>
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
            <p className={s.description_title}>Description</p>
            <p className={s.description}>{description}</p>
          </div>
        
        
      </div>
    </Container>
  );
}
