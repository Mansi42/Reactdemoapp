function Connect(){
    fetch("http://localhost:3000/user")
    .then((response) =>  response.json())
    .then((data) => console.log(data))

    return
}

export default Connect;