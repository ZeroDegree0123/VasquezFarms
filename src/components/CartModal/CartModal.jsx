import "./CartModal.css"

export default function CartModal({open}) {
    if (!open) return null;
    return(
        <>
            <div className="cart-modal-container">
                <p className="cart-modal-content">ITEM HAS BEEN ADDED TO CART</p>
            </div>
        </>
    )
}