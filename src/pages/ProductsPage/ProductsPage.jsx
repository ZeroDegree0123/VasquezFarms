import './ProductsPage.css'
import CategoryList from '../../components/CategoryList/CategoryList';
import SoapList from '../../components/SoapList/SoapList'
export default function ProductsPage({user, setUser, soaps, cats, activeCat, setActiveCat, categories, cart, handleAddToOrder}) {

    return (
        <main>
            <div>
                <CategoryList
                    categories={categories} 
                    activeCat={activeCat} 
                    setActiveCat={setActiveCat} 
                    cats={cats}
                />
            </div>
            <div>
                <SoapList
                    soaps={soaps.filter(soap => soap.category.name === activeCat)}
                    handleAddToOrder={handleAddToOrder}
                    cart={cart}
                />
            </div>
        </main>
        
    )
}