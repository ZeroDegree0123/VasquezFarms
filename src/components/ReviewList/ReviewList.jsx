import './ReviewList.css'
import ReviewCard from '../../components/ReviewCard/ReviewCard';

export default function ReviewList({reviews, user}) {
    const allReviews = reviews.map((review, idx) => 
        <ReviewCard
            key={idx}
            message={review.message}
            rating={review.rating}
        />   
        );
    
    return (
        <>
            <section className="reviews-container">
                <div className="reviews-header-container">
                    <h1 className="reviews-header-title">REVIEWS</h1>
                    <p className="reviews-header-rating">overall rating</p>
                </div>
                <div>
                    {allReviews}
                </div>
            </section>
        </>
    )
}