import './ProductsPage.css'
import { Link } from 'react-router-dom';
import CategoryList from '../../components/SoapComponent/CategoryList/CategoryList';
import SoapList from '../../components/SoapComponent/SoapList/SoapList'

export default function ProductsPage({ user, soaps, cats, activeCat, setActiveCat, categories, handleAddToOrder }) {
    return (
        <main className="products-page-container">
            <section className="subpage-header">
                <h1 className="subpage-header-title">Soaps</h1>
                <div className="subpage-header-link-container">
                    <Link id="home-link" className="subpage-header-link-item" to="/">Home</Link>
                    <p id="special-character" className="subpage-header-link-item">&#62;</p>
                    <p className="subpage-header-link-item">Soaps</p>
                    {user ?
                        <>
                            <p id="special-character" className="subpage-header-link-item">-</p>
                            <Link className="link" to="/orders/new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" id="cart" className="bi bi-cart" viewBox="0 0 17 17">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </Link>
                        </>
                        :
                        <></>
                    }
                </div>
            </section>
            <CategoryList categories={categories} activeCat={activeCat} setActiveCat={setActiveCat} cats={cats} />
            <SoapList soaps={soaps.filter(soap => soap.category.name === activeCat)} handleAddToOrder={handleAddToOrder} user={user} />
        </main>
    )
}