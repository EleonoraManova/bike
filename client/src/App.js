import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import GoogleApiWrapper from './components/Maps/Maps'
import Register from './components/Forms/Register/Register';
import Login from './components/Forms/Login/Login';
import TypeBiking from './components/TypeBiking/TypeBiking';
import CreateTrip from './components/Forms/Create/CreateTrip';
import Details from "./components/Details/Details"
import { auth } from './utils/firebase'
import { useEffect, useState } from 'react';
import DestinationCard from './components/destinationCard/DestinationCard';
import Shop from './components/Shop/Shop';
import AuthContext from './contexts/AuthContext';
import CreateItem from './components/Forms/Create/CreateItem';
import EditDestinationForm from './components/Forms/EditDestinationForm/EditDestinationForm';
import CreateProfile from './components/Forms/Create/CreateProfile';
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound';





function App() {



  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };


  return (

    <div className="container">
      <AuthContext.Provider value={authInfo}>

        <Header username={user?.email} isAuthenticated={Boolean(user)} />
        {/* <h1>{user?.email}</h1> */}

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/all" component={DestinationCard} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/racing" exact component={TypeBiking} />
          <Route path="/mountain" exact component={TypeBiking} />
          <Route path="/sightseeing" exact component={TypeBiking} />
          <Route path="/city" exact component={TypeBiking} />
          <Route path="/other" exact component={TypeBiking} />
          <Route path="/create" exact component={CreateTrip} />
          <Route path="/create" component={CreateItem} />

          <Route path="/details/:destinationId" exact component={Details} />
          <Route path="/shop" component={Shop} />
          <Route path="/details/:destinationId/edit" component={EditDestinationForm} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={CreateProfile} />
          {/* <Route component={NotFound}/> */}



          <Route path="/logout" render={() => {
            auth.signOut();
            return <Redirect to={"/"} />
          }} />
        </Switch>


      <Footer />

      </AuthContext.Provider>
    </div>

  );
}

export default App;