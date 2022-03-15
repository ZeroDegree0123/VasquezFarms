import { Link } from "react-router-dom"

export default function SoapOrderCard({lineSoap, isPaid, handleChangeQty}) {
    return (
        <>
            {lineSoap.soap.name}
            {lineSoap.soap.price}
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
            </>
    )
}