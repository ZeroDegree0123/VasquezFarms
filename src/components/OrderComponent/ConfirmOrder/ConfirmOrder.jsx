import './ConfirmOrder.css'

export default function ConfirmOrder({isOpen, setIsOpen, handleRedirect}) {
    
    if(isOpen) {
        handleRedirect();
    }

    return (
        <>
            <h1>hello confirm</h1>
            <button onClick={() => {setIsOpen(true)}}></button>
        </>
    )
}