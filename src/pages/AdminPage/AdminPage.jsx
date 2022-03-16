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
                    <div>
                        {user.role === "admin" ?
                        <>
                            <h2>ADD A CATEGORY</h2>
                            <CategoryForm categories={categories} setCategories={setCategories}/>
                            <h2>ADD A SOAP</h2>
                            <SoapForm cats={cats}/>
                        </>
                        :
                        <>
                            <p>not Authorized</p>
                            <h2>hahaha</h2>
                        </>
    }
                    </div>
                </div>
            </section>
        </>
    )
}