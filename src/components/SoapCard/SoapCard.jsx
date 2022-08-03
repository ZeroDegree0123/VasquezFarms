import { Link, useNavigate } from "react-router-dom"
import './SoapCard.css'

export default function SoapCard({soap, handleAddToOrder, user}) {
    const navigate = useNavigate();

    function handleRedirect() {
        navigate('/login')
    }

    return (
        <>
            <section className="soap-card-container">
                <div className="soap-card">
                    <Link className="soap-link" to={`/soaps/${soap._id}`}>
                        <img className="soap-card-image" src={soap.image} alt="img"/>   
                        <h4 className="soap-card-title">{soap.name}</h4>
                        <h4 className="soap-card-price">${soap.price}.00</h4>
                    </Link>
                    { user ?
                        <button className="soap-card-button" onClick={() => handleAddToOrder(soap._id)}>ADD TO CART</button> 
                        :
                        <button className="soap-card-button" onClick={() => handleRedirect()}>ADD TO CART</button> 
                    }
                </div>         
            </section> 
        </>
    )
}