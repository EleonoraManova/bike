import { Component } from 'react';

// import mountain from "../Destinations/mountain.jpg";
import '../Destinations/Destinations.module.css';
// import { NavLink } from 'react-router-dom';
import DestinationCard from '../destinationCard/DestinationCard'

class Destinations extends Component {

    constructor(props) {
        super(props);

        this.state = {

            destinations: []


        }
    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/api/destinations')
    //         .then((res) =>{
    //             res.json()
    //             console.log(res);
    //         } )
    //         .then(res => this.setState({ desrinations: res }))
    //         .catch(err => console.log(err))
  
    // }

    render() {
        return (
            <section className='destination'>
                {this.state.destinations.map(x => <DestinationCard key={x._id} name={x.category} />)}
            </section>
        )

    }

}
export default Destinations;


