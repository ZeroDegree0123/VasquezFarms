import './OrderPage.css'
import OrderDetail from "../../components/OrderDetail/OrderDetail"
import { Link } from "react-router-dom" 

export default function OrderPage({cart, setCart, user, setUser, handleChangeQty, handleCheckout}) {
    
    return (
        <> 
            <div className="order-page">
                <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
                <OrderDetail 
                    order={cart}
                    handleChangeQty={handleChangeQty}
                    handleCheckout={handleCheckout}
                />
                <h2>will display cart</h2> 
                <h2>possibly new order history</h2> 
                <h2>will display checkout</h2>
            </div>
        </>
    )
}