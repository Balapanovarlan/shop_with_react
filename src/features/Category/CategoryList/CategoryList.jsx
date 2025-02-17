import React, { useEffect, useState } from 'react'

import styles from './CategoryList.module.css';
import axios from "axios";
import CategoryListItem from '../CategoryListItem/CategoryListItem';

const CategoryList = () => {

    const [isLoading, setIsLoading] = useState(false)
    const[categories, setCategories] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        axios
            .get(`https://dummyjson.com/products/categories`)
            .then(response=>{
                console.log(response.data);
                
                setCategories(response.data);
            })
            .finally(()=>{
                setIsLoading(false);
            })
    },[]);

    if (isLoading) {
        return (
            <div>   
                Идет загрузка..
            </div>
        )
    }

    return (
      <div className={styles.wrapper}>
        {   
            categories.map((category)=>(
                <CategoryListItem 
                    key = {category.slug}
                    {...category}
                 />
            ))
            
        }
        </div>
    )
}

export default CategoryList