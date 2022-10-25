import './ReviewForm.css'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import * as soapAPI from '../../utilities/soaps-api'

export default function ReviewForm({user, formOpen, setFormOpen}) {
    const { soapId } = useParams();
    const [newReview, setNewReview] = useState({
        message: '',
        rating: '',
        userName: user.name,
        user: user,
        date: new Date().toLocaleDateString(),
    });

    if (!formOpen) return null;

    function handleClick() {
        setFormOpen(false);
    }

    function handleChange(evt) {
        setNewReview({...newReview, [evt.target.name]: evt.target.value});
    };

    async function handleSubmit(evt) {
        setFormOpen(false);
        evt.preventDefault();
        soapAPI.makeReview(soapId, newReview);
        setNewReview({message: '', rating: '', user: user, userName: user.name, date: new Date().toLocaleDateString()});
    };

    return (
        <>
            <section className="review-form-container">
               <form className="review-form" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="form-body">
                        <div className="form-message">
                            <span>Write A Review</span>
                            <input type="text" name="message" value={newReview.message} onChange={handleChange}/>     
                        </div>
                        <div className="form-rating">
                            <span>Rating</span>
                            {/* <input type="text" name="rating" value={newReview.rating} onChange={handleChange}/> */}
                            <select name="rating" value={newReview.rating} onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <button className="review-submit-button">Submit Review</button>
                    &nbsp;
                    <button className="review-cancel-button" onClick={() => {handleClick()}}>CANCEL</button>
                </form>
            </section>
        </>
    )
}