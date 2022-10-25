import './AdminPage.css'
import { useState } from 'react';
import CategoryForm from "../../components/SoapComponent/CategoryForm/CategoryForm"
import SoapForm from "../../components/SoapComponent/SoapForm/SoapForm";

export default function AdminPage({cats}) {
    const [categories, setCategories] = useState({
        name: '',
        sortOrder: '',
    })

    return (
        <>
            <main className="admin">
                <div className="category">
                    <div className="temp">
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
            </main>
        </>
    )
}