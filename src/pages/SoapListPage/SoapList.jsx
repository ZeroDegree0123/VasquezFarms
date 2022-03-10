import {useState, useEffect} from 'react';
import * as categoryAPI from '../../utilities/categories-api';
import CategoryList from '../../components/CategoryList/CategoryList';

export default function SoapList() {
    const [soap, setSoap] = useState(null)
    const [loading, setLoading] = useState(true)
    const [cat, setCat] = useState([])

    useEffect(function() {
        async function getCat() {
            const data = await categoryAPI.showCategory();
            // const catName = 
            // const cats = await data.json();
            setCat(data);
        }
        getCat();
    }, []);
    // console.log('function hit');
    return (
        <main>
            <div>
                <CategoryList
                    cat={cat}
                />
            </div>
        </main>
    )
}