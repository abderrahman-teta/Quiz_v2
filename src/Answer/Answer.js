import './Answer.css'




const Answer = ({List,totalPoint,backgaround,setBackagruond,setTotalPoint,count}) =>{
    
    let answerList = List.options;
    let answer = List.options[List.answer]
    
    let list = Object.values(answerList)
   
  

//  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

    const handelClcik = (event) =>{
console.log(event.target.innerHTML);
                
                    if(event.target.innerHTML == answer ){
                        
                        setTotalPoint(totalPoint + 1)
                        event.target.classList.add("correct");
                        console.log( event.target.parentElement.nextSibling.lastChild);
                       event.target.parentElement.nextSibling.lastChild.disabled =true;
                      //  console.log( event.target.parentElement.nextSibling.disabled);
                      
                     
                      
                 
                   
                    }else {
                       
                        event.target.classList.add("wrong")
                        
                    }
                
        
    }
    return(
        list.map(answer =>{
            return(
                <div className="option" key={answer} >
                    <input type="radio" name={answer} value={answer} id={answer}  />
                    <label htmlFor={answer}  onClick={handelClcik}>{answer}</label>
                    
                </div>
                
            )
        })
            
        )
        
    
}
export default Answer

