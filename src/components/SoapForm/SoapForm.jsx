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
}