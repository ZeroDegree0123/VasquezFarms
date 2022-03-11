import { Link } from "react-router-dom"
import './SoapCard.css'

export default function SoapCard({soapProp}) {
    return (
        <Link to={`/soaps/${soapProp.soapName}`}>    
            <div className="soap-card">
                <div>{soapProp.image}</div>
                <div>{soapProp.soapName}</div>
                <span>${soapProp.price.toFixed(2)}</span>
            </div>
       </Link>
    )
}