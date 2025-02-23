import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Button from '../Button/Button'
import styles from './ProductCard.module.css'
import { CART } from '../../../constants/constants'

const ProductCard = ({
    cardImage,
    title,
    description,
    price,
    id,
    
}) => {
    

    const getCart = ()=>{
        const cart = localStorage.getItem(CART);
        return cart ? JSON.parse(cart):[];
    }

    const handleAddToCart = () =>{
        
        const cart = getCart();

        const product = {
            id,
            price,
            title,
            quantity:1,
        }
   
        const foundedItem = cart.find((item)=>item.id === product.id)
        if (foundedItem) {
            foundedItem.quantity +=1;
        }else{
            cart.push(product);
        }
    
        localStorage.setItem(CART,JSON.stringify(cart));
        
    }
    
    return (
        <Card className={styles.card}>
        <CardMedia 
            className={styles.card_image}
            image={cardImage}
            title = {title}
        />
        <CardContent>
            <Typography gutterBottom variant='h5' component={'div'}> 
                {title}
            </Typography>
            <Typography>
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'  onClick = {handleAddToCart} >
                Buy {price}$</Button>
            <Button size='small' variant='text' 
            >Save</Button>
        </CardActions>


    </Card>
  )
}

export default ProductCard