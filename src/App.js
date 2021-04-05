import './App.css';
import allCourses from './CourseDataRated.json';
import Course from './Course';
import { useState } from 'react';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (course) => {
    setFavorites([...favorites, course]);
  };

  const removeFromFavorites = (course) => {
    const updated = favorites.filter((fav) => fav.id !== course.id);
    setFavorites(updated);
  };

  return (
    <div className='main'>
      <header className='main-header'>Welcome to MasterClass</header>
      <div className='course-list'>
        {allCourses.length
          ? allCourses.map((course) => (
              <Course
                key={course.id}
                courseData={course}
                favorites={favorites}
                addToFavs={addToFavorites}
                removeFromFavs={removeFromFavorites}
              />
            ))
          : 'There are no courses to view at this time.'}
      </div>
    </div>
  );
};

export default App;
