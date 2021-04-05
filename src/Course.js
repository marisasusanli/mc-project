import './Course.css';

const Course = ({ courseData }) => {
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
    </div>
  );
};

export default Course;
