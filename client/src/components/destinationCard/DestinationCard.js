import mountain from "../Destinations/mountain.jpg";
import { NavLink } from 'react-router-dom';

const DestinationCard = ({
    category,
}) => {
    return (
        <section className='destination'>
            <h3>Category : {category}</h3>

            <p className="img"><img src={mountain} alt="mountain biking" height={300} width={400} /></p>
            <p className="description">Extreme biking</p>
            <div className="destination-info">
                <NavLink to="/details"><button className="button">Details</button></NavLink>
            </div>
        </section>
    )
}

export default DestinationCard;