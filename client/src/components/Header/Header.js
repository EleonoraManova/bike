
import '../Header/Header.css';
import { Link } from 'react-router-dom'

const Header = ({
    isAuthenticated,
    username,
}) => {
    return (
        <header >
            <div className="navbar">

                <Link className="navbutton" to="/">Home</Link>
                <Link className="navbutton" to="/mydestinations">My destinations</Link>
                <Link className="navbutton" to="/shop">Shop</Link>
                <Link className="navbutton" to="/about">About us</Link>

                <div className="auth">
                    {isAuthenticated
                        ? <h3>Hello, {username}</h3>
                        :  <Link to="/register">Register</Link>
                    }


                    <Link to="/login">Login</Link>

                    <Link to="/logout">Logout</Link>
                </div>
            </div>

        </header>
    )
}
export default Header;