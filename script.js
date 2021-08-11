//function to add items
var counter = 1
function addItem(){
    //declaration
    var labelValue = document.getElementById("todo").value
    var todoList = document.getElementById("list")

    //create input and label nodes
    //input1
    var input1 = document.createElement("input")
    input1.type = "checkbox"
    var listId = labelValue + counter
    input1.id = listId
    input1.className = "checkbox"
    input1.className = "custom-control-input"
    //label1
    var label1 = document.createElement("label")
    label1.htmlFor = labelValue + counter
    label1.className = "custom-control-label"
    label1.innerHTML = labelValue
    counter++

    //create a close button
    //span
    var btnSpan = document.createElement("span")
    btnSpan.id = "span1"
    btnSpan.setAttribute("aria-hidden",true)
    btnSpan.innerHTML = "&times"
    //button
    var btn = document.createElement("button")
    btn.setAttribute("aria-label","Close")
    btn.type = "button"
    btn.value = listId + "li"
    btn.id = "closeBtn"
    btn.className = "close rounded-circle"
    //add span to button
    btn.appendChild(btnSpan)

    //creating item divs........
    //inputDiv
    var inputDiv = document.createElement("div")
    inputDiv.id = "inputDiv"
    inputDiv.className = "custom-control custom-checkbox"
    //append input and label to div
    inputDiv.appendChild(input1)
    inputDiv.appendChild(label1)

    //closeDiv
    var closeDiv = document.createElement("div")
    closeDiv.id = "closeDiv"
    closeDiv.appendChild(btn) //append close button to div

    //creating a list item
    var listItem = document.createElement("li")
    listItem.id = listId + "li"
    listItem.className = "listItem list-group-item d-flex justify-content-between align-items-center"
    listItem.appendChild(inputDiv)
    listItem.appendChild(closeDiv)

    //append list to <ul>
    todoList.appendChild(listItem)
    btn.onclick = function(){
        listItem.remove()
    }

    //clear input field
    document.getElementById("todo").value='';
}

//Delete selected function
function deleteItem(){
    var doc = document.querySelectorAll(".listItem");
    doc.forEach(x => {
        if(x.querySelector('input').checked){
          x.remove()
        }
       })
}


var input = document.getElementById("todo");
input.addEventListener("keyup", function(event) { 
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

