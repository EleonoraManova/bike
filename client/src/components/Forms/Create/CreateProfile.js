import { useState, useEffect } from 'react';
import firebase from '../../../utils/firebase';
const uniqid = require('uniqid');

function CreateProfile({
    history,
}) {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [about, setAbout] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [telephone, setTelephone] = useState("");
    const ref = firebase.firestore().collection("profile");
    const [profile, setProfile] = useState([]);


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
            .then(() => {
                history.push(`/profile`)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    function getProfile() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];

            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setProfile(items);

        })
    }

    useEffect(() => {
        getProfile();
    }, []);


    const user = firebase.auth().currentUser;
    let uid;



    if (user != null) {

        uid = user.uid;
    }


    let current = profile.filter((profile) => profile.creator === uid)



    if (current[0]) {
        return (


            <section className='section-wrapper profile'>

                <h1>Profile</h1>
                {current.map((profile) => (

                    <div key={profile.id}>
                        <h3>Name: {profile.name}</h3>

                        <img src={profile.img} className="img" alt="my picture" height={300} width={400} />
                        <p className="description">About me: {profile.about}</p>
                        <p>Birth Date:{profile.birthDate}</p>
                        <p>My phone number:{profile.telephone}</p>

                    </div>
                ))}
            </section>
        )


    } else {
        return (
            <div className="section-wrapper">
                <h1>Create Your Profile</h1>

                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="image">Your Photo</label>
                    <input type="url" id="image" name="image" onChange={(e) => setImg(e.target.value)} />
                    <label htmlFor="about">About you</label>
                    <textarea name="about" onChange={(e) => setAbout(e.target.value)} />
                    <label htmlFor="birthDate">Birth Date</label>
                    <input type="text" id="birthDate" name="birthDate" onChange={(e) => setBirthDate(e.target.value)} />
                    <label htmlFor="telephone">Telephone</label>
                    <input type="text" id="telephone" name="telephone" onChange={(e) => setTelephone(e.target.value)} />
                    <input type="submit" value="Add Personal Data" onClick={() => addITem({ name, img, about, birthDate, telephone, id: uniqid(), creator: uid })} />

                </form>
            </div>
        )
    }


}

export default CreateProfile;