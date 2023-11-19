import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
    const categoryList = categories.map(cat =>
        <button
            key={cat}
            id='category-button'
            className={cat === activeCat ? 'active' : ''}
            onClick={() => setActiveCat(cat)}
        >{cat}</button>
    );
    return (
        <>
            <section className="category-container">
                <h2 className="category-header">Categories</h2>
                <div className="category">
                    {categoryList}
                </div>
            </section>
        </>
    )
}
