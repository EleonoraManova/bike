
import style from '../Header/Header.module.css'
const Header = () => {
    return (
        <header >
            <div className={style.navbar}>
                <a className={style.button} href="/">Home</a>
                <a className={style.button} href="/">Моите дестинации</a>
                <a className={style.button} href="/">Магазин</a>
                <a className={style.button} href="/">За нас</a>
            </div>
            <section className={style.navigation}>
                <h1>Welcome</h1>
            </section>
        </header>
    )
}
export default Header;