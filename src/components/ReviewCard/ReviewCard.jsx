import './ReviewCard.css'

export default function ReviewCard({review, user}) {
    return (
        <>
            <div className="reviews-body-container">
                <div className="reviews-top-body-container">
                    <div className="reviews-top-body">
                        <h1 className="reviews-top-body-name">name</h1>
                        <p className="reviews-top-body-rating">{review.rating}</p>
                    </div>
                    <div className="reviews-date">date</div>
                </div>
                <p className="reviews-body">{review.message}</p>
            </div>
        </>
    )
}