import { State, City } from 'country-state-city';
import './css/style.css'
import { useState } from 'react';
const App = () => {
  const states = State.getStatesOfCountry('IN');
  const [s , setS] = useState('');
  const [c , setC] = useState('');
  const [temp , setTemp] = useState('');
  const [text , setText] = useState('');

  const cities = City.getCitiesOfState('IN', s);
         const URL = `https://api.weatherapi.com/v1/current.json?key=d455c624cda94ca993e191813250708&q=${c}`;

console.log(c);

const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const month = (date.getMonth());
const [icon , setIcon] = useState('');



const getData = async () => {
  // evt.preventDefault();
  const response = await fetch(URL);
  const data = await response.json();
  setTemp(data.current.temp_c);
  setIcon(data.current.condition.icon);
  setText(data.current.condition.text);

}
const months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "August" , "Sep" , "Oct" , "Nov" , "Dec"];
const stringMonth = months[month];
// console.log(`${day}  , ${stringMonth} , ${year}`);


  return (

<div className="container">
<div className="date">{stringMonth} {day} , {year}</div>
<br />
<br />
<br />
 <div className="city"><h2>Delhi</h2></div>
 <img className='image' src={icon} alt="" />
 {
  temp ?
 <div className="temp">{Math.floor(temp)}<sup className='sup'>°</sup><span className='c'>C</span></div> : ''
}
 <div className={text.length > 4 ? "type1" : "type"}><h3>{text}</h3></div>
<span className='labels'>
  <label className='label' htmlFor="">State:</label>
  <select
  onChange={(evt)=> {
setS(evt.target.value);

  }}
  defaultValue=""
    className='select'
    name=""
    id=""
    style={{
      display: "block",
      width: "90%",
      marginTop: "8px",
      padding: "8px",
      borderRadius: "6px",
      border: "none",
      outline: "none",
      backgroundColor: "#bfdbfe",
      fontWeight: "bold",
      color: "#1e3a8a",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      fontFamily: "Georgia, serif",
    }}
  >
    <option value="" disabled>Select Your State</option>
    {states.map((state) => (
      <option  key={state.isoCode} value={state.isoCode}>
        {state.name}
      </option>
    ))}
  </select>
</span>

<span
  className='labels'
  style={{
    display: "block",
    position: "relative",
    left: "0",
    marginTop: "15px",
  }}
>
  <label className='label' style={{marginLeft:"9px"}} htmlFor="">City:</label>
  <select
    onChange={(evt)=> {
setC(evt.target.value);

  }}
    defaultValue=""
    className='select'
    name=""
    id=""
    style={{
      display: "block",
      width: "90%",
      marginTop: "8px",
      padding: "8px",
      borderRadius: "6px",
      border: "none",
      outline: "none",
      backgroundColor: "#bfdbfe",
      fontWeight: "bold",
      color: "#1e3a8a",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      fontFamily: "Georgia, serif",
      marginLeft:"5px"
    }}
  >
    <option value="" disabled>Select Your City</option>
    {cities.map((city) => (
      <option key={city.name} value={city.name}>
        {city.name}
      </option>
    ))}
  </select>
</span>

 <div onClick={getData} className="submit">Submit</div>
</div>
)
}

export default App;