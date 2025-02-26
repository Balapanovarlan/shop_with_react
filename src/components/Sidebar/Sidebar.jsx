import axios from 'axios';
import { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then(response => setCategories(response.data))
            .catch(error => console.error("Ошибка загрузки категорий:", error));
    }, []);

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__list}>
                {categories.map(category => (
                    <Link to={`/category/${category.slug}`} key={category.name} className={styles.sidebar__item} >{category.name}</Link>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar