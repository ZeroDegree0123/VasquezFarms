import "./OrderCard.css"

export default function OrderCard({order}) {
    return (
        <>
        &nbsp;
            <section className="card" id="order-detail-card">
                <div className="card-body">
                    <h5 className="card-title">
                        Order ID: {order.orderId}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {new Date(order.updatedAt).toLocaleDateString()}
                    </h6>
                    <div >
                        Paid:
                        ${order.orderTotal.toFixed(2)}
                    </div>
                    <div >
                        For: {order.totalQty} Item{order.totalQty > 1 ? 's' : ''}
                    </div>
                </div>
            </section>
        &nbsp;
        </>
    )
}