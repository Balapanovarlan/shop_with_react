import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Button from '../Button/Button';
import styles from './ProductCard.module.css';

const ProductCardUI = ({
    cardImage,
    title,
    description,
    price,
    handleAddToCart,
    quantity,
    isInCart ,
    onAdd,
    onDecrease,
    onDelete,

}) => {
    return (
        <Card className={styles.card}>
            <CardMedia 
                className={styles.card__image}
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
                <Typography>
                    Price: {price}$
                </Typography>
                {isInCart&&(
                    <Typography>Quantity: {quantity}</Typography>
                )}
            </CardContent>
            <CardActions>
                {isInCart ? (
                     <>
                        <Button size='small' onClick={onAdd}>+</Button>
                        <Button size='small' onClick={onDecrease}>-</Button>
                        <Button size='small' onClick={onDelete}>Delete</Button>
                    </>    
                ):(
                    <>
                    
                        <Button size='small'  onClick = {handleAddToCart} >
                        Buy {price}$</Button>
                        <Button size='small' variant='text' 
                        >Save</Button>
                    </>
                )}      
            </CardActions>
        </Card>
    )
}

export default ProductCardUI