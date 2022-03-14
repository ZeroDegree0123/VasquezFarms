import { Link } from "react-router-dom"
import './SoapCard.css'

export default function SoapCard({soap, lineSoap, isPaid, handleChangeQty, handleAddToOrder}) {
    const { name, image, description, ingredients, price } = soap;
    const card = (
        <>
            <div className="">
                <div>{name}</div>
                <div>{image}</div>
                <div>${price.toFixed(2)}</div>
            </div>
        </>
    )
    return (
        <>
            <Link to={`/soaps/${soap._id}`}>    
                {card}
            </Link>
            <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
                {!isPaid &&
                    <button
                    className="btn-xs"
                    onClick={() => handleChangeQty(lineSoap.soap._id, lineSoap.qty - 1)}
                    >-</button>
                }
                {/* <span>{lineSoap.qty}</span> //NOT HAPPY  */}
                {!isPaid &&
                    <button
                    className="btn-xs"
                    onClick={() => handleChangeQty(lineSoap.soap._id, lineSoap.qty + 1)}
                    >+</button>
                }  
            </div>
            {/* <div className="ext-price">${lineSoap.extPrice.toFixed(2)}</div> */}
            </>
    )
}

{/* <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button> */}