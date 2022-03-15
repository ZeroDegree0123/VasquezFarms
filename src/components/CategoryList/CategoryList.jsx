import './CategoryList.css';

export default function CategoryList({categories, activeCat, setActiveCat}) {
    const categoryList = categories.map(cat => 
        <div 
            key={cat}
            className={cat === activeCat ? 'active' : ''} 
            onClick={() => setActiveCat(cat)}
        >
             <div className="btn btn-light">{cat}</div>
        </div>
    );
    return (
        <>
            <div className="Cat">
                <h3>Categories</h3>
                <div className='category'>
                    {categoryList}
                </div>
            </div>
        </>
    )
}
