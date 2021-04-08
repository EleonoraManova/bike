// import { useEffect, useState } from 'react';
// import firebase from "../../utils/firebase"



// const ref = firebase.firestore().collection("destinations");

// const destinationData = () => {

//     const [destinations, setDestinations] = useState([]);
//     function getDestinations() {

//         ref.onSnapshot((querySnapshot) => {
//             const items = [];

//             querySnapshot.forEach((doc) => {
//                 items.push(doc.data());
//             });
//             setDestinations(items);

//         })
//     }

//     useEffect(() => {
//         getDestinations();
//     }, []);


// }



// export default destinationData;