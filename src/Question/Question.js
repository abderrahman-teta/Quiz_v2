
const Question = ({List,count}) =>{
    
   
    let question = List.content;
    

    return(
        
            
                <div className="quistion">
                    <p> <span>{count} -</span> {question}</p>
                </div>
            
        
            
        )
        
    
}
export default Question