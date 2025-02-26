import logo from '../../assets/icons/icon-logo.svg';
import heart from '../../assets/icons/icon-heart.svg';
import cart from '../../assets/icons/icon-cart.svg';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { pageRoutes } from '../../constants/pageRoutes';
import Search from '../Search/Search';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to={pageRoutes.commonRoutes.home}><img src={logo} alt="logo" className={styles.logo}/></Link>

            <Search />

            <div className={styles.wrapper__btns}>
                <Link to={pageRoutes.cartRoutes.cart} className={styles.btn}><img src={cart} alt="cart" className={styles.icons}/></Link>
                <Link to={""} className={styles.btn}><img src={heart} alt="heart" className={styles.icons}/></Link>
            </div>

        </header>
    )
}

export default Header