import './ReviewList.css'
import ReviewCard from '../../ReviewComponent/ReviewCard/ReviewCard';

export default function ReviewList({reviews}) {

    let allReviews;

    const filterUndefined = () => {
        if (reviews !== undefined) {
            allReviews = reviews.map((review) => 
                <ReviewCard
                    key={review._id}
                    review={review}
                />
            )
        }
        return allReviews
    } 

    filterUndefined();

    return (
        <>
            <div className="review-list-container">
                {allReviews}
            </div>
        </>
    )
}