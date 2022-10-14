import './SoapDetailPage.css'
import { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {Helmet} from 'react-helmet-async'
import * as soapsAPI from '../../utilities/soaps-api';
import * as reviewsAPI from '../../utilities/reviews-api'
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewList from '../../components/ReviewList/ReviewList';
import CartModal from '../../components/CartModal/CartModal';

export default function SoapDetailPage({handleAddToOrder, user}) {
    const { soapId } = useParams();
    const [soap, setSoap] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(function () {
        //GETS INDIVIDUAL SOAP DATA
        async function getSoap() {
            const soapData = await soapsAPI.showSoap(soapId);
            setSoap(soapData)
        };
        getSoap();
        //GETS REVIEW DATA
        async function getReviews() {
            const reviewData = await reviewsAPI.allReviews();
            const soapReviews = reviewData.map((data) => {
                if (data.soapId === soapId) {
                    console.log(data)
                   return data
                } 
            }); 
            setReviews(soapReviews)
        }
        getReviews();
        //// USEEFFECT CLEANUP
    }, [])
    
    console.log(reviews)
    function handleRedirect() {
        navigate('/login')
    }

    function handleQuantity() {
        alert(`Coming Soon!`)
    }

    function modalTimeOut() {
        setIsOpen(false)
    }

    return (
        <main className="details-page-container">
            <Helmet>
                <title>{soap.name}</title>
            </Helmet>
            <div className="back-to-soaps">
                <Link className="back-to-soaps-link" to="/soaps">Back to soaps</Link>
            </div>
            <section className="details-header-container">
                <div className="details-header-top-container">
                    <img className="details-header-soap-image" src={soap.image} alt="img"/>
                    <div className="details-header-body-container">
                        <h1 className="details-header-body-title">{soap.name}</h1>
                        <p className="details-header-body-description">{soap.description}</p>
                    </div>                   
                </div>
                <div className="details-header-bottom-container">
                    <div className="details-header-quantity-container">
                        <h5 className="details-header-quantity-title">Status</h5>
                        {soap.stock > 0 ? (
                            <p className="details-header-quantity-button">In Stock</p>
                        ) : (
                            <p className="details-header-quant“ity-button">Unavailable</p>      
                        )}
                        {/* <button className="details-header-quantity-button" onClick={handleQuantity}>.number</button> */}
                    </div>
                    <div className="details-header-order-container">
                        <p className="details-order-price">
                            ${soap.price}.00
                        </p>
                        <div>
                            {user ? 
                                <button 
                                    onClick={() => {
                                        handleAddToOrder(soap._id);
                                        setIsOpen(true);
                                        setTimeout(modalTimeOut, 2000);
                                        }
                                    } 
                                    className="details-order-button">Add To Cart</button>
                                    :
                                    <button 
                                    onClick={handleRedirect} 
                                    className="details-order-button">Add To Cart</button>
                            }
                            <CartModal open={isOpen}/>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="details-ingredients-container">
                <h2 className="details-ingredients-title">INGREDIENTS</h2>
                <h4 className="details-ingredients-body">{soap.ingredients}</h4> 
                
            </section>
            <section className="reviews-container">
                <ReviewForm soapId={soapId} user={user}/>
                <ReviewList reviews={reviews} user={user}/>
            </section>
       </main>
    )
}