import './CheckoutModal.css'
import { Routes, Route } from 'react-router-dom';
import * as userAPI from '../../../utilities/users-api';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';

export default function CheckoutModal({open, setIsOpen, user}) {
   
    if (!open) return null;

    return (
        <>
        <AddressForm setIsOpen={setIsOpen} user={user}/>
        <Routes>
            <Route path="/address" element={<AddressForm/>}/>
            <Route path="/payment" element={<PaymentForm/>}/>
            <Route path="/confirm" element={<ConfirmOrder/>}/>
        </Routes>  
        </>
    )
}