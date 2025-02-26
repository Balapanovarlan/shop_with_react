import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { CircularProgress, Pagination, Stack } from "@mui/material";
import axios from "axios";

import styles from './ProductsList.module.css';
import { SERVER_URL } from "../../../constants/constants";
import ProductCard from "../ProductCard/ProductCard";


const ProductsList = () => {
    const { category } = useParams();

    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const LIMIT = 9;
    const [totalPages, setTotalPages] = useState();

    useEffect(()=>{setPage(1);},[category]);

    useEffect(() => {
        setIsLoading(true);

        axios
            .get(`https://dummyjson.com/products/category/${category}`)
            .then(response=>{
                const totalProducts = response.data.total;
                setTotalPages(Math.ceil(totalProducts/LIMIT));
            })

        const url = category
            ? `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&skip=${(page-1)*LIMIT}`
            : `${SERVER_URL}/products?limit=10&skip=0`;
        axios
            .get(url)
            .then(res => {
                if (res.status === 200) {
                    setProducts(res.data.products);
                }
            })
            .catch(() => {

            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [category, page]);

    const handleChangePage = (_, value) => {
        setPage(value);
    };

    if (isLoading || !products) {
        <CircularProgress />
    }

    if (!products) {
        return null;
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

/*
    1) Сделать компонент ProductCard, который будет рендерить UI компонент и содержать всю логику
    2) Переименовать старый ProductCard -> ProductCardUI и вытащить всю логику из него и добавить props handleAddToCart
    3) В ProductsList поменять компонент с UI на ProductCard
*/