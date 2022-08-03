import './AdminPage.css'
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as categoryAPI from "../../utilities/categories-api"
import CategoryForm from "../../components/CategoryForm/CategoryForm"
import SoapForm from "../../components/SoapForm/SoapForm";

export default function AdminPage({cats}) {
    const navigate = useNavigate()
    const [categories, setCategories] = useState({
        name: '',
        sortOrder: '',
    })

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
                    </div>
                </div>
            </section>
        </>
    )
}