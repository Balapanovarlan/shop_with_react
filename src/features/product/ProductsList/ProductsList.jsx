import { useEffect, useState } from "react"
import { useParams } from "react-router";
import styles from './ProductsList.module.css';
import axios from "axios";
import ProductListItem from "../ProductListItem/ProductListItem";

const ProductsList = () => {
    const {category} = useParams();
    const [products,  setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
        setIsLoading(true);

        const URL = category 
            ? `https://dummyjson.com/products/category/${category}`
            : "https://dummyjson.com/products?limit=10&skip=0";

        axios
            .get(URL)
            .then(response=>{
                console.log(response.data.products);
                
                setProducts(response.data.products);
            })
            .finally(()=>{
                setIsLoading(false);
            })
        
        // сделать запрос на товаров для категории
    },[category]);

    if (isLoading) {
        return (
            <div>   
                Идет загрузка..
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {
                products.map((product)=>(
                    <ProductListItem
                        key = {product.id}
                        id = {product.id}
                        title = {product.title}
                        description = {product.description}
                        category = {product.category}
                        price = {product.price}
                        thumbnail = {product.thumbnail}
                    />
                ))
            }
        </div>
    )
}

export default ProductsList