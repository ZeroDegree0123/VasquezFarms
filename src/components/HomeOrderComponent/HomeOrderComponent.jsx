import "./HomeOrderComponent.css"
import categorySoaps from '../../seed';
import HomeOrderCard from "../HomeOrderCard/HomeOrderCard";

export default function HomeOrderComponent() {
    const soaps = categorySoaps.map((soap, idx) => 
        <HomeOrderCard
            key={idx}
            soap={soap}
        />
        )
    return (
        <>
            {soaps}
        </>
    )
}