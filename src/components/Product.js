import React from 'react'
let Data = require('./Data.json');

const Product = () => {
  return (
    <div className='main'>
      { Data.length === 0 ? "No data Found" :
        Data.map((e) => {
          return (
            <div className="product">
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