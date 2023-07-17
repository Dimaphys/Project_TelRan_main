import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';
import Host from '../../common/Host';


export default function CategoryItem({ category}) {
    // const category_up = category[0].toUpperCase() + category.slice(1);
   

  // const category_route = `/categories/${category}`;
    const img_link = [Host(),category.image].join("");
  return (
    
      <div className={s.category_item}>
        {/* <Link to={category_route}>
          { category_up }
        </Link> */}
          <img src={img_link} alt={category.title} className={s.card_img}/>
        <Link to={`http://localhost:3333/categories/${category.id}`}></Link>
      </div>

  )
}
