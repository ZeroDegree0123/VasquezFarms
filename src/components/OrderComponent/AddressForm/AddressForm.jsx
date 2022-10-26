import './AddressForm.css'
import { useState} from 'react';
import * as userAPI from '../../../utilities/users-api';

export default function AddressForm({user, setIsOpen}) {
    const [address, setAddress] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
    })

    function handleChange(evt) {
        setAddress({...address, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        userAPI.saveAddress(user._id, address);
        setAddress({
            name: '',
            address: '',
            city: '',
            postalCode: '',
        })  
    }

    return (
        <>
            <section className="checkout-modal-container">
                <div className="cm-shipping-details">
                    <h1 className="cm-shipping-title">Shipping Address</h1>
                    <form className="cm-shipping-form" onSubmit={handleSubmit}>
                        <label>FullName</label>
                        <input type="text" name="name" value={address.name} onChange={handleChange}/>
                        <label>Address</label>
                        <input type="text" name="address" value={address.address} onChange={handleChange}/>
                        <label>City And State</label>
                        <input type="text" name="city" value={address.city} onChange={handleChange}/>
                        <label>Postal Code</label>
                        <input type="text" name="postalCode" value={address.postalCode} onChange={handleChange}/>
                        <button>Continue</button>
                    </form>
                <button onClick={() => {setIsOpen(false)}}>Cancel</button>
                </div>
            </section>
        </>
    )
}