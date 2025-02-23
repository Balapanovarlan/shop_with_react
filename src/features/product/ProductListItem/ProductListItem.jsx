import React from 'react'
import styles from './ProductListItem.module.css';
import Button from '../../../components/ui/Button/Button';



const ProductListItem = (props) => {
  return (
    <div className={styles.container}>
        <img className={styles.product_image} src={props.thumbnail} alt={props.title}/>
        <span className={styles.item_title}>{props.title}</span>
        <div className={styles.item_action}>
            <div className={styles.item_price}>{props.price}$</div>
            <Button 
                variant='outlined'
                  >Buy</Button>
        </div>
    </div>
  )
}

export default ProductListItem