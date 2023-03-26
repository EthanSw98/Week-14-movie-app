

import ReviewDetails from "./ReviewDetails";

export default function ReviewList(props) {
  if (props.reviewList.length === 0) {
    return <p className="text-muted">No Reviews yet</p>;
  }

  return (
    <div>
        {props.reviewList.map((review) => (
        <ReviewDetails
          key={review.id}
          review={review}
          userName={review.userName}
        />
      ))}

    </div>
  );
}


 //export default function ReviewList(props){

//     const [formValues, setFormValues] = useState({ userName: "", review: "", rating: "null"});
//     const reviews = [];
//     const commentKey = 0;





    
 