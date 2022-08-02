import './ReviewList.css'
import ReviewCard from '../../components/ReviewCard/ReviewCard';

export default function ReviewList({reviews, user, soap, soapId}) {
    const allReviews = reviews.map(review => 
        <div
            key={review.id}
            review={soapId.review}
            reviewMessage={soapId.review.message}
            reviewRating={soapId.review.rating}
            user={user}
        >
        </div>    
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