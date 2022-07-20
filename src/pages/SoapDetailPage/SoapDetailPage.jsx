import './SoapDetailPage.css'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as soapsAPI from '../../utilities/soaps-api';


export default function SoapDetailPage() {
    const [soap, setSoap] = useState([]);
    const { soapId } = useParams();
    useEffect(function () {
        async function getSoap() {
            const soap = await soapsAPI.showSoap(soapId);
            setSoap(soap)
        };
        getSoap();
    }, [])
    
    return (
        <main className="details-page-container">
            <div className="back-to-soaps">
                <Link className="back-to-soaps-link" to="/soaps">-Back to soaps</Link>
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
                        <h5 className="details-header-quantity-title">select quantity</h5>
                        <button className="details-header-quantity-button">.number</button>
                    </div>
                    <div className="details-header-order-container">
                        <p className="details-order-price">
                            ${soap.price}.00
                        </p>
                        <button className="details-order-button">Add To Cart</button>
                    </div>
                </div>
            </section> 
            <section className="details-ingredients-container">
                <h2 className="details-ingredients-title">INGREDIENTS</h2>
                <h4 className="details-ingredients-body">{soap.ingredients}</h4> 
            </section>
            <section className="reviews-container">
                <div className="reviews-header-container">
                    <h1 className="reviews-header-title">REVIEWS</h1>
                    <p className="reviews-header-rating">overall rating</p>
                </div>
                <div className="reviews-body-container">
                    <div className="reviews-top-body-container">
                        <div className="reviews-top-body">
                            <h1 className="reviews-top-body-name">name</h1>
                            <p className="reviews-top-body-rating">rated</p>
                        </div>
                        <div className="reviews-date">date</div>
                    </div>
                   <p className="reviews-body">review</p>
                </div>
            </section>
       </main>
    )
}