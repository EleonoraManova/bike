import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import GoogleApiWrapper from './components/Maps/Maps'
import Register from './components/Forms/Register/Register';
import Login from './components/Forms/Login/Login';
import TypeBiking from './components/TypeBiking/TypeBiking';
import CreateTrip from './components/Forms/Create/CreateTrip';
import  { auth } from './utils/firebase'
import { useEffect, useState } from 'react';



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);


  return (

    <div className="container">
      <Header username={user?.email} isAuthenticated={Boolean(user)} />
      {/* <h1>{user?.email}</h1> */}

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

 
      <Footer />
    </div>

  );
}

export default App;