// Variables from the form:
const titleInput = document.getElementById("Title");
const descriptionInput = document.getElementById("Description");
const dueDateInput = document.getElementById("dueDate");
const assignedToInput = document.getElementById("assignedTo");
const attachmentsInput = document.getElementById("formFileMultiple");
const attachmentsClearButton = document.querySelector('#formFileMultiple + button');
const addButton = document.getElementById("buttonAddToDo");
const todoList = document.getElementById("todoList");

// Event-listerners:

// Event listener for the Add Todo button
// Purpose: when user clicks, gather form data, add createdAt-timestamp,
// add id-timestamp, and then create card with createToDoItem(data),
// and reset the form.
addButton.addEventListener("click", function() {
    const data = getFormData();
    data.createdAt = new Date();
    data.id = Date.now();
    createToDoItem(data);
    document.getElementById("todoForm").reset();    
});

// Event listener for the cards todo-list
// Purpose: when user clicks a button, the eventlistener will find out what button,
// then trigger the correct response, to the closest card.
todoList.addEventListener("click", function(event){

    const target = event.target;

    // Delete card-method():
    if (target.closest(".delete-todo")){
        const card = target.closest(".card");
        card.remove();
        return;
    }

    // Mark as completed-method():
    if (target.closest(".complete-todo")) {
        const card = target.closest(".card");
        card.classList.toggle("bg-success-subtle");
        return;
    }

});

// Event listener for the attachementsClearButton
// Purpose: when user clicks a button, the eventlistener will clear the attachements.
attachmentsClearButton.addEventListener('click', function() {
    attachmentsInput.value = ''; // Tömmer filfältet
});

// Functions:

// Purpose: read all input values from the form and return as an object.
function getFormData(){
    return {
        title: titleInput.value.trim(),
        description: descriptionInput.value.trim(), 
        dueDate: dueDateInput.value,
        assignedTo: assignedToInput.value,
        attachments: attachmentsInput.files
    }
}

// Purpose: create a new card, with the data from the form.
function createToDoItem(data){
    const cardHTML = `
    <div class="card m-3 p-2" data-id="${data.id}">
        <div class="d-flex justify-content-between align-items-start">
            <div>
            <h6 class="mb-1"><b>${data.title}</b></h6>
            <small class="text-muted d-block">${data.description}</small>
        </div>

    <div class="d-flex align-items-start gap-2">
        <small class="text-muted">Created: ${data.createdAt.toLocaleString()}</small>
    <div class="btn-group">
      <button class="btn btn-outline-success btn-sm complete-todo">
        <i class="bi bi-check-lg"></i>
      </button>
      <button class="btn btn-outline-primary btn-sm edit-todo">
        <i class="bi bi-pencil"></i>
      </button>
      <button class="btn btn-outline-danger btn-sm delete-todo">
        <i class="bi bi-trash"></i>
      </button>
    </div> 
    </div> 
   
</div>
  <div class="mt-2 d-flex gap-2 align-items-center flex-wrap">
    <small class="text-muted"><i class="bi bi-calendar"></i> Due: ${data.dueDate}</small>
    <div class="badge bg-info"><i class="bi bi-person"></i> ${data.assignedTo}</div>
    <div class="badge bg-secondary"><i class="bi bi-paperclip"></i>${data.attachments.length} attachments.</div>
  </div>
</div>
`
todoList.innerHTML += cardHTML;
}

