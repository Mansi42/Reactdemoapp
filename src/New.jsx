function New(){

    const laptops = ["hp","asus","acer","dell"]
    const arr = laptops.map((index,item)=>{
        return(
            <span key={index}>{item}</span>
        )
    })
    return(
         <div>
             <h3>Array list will be:</h3>
            
            <p>{arr}</p>
            
             
         </div>
        
         
    
    )

}
export default New;