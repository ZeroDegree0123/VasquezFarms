export default function OrderCard({order}) {
    return (
        <section>
            <div>Order ID: {order.orderId}</div>
            <div>{new Date(order.updatedAt).toLocaleDateString()}</div>
            <div>${order.orderTotal.toFixed(2)}</div>
            <div>{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
        </section>
    )
}