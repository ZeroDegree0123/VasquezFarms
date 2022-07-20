import './AdminPage.css'
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as categoryAPI from "../../utilities/categories-api"
import CategoryForm from "../../components/CategoryForm/CategoryForm"
import SoapForm from "../../components/SoapForm/SoapForm";
import NotAuth from "../../components/NotAuth/NotAuth"
export default function AdminPage({user}) {
    const navigate = useNavigate()
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
                        <>
                            <br />
                            <h2>ADD A CATEGORY</h2>
                            <CategoryForm categories={categories} setCategories={setCategories}/>
                            <br />
                            <br />
                            <h2>ADD A SOAP</h2>
                            <SoapForm cats={cats}/>
                        </>
                        :
                        <>
                           <NotAuth/>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}