import { useEffect, useState } from 'react';
import firebase from '../../../utils/firebase';
const uniqid = require('uniqid');


function CreateTrip() {

    const [destinations, setDestinations] = useState([]);
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [destinationDate, setDestinationDate] = useState("");
    const ref = firebase.firestore().collection("destinations");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        let categoryValue = document.getElementById('category').value;

    }

    function addDestination(newDestination) {
        ref
            .doc(newDestination.id)
            .set(newDestination)
            .then(() => {
                setDestinations((prev) => [newDestination, ...prev])
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>CreateTrip</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" onChange={(e)=> setCategory(e.target.value)}/>
                <label htmlFor="image">Image</label>
                <input type="url" id="image" name="image" onChange={(e)=> setImg(e.target.value)} />
                <label htmlFor="description">Description</label>
                <textarea name="description" onChange={(e)=> setDescription(e.target.value)} />
                <label htmlFor="destinationDate">Trip (date and time):</label>
                <input type="datetime-local" id="destinationDate" name="destinationDate" onChange={(e)=> setDestinationDate(e.target.value).moment()}/>
                <input type="submit" value="CreateTrip" onClick={()=> addDestination({category, img, description, destinationDate, id: uniqid()})} />

            </form>
        </div>
    )

}


export default CreateTrip;