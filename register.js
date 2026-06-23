document
.getElementById("registerForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        password:
        document.getElementById("password").value

    };

    try {

        const response = await fetch(
            "http://localhost:3000/api/register",
            {
                method:"POST",
                headers:{
                    "Content-Type":
                    "application/json"
                },
                body:JSON.stringify(data)
            }
        );

        const result =
        await response.json();

        alert(result.Message);
        

    }
    catch(error){

        console.log(error);

    }
    e.target.reset()
    window.location.replace("login.html");

});

