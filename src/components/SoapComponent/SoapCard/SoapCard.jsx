import './SoapCard.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import CartModal from '../AddedToCartModal/AddedToCartModal';

export default function SoapCard({ soap, handleAddToOrder, user }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    function modalTimeOut() {
        setIsOpen(false)
    }

    function handleRedirect() {
        navigate('/login')
    }

    return (
        <>
            <div className="soap-card">
                <Link className="soap-link" to={`/soaps/${soap._id}`}>
                    <img className="soap-card-image" src={soap.image} alt="img" />
                    <h4 className="soap-card-title">{soap.name}</h4>
                    <h4 className="soap-card-price">${soap.price}.00</h4>
                </Link>
                {user ?
                    <div className="soap-card-button-container">
                        <button className="soap-card-button" onClick={() => {
                            handleAddToOrder(soap._id);
                            setIsOpen(true);
                            setTimeout(modalTimeOut, 2000);
                        }
                        }>ADD TO CART +</button>
                        <CartModal open={isOpen} />
                    </div>
                    :
                    <button className="soap-card-button" onClick={() => handleRedirect()}>ADD TO CART +</button>
                }
            </div>
        </>
    )
}