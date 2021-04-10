import './TypeBiking.css'
import { Link } from 'react-router-dom';
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



        <section className='section-wrapper destination'>

            <h1>destinations</h1>
            {destinations.filter((destination) => destination.category === category).map((destination) => (
                <div key={destination.id}>
                    <h3>Category: {destination.category}</h3>

                    <img src={destination.img} className="img" alt="mountain biking" height={300} width={400} />
                    <p className="description">{destination.description}</p>
                    <time>{destination.destinationDate}</time>


                </div>
            ))}
            <Link to="/racing/create" type="submit" className="far fa-plus-square"  >Add</Link>
        </section>
    )

}

export default TypeBiking;

