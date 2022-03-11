import './CategoryList.css';

export default function CategoryList({cats, toggleCat, setToggleCat}) {
    const categoryList = cats.map((cat) => 
        <div 
            key={cat.id}
            className={cat === toggleCat ? 'active' : ''} 
            onClick={() => setToggleCat(cat)}
        >
             <div>{cat.catName}</div>
        </div>
    );
    return (
        <div className='category'>
            {categoryList}
        </div>
    )
}
