import React from "react";
import s from "./style.module.css";
import logo from "../../media/Logo1.png";
import cart_img from "../../media/Cart.png";
import Container from "../UI/Container";
import { Link } from 'react-router-dom'

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
            <Link to="/categories">
            <div className={s.catalog}>Catalog</div>
            </Link>
          </div>
          <div className={s.links}>
            <Link to="/">Main Page</Link>
            <Link to="/products">All Products</Link>
            <Link to="/sales">All sales</Link>
            <div className={s.cartImg}>
              <Link to="/cart">
                <img src={cart_img} alt="Cart img" />
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
