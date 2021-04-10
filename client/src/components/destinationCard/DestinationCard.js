
import { NavLink } from 'react-router-dom';
import firebase from '../../utils/firebase';
import { useEffect, useState } from 'react';



const DestinationCard = () => {

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
        <section className='section-wrapper destination'>

            <h1>destinations</h1>
            {destinations.map((destination) => (

            <div key={destination.id}>
                <h3>{destination.category}</h3>

                <img src={destination.img} className="img" alt="mountain biking" height={300} width={400} />
                {/* <p className="description">{destination.description}</p>
                <time>{destination.destinationDate}</time> */}
                <div className="destination-info">
                    <NavLink to={`/details/${destination.id}`}><button className="button ">Details</button></NavLink>
                </div>
            </div>
            ))}
        </section>

    )
}

export default DestinationCard;
