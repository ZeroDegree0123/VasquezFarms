import './ReviewForm.css'
import { useState } from 'react';
import * as reviewsAPI from '../../utilities/reviews-api'

export default function ReviewForm() {
    const [review, setReview] = useState({
        message: '',
        rating: '',
        user: '',
        userName: '', 
    })

    function handleChange(evt) {
        setReview({...review, [evt.target.name]: evt.target.value})
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        reviewsAPI.makeReview(review);
        setReview({
            message:'',
            rating: '',
        })
    }

    return (
        <>
            <section className="review-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <span>Review text</span>
                        <input type="text" name="message" value={review.message} onChange={handleChange}/>
                    </div>
                    <div>
                        <span>Rating</span>
                        <input type="text" name="rating" value={review.rating} onChange={handleChange}/>
                    </div>
                    <button className="review-submit-button">Submit Review</button>
                </form>
            </section>
        </>
    )
}