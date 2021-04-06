import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import GoogleApiWrapper from './components/Maps/Maps'
import Register from './components/Forms/Register/Register';
import Login from './components/Forms/Login/Login';
import TypeBiking from './components/TypeBiking/TypeBiking';
import CreateTrip from './components/Forms/Create/CreateTrip';
import Destinations from './components/Destinations/Destinations';
import firebase, { auth } from './utils/firebase'
import { useEffect, useState } from 'react';
// import firebase from './firebase'



function App() {

  const [user, setUser] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection("destinations");

  function getDestinations(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];

      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDestinations(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);

  useEffect(() => {
    getDestinations();
  }, [])

  return (

    <div className="container">



      <Header username={user?.email} isAuthenticated={Boolean(user)} />
      <h1>{user?.email}</h1>

      <Switch>

        <Route path="/" exact component={Categories} />
        <Route path="/other" component={GoogleApiWrapper} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/racing" exact component={TypeBiking} />
        <Route path="/racing/create" component={CreateTrip} />
        <Route path="/mountain" exact component={TypeBiking} />
        <Route path="/mountain/create" component={CreateTrip} />
        <Route path="/logout" render={props => {
          auth.signOut();
          return <Redirect to={"/"} />
        }} />



      </Switch>

      <h1>destinations</h1>
  {/* <Destinations destinations={this.destination}></Destinations> */}
      {destinations.map((destination) => (
        <div key={destination.id}>
          <h2>{destination.categorie}</h2>
          <p>{destination.description}</p>
          <image src={destination.img}/>
        </div>
      ))}

      <Footer />
    </div>

  );
}

export default App;