import { Link } from "react-router-dom"

export default function SoapCard({soaps}) {
    const soapList = soaps.map((soap) =>
        <div key={soap.id}>
            {soap.soapName}
            {soap.image}
            {soap.price}
        </div> )
    return (
        <div>
            <div>{soapList}</div>
        </div>
    )
}