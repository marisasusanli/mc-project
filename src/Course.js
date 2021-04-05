import './Course.css';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Course = ({ courseData, favorites, addToFavs, removeFromFavs }) => {
  return (
    <div className='course-list-item'>
      <img
        src={courseData.instructor_image_url}
        className={'item-img'}
        alt={courseData.instructor_name}
      />

      <div className='item-text'>
        <h3 className='item-name'>{courseData.instructor_name}</h3>
        <h3 className='item-title'>{courseData.title}</h3>
      </div>

      <div className={'heart-icon'}>
        {favorites.includes(courseData) ? (
          <FontAwesomeIcon
            icon={faHeartSolid}
            onClick={() => removeFromFavs(courseData)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeartRegular}
            onClick={() => addToFavs(courseData)}
          />
        )}
      </div>
    </div>
  );
};

export default Course;
