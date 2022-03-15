import './SoapDetailPage.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
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
        <section className="detail-container">
            <img src={soap.image} alt="image"/>
            <div className="name">
                {soap.name}
            </div>
            <div className="description">
                {soap.description}
            </div>
            <div className="ingredients">
                {soap.ingredients}
            </div>
            <div className="price">
                ${soap.price}
            </div>
       </section>
    )
}