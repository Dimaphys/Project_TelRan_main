import React from "react";
import s from "./style.module.css";
import home_sales_flowers from "../../media/home_sales_flowers2.png";
import { Link } from "react-router-dom";
import Container from "../UI/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../async_actions/categories_req";
import CategoryItem from "../CategoryItem";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories);
  }, []);

  const categories_state = useSelector((state) => state.categories);
  return (
    <Container>
      <div className={s.sales_container}>
        <div>
          <h2>Sale</h2>
          <h3>New season</h3>
          <Link to="/categories">
            <div className={s.sale_button}>
              <p>Sale</p>
            </div>
          </Link>
        </div>
        <div>
          <img src={home_sales_flowers}></img>
        </div>
      </div>
      <h2 className={s.catalog}>Catalog</h2>
      <Link to="/categories">
      <button>All categories</button>
      </Link>
      <div className={s.container}>
        
        <div className={s.categories_container}>
          {categories_state.map((el, index) => (
            <CategoryItem key={index} category={el} />
          ))}
        </div>
      </div>
      <div className={s.home_catalod_container}></div>
    </Container>
  );
}
