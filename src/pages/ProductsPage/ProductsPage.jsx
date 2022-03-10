import {useState, useEffect, useRef} from 'react';
import * as categorysAPI from '../../utilities/categories-api';
import * as soapsAPI from '../../utilities/soaps-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import SoapList from '../../components/SoapList/SoapList'
export default function ProductsPage() {
    const [soaps, setSoaps] = useState([]);
    const [toggleCat, setToggleCat] = useState('');
    const [cats, setCats] = useState([]);
    const categoryRef = useRef([]);
    // const [loading, setLoading] = useState(true);

    useEffect(function() {
        async function getSoaps() {
            const soapData = await soapsAPI.showSoap();
            categoryRef.current = soapData.reduce((cats, soap) => {
                const cat = soap.category.name;
                return cats.includes(cat) ? cats : [...cats, cat]; 
            }, []);
            setSoaps(soapData)
            setToggleCat(categoryRef.current.name)
        }
        getSoaps();
        async function getCat() {
            const data = await categorysAPI.showCategory();
            setCats(data);
        }
        getCat();
    }, []);
    // console.log('function hit');
    return (
        <main>
            <div>
                <CategoryList cats={cats}/>
            </div>
            <div>
                <SoapList allSoaps={soaps.filter(soap => soap.category.name === toggleCat)}/>
            </div>
        </main>
        
    )
}