import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='headingTxt'>Our Menu</h1>
        <ul>
            <li>All</li>
            <li id='filter-btn-1'>Breakfast</li>
            <li id='filter-btn-2'>Lunch</li>
            <li id='filter-btn-3'>Shakes</li>
        </ul>
    </div>
  )
}

export default Header