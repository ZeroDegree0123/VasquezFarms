import './OrderPage.css'
import { Link } from "react-router-dom" 
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import OrderDetail from "../../components/OrderDetail/OrderDetail"

export default function OrderPage({soaps}) {
    const [cart, setCart] = useState(null)
    const navigate = useNavigate()

    useEffect(function() {
        async function getCart() {
            const cartData = await ordersAPI.getCart();
            setCart(cartData);
            }
            getCart();
    }, []);

    async function handleChangeQty(soapId, newQty) {
        const updatedCart = await ordersAPI.setSoapQtyInCart(soapId, newQty);
        setCart(updatedCart);
      }
    
    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
      }

    return (
        <> 
            <main className="order-page-container">
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
            </main>
        </>
    )
}