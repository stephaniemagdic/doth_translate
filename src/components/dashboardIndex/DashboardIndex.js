import { Link } from 'react-router-dom';
import './DashboardIndex.css';

const DashboardIndex = () => {
  return (
    <div className="DashboardIndex">
      <h1>Welcome, Lambkin!</h1>
      <h2>Choose a Quote Category</h2>
      <div className='button-container'>
        <Link to='/category/theme'>
        <button className="theme-btn">Theme</button>
        </Link>
        <Link to='/category/title'>
        <button className="title-btn">Title</button>
        </Link>
      </div>
    </div>
  )
}

export default DashboardIndex;