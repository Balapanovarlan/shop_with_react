import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/productAPI';
import { CircularProgress } from '@mui/material';
import ProductDetailsUI from '../../../components/ui/ProductDetailsUI/ProductDetailsUI';

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const fetchProduct = async() =>{
            try {
                const data = await getProductById(id);
                setProduct(data)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchProduct();
    },[id]);

    if (error) {
        return <div>ошибка загрузки: {error}</div>
    }

    if (!product) {
        return <CircularProgress/>
    }

  return (
    <ProductDetailsUI 
        product = {product}
    />
  )
}

export default ProductDetails