
import ReviewList from './ReviewList.js';
import ReviewForm from './ReviewForm.js';
import {useState} from 'react';

let nextReviewId = 10;

export default function App() {
  const [reviewList, setReviewList] = useState([]);


  const addReview = (review) => {
    const newReview = {
      id: nextReviewId++,
      ...review
    };
    setReviewList(reviewList.concat(newReview));
  };

  return (
    <div>
      <ReviewForm addReview = {addReview} />
      <hr />
      <ReviewList
        reviewList={reviewList}
      />
    </div>
  );
}


// let reviewId= '0';

// export default function ReviewCard() {
//     const [review,setReview] = useState([]);

//     const addReview = (newReviewData) =>{
//         const newReview ={
//             id: reviewId++,
//             ...newReviewData
//         };
//         setReview(review.concat(newReview));
//     }
//     return(
//         <div>
//             <div>
//                 <ReviewForm addReview ={addReview}/>
//             </div>
//             <div>
//                 < Reviews 
//                   review ={review}
//                 />
//             </div>
//         </div>
//     )

// }