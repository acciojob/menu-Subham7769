import React from 'react'
let Data = require('./Data.json');




const Product = (props) => {

    let Category = props.Category;//category from context
    console.log(Category); 
    let filterData = Data.filter((e)=>{
        if(Category == 'All'){
            return e;
        }
        else {
            return e.category == Category
        }
    });//filter the products
    
    // let filterData = Data;

  return (
    <div id='main'>
      { filterData.length === 0 ? "No data Found" :
        filterData.map((e) => {
          return (
            <div className="product" key={e.id}>
              <div className="productImg">
                <img src={e.img} alt="product" />
              </div>
              <div className="productDescription">
                <div className='productNamePrice'>
                    <h3>{e.title}</h3>
                    <h3 className='price'>{e.price}</h3>
                </div>
                <p>{e.desc}</p>
              </div>
            </div>
          )
        })
      }                                                               
    </div>
  )
}

export default Product