import OrderCard from "../OrderCard/OrderCard";

export default function OrderList({orders}) {
    console.log(orders)
    const allOrders = orders.map(order => 
        <OrderCard
            key={order._id}
            order={order}

        />
        )
    return (
        <div>
            {allOrders.length ? 
                allOrders 
                : 
                <span>You havn't made any orders yet</span>}
        </div>
    )
}