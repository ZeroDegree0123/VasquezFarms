import { useState } from 'react';

export default function SoapForm() {
    const [soap, setSoap] = useState({
        name: '',
        img: '',
        scent: '',
        description: '',
        ingredients: [],
        price: '',
        category: '',

    })
    // function handleChange(evt) {
    //     setSoap
    // }

    // function handleSubmit() {

    // }
    return (
        <>
            {/* <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" /> */}
        </>
    )
}