import { useState } from "react";
import Cart from "./components/cart";
import Product from "./components/product";
import Shopify from "./components/logo";

function App() {
  const [item,setItem] = useState(0);
  const [newComponent,setNewComponent] = useState(false);
  return (
    <>
    <Shopify/>
    <Cart item={item} />
    <p className="p">Products</p>
    <div className="pcont">
    <Product item={item} setItem={setItem}/>
    </div>
    </>

  )
}
export default App

