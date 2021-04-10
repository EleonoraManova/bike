import { useState } from 'react';
import firebase from '../../../utils/firebase';
const uniqid = require('uniqid');


function CreateItem({
    history,
}) {

    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [price, setItemPrice] = useState("");
    const [telephone, setTelephone] = useState("");
    const ref = firebase.firestore().collection("items");


    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

    function addITem(newItem) {
        ref
            .doc(newItem.id)
            .set(newItem)
            .then(() => {
                setItems((prev) => [newItem, ...prev])
            })
            .then(()=> {
                history.push(`/shop`)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>CreateItem</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="title">title</label>
                <input type="text" id="title" name="title" onChange={(e)=> setTitle(e.target.value)}/>
                <label htmlFor="image">Image</label>
                <input type="url" id="image" name="image" onChange={(e)=> setImg(e.target.value)} />
                <label htmlFor="description">Description</label>
                <textarea name="description" onChange={(e)=> setDescription(e.target.value)} />
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" onChange={(e)=> setItemPrice(e.target.value)}/>
                <label htmlFor="telephone">Telephone</label>
                <input type="text" id="telephone" name="telephone" onChange={(e)=> setTelephone(e.target.value)}/>
                <input type="submit" value="Sell Item" onClick={()=> addITem({title, img, description, price, telephone, id: uniqid()})} />

            </form>
        </div>
    )

}


export default CreateItem;