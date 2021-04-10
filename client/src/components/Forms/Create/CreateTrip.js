import { useState } from 'react';
import firebase from '../../../utils/firebase';


const uniqid = require('uniqid');

function CreateTrip({
    history,

}) {


    const user = firebase.auth().currentUser;
    let uid;



    if (user != null) {

        uid = user.uid;
    }


    // const { isAuthenticated, username, uid } = useContext(AuthContext);

    const [destinations, setDestinations] = useState([]);
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [destinationDate, setDestinationDate] = useState("");
    const ref = firebase.firestore().collection("destinations");


    const onSubmitHandler = (e) => {
        e.preventDefault();


    }

    function addDestination(newDestination) {
        ref
            .doc(newDestination.id)
            .set(newDestination)
            .then(() => {
                setDestinations((prev) => [newDestination, ...prev])
            })
            .then(() => {
                history.push(`/${newDestination.category}`)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="section-wrapper">
            <h1>CreateTrip</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="category">Category</label>


                <select id="dropdown" onChange={(e) => setCategory(e.target.value)}>
                    <option value="racing">racing</option>
                    <option value="mountain">mountain</option>
                    <option value="sightseeing">sightseeing</option>
                    <option value="city">city</option>
                    <option value="other">other</option>
                </select>

                {/* <input type="text" id="category" name="category" onChange={(e) => setCategory(e.target.value)} /> */}
                <label htmlFor="image">Image</label>
                <input type="url" id="image" name="image" onChange={(e) => setImg(e.target.value)} />
                <label htmlFor="description">Description</label>
                <textarea name="description" onChange={(e) => setDescription(e.target.value)} />
                <label htmlFor="destinationDate">Trip (date and time):</label>
                <input type="datetime-local" id="destinationDate" name="destinationDate" onChange={(e) => setDestinationDate(e.target.value)} />
                <input type="submit" value="CreateTrip" onClick={() => addDestination({ category, img, description, destinationDate, id: uniqid(), destinationCreator: uid })} />

            </form>
        </div>
    )

}


export default CreateTrip;