import './CategoryForm.css'
import * as categoryApi from '../../utilities/categories-api'


export default function CategoryForm({categories, setCategories}) {

    function handleChange(evt) {
        setCategories({...categories, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        categoryApi.makeCategory(categories);
        setCategories({
            name:'',
            sortOrder:'',
        })
        
    }

    return (
        <>
            <form className="d-flex justify-content-center" id="cat-form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-group input-group-sm mb-3 ">
                    <span className="input-group-text rounded" id="inputGroup-sizing-sm">Category Name</span>
                    <input className="rounded" type="text" name="name" value={categories.name} onChange={handleChange}/>
                </div>
                <div className="input-group input-group-sm mb-3 ">
                    <span className="input-group-text rounded" id="inputGroup-sizing-sm">Category Number</span>
                    <input className="rounded" type="number" name="sortOrder" value={categories.sortOrder} onChange={handleChange}/>
                </div>
                <button className="btn btn-light" type="submit">Add Category</button>
            </form>
        </>
    )
}