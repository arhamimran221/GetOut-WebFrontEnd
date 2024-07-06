
import styles from './global-search.module.scss';
import categoryIcon from '../../Assets/home/category-icon.svg';
import searchIcon from '../../Assets/home/search-icon.png';
import { useNavigate } from 'react-router-dom';


export default function GlobalSearch() {
    const navigate = useNavigate();
    const handleKeyPress=(e)=>{
        console.log(e)
        if(e.code==="Enter"){
            navigate('/events')
        }
    }
    return <div className={`${styles.global_search} d-flex align-items-center`}>
        <div className={styles.global_search_dropdown}>
            <img src={categoryIcon} className={styles.category_icon}></img>
            <select name="" className={styles.my_dropdown_styles}>
                <option value="x">Radius</option>
            </select>
        </div>
        <div className={styles.global_search_input_container}>
            <img src={searchIcon} className={styles.search_icon}></img>
            <input type="search" placeholder='Location search' className={styles.global_search_input} onKeyDown={(e)=>handleKeyPress(e)}/>
            <button className={styles.global_search_button} onClick={()=>navigate('/events')}>Search</button>
        </div>
    </div>
}
