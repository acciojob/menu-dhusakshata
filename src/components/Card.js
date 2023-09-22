import React from 'react'

const Card = ({imgUrl, Title, price, description, index}) => {
  return (
    <div className="single-card" id={index}>
          <div className="left">
            <img src={imgUrl} alt="dish img" />
          </div>
          <div className="right">
            <div className="top-row">
              <div className="title">{Title}</div>
              <div className="Price">${price}</div>
            </div>
            <div className="description">
             {description}
            </div>
          </div>
        </div>
  )
}

export default Card