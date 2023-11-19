import { useEffect } from 'react'

import categorySoaps from '../../seed';
import HomeOrderCard from "../HomeOrderCard/HomeOrderCard";

export default function HomeOrderComponent({ redirect, categoryCards }) {

    const soaps = categorySoaps.map((soap, idx) => (
        <HomeOrderCard
            key={idx}
            redirect={redirect}
            soap={soap}
        />
    ));

    // useEffect(() => {
    //     const showCategory = (array) => {
    //         console.log(categoryCards);
    //         array.forEach(() => {
    //             return
    //         })
    //     }
    //     showCategory(soaps);
    // }, [])



    console.log(soaps)

    return (
        <>
            {soaps}
        </>
    )
}


