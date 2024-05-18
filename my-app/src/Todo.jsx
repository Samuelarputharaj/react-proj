import { useState } from "react";

function Todo() {
    const[arr,setArr]=useState([]);
    const [inputvalue,setInputvalue]=useState("")
    function handleclick() {
      if(inputvalue !=="")
        {

            setArr([...arr,inputvalue]);
            setInputvalue("")
        }
        
    }
    function handleclickedit(idx) {
        const update=prompt("edit")
        if(update !=="")
          {
            arr[idx]=update;
              setArr([...arr]);

          }
          
      }
      function handleclickdelete(idx) {
           let res=arr.filter((value,index)=>{
            return (index!==idx)
           })
           setArr(res);  
          }
          
      
    return(
       <>
       <label>TODO :</label>
       <input type="text" value={inputvalue} onChange={(e=>setInputvalue(e.target.value))} />
       <button onClick={handleclick}>Add</button>
       {
        <ol>
            {
                arr.map((value,index)=>{
                    return(
                        <div key={index}>
                            <li>{value}</li>
                            <button onClick={()=>handleclickedit(index)}>Edit</button>
                            <button onClick={()=>handleclickdelete(index)}>Delete</button>
                        </div>
                    );
                })
            }
        </ol>
       }
       </>
    );
}
export default Todo;