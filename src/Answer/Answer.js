import './Answer.css'




const Answer = ({List,totalPoint,backgaround,setBackagruond,setTotalPoint,count}) =>{
    
    let answerList = List.options;
    let answer = List.options[List.answer]
    
    let list = Object.values(answerList)
   
  

//  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

    const handelClcik = (event) =>{

                
                    if(event.target.textContent == answer ){
                        
                        setTotalPoint(totalPoint + 1)
                        event.target.classList.add("correct");
                        event.target.disabled = true;
                        event.target.nextSibling.disabled = true;
                        console.log( event.target.nextSibling);
                      
                     
                      
                 
                   
                    }else {
                       console.log(event.target.parentElement.firstChild);
                        event.target.classList.add("wrong");
                        event.target.disabled = true;
                        event.target.parentElement.firstChild.disabled = true
                        
                    }
                
        
    }
    return(
        list.map(answer =>{
            return(
                
                    <button  key={answer} className="option" onClick={handelClcik}>{answer}</button>
              
                
            )
        })
            
        )
        
    
}
export default Answer

