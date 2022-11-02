import UserAddressItem from "../UserAddressItem/UserAddressItem";

export default function UserAddressList({currentAddress}) {
    const userAddress = currentAddress.map((address) => 
        <UserAddressItem
            key={address.name}
            address={address}
        />
    )
    return (
        <>
            {userAddress}
        </>
    )
}