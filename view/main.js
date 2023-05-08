let guardar = function(){
    fetch('http://localhost:3000/usuario',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            "username":"mi",
            "password":"123",
            "email":"ca@mail.com"
        })
    })
}
document.querySelector("button").addEventListener("click",(e)=>{
    guardar()
})
