import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Button from '../Button/Button';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCardUI = ({
    id,
    cardImage,
    title,
    description,
    price,
    handleAddToCart,
    handleAddToFavorite,
    quantity,
    isInCart = false ,
    isInFavorite = false,
    onAdd,
    onDecrease,
    onDelete,
}) => {
    return (
        <Card className={styles.card} >
            <Link to= {`/product/${id}`} className={styles.link}>
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
            </Link>
            <CardActions>                
                {isInCart ? (
                     <>
                        <Button size='small' onClick={onAdd}>+</Button>
                        <Button size='small' onClick={onDecrease}>-</Button>
                        <Button size='small' onClick={onDelete}>Delete</Button>
                    </>    
                ): isInFavorite?(
                    <>
                        <Button size='small'  onClick = {handleAddToCart} >
                        Buy {price}$</Button>
                        <Button size='small'  onClick={onDelete}
                        >Delete</Button>
                    </>
                ): (
                    <>
                        <Button size='small'  onClick = {handleAddToCart} >
                        Buy {price}$</Button>
                        <Button size='small' variant='text'  onClick={handleAddToFavorite}
                        >Save</Button>
                     </>
                )}      
            </CardActions>
        </Card>
    )
}

export default ProductCardUI