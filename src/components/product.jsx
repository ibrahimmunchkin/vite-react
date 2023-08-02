import React, { useState } from "react";
// import imgUrl from "/Users/Admiral Farim/vite/vite-react/src/img";
import { useEffect } from "react";

const Product = ({name,price,imgUrl}) =>{
 const [item,setItem] = useState(0);
   const addToCart = ()=>{
 setItem(item + 1);
   }

    return(
        <>
        <div className="item1 pt">
            <p className="p1">{name}</p>
            <p className="price">${price}</p>
            <img src={imgUrl} alt={name} className="pic"/>
            <button onClick={addToCart} className="buy">BUY</button>  
        </div>
        </>
    )
}
export default Product