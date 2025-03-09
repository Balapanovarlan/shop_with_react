import React, { useEffect, useState } from 'react'
import styles from './FavoriteList.module.css'
import { CART, FAV } from '../../../constants/constants';
import ProductCardUI from '../../../components/ui/ProductCard/ProductCardUI';
import { handleAddToCart, handleDeleteFromFav} from '../../../utils/cartUtils';

const FavoriteList = () => {

    const [fav, setFav] = useState([]);
    
    useEffect(()=>{
        const storedFav = JSON.parse(localStorage.getItem(FAV)) || [];
        setFav(storedFav);
    },[]);

  return (
    <div className= {styles.wrapper}>
        {
            fav.map(item=>(
                 <ProductCardUI 
                    key={item.id}
                    title={item.title}
                    cardImage={item.cardImage}
                    price = {item.price}
                    onDelete = {()=> handleDeleteFromFav(fav,setFav,item.id)}
                    handleAddToCart={()=> handleAddToCart(item.id, item.price, item.title, item.cardImage)}
                    isInFavorite = {true}
                 />
            ))
        }
    </div>
  )
}

export default FavoriteList