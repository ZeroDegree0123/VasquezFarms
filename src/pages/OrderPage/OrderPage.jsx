import './OrderPage.css'
import OrderDetail from "../../components/OrderDetail/OrderDetail"
import { Link } from "react-router-dom" 

export default function OrderPage({soaps, cart, setCart, user, setUser, handleChangeQty, handleCheckout}) {
    
    return (
        <> 
            <div className="order-page">
                <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
                <OrderDetail 
                    soaps={soaps}
                    order={cart}
                    handleChangeQty={handleChangeQty}
                    handleCheckout={handleCheckout}
                />
            </div>
        </>
    )
}