import React from "react";
import Container from "../UI/Container";
import icon_instagram from "../../media/icon_instagram.png";
import icon_whatsapp from "../../media/icon_whatsapp.png";
import s from "./style.module.css";
import { MapContainer } from "../MapContainer";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={s.lover_part}>
          <div>
            <p className={s.footer_contact}>Contact</p>
            <p className={s.footer_phone}>+49 999 999 99 99</p>
            <div className={s.footer_icons_join}>
              <div className={s.footer_icons}>
                <img src={icon_instagram} alt="Instagram icon" />
                <p>Instagram</p>
              </div>
              <div className={s.footer_icons}>
                <img src={icon_whatsapp} alt="WhatsApp icon" />
                <p>WhatsApp</p>
              </div>
            </div>
          </div>
          <div className={s.footer_right_el}>
            <p className={s.footer_adress}>Address</p>
            <a href="https://www.google.com/search?q=telranDE" target="_blank">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
            <p className={s.working}>Working Hours:</p>
            <p className={s.hours}>24 hours a day</p>
          </div>
        </div>
            <MapContainer />
      </Container>
    </footer>
  );
}
