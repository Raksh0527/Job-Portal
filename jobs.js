async function getJobs(){

try{

const response=await fetch("http://localhost:3000/api/findjobs");

const jobs=await response.json();

const container=document.getElementById("jobContainer");

container.innerHTML="";

jobs.forEach(job=>{

container.innerHTML+=`

<div class="job-card">
<button class="edit-icon" onclick="editJob('${job._id}')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg></button>
<h2 class="job-title">${job.Role}</h2>

<p class="company">${job.Company}</p>

<p class="info"><strong>📍 Location:</strong> ${job.Location}</p>

<p class="info"><strong>💰 Salary:</strong> ₹${job.Salary}</p>

<p class="info"><strong>🧑‍💻 Experience:</strong> ${job.Experience}</p>


<div class="btn-group">

<button class="details"
onclick="viewJob('${job._id}')">

View Details

</button>

<button class="apply"
onclick="applyJob('${job._id}')">

Apply

</button>

<button class="delete"
onclick="deleteJob('${job._id}')">

Delete

</button>

</div>

</div>

`;

});

}catch(error){

console.log(error);

}

}

const modal = document.getElementById("viewModal");

document.getElementById("close").addEventListener("click", () => {

    modal.style.display = "none";

});

async function viewJob(id){

try{



const response = await fetch(`http://localhost:3000/api/viewDetails/${id}`);

const job = await response.json();

const modBody = document.getElementById("modalBody");




modBody.innerHTML = `

    <div class="job-card">

<h2 class="job-title">${job.Role}</h2>

<p class="company">${job.Company}</p>

<p class="info"><strong>📍 Location:</strong> ${job.Location}</p>

<p class="info"><strong>💰 Salary:</strong> ₹${job.Salary}</p>

<p class="info"><strong>🧑‍💻 Experience:</strong> ${job.Experience}</p>

<p class="description">

${job.Description}

</p>
</div>
    `;
}
catch(error){
  console.error(error)
}
modal.style.display="flex";
 }


function applyJob(id){

window.location.href=`applyJob.html?id=${id}`;

}

const deleteModel = document.getElementById("deleteModal");
let SelectedJobId ="";

function deleteJob(id){

    SelectedJobId=id;

    deleteModel.style.display="flex";
}

 document.getElementById("confirmDelete").addEventListener("click",async confirmDelete =>{

      
        try{
        const response = await fetch(`http://localhost:3000/api/deleteJob/${SelectedJobId}`,
            {
            method:"DELETE"
            }
    );

    const result = await response.json();
    if(response.ok){
        alert(result.Message);
        deleteModel.style.display="none"; 
        getJobs();
    }
    }
    catch(error){
      console.error(error);
    }});

   
const cancelBtn = document.getElementById("cancelBtn");

    cancelBtn.addEventListener("click", (cancelBtn)=>{

    deleteModel.style.display="none";
    });
   


const editModel = document.getElementById("editModel");
const closeEdit = document.getElementById("closeEdit");

function closeEdits(){
     editModel.style.display="none";
};

let selectedJobId="";

  editModel.style.display="none";

    async function editJob(id){

    selectedJobId=id;


    try{
    
    const response = await fetch(`http://localhost:3000/api/viewDetails/${selectedJobId}`);

      console.log(response.status);

     
    const result = await response.json();


    const editBody = document.getElementById("editBody");

        editBody.innerHTML=`

        <div class="container">

    <h2>Create Edit Job</h2>

    <form id="jobForm">

        <div class="input-group">
            <label>Company Name</label>
            <input
            type="text"
            id="company" value="${result.Company}"
            required>
        </div>

        <div class="input-group">
            <label>Job Title</label>
            <input
            type="text"
            id="role" value="${result.Role}"
            required>
        </div>

     

        <div class="input-group">
            <label>Location</label>
            <input
            type="text"
            id="location" value="${result.Location}"
            required>
        </div>

        <div class="input-group">
            <label>Salary</label>
            <input
            type="number"
            id="salary" value="${result.Salary}"
            required>
        </div>

        <div class="input-group">
            <label>Experience</label>

    
            <select id="experience">

                <option>Fresher</option>
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3+ Years</option>

            </select>

        </div>

        <div class="input-group">

            <label>Skills</label>

            <input
            type="text"
            id="skills"
            placeholder="Node.js, Express, MongoDB" value="${result.Skills}">

        </div>

        <div class="input-group">

            <label>Description</label>

            <textarea
            id="description"
            rows="5"></textarea>

        </div>

        <button type="submit" id="updateBtn">
            Update 
        </button>

    </form> </div>`;

    document.getElementById("jobForm").addEventListener("submit", async (e) => {

    e.preventDefault();
   

    const updatedJob = {
        Company: document.getElementById("company").value,
        Role: document.getElementById("role").value,
        Location: document.getElementById("location").value,
        Salary: document.getElementById("salary").value,
        Experience: document.getElementById("experience").value,
        Skills: document.getElementById("skills").value,
        Description: document.getElementById("description").value
    };

    try {

        const response = await fetch(
            `http://localhost:3000/api/updateJob/${selectedJobId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedJob)
            }
        );

        const result = await response.json();

        if (response.ok) {
            alert(result.Message);
            editModel.style.display = "none";
            getJobs();
        } else {
            alert(result.Message);
        }

    } catch (error) {
        console.error(error);
    }
});
     editModel.style.display="flex";
     
    }
    catch(error){
       console.error(error);
    }
}



 getJobs();