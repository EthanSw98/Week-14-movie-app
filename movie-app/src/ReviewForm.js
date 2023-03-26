
import {useState} from 'react'

export default function Form(props) {
    const [review, setReview] = useState('');
    const [userName, setuserName] = useState('');
   
  

  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.addReview({ userName: userName, review:review });
      setuserName('');
      setReview('');
    };
  
    return (
      <form>
        <h4>Leave a Review</h4>
        <h5>Your Rating</h5>
        <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
        <label htmlFor="review-input" className="form-label">
           UserName
        </label>
        <input
          type="text"
          id="userName-input"
          className="form-control"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <label htmlFor="review-input" className="form-label">
           Reivew
        </label>
        <input
          type="text"
          id="review-input"
          className="form-control"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleSubmit}>
          Create
        </button>
      </form>
    );
  }
  
// export default function ReviewForm(props) {

//     const [hover, setHover] = useState(null);
//     const [formValues, setFormValues] = useState({ userName: "", review: "", rating: "null"});


//     const handleSubmit = (event) => {
//     event.preventDefault();
//     props.addReview({})

//     return(
//         <div>
//         <form id='reviewform'>
//             <div>
//             <label>Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formValues.userName}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//             {[...Array(5)].map((star, i) => {
//                 const ratingValue = i + 1;

//                 return (
//                     <label>
//                         <input 
//                             type="radio" 
//                             name='rating' 
//                             value={ratingValue} 
//                             onClick={() => setFormValues(ratingValue)}
//                         />
//                         <FaStar 
//                             className='star' 
//                             color={ratingValue <= (hover || formValues.rating) ? "#faaf00" : "#e4e5e9"} 
//                             size={25}
//                             onMouseEnter={() => setHover(ratingValue)}
//                             onMouseLeave={() => setHover(null)} 
//                         />
//                     </label>)
//             })}

//             </div>
            
//             <div>
//                 <label>Review</label>
//                 <input
//                     type="text"
//                     name="position"
//                     value={formValues.position}
//                     onChange={handleChange}
//                 />
//                 <button onClick={handleSubmit}>Submit</button>
//             </div>
//         </form>

//     </div>

//     )

// }