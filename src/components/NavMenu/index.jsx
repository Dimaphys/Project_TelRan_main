import React from "react";
import s from "./style.module.css";
import logo from "../../media/Logo1.png";
import cart_img from "../../media/Cart.png";
import Container from "../UI/Container";

//Создаем навигационное меню

export default function NavMenu() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Container className={s.container}>
          <div className={s.logo}>
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div className={s.catalog}>Catalog</div>
          </div>
          <div className={s.links}>
            <a href="">Main Page</a>
            <a href="">All Products</a>
            <a href="">All sales</a>
            <div className={s.cartImg}>
              <img src={cart_img} alt="Cart img" />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
