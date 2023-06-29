
function ArrayOfObjects(){

let details=[
{
       "id":4,
    "name":"nargis",
    "profession":"CSE1",
    "role":"student"
},
{
    "id":5,
    "name":"mansi",
    "profession":"IT",
    "role":"student"
},

{
    "id":6,
    "name":"shruti",
    "profession":"IT",
    "role":"student"
}
]

const newArray = details.map((item)=>{
    return(
        <tr>
            <td>{item.id=item.id + 10}</td>
            <td>{item.name=item.name + ":)"}</td>
            <td>{item.profession=item.profession + "1"}</td>
            <td>{item.role=item.role + "batch2"}</td>
        </tr>
    )
})

return (
    <table border="2">
        
    <tr>
        <td>{newArray}</td>
    </tr>
    </table>
)
}
export default ArrayOfObjects;
