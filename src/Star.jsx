import { EmptyStar } from './Icons';

export default function Star({rating, handleRatingClick, handleKeyDown, activeStarRating, singleActiveStarRating, setHoverRating}) {
   return (
      <span aria-label={`select to rate item ${rating.value} star`} tabIndex={0} role="radio" className="rating" aria-checked={singleActiveStarRating} onClick={() => handleRatingClick(rating.value)} onKeyDown={(e) => handleKeyDown(e, rating.value)} onMouseEnter={() => setHoverRating(rating.value)} onMouseLeave={() => setHoverRating(null)}>
         <EmptyStar className={activeStarRating ? 'active' : ''} />
      </span>
   );
}