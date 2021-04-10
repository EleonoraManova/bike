
import { useEffect, useState } from 'react';
import firebase from '../../../utils/firebase';


const EditDestinationForm = ({
    history,

}) => {

    const [destinations, setDestinations] = useState([]);
    const ref = firebase.firestore().collection("destinations");
    let path = window.location.pathname.split('/')
    let id = path[2]

  

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

    const onSubmitHandler = (e) => {
        e.preventDefault();


    }

    function editTrip(updatedTrip) {
        ref
            .doc(updatedTrip.id)
            .update(updatedTrip)
            .catch((err) => {
                console.error(err)
            })
            .then(()=> {
                history.push(`/details/${updatedTrip.id}`)
            })
    }


    

    return (
        <div>
            <h1>Edit Trip</h1>
            {destinations.filter((destination) => destination.id === id).map((destination) => (
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" defaultValue={destination.category} onChange={(e) => {destination.category = e.target.value}} />
                <label htmlFor="image">Image</label>
                <input type="url" id="image" name="image" defaultValue={destination.img} onChange={(e) => {destination.img = e.target.value}}/>
                <label htmlFor="description">Description</label>
                <textarea name="description" defaultValue={destination.description} onChange={(e) => {destination.description = e.target.value}} />
                <label htmlFor="destinationDate">Trip (date and time):</label>
                <input type="datetime-local" id="destinationDate" name="destinationDate" defaultValue={destination.destinationDate} onChange={(e) => {destination.destinationDate = e.target.value}} />
                <button onClick={()=> editTrip({
                    id: destination.id,
                    category: destination.category, 
                    img: destination.img, 
                    description: destination.description, 
                    destinationDate: destination.destinationDate})} className="button ">Edit</button>


            </form>
                ))}
        </div>
    )
}

export default EditDestinationForm;