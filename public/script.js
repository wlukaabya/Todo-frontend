"use strict"
readTodos()

async function readTodos(){
  try {
    const olTodo = document.getElementById('list')
    const result = await fetch('http://localhost:3000/todos',{method:'GET'})
    const todos = await result.json();
    var counter =1

    todos.forEach(t=> {
      const li = document.createElement('li')
      li.className = "listItem list-group-item d-flex justify-content-between align-items-center"
      li.id = t.todo_id
      var input1 = document.createElement("input")
      var label1 = document.createElement("label")

      //create checkbox
      input1.type = "checkbox"
      input1.id = t.todo_id + counter;
      input1.className = "checkbox"
      input1.className = "custom-control-input"

      //create label
      label1.htmlFor = t.todo_id + counter;
      label1.className = "custom-control-label"
      label1.innerHTML = t.description
      counter++
      
      //creating item divs........
      //inputDiv
      var inputDiv = document.createElement("div")
      inputDiv.id = "inputDiv"
      inputDiv.className = "custom-control custom-checkbox"
      //append input and label to div
      inputDiv.appendChild(input1)
      inputDiv.appendChild(label1)

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
    btn.value = 'btn'+t.todo_id
    btn.id = 'btn'+t.todo_id
    btn.className = "close rounded-circle"
    //add span to button
    btn.appendChild(btnSpan)

    //closeDiv
    var closeDiv = document.createElement("div")
    closeDiv.id = "closeDiv"
    closeDiv.appendChild(btn) //append close button to div

      li.appendChild(inputDiv)
      li.appendChild(closeDiv)
      olTodo.appendChild(li)
      
      let id = [t.todo_id]
      btn.onclick =()=>deleteTodo(id)
    })
    
  } catch (err) {
    console.error(err)
  }
}

async function addTodos(){
  try {
    const jsonRequest={}
    jsonRequest.description = document.getElementById('todo').value
    
    const results = await fetch('http://localhost:3000/todos',{method:'POST',
    headers:{'content-type':'application/json'},body:JSON.stringify(jsonRequest)})

    await results.json()
    
 

  } catch (err) {
    
    console.error(err)
  }
 
}

//delete function
async function deleteTodo(ids){
  try {
    await ids.forEach(async id => {
      const results = await fetch('http://localhost:3000/todos',{method:'DELETE',headers:{'content-type':'application/json'},
      body:JSON.stringify({'todo_id':id})})

      await results.json()
    })
     location.reload();
    
  } catch (err) {
    console.error(err)
  }
}


//Delete selected function
function deleteItem(){
  try{
    var ids = [];
  var doc = document.querySelectorAll(".listItem");
  
  //var ids = doc.map(x => x.id)
doc.forEach( x => {
      if(x.querySelector('input').checked){
        ids.push(Number(x.id));
      }
     })
     deleteTodo(ids);
     location.reload();
    }
    
    catch(err){
      console.error(err)
    }
}


var input = document.getElementById("todo");
input.addEventListener("keyup", function(event) { 
if (event.keyCode === 13) {
  event.preventDefault();
  document.getElementById("submit").click();
}
});

