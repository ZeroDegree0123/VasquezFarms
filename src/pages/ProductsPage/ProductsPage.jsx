import CategoryList from '../../components/CategoryList/CategoryList';
import SoapList from '../../components/SoapList/SoapList'
export default function ProductsPage({soaps, cats, activeCat, setActiveCat, categories, cart, handleAddToOrder}) {

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
                    soaps={soaps.filter(soap => soap.category.name === activeCat.name)}
                    handleAddToOrder={handleAddToOrder}
                    cart={cart}
                />
            </div>
        </main>
        
    )
}