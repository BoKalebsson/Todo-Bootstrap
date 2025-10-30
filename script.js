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
    console.log(data);    
});