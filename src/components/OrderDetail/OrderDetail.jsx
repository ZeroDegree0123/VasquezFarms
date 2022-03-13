import SoapCard from "../SoapCard/SoapCard";

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineSoaps = order.lineSoaps.map(soapItem => 
        <SoapCard
            lineSoap={soapItem}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
        />
        )

    return (
        <div>
            <div>
                {order.isPaid ?
                    <span>ORDER<span>{order.orderId}</span></span>
                    :
                    <span>NEW ORDER</span>
                }
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div>
                {lineSoaps.length ?
                    <>
                        {lineSoaps}
                        <section>
                            {order.isPaid ?
                                <span>TOTAL&nbsp;&nbsp;</span>
                                :
                                <button
                                    onClick={handleCheckout}
                                    disabled={!lineSoaps.length}
                                >Checkout</button>
                            }
                        </section>
                    </>
                    :
                    <div>Buy More?</div>
                }
            </div>
        </div>
    )
}