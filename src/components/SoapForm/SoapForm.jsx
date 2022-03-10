import { useState } from 'react';
import * as soapsAPI from '../../utilities/soaps-api'

export default function SoapForm({cats}) {
    const [soap, setSoap] = useState({
        soapName: '',
        image: '',
        description: '',
        ingredients: '',
        price: '',
        category: '',

    })
    const categoryOptions = cats.map((cat) => 
        <option key={cat.id} value={cat._id}>
            {cat.catName}
        </option>
    );

    function handleChange(evt) {
        setSoap({...soap, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        soapsAPI.makeSoap(soap);
        setSoap({
            soapName: '',
            image: '',
            description: '',
            ingredients: '',
            price: '',
            category: '',
        })
        
    }
    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=""> Soap Name:</label>
                        <input type="text" name="soapName" value={soap.soapName} onChange={handleChange}/>
                    <label htmlFor=""> Img Url:</label>
                        <input type="string" name="image" value={soap.image} onChange={handleChange}/>
                    <label htmlFor=""> Description:</label>
                        <input type="text" name="description" value={soap.description} onChange={handleChange}/>
                    <label htmlFor=""> Ingredients:</label>
                        <input type="text" name="ingredients" value={soap.ingredients} onChange={handleChange}/>
                    <label htmlFor=""> Price:</label>
                        <input type="text" name="price" value={soap.price} onChange={handleChange}/>
                    <label htmlFor=""> Category:</label>
                        <select name="category" value={soap.category} onChange={handleChange}>
                            {categoryOptions}
                        </select>
                    <button>Add Soap</button>
                </div>
            </form>
        </>
    )
}