import SoapCard from '../../components/SoapCard/SoapCard';

export default function SoapList({soaps}) {
    const allSoaps = soaps.map(soap => 
        <SoapCard
            key={soap.id}
            soap={soap}
        />
    );
    return (
        <main>
            {allSoaps}
        </main>
    )
}