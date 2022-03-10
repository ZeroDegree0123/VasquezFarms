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
                    <label htmlFor=""> Soap Name:</label>
                        <input type="text" name="soapName" value={soaps.soapName} onChange={handleChange}/>
                    <label htmlFor=""> Img Url:</label>
                        <input type="string" name="image" value={soaps.image} onChange={handleChange}/>
                    <label htmlFor=""> Description:</label>
                        <input type="text" name="description" value={soaps.description} onChange={handleChange}/>
                    <label htmlFor=""> Ingredients:</label>
                        <input type="text" name="ingredients" value={soaps.ingredients} onChange={handleChange}/>
                    <label htmlFor=""> Price:</label>
                        <input type="text" name="price" value={soaps.price} onChange={handleChange}/>
                    <label htmlFor=""> Category:</label>
                        <input type="text" name="category" value={soaps.category} onChange={handleChange}/>
                    <button>Add Soap</button>
                </div>
            </form>
        </>
    )
}