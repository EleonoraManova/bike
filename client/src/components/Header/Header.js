
import '../Header/Header.css'
const Header = () => {
    return (
        <header >
            <div className="navbar">

                <a className="navbutton" href="/">Home</a>
                <a className="navbutton" href="/mydestinations">My destinations</a>
                <a className="navbutton" href="/shop">Shop</a>
                <a className="navbutton" href="/about">About us</a>

                <div className="auth">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </div>

        </header>
    )
}
export default Header;