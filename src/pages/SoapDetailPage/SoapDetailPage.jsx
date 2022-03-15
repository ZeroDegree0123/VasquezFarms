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
            <img className="img-thumbnail rounded" id="soap-image" src={soap.image} alt="image"/>
            <table class="table-light">
                <tbody>
                    <tr>
                        <th scope="row">
                            <td className="d-flex justify-content-center">
                                <div className="name">
                                    <h1>{soap.name}</h1>
                                </div>
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <td>
                                <div className="" id="description">
                                    {soap.description}
                                </div>
                            </td>
                        </th>
                    </tr>
                    <hr />
                    <tr>
                        <th scope="row">
                            <td className="d-flex justify-content-center">
                                <div className="ingredients ">
                                    <h4>Ingredients:</h4>
                                    {soap.ingredients}
                                </div>
                            </td>
                        </th>
                    </tr>
                    &nbsp;
                    <tr>
                        <th scope="row">
                            <td className="d-flex justify-content-center">
                                <div className="price ">
                                    <h4>Price:</h4>
                                    ${soap.price}.00
                                </div>                               
                            </td>
                        </th>
                    </tr>
                </tbody>
            </table>
            <hr />
       </section>
    )
}