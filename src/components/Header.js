import React,{useState} from 'react'
import Product from './Product';


const Header = () => {

  const [Category,setCategory] = useState('All'); 

  function filterCategory(e){
    setCategory(e.target.getAttribute('data-test-id'));
  }

  return (
    <div className='header'>
        <h1 className='headingTxt'>Our Menu</h1>
        <ul>
            <li data-test-id="All" value={Category} onClick={filterCategory}>All</li>
            <li id='filter-btn-1' data-test-id="menu-item-breakfast" onClick={filterCategory}>Breakfast</li>
            <li id='filter-btn-2' data-test-id="menu-item-lunch"  onClick={filterCategory}>Lunch</li>
            <li id='filter-btn-3' data-test-id="menu-item-shakes"  onClick={filterCategory}>Shakes</li>
        </ul>
        <Product Category={Category}/>

    </div>
  );

}

export default Header