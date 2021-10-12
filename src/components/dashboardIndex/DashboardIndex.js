import { Link } from 'react-router-dom';
import {useEffect} from 'react';
// import {fetchAllTitles, fetchAllThemes} from '../../util.js';



const DashboardIndex = () => {
  const setCategoriesInLocalStorage = () => {
    // fetchAllTitles().then((data) => {
    //   const titleOptions = JSON.stringify(data.quote);
    //   localStorage.setItem('titles', titleOptions)
    //   })
    // fetchAllThemes().then((data) => {
    //   const themeOptions = JSON.stringify(data.quote);
    //   localStorage.setItem('themes', themeOptions)
    //   })
  }

  useEffect(() => {
    // setCategoriesInLocalStorage()
  }, [])

  return (
    <div className="DashboardIndex">
      <h1>Let's Get Started!</h1>
      <h2>I would like to choose a quote by...</h2>
      <div className='button-container'>
        <Link to='/category/theme'>
          <button className="theme-btn">THEME</button>
        </Link>
        <Link to='/category/title'>
          <button className="title-btn">PLAY</button>
        </Link>
      </div>
    </div>
  )
}

export default DashboardIndex;