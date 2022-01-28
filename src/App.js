
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
   
    
    let elems = document.querySelectorAll("label");
    
 [].forEach.call(elems, function(el) {
    el.classList.remove("correct");
    el.classList.remove("wrong");
});
    setBackagrouand("backagruond")
    //classList.add('correct')
    
  }
  return (
    <div className="App">
      <Question List={List}/>
      <div className='options'>
      <Answer List={List} totalPoint={totalPoint} setTotalPoint={setTotalPoint} count={count} backgaround={backgaround} setBackagruond={setBackagrouand} />
      </div>
      <div className='submit' onClick={handelClick}>
        <p>Next</p>
      </div>
    </div>
  );
}

export default App;
