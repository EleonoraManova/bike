
import '../Header/Header.css';
import { Link, NavLink } from 'react-router-dom'


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
                    <Link className="navbutton" to="/shop">Shop</Link>
                    <Link className="navbutton categories" to="/">Categories
                        <ul className="categories-dropdown">
                            <li><NavLink to="/all">All</NavLink></li>
                            <li><NavLink to="/racing">Racing</NavLink></li>
                            <li><NavLink to="/mountain">Mountain</NavLink></li>
                            <li><NavLink to="/sightseeing">Sightseeing</NavLink></li>
                            <li><NavLink to="/city">City</NavLink></li>
                            <li><NavLink to="/other">Other</NavLink></li>

                        </ul>
                        <style>{`
                        .active{
                            background-color: lightgreen;
                        }
                        `}
                        </style>

                    </Link>
                    <Link className="navbutton" to="/about">About us</Link>
                    <div className="auth">
                        <Link to="/logout">Logout</Link>
                    </div>
                    <h3 className="greeting">Hello, {username}</h3>
                </div>
            </header>
        )
    } else {
        return (
            <header >
                <div className="navbar">
                    <Link className="navbutton" to="/">Home</Link>
                    <Link className="navbutton" to="/shop">Shop</Link>
                    <Link className="navbutton" to="/about">About us</Link>

                    <div className="auth">

                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </header>
        )
    }


}
export default Header;

