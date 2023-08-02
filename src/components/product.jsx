



const Product = ({item,setItem}) =>{
    const addToCart = ()=>{
        setItem(item + 1);
    } 

    const products = [
        {id:1,name:"WATCH",price:25.99,imageUrl:"./src/img/watch.jpg"},
        {id:2,name:"NIKE DUNKS", price:34.87,imageUrl:"./src/img/shoes.png"}
    ];
// const productPrice = products.map((pprice)=>{
//     console.log(pprice.price);
// })
    return(
        <>
        <div className="item1">
            {products.map((product)=>(
            <div key={product.id}>
                <div className="pt">
                   <p className="p1">{product.name}</p>
                   <p className="price">${product.price}</p>
                   <img src={product.imageUrl} alt="watch" className="pic"/>
                   <button onClick={addToCart} className="buy">BUY</button>  
                   </div>
                </div> 
                ))}
        </div>
        </>
    )
}
export default Product;