import './OrderPage.css'
import { useEffect, useState } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom';
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
                        <Route path="/address" element={<AddressForm isOpen={isOpen} setIsOpen={setIsOpen} handleRedirect={handleRedirect} user={user} address={address}/>} />
                        <Route path="/payment" element={<PaymentForm isOpen={isOpen} setIsOpen={setIsOpen} handleRedirect={handleRedirect} user={user}/>} />
                        <Route path="/confirm" element={<ConfirmOrder isOpen={isOpen} setIsOpen={setIsOpen} handleRedirect={handleRedirect} user={user}/>} />
                    </Routes>
                </section>
                <br />
            </main>
        </>
    )
}