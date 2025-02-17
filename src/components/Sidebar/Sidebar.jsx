import CategoryList from '../../features/Category/CategoryList/CategoryList';
import styles from './Sidebar.module.css';
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        {/* <div className={styles.sideber__item}>Category name</div> */}
        <CategoryList/>
    </aside>
  )
}

export default Sidebar