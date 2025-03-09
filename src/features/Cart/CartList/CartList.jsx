import React, { useEffect, useState } from 'react'
import ProductCardUI from '../../../components/ui/ProductCard/ProductCardUI';
import { CART, SERVER_URL } from '../../../constants/constants';
import Button from '../../../components/ui/Button/Button';
import { Typography } from '@mui/material';
import axios from 'axios';
import styles from './CartList.module.css';
import { handleAddProduct, handleDecreaseProduct, handleDeleteFromCart } from '../../../utils/cartUtils';

const CartList = () => {

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem(CART)) || [];
        setCart(storedCart);
    },[]);

    const handleBuyCart = async()=>{
        try {
            const response = await axios.post(`${SERVER_URL}/carts/add`,
                {
                    userId : 1,
                    products: cart,
                });
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const totalSum = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const roundedTotalSum = Math.round(totalSum*100)/100;

  return (
    <div className={styles.wrapper}>
        <div className={styles.cartProducts__container}>
            {
            cart.map(product=>(
                <ProductCardUI
                    key={product.id}
                    isInCart = {true}
                    title = {product.title}
                    cardImage={product.cardImage}
                    quantity = {product.quantity}
                    price={product.price}
                    onAdd = {()=> handleAddProduct( cart,setCart, product.id)}
                    onDecrease = {()=> handleDecreaseProduct(cart,setCart,product.id)}
                    onDelete = {()=>handleDeleteFromCart(cart,setCart,product.id)}
                />
            ))}
        </div>
        
        
        <div className={styles.cart__actions}>
            <Button className={styles.card__button}
             size='large'  onClick={handleBuyCart}>
                 Buy
            </Button>
            <Typography>
               Total price: {roundedTotalSum} $
            </Typography>
        </div>
    </div>
  )
}

export default CartList