import './SoapList.css'
import SoapCard from '../../components/SoapCard/SoapCard';

export default function SoapList({soaps, handleAddToOrder, user}) {
    
    const allSoaps = soaps.map(soap => 
        <SoapCard
            key={soap.id}
            soap={soap}
            soapName={soap.name}
            soapPrice={soap.price}
            handleAddToOrder={handleAddToOrder}
            user={user}
        />
    );
    return (
        <section>
            <div id="soap-list">
                {allSoaps}
            </div>
        </section>
    )
}