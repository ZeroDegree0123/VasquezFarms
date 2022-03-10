import {useState, useEffect, useRef} from 'react';
import * as categorysAPI from '../../utilities/categories-api';
import * as soapsAPI from '../../utilities/soaps-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import SoapCard from '../../components/SoapCard/SoapCard';
export default function SoapList() {
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
                <CategoryList
                    cats={cats}
                />
                <SoapCard soaps={soaps}/>
                
            </div>
        </main>
        
    )
}