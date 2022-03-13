import { Link } from "react-router-dom"
import './SoapCard.css'

export default function SoapCard({soap}) {
    const { soapName, image, description, ingredients, price } = soap
    const card = (
        <>
            <div>
                <div>{soapName}</div>
                <div>{image}</div>
                <div>{description}</div>
                <div>{ingredients}</div>
                <div>${price.toFixed(2)}</div>
            </div>
        </>
    )
    return (
        <Link to={`/soaps/${soap._id}`}>    
            {card}
       </Link>
    )
}