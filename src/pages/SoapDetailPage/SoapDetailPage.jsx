import './SoapDetailPage.css'
import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import * as soapsAPI from '../../utilities/soaps-api';
import * as reviewsAPI from '../../utilities/reviews-api'
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewList from '../../components/ReviewList/ReviewList';
import CartModal from '../../components/CartModal/CartModal';

export default function SoapDetailPage({handleAddToOrder}) {
    const { soapId } = useParams();
    const [soap, setSoap] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

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
            setReviews(reviewData)
        }
        getReviews();
        //// USEEFFECT CLEANUP
    }, [])
    
    function modalTimeOut() {
        setIsOpen(false)
    }

    console.log(soap)
    return (
        <main className="details-page-container">
            <div className="back-to-soaps">
                <Link className="back-to-soaps-link" to="/soaps">Back to soaps</Link>
            </div>
            <section className="details-header-container">
                <div className="details-header-top-container">
                    <img className="details-header-soap-image" src={soap.image} alt="image"/>
                    <div className="details-header-body-container">
                        <h1 className="details-header-body-title">{soap.name}</h1>
                        <p className="details-header-body-description">{soap.description}</p>
                    </div>                   
                </div>
                <div className="details-header-bottom-container">
                    <div className="details-header-quantity-container">
                        <h5 className="details-header-quantity-title">Select Quantity</h5>
                        <button className="details-header-quantity-button">.number</button>
                    </div>
                    <div className="details-header-order-container">
                        <p className="details-order-price">
                            ${soap.price}.00
                        </p>
                        <div>
                            <button onClick={() => {
                                handleAddToOrder(soap._id);
                                setIsOpen(true);
                                setTimeout(modalTimeOut, 2000);
                                }
                            } className="details-order-button">Add To Cart</button>
                            <CartModal open={isOpen}/>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="details-ingredients-container">
                <h2 className="details-ingredients-title">INGREDIENTS</h2>
                <h4 className="details-ingredients-body">{soap.ingredients}</h4> 
            </section>
            {/* <section className="reviews-container">
            <ReviewForm soapId={soapId}/>
            <ReviewList reviews={reviews}/>
                <div className="reviews-header-container">
                    <h1 className="reviews-header-title">REVIEWS</h1>
                    <p className="reviews-header-rating">overall rating</p>
                </div>
                <div className="reviews-body-container">
                    <div className="reviews-top-body-container">
                        <div className="reviews-top-body">
                            <h1 className="reviews-top-body-name">name</h1>
                            <p className="reviews-top-body-rating">{reviews.rated}</p>
                        </div>
                        <div className="reviews-date">date</div>
                    </div>
                   <p className="reviews-body">{reviews.message}</p>
                </div>
            </section> */}
       </main>
    )
}