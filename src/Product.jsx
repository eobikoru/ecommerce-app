import React from 'react'
import './Product.css'
function Product({ id, title, image, price ,rating}) {
  return (
    
      <div className="product">
        <div className="product_info">
              <p>{title}</p>
              <p>{ rating}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p> 
        </div>

        <img src={image} alt="flower" />
        <button>ADD TO BASKET</button>
      </div>
    
  );
}

export default Product
