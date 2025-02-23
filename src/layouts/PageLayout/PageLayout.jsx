
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header"
import { Outlet } from 'react-router-dom';

import styles from './PageLayout.module.css';

const PageLayout = () => { 
  return (
    <div className={styles.wrapper}>
        <Header/>

        <div className={styles.contentWrapper}>
            <Sidebar></Sidebar>
            <main className={styles.main}>
                {/* Рендерим все компоненты */}
                <Outlet/>  {/* рендер всех страниц(дочерние элементы) */}
            </main>
        </div>
        
        <footer>Footer</footer>

    </div>
  )
}

export default PageLayout