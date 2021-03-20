import { Component } from 'react';
import mountain from "../Categories/mountain.jpg";
import style from '../Categories/Categories.module.css';
import { NavLink } from 'react-router-dom';


class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {

            bikes: []


        }
    }
    render() {


        return (

            <div>


                <div>
                    <nav className={style.categories}>
                        <ul>
                            <li><NavLink to="/">All</NavLink></li>
                            <li><NavLink to="/racing">Racing</NavLink></li>
                            <li><NavLink to="/mountain">Mountain</NavLink></li>
                            <li><NavLink to="/sightseeing">Sightseeing</NavLink></li>
                            <li><NavLink to="/city">City</NavLink></li>
                            <li><NavLink to="/other">Other</NavLink></li>
                        </ul>
                    </nav>

                    <style jsx>{`
                        .active{
                            background-color: lightgreen;
                        }
                        `}
                    </style>
                </div>


                <section className={style.categorieElement}>
                    <h3>Mounain biking</h3>

                    <p className="img"><img src={mountain} alt="mountain biking" height={300} width={400} /></p>
                    <p className="description">Extreme biking</p>
                    <div className="pet-info">
                        <NavLink to="/details"><button className="button">Details</button></NavLink>
                    </div>
                </section>
            </div>

        )
    }
}

export default Categories;