import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import styles from './page-layout.module.scss';


export default function PageLayout({ children }) {

    return <>
        <Navbar></Navbar>
        <div className={styles.page_layout_wrapper}>{children}</div>

        <Footer></Footer>
    </>
}