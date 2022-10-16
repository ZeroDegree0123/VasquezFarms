import './ReviewCard.css'

export default function ReviewCard({review}) {
    return (
        <>
            <div className="reviews-main-container">
                <div className="reviews-body-container">
                    <div className="reviews-header">
                        <p className="reviews-username">{review.userName}</p>
                        <p className="reviews-date">{review.createdAt}</p>
                    </div>
                    <p className="reviews-rating">Rating: {review.rating}</p>
                    <p className="reviews-body">{review.message}</p>
                </div>
            </div>
        </>
    )
}