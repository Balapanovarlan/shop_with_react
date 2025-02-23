import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import styles from './ProductsList.module.css';
import axios from "axios";
import ProductListItem from "../ProductListItem/ProductListItem";
import ProductCard from "../../../components/ui/ProductCard/ProductCard";
import { Pagination, Stack } from "@mui/material";

const ProductsList = () => {
    const {category} = useParams();
    const [products,  setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const LIMIT = 9;
    const [totalPages, setTotalPages] = useState();

    useEffect(()=>{setPage(1);},[category]);
    
    useEffect(()=>{
        setIsLoading(true);

        axios
            .get(`https://dummyjson.com/products/category/${category}`)
            .then(response=>{
                const totalProducts = response.data.total;
                console.log(totalProducts);
                
                setTotalPages(Math.ceil(totalProducts/LIMIT));
            })
            console.log(page);
            
        const URL = category 
            ? `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&skip=${(page-1)*LIMIT}`
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
    },[category,page]);

    const handleChangePage = (_, value) => {
        setPage(value);
    };

    if (isLoading) {
        return (
            <div>   
                Идет загрузка..
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container__ProdCards}>
                {
                    products.map((product)=>(
                        <ProductCard
                            key = {product.id}
                            cardImage = {product.thumbnail}
                            title = {product.title}
                            description = {product.description}
                            price = {product.price}
                            id = {product.id}
                        />
                    ))
                }
            </div>
            <div className={styles.container__Pagination}>
                 {
                    totalPages>1 && (
                        <div>
                            <Stack spacing={2}>
                                <Pagination
                                    count={totalPages}
                                    page={page}
                                    onChange={handleChangePage}
                                    color="secondary"
                                    showFirstButton
                                    showLastButton
                                />
                            </Stack>
                            
                        </div>
                    )
                 }
            </div>
        </div>
    )
}

export default ProductsList