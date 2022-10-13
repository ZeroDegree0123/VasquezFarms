import './ReviewForm.css'
import { useState } from 'react';
import * as reviewAPI from '../../utilities/reviews-api'

export default function ReviewForm() {
    const [newReview, setNewReview] = useState({
        message: '',
        rating: '',
    })

    function handleChange(evt) {
        setNewReview({...newReview, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        reviewAPI.makeReview(newReview);
        setNewReview({message: '', rating: ''});
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