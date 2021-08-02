import React, {useState} from 'react';
import items from '../imagesData';
import SingleItem from '../components/SingleItem';

function Mountains() {
const categories = ['all', ...new Set(items.map(el => el.category))];
const [photos, setPhotos] = useState(items)

function handleClick(cat) {
  const filteredItems = items.filter(el => el.category === cat);
  setPhotos(filteredItems)
  if(cat === 'all') {
    setPhotos(items)
  }
}

const allCategories = []
  return (
    <div className='mountains-container'>
     <div className='btns-container'>
        {categories.map((category, i) => {
          return <button onClick={() => handleClick(category)}>{category}</button>
        })}
      </div>
    <div className="images-container">
     
      {photos.map((item, i) => {
        return <SingleItem key={i} item={item}/>
      })}
    </div>
    </div>
  )
}

export default Mountains
