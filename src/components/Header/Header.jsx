import styles from './Header.module.css';
import logo from '../../assets/icons/icon-logo.svg'
import heart from '../../assets/icons/icon-heart.svg'
import cart from '../../assets/icons/icon-cart.svg'
import { Link } from 'react-router-dom';
import {PageRoutes} from '../../constants/pageRoutes'


const Header = () => {
  return (
    <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.wrapper__search}>
          <input type="search" placeholder='search' className={styles.search} />
        </div>
        <div className={styles.wrapper__btns}>
          <Link to={PageRoutes.cartRoutes.cart}><img className={styles.btn} src={cart} alt="cart" /></Link>
          <Link to={''}><img className={styles.btn} src={heart} alt="heart" /></Link>
        </div>
    </header>
  )
}

export default Header