import './SoapDetailPage.css'
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import * as soapsAPI from '../../utilities/soaps-api';

import ReviewForm from '../../components/ReviewComponent/ReviewForm/ReviewForm';
import ReviewList from '../../components/ReviewComponent/ReviewList/ReviewList';
import CartModal from '../../components/SoapComponent/AddedToCartModal/AddedToCartModal';

export default function SoapDetailPage({ handleAddToOrder, user }) {
    const { soapId } = useParams();
    const [singleSoap, setSingleSoap] = useState([]);
    const [soapReviews, setSoapReviews] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const navigate = useNavigate();


    //UseEffect CLEANUP
    useEffect(function () {
        //GETS INDIVIDUAL SOAP DATA
        const getSoap = async function () {
            const soapData = await soapsAPI.showSoap(soapId);
            setSingleSoap(soapData);
            setSoapReviews(soapData.reviews);
        };
        getSoap();

    }, [soapId])

    function handleRedirect() {
        navigate('/login')
    }

    function modalTimeOut() {
        setIsOpen(false)
    }

    return (
        <main className="details-page-container">
            <Helmet>
                <title>{singleSoap.name}</title>
            </Helmet>
            <Link className="back-to-soaps-link" to="/soaps">Back to soaps</Link>



            <section className="details-header-container">


                <div className="details-header-top-container">
                    <img className="details-header-soap-image" src={singleSoap.image} alt="img" />
                    <div className="details-header-body-container">
                        <h1 className="details-header-body-title">{singleSoap.name}</h1>
                        <p className="details-header-body-description">{singleSoap.description}</p>
                    </div>
                </div>


                <div className="details-header-bottom-container">
                    <div className="details-header-quantity-container">
                        <h5 className="details-header-quantity-title">Status</h5>
                        {singleSoap.stock > 0 ?
                            (<p className="details-header-quantity-button">In Stock</p>)
                            :
                            (<p className="details-header-quant“ity-button">Unavailable</p>)
                        }
                    </div>
                    <div className="details-header-order-container">
                        <p className="details-order-price">
                            ${singleSoap.price}.00
                        </p>
                        <div>
                            {user ?
                                <button
                                    onClick={() => {
                                        handleAddToOrder(singleSoap._id);
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
                            <CartModal open={isOpen} />
                        </div>
                    </div>
                </div>


            </section>



            
            <section className="details-ingredients-container">
                <h2 className="details-ingredients-title">INGREDIENTS</h2>
                <h4 className="details-ingredients-body">{singleSoap.ingredients}</h4>
            </section>
            <section className="reviews-container">
                <h1 className="reviews-container-title">{soapReviews.length} REVIEWS</h1>
                {user ?
                    <>
                        <ReviewForm user={user} formOpen={formOpen} setFormOpen={setFormOpen} />
                        <button className="review-link-button"
                            onClick={() => {
                                setFormOpen(true)
                            }}
                        >Leave A Review</button>
                    </>
                    :
                    <p>Login or Sign-up to post a review</p>
                }
                <div className="reviews-list">
                    <p>REVIEWS</p>
                    <ReviewList reviews={soapReviews} user={user} />
                </div>
            </section>
        </main>
    )
}