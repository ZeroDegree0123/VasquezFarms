import {useState, useEffect, useRef} from 'react';
import * as categoryAPI from '../../utilities/categories-api';
import CategoryList from '../../components/CategoryList/CategoryList';

export default function SoapList() {
    const [soap, setSoap] = useState([]);
    const [toggleCat, setToggleCat] = useState('');
    const [cat, setCat] = useState([]);
    const categoryRef = useRef([]);
    // const [loading, setLoading] = useState(true);

    useEffect(function() {
        // async function 
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