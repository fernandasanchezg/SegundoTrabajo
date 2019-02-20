var students = ["carlos", "juan"];

getAll = function() {
  var data = "";
  for (i = 0; i < students.length; i++) {
    data += "<tr class='row'>";
    data += "<td>" + i + "</td>";
    data += "<td>" + students[i] + "</td>";
    data += "<td><button onclick='edit(" + i + ")'>Editar</button></td>";
    data +=
      "<td><button onclick='app.delete(" + i + ")'>Eliminar</button></td>";
    data += "</tr>";
  }
  document.getElementById("students").innerHTML = data;
};

add = function() {
  var name = document.getElementById("studentName").value;
  students.push(name);
  document.getElementById("studentName").value = "";
  getAll();
};

edit = function(index) {
  document.getElementById("studentId").value = index;
  document.getElementById("studentName").value = students[index];
  document.getElementById("btnNew").style.display = "none";
  document.getElementById("btnUpdate").style.display = "inline";
};

update = function() {
  var id = document.getElementById("studentId").value;
  var name = document.getElementById("studentName").value;
  document.getElementById("btnUpdate").style.display = "none";
  document.getElementById("btnNew").style.display = "inline";
  document.getElementById("studentName").value = "";

  students.splice(id, 1, name);
  getAll();
};

this.delete = function(index) {
  students.splice(index, 1);
  getAll();
};

getAll();
