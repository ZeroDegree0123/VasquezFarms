import './ProductsPage.css'
import { useState } from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import SoapList from '../../components/SoapList/SoapList'

export default function ProductsPage({user, soaps, cats, activeCat, setActiveCat, categories, handleAddToOrder}) {
    return (
        <main className="products-page-container">
            <section className="products-category-container">
                <CategoryList
                    categories={categories} 
                    activeCat={activeCat} 
                    setActiveCat={setActiveCat} 
                    cats={cats}
                />
            </section>
            <hr />
            <section className="products-soaps-container">
                <SoapList
                    soaps={soaps.filter(soap => soap.category.name === activeCat)}
                    handleAddToOrder={handleAddToOrder}
                    user={user}
                />
            </section>
        </main>
    )
}