import './ReviewForm.css'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import * as soapAPI from '../../utilities/soaps-api'

export default function ReviewForm({user}) {
    const { soapId } = useParams();
    const [newReview, setNewReview] = useState({
        message: '',
        rating: '',
        user: user,
    })

    function handleChange(evt) {
        setNewReview({...newReview, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        soapAPI.makeReview(soapId, newReview);
        setNewReview({message: '', rating: '', user: user});
    }

    return (
        <>
            <section className="review-container">
               <form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <span>Review text</span>
                        <input type="text" name="message" value={newReview.message} onChange={handleChange}/>
                    </div>
                    <div>
                        <span>Rating</span>
                        <input type="text" name="rating" value={newReview.rating} onChange={handleChange}/>
                    </div>
                    <button className="review-submit-button">Submit Review</button>
                </form>
            </section>
        </>
    )
}