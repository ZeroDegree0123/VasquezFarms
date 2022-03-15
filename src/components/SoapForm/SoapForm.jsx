import { useState } from 'react';
import * as soapsAPI from '../../utilities/soaps-api'

export default function SoapForm({cats}) {
    const [soap, setSoap] = useState({
        name: '',
        image: '',
        description: '',
        ingredients: '',
        price: '',
        category: '',

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
            category: '',
        })
        
    }
    return (
        <>
            <form id="cat-form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-group input-group-sm mb-3 rounded">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Soap Name</span>
                    <input className="rounded" type="text" name="name" value={soap.name} onChange={handleChange}/>
                    
                </div>
                <div className="input-group input-group-sm mb-3 rounded">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Img Url</span>
                    <input className="rounded" type="text" name="image" value={soap.image} onChange={handleChange}/>
                    
                </div>
                <div className="input-group input-group-sm mb-3 rounded">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
                    <input className="rounded" type="text" name="description" value={soap.description} onChange={handleChange}/>
                    
                </div>
                <div className="input-group input-group-sm mb-3 rounded">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Ingredients</span>
                    <input className="rounded" type="text" name="ingredients" value={soap.ingredients} onChange={handleChange}/>
                    
                </div>
                <div className="input-group input-group-sm mb-3 rounded">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Price</span>
                    <input className="rounded" type="text" name="price" value={soap.price} onChange={handleChange}/>
                    
                </div>
                <label htmlFor=""> Category:</label>
                <div>
                    <select className="rounded" name="category" value={soap.category} onChange={handleChange}>
                        {categoryOptions}
                    </select>
                </div>
                <button className="btn btn-light">Add Soap</button>
            </form>
        </>
    )
}