// Variables from the form:
const titleInput = document.getElementById("Title");
const descriptionInput = document.getElementById("Description");
const dueDateInput = document.getElementById("dueDate");
const assignedToInput = document.getElementById("assignedTo");
const attachmentsInput = document.getElementById("formFileMultiple");
const addButton = document.getElementById("buttonAddToDo");
const todoList = document.getElementById("todoList");

// Function: getFormData
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

// Event listener for the Add Todo button
// Purpose: when user clicks, gather form data, add createdAt-timestamp, and log it.
addButton.addEventListener("click", function() {
    const data = getFormData();
    data.createdAt = new Date();
    createToDoItem(data);    
});

function createToDoItem(data){
    const cardHTML = `
    <div class="card m-3 p-2">
        <div class="d-flex justify-content-between align-items-start">
            <div>
            <h6 class="mb-1"><b>${data.title}</b></h6>
            <small class="text-muted d-block">${data.description}</small>
        </div>

    <div class="d-flex align-items-start gap-2">
        <small class="text-muted">Created: ${data.createdAt.toLocaleString()}</small>
    <div class="btn-group">
      <button class="btn btn-outline-success btn-sm">
        <i class="bi bi-check-lg"></i>
      </button>
      <button class="btn btn-outline-primary btn-sm">
        <i class="bi bi-pencil"></i>
      </button>
      <button class="btn btn-outline-danger btn-sm">
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