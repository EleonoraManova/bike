import firebase from '../../utils/firebase';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// const database = firebase.database();


const Details = ({
    history,
}) => {

    let path = window.location.pathname.split('/')
    let id = path[2]

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


    function deleteTrip(destination) {
        ref
            .doc(destination.id)
            .delete()
            .catch((err) => {
                console.error(err)
            })
    }

    function editTrip(updatedTrip) {
        ref
            .doc(updatedTrip.id)
            .update(updatedTrip)
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <section className='section-wrapper destination'>

            <h1>destinations</h1>
            {destinations.filter((destination) => destination.id === id).map((destination) => (
                <div key={destination.id}>
                    <h3>Category: {destination.category}</h3>

                    <img src={destination.img} className="img" alt="mountain biking" height={300} width={400} />
                    <p className="description">{destination.description}</p>
                    <time>{destination.destinationDate}</time>
                    <div className="destination-buttons">
                        <button className="button " onClick={() => deleteTrip(destination)}>Delete</button>
                        <NavLink to={`/details/${destination.id}/edit`}><button className="button ">Edit</button></NavLink>
                    </div>

                </div>
            ))}
        </section>

    )

}


export default Details;
