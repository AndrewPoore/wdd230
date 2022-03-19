// select the elements to manipulate (output to)
const date = document.querySelector("#date");

// derive the current date using a date object
const now = new Date();

const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

date.textContent = `${fullDate}`;


//Drop down menu
document.querySelector("button").addEventListener("click", dropDown);

function dropDown() {
    document.querySelector("#ul").classList.toggle("active");
}

//Modification Date
document.querySelector('#mod').textContent = document.lastModified;