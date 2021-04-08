import { Component } from 'react';

import style from '../Categories/Categories.module.css';
import { NavLink } from 'react-router-dom';
import Jumbotron from '..//Jumbotron/Jumbotron';
import DestinationCard from '../destinationCard/DestinationCard'


class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {

            destinations: []


        }
    }

    render() {


        return (

            <div>
                <Jumbotron />

                <div className="section-wrapper">
                    <nav className={style.categories}>
                        {/* <ul>
                            <li><NavLink to="/">All</NavLink></li>
                            <li><NavLink to="/racing">Racing</NavLink></li>
                            <li><NavLink to="/mountain">Mountain</NavLink></li>
                            <li><NavLink to="/sightseeing">Sightseeing</NavLink></li>
                            <li><NavLink to="/city">City</NavLink></li>
                            <li><NavLink to="/other">Other</NavLink></li>
                        </ul> */}
                    </nav>

                    <style>{`
                        .active{
                            background-color: lightgreen;
                        }
                        `}
                    </style>
                </div>

                <DestinationCard />

            </div>

        )
    }
}

export default Categories;