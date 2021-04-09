import firebase from '../../utils/firebase';
import { useEffect, useState } from 'react';
// const database = firebase.database();


const Details = () => {
    
    let path = window.location.pathname.split('/')
    let id = path[2]

    const ref = firebase.firestore().collection("destinations");
    const [destinations, setDestinations] = useState([]);
    let destination;

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
    
    let current = destinations.filter((destination) => destination.id === id)[0];

    return (
        <section className='section-wrapper destination'>

            <h1>destinations</h1>
            {destinations.filter((destination) => destination.id === id).map((destination) => (
            <div key={destination.id}>
                <h3>Category: {destination.category}</h3>

                <img src={destination.img} className="img" alt="mountain biking" height={300} width={400} />
                <p className="description">{destination.description}</p>
                <time>{destination.destinationDate}</time>
            </div>
            ))}
        </section>

    )

}


export default Details;
