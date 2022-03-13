import './CategoryList.css';

export default function CategoryList({categories, toggleCat, setToggleCat}) {
    const categoryList = categories.map(cat => 
        <div 
            key={cat}
            className={cat === toggleCat ? 'active' : ''} 
            onClick={() => setToggleCat(cat)}
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
