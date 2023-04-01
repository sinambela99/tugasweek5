// create students array
let arrStudents = [];

// function Student(firstname, lastname){

// }

class Student {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

function openTab(evt, cityName) {
  showTableData();
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

async function setAction(form) {
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;

  let newStudent = await new Student(firstname, lastname);
  await arrStudents.push({
    firstname: newStudent.firstname,
    lastname: newStudent.lastname,
  });
  // console.log(arrStudents)
}

// validasi

function showTableData() {
  var outputHTML = "";
  outputHTML += "<table border='2px' width='400'>";

  outputHTML += "<tr><td> First Name </td> <td> Last Name </td></tr>";
  console.log(arrStudents);
  for (let i = 0; i < arrStudents.length; i++) {
    console.log(arrStudents[i].firstname);
    outputHTML +=
      "<tr><td>" +
      arrStudents[i].firstname +
      "</td>" +
      "<td>" +
      arrStudents[i].lastname +
      "</td></tr>";
  }

  outputHTML += "</table>";

  document.getElementById("empTable").innerHTML = outputHTML;
}
