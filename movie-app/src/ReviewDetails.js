import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function ReviewDetails(props) {
    return (
      <div className="my-4">
        <h5>User Name:{props.review.userName}</h5>
        <p>Review:{props.review.review}</p> 
      </div>
    );
  }
  