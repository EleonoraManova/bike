
import firebase from '../../utils/firebase';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {


    const ref = firebase.firestore().collection("items");
    const [items, setItems] = useState([]);
    function getItems() {

        ref.onSnapshot((querySnapshot) => {
            const items = [];

            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setItems(items);

        })
    }

    useEffect(() => {
        getItems();
    }, []);


    return (

        <div className='grid-container'>
            <h1>Items</h1>
            <div class="grid-x grid-margin-x small-up-2 medium-up-3">



                {items.map((item) => (
                    <div className='section-wrapper item'>
                        <div className='cell'>
                            <div className='card'>

                                <div key={item.id} className="card-section">
                                    <h3>{item.title}</h3>

                                    <img src={item.img} className="img" alt="shop item" height={300} width={400} />
                                    <p className="description">{item.description}</p>
                                    <p>{item.price}</p>
                                    <p>{item.telephone}</p>
                                    <button className="button ">Buy</button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Link to="/create/item" type="submit" className="button large expanded"  >Add</Link>

            </div>

        </div>
    )
};


export default Shop;