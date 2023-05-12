import './OrderPage.css'
import { useEffect, useState } from 'react'
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import OrderDetail from "../../components/OrderComponent/OrderDetail/OrderDetail"
import AddressForm from '../../components/OrderComponent/AddressForm/AddressForm';
import PaymentForm from '../../components/OrderComponent/PaymentForm/PaymentForm';
import ConfirmOrder from '../../components/OrderComponent/ConfirmOrder/ConfirmOrder';

export default function OrderPage({soaps, user}) {
    const [cart, setCart] = useState(null)
    const [address, setAddress] = useState([])
    const [isOpen, setIsOpen] = useState(true)
    const navigate = useNavigate()

    useEffect(function() {
        async function getCart() {
            const cartData = await ordersAPI.getCart();
            setCart(cartData);
            }
        getCart();

        async function getAddress() {
            const userData = user.address;
            setAddress(userData);
        }
        getAddress();   
        
    }, []);

    async function handleChangeQty(soapId, newQty) {
        const updatedCart = await ordersAPI.setSoapQtyInCart(soapId, newQty);
        setCart(updatedCart);
      }
    
    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
      }

    async function handleRedirect() {
        let path = "/orders/new"
        await navigate(path)
    }
    return (
        <> 
            <main className="order-page-container">
                <section id="cart-subpage-header" className="subpage-header">
                    <h1 className="subpage-header-title">Cart</h1>
                    <div className="subpage-header-link-container">
                        <Link id="home-link" className="subpage-header-link-item" to="/">Home</Link>
                        <p id="special-character" className="subpage-header-link-item">&#62;</p>
                        <p className="subpage-header-link-item">Cart</p>
                        <p id="special-character" className="subpage-header-link-item">-</p>
                        <Link className="link" to="/orders/new">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" id="cart" className="bi bi-cart" viewBox="0 0 17 17">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </Link>
                    </div>
                </section>
                <section className="order-page">
                    <OrderDetail 
                        user={user}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        soaps={soaps}
                        order={cart}
                        handleChangeQty={handleChangeQty}
                        handleCheckout={handleCheckout}
                    />
                    <Routes>
                        <Route path="/address" element={<AddressForm isOpen={isOpen} setIsOpen={setIsOpen} handleRedirect={handleRedirect} user={user} currentAddress={address}/>} />
                        <Route path="/payment" element={<PaymentForm isOpen={isOpen} setIsOpen={setIsOpen} handleRedirect={handleRedirect} user={user}/>} />
                        <Route path="/confirm" element={<ConfirmOrder isOpen={isOpen} setIsOpen={setIsOpen} handleRedirect={handleRedirect} user={user}/>} />
                    </Routes>
                </section>
                <br />
            </main>
        </>
    )
}