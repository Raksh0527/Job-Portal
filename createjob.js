document
.getElementById("jobForm")
.addEventListener("submit", async(e)=>{

e.preventDefault();

const jobData={

Company:document.getElementById("company").value,

Role:document.getElementById("role").value,

Location:document.getElementById("location").value,

Salary:document.getElementById("salary").value,

Experience:document.getElementById("experience").value,

Skills:document.getElementById("skills").value,

Description:document.getElementById("description").value

};

try{

const response=await fetch("http://localhost:3000/api/createJob",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(jobData)

});

const result=await response.json();

alert(result.Message);

if(response.ok){

document.getElementById("jobForm").reset();

}

}catch(error){

console.log(error);

alert("Something went wrong!");

}

});