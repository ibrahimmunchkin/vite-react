import Shopify from "./components/logo";
import Product from "./components/product";

function App() {
 
  return (
    <div>
    <Shopify/>
    <p className="p">Products</p>
    <div className="pcont">
    <Product name="WATCH" price={25.99} imgUrl="./src/img/watch.jpg"/>
    <Product name="SHOES" price={14.25} imgUrl="./src/img/shoes.png"/>
    </div>
    </div>

  )
}
export default App

