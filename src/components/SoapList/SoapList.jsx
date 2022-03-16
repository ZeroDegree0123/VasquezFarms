import './SoapList.css'
import SoapCard from '../../components/SoapCard/SoapCard';

export default function SoapList({soaps, handleAddToOrder, cart}) {
    
    const allSoaps = soaps.map(soap => 
        <SoapCard
            key={soap.id}
            soap={soap}
            soapName={soap.name}
            soapPrice={soap.price}
            handleAddToOrder={handleAddToOrder}
        />
    );
    return (
        <main>
            <div id="soap-list">
                {allSoaps}
            </div>
        </main>
    )
}