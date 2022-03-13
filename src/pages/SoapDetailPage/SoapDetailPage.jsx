import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as soapsAPI from '../../utilities/soaps-api';
import SoapCard from "../../components/SoapCard/SoapCard";
// import SoapForm from "../../components/SoapForm/SoapForm";

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
    // )
    return (
       <div>
          {soap.image}
          {soap.soapName}
          {soap.description}
          {soap.ingredients}
          {soap.price}
       </div>
    )
}