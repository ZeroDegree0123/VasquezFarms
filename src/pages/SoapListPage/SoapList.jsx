import {useState, useEffect} from 'react';
import * as categoryAPI from '../../utilities/categories-api'
export default function SoapList() {
    const [loading, setLoading] = useState(true)
    const [cat, setCat] = useState([])

    useEffect(function() {
        async function getCat() {
            const data = await categoryAPI.showCategory();
            const cats = await data.json();
            setCat(cats);
        }
        getCat();
    }, []);

    return (
        <div>
            <div>
                <p>{cat.name}</p>
                <p>{cat.sortOrder}</p>
            </div>
        </div>

    )
}