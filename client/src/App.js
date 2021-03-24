import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import GoogleApiWrapper from './components/Maps/Maps'
import Register from './components/Forms/Register/Register';
import Login from './components/Forms/Login/Login';
import Racing from './components/Racing/Racing';
import CreateTrip from './components/Forms/Create/CreateTrip';




function App() {
  return (
    <div className="container">
      <Header />

      <Switch>

        <Route path="/" exact component={Categories} />
        <Route path="/other" component={GoogleApiWrapper} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/racing" exact component={Racing}/>
        <Route path="/racing/create" component={CreateTrip}/>



      </Switch>



      <Footer />
    </div>

  );
}

export default App;
