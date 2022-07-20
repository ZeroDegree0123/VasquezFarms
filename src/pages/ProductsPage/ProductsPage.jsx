import './ProductsPage.css'
import CategoryList from '../../components/CategoryList/CategoryList';
import SoapList from '../../components/SoapList/SoapList'
export default function ProductsPage({user, setUser, soaps, cats, activeCat, setActiveCat, categories, cart, handleAddToOrder}) {

    return (
        <section className="products-page-container">
            <div className="products-category-container">
                <CategoryList
                    categories={categories} 
                    activeCat={activeCat} 
                    setActiveCat={setActiveCat} 
                    cats={cats}
                />
            </div>
            <hr />
            <div className="products-soaps-container">
                {/* <div className="soap-of-the-month">
                    <h1 className="soap-of-the-month-body">SOAP OF THE MONTH</h1>
                    <div className="monthly-soap-image-container">
                        <h1 className="monthly-soap-title">Black Jasmine</h1>
                        <img className="monthly-soap-image" src="https://imgur.com/kj270oL.png" alt="" />
                    </div>
                </div> */}
                <SoapList
                    soaps={soaps.filter(soap => soap.category.name === activeCat)}
                    handleAddToOrder={handleAddToOrder}
                    cart={cart}
                />
            </div>
        </section>
    )
}