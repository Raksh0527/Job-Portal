document.getElementById("loginForm")
.addEventListener( "submit", async (e) => {
    e.preventDefault();

 const logindata = {

    email: document.getElementById("email").value,
    password: document.getElementById("password").value

 }

 try{

 const response = await fetch("http://localhost:3000/api/login",
    {
        method:"POST",
        headers:{
            "Content-Type"
            :"application/json"
    },
    body:JSON.stringify(logindata)
}

 );

    const result =
        await response.json();

        alert(result.Message);

    if(response.ok){
        window.location.replace("home.html");
    }
    }
    catch(error){

        console.log(error);
    }

});