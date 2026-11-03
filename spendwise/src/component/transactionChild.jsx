
function Child(props){
 return(                           
 <div>       
     <h2>{props.transactions.name}</h2>  
     <h1>{props.transactions.amount}</h1>
 </div>                                
 );                               
 }
export default Child;