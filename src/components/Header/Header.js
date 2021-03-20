
import style from '../Header/Header.module.css'
const Header = () => {
    return (
        <header className={style.navigation}>
            <section className="navbar">
                <div>
                    <a className="button" href="/">Home</a>
                    <a className="button" href="/">Маршрути</a>
                    <a className="button" href="/">Магазин</a>
                    <a className="button" href="/">За нас</a>
                </div>
            </section>
        </header>
    )
}
export default Header;