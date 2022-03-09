import { useState } from 'react';
import * as categoriesApi from '../../utilities/categories-api'

export default function CategoryForm() {
    const [categories, setCategories] = useState({
        catName: '',
        sortOrder: '',
    })

    function handleChange(evt) {
        setCategories({...categories, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        categoriesApi.makeCategory(categories);
        setCategories({
            catName:'',
            sortOrder:'',
        })
    }

    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Category Name</label>
                <input type="text" name="catName" value={categories.catName} onChange={handleChange}/>
                <label>Category Number</label>
                <input type="number" name="sortOrder" value={categories.sortOrder} onChange={handleChange}/>
                <button  type="submit">Add Category</button>
            </form>
        </>
    )
}