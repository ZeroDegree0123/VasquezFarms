import './CategoryList.css';

export default function CategoryList({categories, activeCat, setActiveCat}) {
    const categoryList = categories.map(cat => 
        <div 
            key={cat}
            className={cat === activeCat ? 'active' : ''} 
            onClick={() => setActiveCat(cat)}
        >
             <div>{cat}</div>
        </div>
    );
    return (
        <div className='category'>
            {categoryList}
        </div>
    )
}
