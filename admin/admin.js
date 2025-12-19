// ================= ADMIN LOGIN =================
const loginForm = document.getElementById("adminLogin");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (
            e.target[0].value === "admin@realtrust.com" &&
            e.target[1].value === "admin123"
        ) {
            window.location.href = "admin-dashboard.html";
        } else {
            alert("Invalid admin credentials");
        }
    });
}


// ================= LOAD CONTACTS =================
async function loadContacts() {
    const res = await fetch("https://realtrust-dnd2.onrender.com/api/contact");
    const data = await res.json();

    const div = document.getElementById("contacts");
    div.innerHTML = "<h3>Contacts</h3>";

    data.forEach(c => {
        div.innerHTML += `
            <p><b>${c.fullName}</b> - ${c.email} - ${c.mobile} - ${c.city}</p>
            <hr>
        `;
    });
}


// ================= LOAD SUBSCRIBERS =================
async function loadSubscribers() {
    const res = await fetch("https://realtrust-dnd2.onrender.com/api/subscribe");
    const data = await res.json();

    const div = document.getElementById("subscribers");
    div.innerHTML = "<h3>Subscribers</h3>";

    data.forEach(s => {
        div.innerHTML += `<p>${s.email}</p>`;
    });
}


// ================= ADD PROJECT =================
document.getElementById("projectForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        image: e.target.image.value,
        name: e.target.name.value,
        description: e.target.description.value
    };

    const res = await fetch(
        "https://realtrust-dnd2.onrender.com/api/projects",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
    );

    const result = await res.json();
    alert(result.message);
    e.target.reset();
    loadProjects();
});


// ================= VIEW PROJECTS =================
async function loadProjects() {
    const res = await fetch("https://realtrust-dnd2.onrender.com/api/projects");
    const data = await res.json();

    const div = document.getElementById("projectList");
    div.innerHTML = "<h3>Projects</h3>";

    data.forEach(p => {
        div.innerHTML += `
            <div class="data-card">
                <img src="${p.image}" width="100">
                <h4>${p.name}</h4>
                <p>${p.description}</p>
            </div>
        `;
    });
}


// ================= ADD CLIENT =================
document.getElementById("clientForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        image: e.target.image.value,
        name: e.target.name.value,
        designation: e.target.designation.value,
        description: e.target.description.value
    };

    const res = await fetch(
        "https://realtrust-dnd2.onrender.com/api/clients",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
    );

    const result = await res.json();
    alert(result.message);
    e.target.reset();
    loadClients();
});


// ================= VIEW CLIENTS =================
async function loadClients() {
    const res = await fetch("https://realtrust-dnd2.onrender.com/api/clients");
    const data = await res.json();

    const div = document.getElementById("clientList");
    div.innerHTML = "<h3>Clients</h3>";

    data.forEach(c => {
        div.innerHTML += `
            <div class="data-card">
                <img src="${c.image}" width="80">
                <h4>${c.name}</h4>
                <p>${c.designation}</p>
                <p>${c.description}</p>
            </div>
        `;
    });
}


// ================= SECTION TOGGLE =================
function showSection(id) {
    document.querySelectorAll(".admin-section").forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
