import './CategoryList.css';

export default function CategoryList({cat}) {
    const category = cat.map((cats) => 
        <div key={cat.id}>
             <div>.  {cats.catName}  |</div>
        </div>
    );
    return (
        <>
            <div className='category'>
                {category}
            </div>
        </>
    )
}
