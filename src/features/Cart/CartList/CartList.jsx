import React, { useEffect, useState } from 'react'
import ProductCardUI from '../../../components/ui/ProductCard/ProductCardUI';
import { CART, SERVER_URL } from '../../../constants/constants';
import Button from '../../../components/ui/Button/Button';
import { Typography } from '@mui/material';
import axios from 'axios';
import styles from './CartList.module.css';

const CartList = () => {

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem(CART)) || [];
        setCart(storedCart);
    },[]);

    const updateLocalStorage = (updatedCart)=>{
        localStorage.setItem(CART, JSON.stringify(updatedCart));
    }

    const handleAddProduct= (id)=>{
        const updatedCart = cart.map(item=>{
            if (item.id===id) {
                return {...item, quantity: item.quantity+1}
            }
            return item;
        });
        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    }

    const handleDecreaseProduct=(id) =>{
        const updatedCart = cart.map(item=>{
            if (item.id === id ) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        })
        .filter(item => item.quantity > 0);

        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    };


    const handleDeleteFromCart=(id)=>{
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    }

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
                    onAdd = {()=> handleAddProduct(product.id)}
                    onDecrease = {()=> handleDecreaseProduct(product.id)}
                    onDelete = {()=>handleDeleteFromCart(product.id)}
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