
import './App.css';
import Answer from './Answer/Answer'
import Question from './Question/Question'
import data from "./data";
import {useState} from "react"


function App() {
  const [List,setList] = useState(data[0]);
  const [count,setCount] = useState(1);
  const [totalPoint,setTotalPoint] = useState(0);
  const [backgaround,setBackagrouand] = useState('backagruond');
console.log(totalPoint);
  const handelClick = (e) =>{
    setCount(count +1);
    setList(data[count])
   
    
    let elems = document.querySelectorAll("button");
    
 [].forEach.call(elems, function(el) {
    el.classList.remove("correct");
    el.classList.remove("wrong");
    el.disabled = false
});
    setBackagrouand("backagruond")
    //classList.add('correct')
    
  }
  return (
    <div className="App">
      
      {count < data.length ?<Question List={List} count={count}/>: <h1>Your total score is :</h1>}
      <div className='options'>
        {count < data.length ? <Answer List={List} totalPoint={totalPoint} setTotalPoint={setTotalPoint} count={count} backgaround={backgaround} setBackagruond={setBackagrouand} /> : <h1>{totalPoint}/{data.length}</h1>}
      
      </div>
      <div className='submit' onClick={handelClick}>
        <p>Next</p>
      </div>
    </div>
  );
}

export default App;
