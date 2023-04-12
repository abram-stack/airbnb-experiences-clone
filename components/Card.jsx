import { AiFillStar } from 'react-icons/ai';

export default function Card() {
  return (
    <div className='card'>
      <img src='/portrait-1.jpg' className='card--image' />
      <div className='card--stats'>
        <span className='card--star'>
          <AiFillStar />
        </span>
        <span>5.0</span>
        <span className='text-light'>(6) • </span>
        <span className='text-light'>United States</span>
      </div>
      <p>Plan The Perfect New York Vacation</p>
      <p>
        <span className='text-bold'>From 18 $</span> / person
      </p>
    </div>
  );
}
