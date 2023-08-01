import { useState } from "react";


const Product = () =>{

    const [count,setCount] = useState(0);
    const addToCart = ()=>{
     setCount(count + 1);
      if(count<2){

   }
    }

    return(
        <>
        <p className="cart">Cart:{count}</p>
        <div>
        <p className="p">Products</p>
        </div>
        <div className="pcont">
        <div className="item1 pt">
            <p className="p1">WATCH</p>
            <button onClick={addToCart} className="buy">BUY</button>
            
        </div>
        <div className="item2 pt">
        <p className="p2">SHOES</p>
        <button  onClick={addToCart} className="buy">BUY</button>
        </div>
        </div>
        </>
    )
}
export default Product