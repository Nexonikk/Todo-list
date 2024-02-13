const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let image = document.getElementById("unchecked-img");
// const eventButton = document.getElementById("add-btn");

function handleCheck(e) {
    console.log(e.target.tagName)
    if (e.target.tagName === "LI") {
        image.src = "/checked.png";
    }
}

inputBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
        console.log("Entered");
    }
})


function addTask() {
    if (inputBox.value === "") {
        alert("You should write something!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = `<img src="/unchecked.png" alt="unchecked" id="unchecked-img">`
        li.classList.add("list-item")
        li.innerHTML += `<p>${inputBox.value}</p>`
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "x"
        li.appendChild(span)
    }
    inputBox.value = ""
    storeData()
}

listContainer.addEventListener("click", (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName === "IMG") {
        if (e.target.src.includes("unchecked.png")) {
            e.target.src = "/checked.png"
            setTimeout(() => {
                e.target.parentElement.remove();
                storeData();
            }, 1500);
        }
        else {
            e.target.src = "/unchecked.png"
        }
        storeData()
    }
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        storeData()
    }
})

function storeData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}


showTask();