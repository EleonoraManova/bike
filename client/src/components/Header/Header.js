
import '../Header/Header.css';
import { Link } from 'react-router-dom'

const Header = ({
    isAuthenticated,
    username,
}) => {

    if (isAuthenticated) {
        return (
            <header >
                <div className="navbar">

                    <Link className="navbutton" to="/">Home</Link>
                    <Link className="navbutton" to="/profile">Profile</Link>
                    <Link className="navbutton" to="/mydestinations">My destinations</Link>
                    <Link className="navbutton" to="/shop">Shop</Link>
                    <Link className="navbutton" to="/about">About us</Link>

                    <div className="auth">
                        <h3>Hello, {username}</h3>

                        <Link to="/logout">Logout</Link>
                    </div>
                </div>

            </header>
        )
    } else {
        return (
            <header >
                <div className="navbar">
                    <Link className="navbutton" to="/">Home</Link>
                    <div className="auth">
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                        <Link className="navbutton" to="/about">About us</Link>
                    </div>
                </div>
            </header>
        )
    }


}
export default Header;