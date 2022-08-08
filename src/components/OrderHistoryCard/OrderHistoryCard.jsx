import "./OrderHistoryCard.css"

export default function OrderCard({order}) {
    return (
        <>
        &nbsp;
            <section className="order-history-card-container" id="order-detail-card">
                <div className="order-history-card">
                    <h5 className="order-history-card-id">Order ID: {order.orderId}</h5>
                    <div className="order-history-card-body">Paid:$ {order.orderTotal.toFixed(2)}</div>
                    <div className="order-history-card-body">For: {order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
                    <h6 className="order-history-card-date">Date Of Purchase: {new Date(order.updatedAt).toLocaleDateString()}</h6>
                </div>
            </section>
        &nbsp;
        </>
    )
}