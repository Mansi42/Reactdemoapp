
function Property({arr , name ,oldArr,x,fullname}){
let abc=true;
let a= true;
let b= true;
let c= false;



const newOne = oldArr.map((item)=>{
    return(<div>{item}</div>)
  })

  const newDetails = x.map((element)=>{
      
      return(
       <tr>
       
          
               <td>{element.fname}</td>
               <td>{element.lname}</td>
               {/* <td>{element.fname+element.lname}</td> */}
               <td>{element.email}</td>
               <td>{element.age}</td>
               <td>{element.age>=18  ? (<td>"legal"</td>) : (<td>"Illegal"</td>) }</td>
               <td>{element.nationality}</td>
               <td>{element.belongsToIndia && <td><td>{element.state}</td>
               <td>{element.city}</td ></td>}</td>
               <td>{name(element.fname,element.lname)}</td>
               
              

          
       </tr>
      )
      
  })
    
    
    return(<div>
    <div>{arr} {name()}</div>
    {abc && <div>hi</div>}
    {abc==true ? <div>yes</div> : <div>no</div>}

    <div>{newOne}</div>
    <table border="2">
        
        <tr>
            <td>{newDetails}</td>
        </tr>
        </table>
    


    

     
    </div>
    );
}
export default Property;