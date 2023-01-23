import "./HomeOrderComponent.css"
import categorySoaps from '../../seed';
import HomeOrderCard from "../HomeOrderCard/HomeOrderCard";

export default function HomeOrderComponent({redirect}) {
    const soaps = categorySoaps.map((soap, idx) => 
        <HomeOrderCard
            key={idx}
            redirect={redirect}
            soap={soap}
        />
        )
    return (
        <>
            {soaps}
        </>
    )
}