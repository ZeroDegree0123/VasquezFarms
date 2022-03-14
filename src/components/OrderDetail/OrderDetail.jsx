import SoapOrderCard from "../SoapCard/SoapCard";

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;
    console.log('hey')
    console.log(order)
    // if (order) {
     const lineSoaps = order.lineSoaps.map((soapItem, idx) => (
        //DOESN'T KNOW WHAT lineSoaps is
        <SoapOrderCard
            soapName={soapItem.name}
            soapPrice={soapItem.price}
            lineSoap={soapItem}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
            key={soapItem}
        />
        ))
// }
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
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineSoaps.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">Hungry?</div>
        }
      </div>
    </div>
  );
}