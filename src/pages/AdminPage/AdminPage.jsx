import './AdminPage.css'
import { useState, useEffect } from 'react';
import * as categoryAPI from "../../utilities/categories-api"
import CategoryForm from "../../components/CategoryForm/CategoryForm"
import SoapForm from "../../components/SoapForm/SoapForm";
export default function AdminPage() {
    const [categories, setCategories] = useState({
        catName: '',
        sortOrder: '',
    })
    const [cats, setCat] = useState([])

    useEffect(function() {
        // async function 
        async function getCat() {
            const data = await categoryAPI.showCategory();
            // const catName = 
            // const cats = await data.json();
            setCat(data);
        }
        getCat();
    }, []);

    return (
        <>
            <h2><CategoryForm categories={categories} setCategories={setCategories}/></h2>
            <h2><SoapForm cats={cats}/></h2>
        </>
    )
}