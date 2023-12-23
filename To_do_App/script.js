const inputBox = document.getElementById("search");
const listContainer = document.getElementById("list-container");



function AddTask(){
    if(inputBox.value!==''){

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();

    }
    else{
        alert("you must write something ");
    }
}


// listContainer.addEventListener("click" , function(e){
//     if(e.target.tagName ==="LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName === "Span"){
//         e.target.parentElement.remove();
//     }
// },false)



listContainer.addEventListener("click" , function(e){


    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})


function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);

}

function showData(){
    listContainer.innerHTML =localStorage.getItem("data");
}

showData();





