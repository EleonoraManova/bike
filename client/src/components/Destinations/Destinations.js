import { Component } from 'react';

import mountain from "../Destinations/mountain.jpg";
import style from '../Destinations/Destinations.module.css';
import { NavLink } from 'react-router-dom';

class  Destinations extends Component {

constructor(props){
    super(props);

    this.state = {
        destinations: []
    }
}

    render(){
        return (
            <section className={style.destination}>
                <h3>Mounain biking</h3>
    
                <p className="img"><img src={mountain} alt="mountain biking" height={300} width={400} /></p>
                <p className="description">Extreme biking</p>
                <div className="pet-info">
                    <NavLink to="/details"><button className="button">Details</button></NavLink>
                </div>
            </section>
        )
    
    }

}
export default Destinations;

