import OrderCard from "../OrderCard/OrderCard";

export default function OrderList({orders}) {
    console.log(orders)
    const allOrders = orders.map(order => 
        <OrderCard
            key={order.id}
            order={order}

        />
        )
    return (
        <h1>happy</h1>
    )
}