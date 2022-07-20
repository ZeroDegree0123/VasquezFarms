import './CategoryList.css';

export default function CategoryList({categories, activeCat, setActiveCat}) {
    const categoryList = categories.map(cat => 
        <div 
            key={cat}
            className={cat === activeCat ? 'active' : ''} 
            onClick={() => setActiveCat(cat)}
        >
             <div className="category-button">{cat}</div>
        </div>
    );
    return (
        <>
            <div className="category-container">
                <h2 className="category-header">Categories</h2>
                <div className="category">
                    {categoryList}
                </div>
            </div>
        </>
    )
}
