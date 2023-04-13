var workoutList = [["Squats", "125 lbs", "Not Attempted"], ["Hip Thrust", "3x10 65 lbs", "Not Attempted"], 
["Leg Extensions", "3x15 40 lbs", "Not Attempted"], ["Swimming", "1000m", "Not Attempted"]];

document.getElementById("todoInput").addEventListener("focus", showKeyboard);
document.getElementById("todoInput").addEventListener("focusout", hideKeyboard);

function showKeyboard() {
    document.getElementById("fakeKeyboard").innerHTML = "<img id='keeb' src='/keyboard.png'>";
  }

function hideKeyboard() {
    document.getElementById("fakeKeyboard").innerHTML = "";
}


function openCity(evt, targetID) {
    var workoutLs = localStorage.getItem("workoutListStore");
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
        loadList(workoutLs, targetID);
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
  
loadList(workoutList, "Workout");

var workoutTable = document.getElementById('WorkoutTable');
var dietTable = document.getElementById('DietTable');

var workoutModal = document.getElementById("workoutModal");
var dietModal = document.getElementById("dietModal")
// Get the button that opens the modal
var workoutEditBtn = document.getElementById("workoutEdit");
// var dietEditBtn = document.getElementById("dietEdit");
 
// Get the <span> element that closes the modal
var workoutSpan = document.getElementsByClassName("close-workout")[0];
var dietSpan = document.getElementsByClassName("close-diet")[0];

// When the user clicks the button, open the modal 
workoutEditBtn.onclick = function() {
    workoutModal.style.display = "block";

    var res = "";
    for(var i = 0; i < workoutList.length; i++) {
        var temp = workoutList[i];
        var idName = "workoutStatus" + i;
        res += "<p style='color: #035AA6'>" + temp[0] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + temp[1] + "</p>";
        res += "<select id=" + idName + "><option value='notAttempted'>Not Attempted</option><option value='completed'>Completed</option><option value='failed'>Failed</option></select>";
    }
    document.getElementById("workoutInput").innerHTML = res;
}
// dietEditBtn.onclick = function() {
//     dietModal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
workoutSpan.onclick = function() {
    var workout0 = document.getElementById("workoutStatus0");
    workoutList[0][2] = workout0.options[workout0.selectedIndex].text;
    workoutModal.style.display = "none";
    console.log(workoutList);
}
// dietSpan.onclick = function() {
//     dietModal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == workoutModal) {
//     workoutModal.style.display = "none";
//   }
//   if (event.target == dietModal) {
//     dietModal.style.display = "none";
//   }
// }

/*
  References: 
  https://www.w3schools.com/howto/howto_js_todolist.asp
  https://www.educative.io/answers/how-to-create-a-simple-to-do-list-with-html-css-and-js
  */
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
    var spanValue = document.createElement('span');
    var spanBtn = document.createElement('button');
    spanBtn.className = "remove";
    
    spanValue.innerText = entry;
    spanBtn.innerText = "x";
    spanBtn.addEventListener('click', todoDelete);
    
    newItem.appendChild(spanValue);
    newItem.appendChild(spanBtn);
    
    document.getElementById('todoList').appendChild(newItem);
  }

  document.getElementById('todoInput').value = "";

  function todoDelete() {
    document.getElementById('todoList').removeChild(newItem);
  }
}