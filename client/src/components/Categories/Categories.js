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

componentDidMount(){
    fetch('http://localhost:3000/api/destinations')
    .then(res => res.json())
    .then(res => this.setState({desrinations: res}))
    .catch(err => console.log(err))
}

    render() {


        return (

            <div>
                <Jumbotron />

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