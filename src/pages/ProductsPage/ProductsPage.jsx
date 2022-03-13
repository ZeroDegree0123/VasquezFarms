import {useParams} from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import SoapList from '../../components/SoapList/SoapList'
export default function ProductsPage({soaps, cats, toggleCat, setToggleCat, categories}) {
    // const {soaps} = useParams()
    return (
        <main>
            <div>
                <CategoryList categories={categories} toggleCat={toggleCat} setToggleCat={setToggleCat} cats={cats}/>
            </div>
            <div>
                <SoapList soaps={soaps.filter(soap => soap.category.name === toggleCat.name)}/>
            </div>
        </main>
        
    )
}