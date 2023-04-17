"use strict"

/**
 * Mit einem Array können wir z.B. eine komplette Teilnehmerliste
 * speichern!
 */
let students = [
  "Müller, Manuel ", "Koch, Franzi", "Schmidt, Max", "Müller, Manuel"
]

students.push('Renz, Carol')

const addStundentButton = document.getElementById("add-student")
const nameInput = document.getElementById("nameInput")
const studentList = document.getElementById("students-list")
const agbInput = document.getElementById("agbInput")

function createListItem(name) {
  let nameNeu = document.createTextNode(name)

  let liElement = document.createElement("li");

  liElement.appendChild(nameNeu)
  liElement.classList.add("list-group-item")

  studentList.appendChild(liElement)
}

function createList() {
  studentList.innerHTML = ""
  for (let i = 0; i < students.length; i++) {
    createListItem(students[i])
  }
}

addStundentButton.addEventListener("click",  () => {
  if (!agbInput.checked) {
    alert("Bitte akzeptieren Sie die AGBs!")
    return
  }
  let text = nameInput.value

  if (text === "") {
    agbInput.checked = false;
    return
  }

    students.push(text)
    createList()

    agbInput.checked = false;
    nameInput.value = ""
})

createList()