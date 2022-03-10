import './AdminPage.css'
import CategoryForm from "../../components/CategoryForm/CategoryForm"
import SoapForm from "../../components/SoapForm/SoapForm";
export default function AdminPage() {
    return (
        <>
            <h2><CategoryForm/></h2>
            <h2><SoapForm/></h2>
        </>
    )
}