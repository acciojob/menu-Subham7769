import React,{useState} from 'react'
import Product from './Product';


const Header = () => {

  let dummyData =[ {
    "id":1,
    "name":"breakfast",
  },
  {
    "id":2,
    "name":"lunch",
  },
  {
    "id":3,
    "name":"shakes",
  }
]

  const [Category,setCategory] = useState('All'); 

  function filterCategory(e){
    setCategory(e.target.getAttribute('data-test-id'));
  }

  return (
    <div className='header'>
        <h1 className='headingTxt'>Our Menu</h1>
        <div>
            <button data-test-id="All" value={Category} onClick={filterCategory}>All</button>
            {
              dummyData.map((e) =>(

              <button id= {`filter-btn-${e.id}`} data-test-id={`menu-item-${e.name}`} onClick={filterCategory}>{e.name}</button>
              )
                
                
              )
            }
            {/* <button id='filter-btn-1' data-test-id="menu-item-breakfast" onClick={filterCategory}>Breakfast</button>
            <button id='filter-btn-2' data-test-id="menu-item-lunch"  onClick={filterCategory}>Lunch</button>
            <button id='filter-btn-3' data-test-id="menu-item-shakes"  onClick={filterCategory}>Shakes</button> */}
        </div>
        <Product Category={Category}/>

    </div>
  );

}

export default Header