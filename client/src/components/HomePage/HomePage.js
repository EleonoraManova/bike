import './HomePage.css';
import Jumbotron from '../Jumbotron/Jumbotron';
import DestinationCard from '../destinationCard/DestinationCard';
import { auth } from '../../utils/firebase';
import { useEffect, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import GuestHomePage from '../GuestHomePage/GuestHomePage'



const HomePage = () => {
    const { isAuthenticated, username } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }
    })

    return (

        <div className="main">

            <Jumbotron />

            {isAuthenticated
                ? <DestinationCard />
                : <GuestHomePage />
            }


        </div>
    )

}

export default HomePage;