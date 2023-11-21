import './ReviewCard.css'

export default function ReviewCard({ review }) {
    const date = review.date.slice(0, 10);

    return (
        <>
            <div className="reviews-main-container">
                <div className="reviews-header">
                    <p className="reviews-username">{review.userName}</p>
                    <p className="reviews-date">{date}</p>
                </div>
                <p className="reviews-rating">Rating: {review.rating}</p>
                <p className="reviews-body">{review.message}</p>
            </div>
        </>
    )
}