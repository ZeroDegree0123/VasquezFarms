import { useState } from 'react';
import * as soapsAPI from '../../utilities/soaps-api'

export default function SoapForm() {
    const [soaps, setSoaps] = useState({
        name: '',
        img: '',
        scent: '',
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
            name: '',
            img: '',
            scent: '',
            description: '',
            ingredients: [],
            price: '',
            category: '',
        })
        
    }
    return (
        <>
            <form action="">
                <label htmlFor=""> add label
                    <input type="text" />
                </label>
                <label htmlFor=""> add label
                    <input type="text" />
                </label>
                <label htmlFor=""> add label
                    <input type="text" />
                </label>
                <label htmlFor=""> add label
                    <input type="text" />
                </label>
                <label htmlFor=""> add label
                    <input type="text" />
                </label>
                <label htmlFor=""> add label
                    <input type="text" />
                </label>
                <label htmlFor=""> add label
                    <input type="text" />
                </label>
                <button>Add Soap</button>
            </form>
        </>
    )
}