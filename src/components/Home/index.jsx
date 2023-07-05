import React from 'react'
import s from "./style.module.css"
import home_sales_flowers from "../../media/home_sales_flowers2.png"
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
    <div className={s.sales_container}>
        <div >
            <h2>Sale</h2>
            <h3>New season</h3>
            <Link to="/categories">
                <div className={s.sale_button}>
                    <p>
                        Sale
                    </p>
                </div>
            </Link>
        </div>
        <div>
            <img src={home_sales_flowers}></img>
        </div>
        
    </div>
       
            <div className={s.home_catalod_container}>
            
            </div>
       
    </>

  )
}
