import './HomePage.css';
import Jumbotron from '../Jumbotron/Jumbotron';
import DestinationCard from '../destinationCard/DestinationCard';


const HomePage = ({
    isAuthenticated,

}) => {
 
        return (

            <div>

                <Jumbotron />


                <DestinationCard />

            </div>
        )

}

export default HomePage;