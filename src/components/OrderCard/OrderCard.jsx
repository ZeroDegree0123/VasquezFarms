import './OrderCard.css'



export default function SoapOrderCard({lineSoap, isPaid, handleChangeQty}) {
    return (
        <>
            <section className="order-card-container">
                <div className="order-card">                       
                    <img className="order-card-image" src={lineSoap.soap.image} alt="" />
                    <div className="order-body-container">
                        <h1 className="order-card-title">{lineSoap.soap.name}</h1>
                        <p className="order-select-quantity">SELECT QUANTITY</p>
                        <div className="order-price-container">
                            <div className="order-card-quantity-container" style={{ justifyContent: isPaid && 'center' }}>
                                {!isPaid &&
                                    <button className="order-card-quantity-button" id="button-minus" onClick={() => handleChangeQty(lineSoap.soap._id, lineSoap.qty - 1)}>-</button>
                                }
                                &nbsp;
                                <h5 id="item-count">{lineSoap.qty}</h5>
                                &nbsp;
                                {!isPaid &&
                                    <button className="order-card-quantity-button" id="button-plus" onClick={() => handleChangeQty(lineSoap.soap._id, lineSoap.qty + 1)}>+</button>
                                }  
                            </div> 
                            <div className="order-card-price">Costs  ${lineSoap.soap.price}.00</div>
                        </div>
                    </div>                        
                </div>
                <hr />
                <div className="order-total-container">
                    <h5>Total:</h5>
                    <h5 className="order-total-price">${lineSoap.extPrice.toFixed(2)}</h5>
                </div>
            </section>
        </>
    )
}