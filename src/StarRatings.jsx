/*
Let's build a 5 star rating widget.

|---------|
 x x x x x 
|---------|

Will call an API to update the rating
Hover over them and they light up
Think about this from the user perspective
Just use whole values
Ideally if the screen reader says I choose 3 stars say it out loud
Think about a radio button group
Use an unordered list
Work backwards from the user, and then about requirements


Plan:
1. Components:
   App
   Pass in star widget API, in a `rating` variable
2. Star
*/
import {useState} from 'react';
import Star from './Star';
import './App.css';

const ratings = [
   {value: 1},
   {value: 2},
   {value: 3},
   {value: 4},
   {value: 5},         
];

export default function StarRatings() {
   const [starRating, setStarRating] = useState(null);
   const [hoverRating, setHoverRating] = useState(null);

   const handleRatingClick = (rating) => {
      setStarRating(rating);
   };

   const handleKeyDown = (e, rating) => {
      switch(e.key) {
         case 'Enter':
         case ' ':
            e.preventDefault();
            setStarRating(rating);
         default:
            break;
      }
   };

   return (
      <div className="ratings" role="radiogroup">
         {ratings.map((rating) => {
            const currentRating = hoverRating ?? starRating;
            const activeStarRating = currentRating !== null && currentRating >= rating.value;
            const singleActiveStarRating = rating.value === starRating;

            return <Star key={rating.value} rating={rating} handleRatingClick={handleRatingClick} handleKeyDown={handleKeyDown} activeStarRating={activeStarRating} singleActiveStarRating={singleActiveStarRating} setHoverRating={setHoverRating} />;
         })}
         </div>
      );
}