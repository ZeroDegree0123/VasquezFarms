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
                <p>{cat}</p>
            </div>


            {/* {
                cat.map((category) => {
                    <div>
                        <p>{category.name}</p>
                        <p>{category.sortOrder}</p>
                    </div>
                })

            } */}
        </div>

    )
}