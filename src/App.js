import { useState } from "react";



function App() {
const [name,setName]=useState('');

const nameChange = (e)=>{
console.log('e',e.target.value);
setName(e.target.value)
};
const userName = ()=>{
  setName('Umar farooq')
}

const [box,setBox]= useState('')


const bigtext = (e)=>{
  console.log('e',e.target.value);
  setBox(e.target.value)
  
}
const textaria = ()=>{
  setBox('Umar Farooq')
}




const [languages,setLanguages]= useState('')
const selectChange = (e)=>{
  console.log('Select',e.target.value);
setLanguages(e.target.value)
}


const [selectedValues, setSelectedValues] = useState([]);

const handleCheckboxChange = (event) => {
  const { value, checked } = event.target;
  if (checked) {
    setSelectedValues((prevSelected) => [...prevSelected, value]);
  } else {
    setSelectedValues((prevSelected) => prevSelected.filter((val) => val !== value));
  }
};

const printSelectedValues = () => {
  if (selectedValues.length > 0) {
    console.log('Selected values:', selectedValues.join(', '));
   
  } else {
    console.log('No values selected.');
  }
};

const [file,setFile]=useState('')
const anyFile = (e)=>{
setFile(e.target.value)

}
const fileChange = ()=>{

  setFile('Thanks for submitting your document')
}








  return (
 <div>
<input type="text" placeholder="Enter your name" onChange={nameChange} />
<button onClick={userName}>Change Name</button>
<p>TextChange : {name}</p>

<textarea onChange={bigtext} name="" id="" cols="30" rows="10"></textarea>
<button onClick={textaria}>Change</button>
<p>TextAria :{box}</p>

<select onChange={selectChange} name="" id="">
  <option value="java">Java</option>
  <option value="php">php</option>
  <option value="python">python</option>
</select>
<p>Select Language :{languages}</p>




<label htmlFor="english">English</label>
      <input
        type="checkbox"
        id="english"
        name="good"
        value="English"
        onChange={handleCheckboxChange}
      />
      <br />
      <label htmlFor="urdu">Urdu</label>
      <input type="checkbox" id="urdu" name="good" value="Urdu" onChange={handleCheckboxChange} />
      <br />
      <label htmlFor="math">Math</label>
      <input type="checkbox" id="math" name="good" value="Math" onChange={handleCheckboxChange} />
      <br />
      <label htmlFor="biology">Biology</label>
      <input
        type="checkbox"
        id="biology"
        name="good"
        value="Biology"
        onChange={handleCheckboxChange}
      />
      <br />

      <button onClick={printSelectedValues}>Print Selected Values</button>
      <p>{selectedValues.join(', ')}</p>



      <input multiple type="file" onChange={anyFile}placeholder="Enter files"/>
      <button onClick={fileChange}>Submit</button>
<p>{file}</p>




 </div>
  );
}

export default App;
