import { useEffect, useState } from "react";
function Form(){
    const[email,setEmail] =useState("");
    const[password,setPassword] =useState("");
    const[errormessage,setErrorMessage] = useState("");
    const[isError,SetIsError] = useState(false);

    let details=[
        {
         fname:"mansi",
         lname:"dhingra",
         email:"m@gmail.com",
         age:40,
         nationality:"India",
         city:"garhdiwala",
         password:"m123"
      
        },
        {
         fname:"gurleen",
         lname:"kaur",
         email:"g@gmail.com",
         age:40,
         nationality:"Canada",
         city:"Winnipeg",
         password:"g123"
      
      
        },
        {
         fname:"gaurav",
         lname:"sharma",
         email:"g@gmail.com",
         age:4,
         nationality:"Canada",
         city:"Toronto",
         password:"ga123"
      
      
        },
        {
         fname:"shruti",
         lname:"kumra",
         email:"s@gmail.com",
         age:40,
         nationality:"India",
         city:"garhdiwala",
         password:"s123"
      
        }
        
      ]


    const emailOnChange=(e)=>{
        setEmail(e.target.value);
    }
         const passwordOnChange=(e)=>{
            setPassword(e.target.value);
             }

    const formSubmit=(e) => {
        e.preventDefault();
        if(email =="" || password==""){
            SetIsError(true)
           
            alert("details should be filled")
        }else{
            for(let i of details){
                if(i.email === email && i.password === password ){
                    
                    alert("login successfully")
                    return false;
                    
            }
                    alert("invalid")
                    return false;
            
               
            }
        }
        }
    


    return(<div>
        <form onSubmit={formSubmit}>
         <input type="email"   value={email} name="email" onChange={emailOnChange} placeholder="Enter your email"></input><br></br>
         <input type="password"  value={password} name="password" onChange={passwordOnChange} placeholder="Enter your password"></input>
         <br></br>
         <input type="file"></input>
         <input type="submit" /><br></br>
         
         </form>
         </div>)
}
export default Form;