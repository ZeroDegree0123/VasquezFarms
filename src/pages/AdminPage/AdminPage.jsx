import './AdminPage.css'
import { useState, useEffect } from 'react';
import * as categoryAPI from "../../utilities/categories-api"
import CategoryForm from "../../components/CategoryForm/CategoryForm"
import SoapForm from "../../components/SoapForm/SoapForm";
export default function AdminPage({user}) {
    const [categories, setCategories] = useState({
        name: '',
        sortOrder: '',
    })
    const [cats, setCat] = useState([])

    useEffect(function() {
        // async function 
        async function getCat() {
            const data = await categoryAPI.showCategory();
            // const name = 
            // const cats = await data.json();
            setCat(data);
        }
        getCat();
    }, []);

    return (

        <>
            <section className="admin">
                <div className="category">
                    <h2>
                        {user.role === "admin" ?
                        <>
                            <CategoryForm categories={categories} setCategories={setCategories}/>
                            <SoapForm cats={cats}/>
                        </>
                        :
                        <>
                            <p>not Authorized</p>
                            <h1>hahaha</h1>
                        </>
    }
                    </h2>
                </div>
            </section>
        </>
    )
}