import './CategoryList.css';

export default function CategoryList({cats}) {
    const categoryList = cats.map((cat) => 
        <div key={cat.id}>
             <div>.  {cat.catName}  |</div>
        </div>
    );
    return (
        <>
            <div className='category'>
                {categoryList}
            </div>
        </>
    )
}
