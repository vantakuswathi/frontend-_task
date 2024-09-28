let todoele = document.getElementById("taskInput");
let tasklist = document.getElementById("taskList");

// Event listener for the Add Task button
document.getElementById("addTaskBtn").onclick = function() {
    // Check if the input field is empty
    if (todoele.value.trim().length == 0) {
        alert("Enter a task");
    } else {
        // Add the task to the list
        tasklist.innerHTML += `
        <div class="task">
            <span id="work">${todoele.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button>
        </div>`;

        // Select all delete buttons
        let alltasks = document.querySelectorAll('.del');

        // Attach the delete event to the new task's delete button
        for (let i = 0; i < alltasks.length; i++) {
            alltasks[i].onclick = function() {
                // Remove the task from the list
                this.parentNode.remove();
            };
        }

        // Clear the input field after adding the task
        todoele.value = "";
    }
};
