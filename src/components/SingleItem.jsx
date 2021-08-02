import React from 'react'

function SingleItem({item}) {
  return (
    <div className="single-img">
      <img src={item.src}/>
    </div>
  )
}

export default SingleItem
