
import style from '../Header/Header.module.css'
const Header = () => {
    return (
        <header className={style.navigation}>
            <section className={style.navbar}>
                <div>
                    <a className={style.button} href="/">Home</a>
                    <a className={style.button} href="/">Моите дестинации</a>
                    <a className={style.button} href="/">Магазин</a>
                    <a className={style.button} href="/">За нас</a>
                </div>
            </section>
        </header>
    )
}
export default Header;