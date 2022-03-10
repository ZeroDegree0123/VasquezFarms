import SoapCard from '../../components/SoapCard/SoapCard';

export default function SoapList({allSoaps}) {
    const soaps = allSoaps.map(soap => 
        <SoapCard
            key={soap.id}
            soapProp={soap}
        />
    );
    return (
        <main>
            {soaps}
        </main>
    )
}