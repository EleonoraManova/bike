
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

        <section className='section-wrapper item'>

            <h1>Items</h1>
            {items.map((item) => (

                <div key={item.id}>
                    <h3>{item.title}</h3>

                    <img src={item.img} className="img" alt="shop item" height={300} width={400} />
                    <p className="description">{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.telephone}</p>
                    <button className="button ">Buy</button>
                    
                </div>
            ))}
                        <Link to="/create/item" type="submit" className="far fa-plus-square"  >Add</Link>
        </section>
    )
};


export default Shop;