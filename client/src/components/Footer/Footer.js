import style from "../Footer/Footer.module.css";
import SocialFollow from "./SocialFollow";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (

        <footer className={style.siteFooter}>
            <SocialFollow/>
            <p className={style.words}>&copy; 2021 All right reserved</p>
            <Link to="/" className={style.terms}>Terms of use</Link>
        </footer>
    )
}
export default Footer;