import ProductsList from "../../features/Product/ProductsList/ProductsList"
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <ProductsList />
        </div>
    )
}

export default Home