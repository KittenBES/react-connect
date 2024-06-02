import '../CSS/CategoryCard.scss';

import Vector from '../assets/vector.png';

function CategoryCard(props) {
  return (
    <>
      <a class='category'>
        <img src={Vector} className='category__link' />
        <p class='category__name'>{props.name}</p>
      </a>
    </>
  );
}

export default CategoryCard;
