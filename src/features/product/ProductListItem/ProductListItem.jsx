import React from 'react'
import styles from './ProductListItem.module.css';
import { Button } from '@mui/material';

const ProductListItem = (props) => {
  return (
    <div className={styles.container}>
        <img className="product-image"src={props.thumbnail} alt={props.title}/>
        <span className="item-title">{props.title}</span>
        <div className="item-action">
            <div className="item-price">{props.price}$</div>
            <Button>Buy</Button>
        </div>
    </div>
  )
}

export default ProductListItem