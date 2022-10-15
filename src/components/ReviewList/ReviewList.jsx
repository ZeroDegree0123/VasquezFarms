import './ReviewList.css'
import ReviewCard from '../../components/ReviewCard/ReviewCard';

export default function ReviewList({reviews, user}) {
    const allReviews = reviews.map((review) => {
        if (user.id === review.user) {
            let userName = user.name;
        }
        if (review === undefined) {
            return (
                <div className="undefined">
                    <h1>This Soap Has no reviews</h1>
                </div>
            )
        } else if (review !== undefined) {
           return (<ReviewCard
            key={review._id}
            message={review.message}
            rating={review.rating}
            user={review.user.name}
            />)   
        }
    } 
    );
    
    return (
        <>
            {allReviews}
        </>
    )
}