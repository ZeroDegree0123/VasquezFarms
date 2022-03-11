
import CategoryList from '../../components/CategoryList/CategoryList';
import SoapList from '../../components/SoapList/SoapList'
export default function ProductsPage({soaps, cats, toggleCat, setToggleCat}) {
    
    return (
        <main>
            <div>
                <CategoryList toggleCat={toggleCat} setToggleCat={setToggleCat} cats={cats}/>
            </div>
            <div>
                <SoapList allSoaps={soaps.filter(soap => soap.category.name === toggleCat)}/>
            </div>
        </main>
        
    )
}