
const searchResult = document.getElementById("search-res");
document.getElementById("search-btn").addEventListener("click", async (e) => {
    e.preventDefault();

    const keyword = document.getElementById("search-box").value.trim();

    console.log("Keyword:", keyword);

    if (!keyword) {
        alert("Please enter a role or company name.");
        return;
    }

    try {
        const response = await fetch(
            `http://localhost:3000/api/search?keyword=${encodeURIComponent(keyword)}`
        );

        const result = await response.json();

        const container = document.getElementById("search-results");

container.innerHTML = "";

searchResult.style.display="inline";

if (result.length === 0) {

    container.innerHTML = "<h3>No Jobs Found</h3>";

} else {

    result.forEach(job => {

        container.innerHTML += `
            <div class="card">
                <h3>${job.Role}</h3>
                <p><strong>Company:</strong> ${job.Company}</p>
                <button>Apply Now</button>
            </div>
        `;

    });

}} 
catch (error) {
        console.error(error);
    }
});


document.getElementById("logout").addEventListener("click", (e)=>{

    e.preventDefault();
    alert("Succesfully Logged-Out");
    window.location.replace("login.html");
})