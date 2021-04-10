import './TypeBiking.css'
import { Link, NavLink } from 'react-router-dom';
import firebase from '../../utils/firebase';
import { useEffect, useState } from 'react';




const TypeBiking = () => {


    let path = window.location.pathname.split('/')
    let category = path[1]

    const ref = firebase.firestore().collection("destinations");
    const [destinations, setDestinations] = useState([]);


    function getDestinations() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];

            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setDestinations(items);

        })
    }

    useEffect(() => {
        getDestinations();
    }, []);


    return (
        <div className='grid-container'>
            <h1>destinations</h1>
            <div class="grid-x grid-margin-x small-up-2 medium-up-3">



                {destinations.filter((destination) => destination.category === category).map((destination) => (
                    <div className='cell'>
                        <div className='card'>


                            <div className='section-wrapper item'>
                                <div key={destination.id} className="card-section">
                                    <h3> {destination.category}</h3>

                                    <img src={destination.img} className="img" alt="mountain biking" height={300} width={400} />
                                    <p className="description">{destination.description}</p>
                                    <time>{destination.destinationDate}</time>

                                    <div className="destination-info">
                                        <NavLink to={`/details/${destination.id}`}><button className="button ">Details</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Link to="/create" type="submit" className="button large expanded"  >Add</Link>

            </div>

        </div >
    )

}

export default TypeBiking;

