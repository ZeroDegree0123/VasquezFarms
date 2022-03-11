import { useParams } from "react-router-dom"


export default function SoapDetailPage({soaps}) {
    let {soapDetails} = useParams();
    let soap = soaps.find(sop => sop._id === soapDetails)
    // soap.map((sop) => 
    
    // )
    return (
       <div>
           {/* <h2>{soap.id}</h2> */}
           <h1>s</h1>

       </div>
    )
}