import { AiFillStar } from 'react-icons/ai';

export default function Card({ card }) {
  const { coverImg, stats, location, title, price } = card;
  console.log(card);
  return (
    <div className='card'>
      <picture>
        <source srcSet={coverImg} type='image/webp' />
        <img src={coverImg} className='card--image' alt={title} />
      </picture>
      <div className='card--stats'>
        <span className='card--star'>
          <AiFillStar />
        </span>
        <span>{stats.rating}</span>
        <span className='text-light'>({stats.reviewCount}) • </span>
        <span className='text-light'>{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className='text-bold'>From {price} $</span> / person
      </p>
    </div>
  );
}
