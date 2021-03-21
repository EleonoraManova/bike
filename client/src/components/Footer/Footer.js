import style from "../Footer/Footer.module.css";
import SocialFollow from "./SocialFollow";



const Footer = () => {
    return (

        <footer className={style.siteFooter}>
            <SocialFollow/>
            <p className={style.words}>&copy; 2021 All right reserved</p>
        </footer>
    )
}
export default Footer;