import {useState, useEffect} from 'react';
import * as categoryAPI from '../../utilities/categories-api'
export default function SoapList() {
    const [loading, setLoading] = useState(true)
    const [cat, setCat] = useState([])

    useEffect(function() {
        async function getCat() {
            const data = await categoryAPI.showCategory();
            // const cats = await data.json();
            setCat(data);
            console.log('function hit');
        }
        getCat();
    }, []);


    
    return (
        <div>
            <h1>Soaps</h1>
            <div>
                {cat.name}
            </div>
        </div>

    )
}