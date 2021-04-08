import './TypeBiking.css'
import { Link } from 'react-router-dom';



const TypeBiking = () => {

    return (
        <div >
            <h1>TypeBiking</h1>

            <Link to="/racing/create" type="submit" className="far fa-plus-square"  >Add</Link>
        </div>
    )

}

export default TypeBiking;

