import { useState } from 'react';
import * as soapsAPI from '../../utilities/soaps-api'

export default function SoapForm() {
    const [soaps, setSoaps] = useState({
        soapName: '',
        image: '',
        description: '',
        ingredients: [],
        price: '',
        category: '',

    })
    function handleChange(evt) {
        setSoaps({...soaps, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        soapsAPI.makeSoap(soaps);
        setSoaps({
            soapName: '',
            image: '',
            description: '',
            ingredients: [],
            price: '',
            category: '',
        })
        
    }
    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=""> Soap Name 
                        <input type="text" name="name" value={soaps.soapName} onChange={handleChange}/>
                    </label>
                    <label htmlFor=""> Img Url
                        <input type="string" name="image" value={soaps.image} onChange={handleChange}/>
                    </label>
                    <label htmlFor=""> Description
                        <input type="text" name="description" value={soaps.description} onChange={handleChange}/>
                    </label>
                    <label htmlFor=""> Ingredients
                        <input type="text" name="ingredients" value={soaps.ingredients} onChange={handleChange}/>
                    </label>
                    <label htmlFor=""> Price
                        <input type="text" name="price" value={soaps.price} onChange={handleChange}/>
                    </label>
                    <label htmlFor=""> Category
                        <input type="text" name="category" value={soaps.category} onChange={handleChange}/>
                    </label>
                    <button>Add Soap</button>
                </div>
            </form>
        </>
    )
}