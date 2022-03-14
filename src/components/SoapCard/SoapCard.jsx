import { Link } from "react-router-dom"
import './SoapCard.css'

export default function SoapCard({soap, soapName, soapPrice, lineSoap, isPaid, handleChangeQty, handleAddToOrder, key}) {
    return (
        <>
            <Link to={`/soaps/${key}`}>    
                {soapName}
                {soapPrice}
            </Link>
           
            <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
                {!isPaid &&
                    <button
                    className="btn-xs"
                    onClick={() => handleChangeQty(lineSoap.soap._id, lineSoap.qty - 1)}
                    >-</button>
                }
                <span>{lineSoap.qty}</span>
                {!isPaid &&
                    <button
                    className="btn-xs"
                    onClick={() => handleChangeQty(lineSoap.soap._id, lineSoap.qty + 1)}
                    >+</button>
                }  
            </div> 
             <div className="ext-price">${lineSoap.extPrice.toFixed(2)}</div>
         
            <button className="btn-sm" onClick={() => handleAddToOrder(soap._id)}>
                ADD
            </button> 
            </>
    )
}