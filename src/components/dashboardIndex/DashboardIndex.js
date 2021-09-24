//Welcome page
//choose a quote category
//two buttons .. with nav links.

import { Link } from 'react-router-dom';

const DashboardIndex = () => {
  return (
    <div className="DashboardIndex">
      <h1>Welcome Lambkin!</h1>
      <h2>Choose a Quote Category</h2>
      <Link to='/category/theme'>
      <button className="theme-btn">THEME</button>
      </Link>
      <Link to='/category/title'>
      <button className="title-btn">Title</button>
      </Link>
      
    </div>
  )
}

export default DashboardIndex;