
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
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Category Name</label>
                <input type="text" name="name" value={categories.name} onChange={handleChange}/>
                <label>Category Number</label>
                <input type="number" name="sortOrder" value={categories.sortOrder} onChange={handleChange}/>
                <button  type="submit">Add Category</button>
            </form>
        </>
    )
}