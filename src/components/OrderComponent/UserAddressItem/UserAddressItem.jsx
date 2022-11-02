import "./UserAddressItem.css"

export default function UserAddressItem({address}) {
    return (
        <>
            <section className="user-address-container">
                <p className="user-address-item">{address.name}</p>
                <p className="user-address-item">{address.address}</p>
                <p className="user-address-item">{address.city}, {address.state}</p>
                <p className="user-address-item">{address.postalCode}</p>
                <button>Change</button>
            </section>
        </>
    )
}