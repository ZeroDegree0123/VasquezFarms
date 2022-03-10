import { Link } from "react-router-dom"

export default function SoapCard({soapProp}) {
    return (
       <div>
           <div>{soapProp.image}</div>
           <div>{soapProp.soapName}</div>
           <span>${soapProp.price.toFixed(2)}</span>
       </div>
    )
}