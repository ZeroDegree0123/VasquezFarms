import './OrderPage.css'
import OrderDetail from "../../components/OrderDetail/OrderDetail"
import { Link } from "react-router-dom" 

export default function OrderPage({soaps, cart, handleChangeQty, handleCheckout}) {
    
    return (
        <> 
            <div className="order-page">
                <OrderDetail 
                    soaps={soaps}
                    order={cart}
                    handleChangeQty={handleChangeQty}
                    handleCheckout={handleCheckout}
                />
            </div>
            <br />
            <div id="orders-btn">
                <Link to="/orders" className="btn btn-sm btn-outline-dark" id="orders-btn"> <strong>PREVIOUS ORDERS</strong></Link>
            </div>
        
        </>
    )
}