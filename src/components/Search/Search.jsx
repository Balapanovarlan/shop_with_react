import { useEffect, useState } from 'react'
import styles from './Search.module.css';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParms, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState(searchParms.get("search") || "");

    useEffect(() => {
        if (search) {
            setSearchParams({ search: search });
        } else {
            setSearchParams({});
        }
    }, [search, setSearchParams]);

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.search}
                type="search"
                placeholder='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search