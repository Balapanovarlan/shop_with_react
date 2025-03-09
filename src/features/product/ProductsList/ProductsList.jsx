import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { CircularProgress, Pagination, Stack } from "@mui/material";
import axios from "axios";

import styles from './ProductsList.module.css';
import { SERVER_URL } from "../../../constants/constants";
import ProductCard from "../ProductCard/ProductCard";
import useDebounce from '../../../hooks/useDebounce/useDebounce';
import useIsDesktop from "../../../hooks/useIsDesktop/useIsDesktop";

const ProductsList = () => {
    const { category } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const debouncedSearch = useDebounce(searchQuery, 500);

    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const LIMIT = 9;
    const [totalPages, setTotalPages] = useState();

    // Сбрасываем страницу при изменении категории или поискового запроса
    useEffect(() => { setPage(1); }, [category, debouncedSearch]);

    const checkIsDesktop =  useIsDesktop();
    //console.log(checkIsDesktop); 
    
    useEffect(() => {
        if (category) {
            setSearchParams({});
        }
    }, [category]);

    useEffect(() => {
        setIsLoading(true);

        // Если есть поисковый запрос, отправляем запрос на поиск
        const url =
        debouncedSearch
            ? `https://dummyjson.com/products/search?q=${debouncedSearch}&limit=${LIMIT}&skip=${(page - 1) * LIMIT}`
            : category
            ? `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&skip=${(page - 1) * LIMIT}`
            : `${SERVER_URL}/products?limit=10&skip=0`;

            axios
            .get(url)
            .then(response => {
                if (response.status === 200) {
                setProducts(response.data.products);
                // Если выполняется поиск или выбрана категория, используем total для расчёта totalPages
                if (debouncedSearch || category) {
                    const totalProducts = response.data.total;
                    setTotalPages(Math.ceil(totalProducts / LIMIT));
                }
                }
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [category, page, debouncedSearch]);

    const handleChangePage = (_, value) => {
        setPage(value);
    };

    if (isLoading || !products) {
        return <CircularProgress />;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container__ProdCards}>
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            cardImage={product.thumbnail}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            id={product.id}
                        />
                    ))
                }
            </div>
            <div className={styles.container__Pagination}>
                {
                    totalPages > 1 && (
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

export default ProductsList;
