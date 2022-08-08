import './OrderDetail.css'
import OrderCard from "../OrderCard/OrderCard";

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;
    // if (order) {
     const lineSoaps = order.lineSoaps.map((soapItem, idx) => (
        <OrderCard
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
                    <span><h1 id="order-title">ORDER</h1><span>{order.orderId}</span></span>
                    :
                    <span><h1 id="order-title">NEW ORDER</h1></span>
                }
                {/* <span>{new Date(order.updatedAt).toLocaleDateString()}</span> */}
            </div>
            <br />
            <div>
            {lineSoaps.length ?
          <>
            {lineSoaps}
            <br />
            <section className="total" id="checkout">
              <div className="checkout-totals-container">
                <h4>Total Items: {order.totalQty}</h4>
                <h4 className="right">Total Cost ${order.orderTotal.toFixed(2)}</h4>
              </div> 
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  id="checkout-button"
                  className="btn btn-sm btn-warning"
                  onClick={handleCheckout}
                  disabled={!lineSoaps.length}
                >CHECKOUT</button>
              }
            </section>
          </>
          :
          <div className="hungry">Add Soaps To Start Order</div>
        }
      </div>
    </div>
  );
}