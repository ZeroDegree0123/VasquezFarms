import { useState } from 'react';
import * as soapsAPI from '../../../utilities/soaps-api'

export default function SoapForm({cats}) {
    const [soap, setSoap] = useState({
        name: '',
        image: '',
        description: '',
        ingredients: '',
        price: '',
        stock: '',
        category: '',
        // reviews: [],
    })
    const categoryOptions = cats.map((cat) => 
        <option key={cat.id} value={cat._id}>
            {cat.name}
        </option>
    );

    function handleChange(evt) {
        setSoap({...soap, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        soapsAPI.makeSoap(soap);
        setSoap({
            name: '',
            image: '',
            description: '',
            ingredients: '',
            price: '',
            stock: '',
            category: '',
        })
        
    }
    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-container">
                    <span>Soap Name</span>
                    <input type="text" name="name" value={soap.name} onChange={handleChange}/>
                    
                </div>
                <div className="input-container">
                    <span>Img Url</span>
                    <input type="text" name="image" value={soap.image} onChange={handleChange}/>
                    
                </div>
                <div className="input-container">
                    <span>Description</span>
                    <input type="text" name="description" value={soap.description} onChange={handleChange}/>
                    
                </div>
                <div className="input-container">
                    <span>Ingredients</span>
                    <input type="text" name="ingredients" value={soap.ingredients} onChange={handleChange}/>
                    
                </div>
                <div className="input-container">
                    <span>Price</span>
                    <input type="text" name="price" value={soap.price} onChange={handleChange}/>
                    
                </div>
                <div className="input-container">
                    <span>Stock</span>
                    <input type="text" name="stock" value={soap.stock} onChange={handleChange}/>
                </div>
                <label>Category:</label>
                <div>
                    <select name="category" value={soap.category} onChange={handleChange}>
                        {categoryOptions}
                    </select>
                </div>
                <button>Add Soap</button>
            </form>
        </>
    )
}