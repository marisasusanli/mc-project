import './App.css';
import allCourses from './CourseDataRated.json';
import Course from './Course';

const App = () => {
  return (
    <div className='main'>
      <header className='main-header'>Welcome to MasterClass</header>
      <div className='course-list'>
        {allCourses.length
          ? allCourses.map((course) => (
              <Course key={course.id} courseData={course} />
            ))
          : 'There are no courses to view at this time.'}
      </div>
    </div>
  );
};

export default App;
