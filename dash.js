function openCity(evt, targetID) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(targetID).style.display = "flex";
    evt.currentTarget.className += " active";

    if(targetID == "Workout"){
        loadList([["Squats", "125 lbs"], ["Hip Thrust", "3x10 65 lbs"], 
        ["Leg Extensions", "3x15 40 lbs"], ["Swimming", "1000m"]], targetID);
    } else{
        // loadList([["Coffee", "1 cup"]], targetID);
    }
    
}


function loadList(tableData, targetID) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    // table.style.display = "block";
    var targetTable = document.getElementById(targetID+'Table');
    // targetDiv.parentNode.insertBefore(table, targetDiv.nextSibling);
    targetTable.replaceWith(table);
  }
  
  loadList([["Squats", "125 lbs"], ["Hip Thrust", "3x10 65 lbs"], 
            ["Leg Extensions", "3x15 40 lbs"], ["Swimming", "1000m"]], "Workout");

var workoutTable = document.getElementById('WorkoutTable');
var dietTable = document.getElementById('DietTable');

var workoutModal = document.getElementById("workoutModal");
var dietModal = document.getElementById("dietModal")
// Get the button that opens the modal
var workoutEditBtn = document.getElementById("workoutEdit");
var dietEditBtn = document.getElementById("dietEdit");

// Get the <span> element that closes the modal
var workoutSpan = document.getElementsByClassName("close-workout")[0];
var dietSpan = document.getElementsByClassName("close-diet")[0];

// When the user clicks the button, open the modal 
workoutEditBtn.onclick = function() {
    workoutModal.style.display = "block";
}
dietEditBtn.onclick = function() {
    dietModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
workoutSpan.onclick = function() {
    workoutModal.style.display = "none";
}
dietSpan.onclick = function() {
    dietModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == workoutModal) {
    workoutModal.style.display = "none";
  }
  if (event.target == dietModal) {
    dietModal.style.display = "none";
  }
}

function todoAdd() {
  var list = document.getElementById('todoList');
  list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    }
  }, false);

  var entry = document.getElementById('todoInput').value;
  var newItem = document.createElement('li');

  if (entry === '') {
    alert("Empty entry");
  } else {
    var spanDiv = document.createElement('div');
    var spanValue = document.createElement('span');
    var spanBtn = document.createElement('button');
    spanBtn.className = "remove";
    spanDiv.className = "modal-span";

    spanValue.innerText = entry;
    spanBtn.innerText = "x";
    spanBtn.addEventListener('click', todoDelete);
    
    spanDiv.appendChild(spanValue);
    spanDiv.appendChild(spanBtn);
    newItem.appendChild(spanDiv);

    document.getElementById('todoList').appendChild(newItem);
    dietTable.appendChild(newItem);
  }

  document.getElementById('todoInput').value = "";

  function todoDelete() {
    document.getElementById('todoList').removeChild(newItem);
    dietTable.removeChild(newItem); 
  }
}

function updateDietTable(){
  
}