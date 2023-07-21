import React from "react";
import s from "./style.module.css";
import home_sales_flowers from "../../media/home_sales_flowers2.png";
import { Link } from "react-router-dom";
import Container from "../UI/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../async_actions/categories_req";
import CategoryItem from "../CategoryItem";
import gnome from "../../media/Gnome.png"
import CouponForm from "../CouponForm";
import ThreeRandomProducts from "../ThreeRandomProduct";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories);
  }, []);

  const categories_state = useSelector((state) => state.categories);
  return (
    <Container id="for_modal">
      <div className={s.sales_container}>
        <div>
          <h2>Sale</h2>
          <h3>New season</h3>
          <Link className={s.sales_link} to="/sales">
            <div className={s.sale_button}>
              <p>Sale</p>
            </div>
          </Link>
        </div>
        <div>
          <img src={home_sales_flowers}></img>
        </div>
      </div>
      <div className={s.catalog_categories}>
        <div>
          <h2 className={s.catalog}>Catalog</h2>
         </div> 
         <div>
            <Link className={s.all_categories_link} to="/categories">
              <button>All categories</button>
            </Link>
          </div>
      </div>
      <div className={s.container}>
        
        <div className={s.categories_container}>
          {categories_state.map((el, index) => (
            <CategoryItem key={index} category={el} />
          )).slice(0, 4)}
        </div>
      </div>
      <div className={s.green_container}>
        <div>
            <img src={gnome} alt="Gnome picture" />
        </div>
        <div className={s.discount_box}>
          <div>
            <p className={s.gnome_discount}>5% off</p>
            <p className={s.gnome_discount_first_order}>on the first order</p>
          </div>
          <CouponForm/>
        </div>
      </div>
      <h2 className={s.sale_title}>Sale</h2>
      <ThreeRandomProducts/>
    </Container>
  );
}
