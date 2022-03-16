import './SoapOrderCard.css'
import { Link } from "react-router-dom"


export default function SoapOrderCard({lineSoap, isPaid, handleChangeQty}) {
    return (
        <>
            <section className="d-flex flex-row bd-highlight mb-3">
                <div className="card text-start" id="order-card">
                    <div className="container">
                        <div className="row">                         
                                <img className="img-thumbnail col" id="order-img" src={lineSoap.soap.image} alt="" />
                            <div className="col">                          
                                <h1>{lineSoap.soap.name}</h1>
                                <div>
                                Costs  ${lineSoap.soap.price}.00
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="qty" id="cost-card" style={{ justifyContent: isPaid && 'center' }}>
                                    {!isPaid &&
                                        <button
                                        className="btn btn-xs btn-danger"
                                        onClick={() => handleChangeQty(lineSoap.soap._id, lineSoap.qty - 1)}
                                        >-</button>
                                    }
                                    &nbsp;
                                    <h5 id="item-count">{lineSoap.qty}</h5>
                                    &nbsp;
                                    {!isPaid &&
                                        <button
                                        className="btn btn-xs btn-success"
                                        onClick={() => handleChangeQty(lineSoap.soap._id, lineSoap.qty + 1)}
                                        >+</button>
                                    }  
                                </div> 
                                <h5 className="ext-price" id="cost-card">Total: ${lineSoap.extPrice.toFixed(2)}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}