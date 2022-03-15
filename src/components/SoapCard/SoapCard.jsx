import { Link } from "react-router-dom"
import './SoapCard.css'

export default function SoapCard({soap, lineSoap, isPaid, handleChangeQty, handleAddToOrder}) {
    return (
        <>
            <Link to={`/soaps/${soap._id}`}> 
                <img src={soap.image} alt="img" />   
                {soap.name}
                {soap.price}
            </Link>

            <button className="btn-sm" 
                onClick={() => handleAddToOrder(soap._id)}
            >
                ADD
            </button> 
            </>
    )
}