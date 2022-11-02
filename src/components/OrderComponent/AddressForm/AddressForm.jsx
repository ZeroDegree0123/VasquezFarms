import './AddressForm.css'
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserAddressList from '../UserAddressList/UserAddressList';
import * as userAPI from '../../../utilities/users-api';

export default function AddressForm({user, setIsOpen, isOpen, handleRedirect, currentAddress}) {
    const [address, setAddress] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
    })
    const navigate = useNavigate()
    
    if(isOpen) {
        handleRedirect();
    }

    function handleChange(evt) {
        setAddress({...address, [evt.target.name]: evt.target.value});
    }

    function handleProceedToPayment() {
        let path = "/orders/new/payment"
        navigate(path)
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        userAPI.saveAddress(user._id, address);
        setAddress({
            name: '',
            address: '',
            city: '',
            state: '',
            postalCode: '',
        })  
        handleProceedToPayment();
    }
    console.log(user)
    return (
        <>
            <section className="address-form-container">
                {currentAddress.length < 1 ?
                    <>
                        <h1 className="address-title">Shipping Address</h1>
                        <form className="address-form" onSubmit={handleSubmit}>
                            <label>FullName</label>
                            <input type="text" name="name" value={address.name} onChange={handleChange}/>
                            <label>Address</label>
                            <input type="text" name="address" value={address.address} onChange={handleChange}/>
                            <label>City</label>
                            <input type="text" name="city" value={address.city} onChange={handleChange}/>
                            <label>State</label>
                            <input type="text" name="state" value={address.state} onChange={handleChange}/>
                            <label>Postal Code</label>
                            <input type="text" name="postalCode" value={address.postalCode} onChange={handleChange}/>
                            <button className="address-submit">Submit</button>
                        </form> 
                    </>
                :
                    <div>
                        <h2>current address</h2>
                        <UserAddressList currentAddress={currentAddress}/>
                    </div>
                
                }
                <div className="address-link-container">
                    <button className="address-cancel" onClick={() => {setIsOpen(true)}}>Cancel</button>
                    <Link to="/orders/new/payment">Continue To Payment</Link> 
                </div>
            </section>
        </>
    )
}