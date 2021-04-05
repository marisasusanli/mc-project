import './App.css';
import allCourses from './CourseDataRated.json';
import Course from './Course';
import { useState, useEffect } from 'react';

const App = () => {
  const [coursesToDisplay, setCoursesToDisplay] = useState(allCourses);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const filterData = (filterType) => {
      if (filterType === 'all') setCoursesToDisplay(allCourses);
      else if (filterType === 'favorites') setCoursesToDisplay(favorites);
    };
    filterData(filter);
  }, [filter, favorites]);

  const addToFavorites = (course) => {
    setFavorites([...favorites, course]);
  };

  const removeFromFavorites = (course) => {
    const updated = favorites.filter((fav) => fav.id !== course.id);
    setFavorites(updated);
  };

  const handleSort = (e) => {
    const sortBy = e.target.value;
    if (sortBy === 'none') return;
    else if (sortBy === 'rating') {
      const data = [...coursesToDisplay];
      const sortedData = data.sort((a, b) => b.rating - a.rating);
      setCoursesToDisplay(sortedData);
    }
  };

  return (
    <div className='main'>
      <header className='main-header'>Welcome to MasterClass</header>
      <div className='filter-dropdown'>
        <label htmlFor='filter'>View: </label>
        <select name='filter' onChange={(e) => setFilter(e.target.value)}>
          <option value='all'>All Courses</option>
          <option value='favorites'>Favorites</option>
        </select>
      </div>
      <div className='sort-dropdown'>
        <label htmlFor='sort'>Sort by: </label>
        <select name='sort' onChange={handleSort}>
          <option value='none'>-</option>
          <option value='rating'>Rating</option>
        </select>
      </div>
      <div className='course-list'>
        {coursesToDisplay.length
          ? coursesToDisplay.map((course) => (
              <Course
                key={course.id}
                courseData={course}
                favorites={favorites}
                addToFavs={addToFavorites}
                removeFromFavs={removeFromFavorites}
              />
            ))
          : 'You have not added any favorites yet.'}
      </div>
    </div>
  );
};

export default App;
