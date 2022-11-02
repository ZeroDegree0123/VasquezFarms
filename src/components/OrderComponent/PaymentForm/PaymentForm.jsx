import './PaymentForm.css'
import { Link } from 'react-router-dom';

export default function PaymentForm({isOpen, handleRedirect}) {

    if(isOpen) {
        handleRedirect();
    }

    return (
        <>
            <section>
                {/* <form action="">
                    <label htmlFor="">hello</label>
                    <input type="text" />
                    <button></button>
                </form> */}
                <h1>Payment</h1>
                <Link to="/orders/new/confirm">Review Order</Link>
            </section>
        </>
    )
}