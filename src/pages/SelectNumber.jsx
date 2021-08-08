import React, {useState, useEffect} from 'react';
import data from '../imagesData';

function SelectNumber() {
const [value, setValue] = useState(3);
const [imgs, setImgs] = useState([]);
useEffect(() => {
  setImgs(data.slice(0, `${+value}`))
}, [value])

console.log(value)
  return (
    <div>
      <select onChange={(e) => setValue(e.target.value)} name="number of images">
        <option value="3">3</option>
        <option value="7">7</option>
        <option value="10">10</option>
      </select>
      <main>
      {imgs.map(img => {
        return <div><img src={img.src}></img></div>
      })}
      </main>
    </div>
  )
}

export default SelectNumber
