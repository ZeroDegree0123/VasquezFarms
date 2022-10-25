import './SoapList.css'
import SoapCard from '../../SoapComponent/SoapCard/SoapCard';

export default function SoapList({soaps, handleAddToOrder, user}) {
    
    const allSoaps = soaps.map((soap, id) => 
        <SoapCard
            key={id}
            soap={soap}
            handleAddToOrder={handleAddToOrder}
            user={user}
        />
    );
    return (
        <div id="soap-list">
            {allSoaps}
        </div>
    )
}