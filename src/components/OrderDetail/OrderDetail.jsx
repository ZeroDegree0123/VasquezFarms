import SoapOrderCard from "../SoapOrderCard/SoapOrderCard";

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;
    // if (order) {
     const lineSoaps = order.lineSoaps.map((soapItem, idx) => (
        
        <SoapOrderCard
            soapName={soapItem.name}
            soapPrice={soapItem.price}
            lineSoap={soapItem}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
            key={idx}
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
                &nbsp;
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div>
            {lineSoaps.length ?
          <>
            {/* {allSoaps} */}
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
          <div className="hungry">Add Soaps To Start Order</div>
        }
      </div>
    </div>
  );
}