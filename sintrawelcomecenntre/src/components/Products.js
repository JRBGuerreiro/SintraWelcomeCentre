import React from "react";
import { products } from '../utility/text/products';
import Card from "./Card";


const Products = (props) => {
    return(
        <section className="products">
            
                <h2>Check Our Products</h2>
            <div className="products_content">
                {products.map(product => {
                    return <Card 
                    title={product[props.language].title}
                    description={product[props.language].description}
                    />
                })}
            </div>
        </section>
    )
}

export default Products