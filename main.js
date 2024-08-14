const result = document.getElementById("result")
const resultTodos = document.getElementById("resultTodos")
const pagination = document.getElementById("pagination")
const photo = document.getElementById("photo")

let currentPage = 1
let recordsPerPage = 10
let totalPages

document.addEventListener("DOMContentLoaded", () => {
    getUsers()
    getTodos()
    getPhotos()
})

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    displayUser(users)
}


async function getPhotos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    const photos__id = await response.json()
}

async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await response.json()
    // displayTodos(todos)

    totalPages = Math.ceil(todos.length / recordsPerPage)
    displayPage(todos, currentPage)
    createPaginationButtons(todos)


}

function displayUser(users) {
    result.innerHTML = ""
    users.forEach((val, ind)=> {
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${ind + 1}</td>
            <td>${val.name}</td>
            <td>${val.username}</td>
            <td>${val.email}</td>
            <td>${val.address.street}</td>
            <td>${val.phone}</td>
            <td>${val.website}</td>
        `
        result.appendChild(tr)
    });
}

function displayPhotos(params) {
    
}

function displayPage(todos, page) {
    resultTodos.innerHTML = ""

    const start = (page - 1) * recordsPerPage
    const end = start + recordsPerPage
    const paginatedTodos = todos.slice(start, end)

    paginatedTodos.forEach((val, ind) => {
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${val.id}</td>
            <td>${val.title}</td>
            <td>${val.completed ? "Yes" : "No"}</td>
        `
        resultTodos.appendChild(tr)
    })
}


function createPaginationButtons(todos) {
    pagination.innerHTML = ""
    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button")
        btn.className = "btn border-primary  mx-1 my-1"
        btn.innerText = i

        btn.addEventListener("click", () => {
            currentPage = i
            displayPage(todos, currentPage)
            updatePaginationButtons(i)
        })
        pagination.appendChild(btn)
    }
}


function updatePaginationButtons(activePage) {
    Array.from(pagination.children).forEach((btn,index) => {
        btn.className = index + 1 === activePage ? "btn btn-primary mx-1 my-1" : "btn border-primary mx-1 my-1"
    })    
}















// ===================================================================== below this is F-G

// const resultTodos = document.getElementById("resultTodos")
// const pagination = document.getElementById("pagination")
// let currentPage = 1
// const recordsPerPage = 10
// let totalPages

// document.addEventListener("DOMContentLoaded", () => {
//     getTodos()
// })

// async function getTodos() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const todos = await response.json()

//     // Umumiy sahifalar sonini hisoblash
//     totalPages = Math.ceil(todos.length / recordsPerPage)

//     // Hozirgi sahifadagi ma'lumotlarni ko'rsatish
//     displayPage(todos, currentPage)

//     // Sahifalash tugmalarini yaratish
//     createPaginationButtons(todos)
// }

// function displayPage(todos, page) {
//     resultTodos.innerHTML = "" // Oldingi ma'lumotlarni tozalash
//     const start = (page - 1) * recordsPerPage
//     const end = start + recordsPerPage
//     const paginatedTodos = todos.slice(start, end)

//     // Hozirgi sahifadagi ma'lumotlarni ko'rsatish
//     paginatedTodos.forEach((todo, index) => {
//         let tr = document.createElement("tr")
//         tr.innerHTML = `
//             <td>${start + index + 1}</td>
//             <td>${todo.id}</td>
//             <td>${todo.title}</td>
//             <td>${todo.completed ? 'Yes' : 'No'}</td>
//         `
//         resultTodos.appendChild(tr)
//     })
// }

// function createPaginationButtons(todos) {
//     pagination.innerHTML = "" // Tugmalarni tozalash
//     for (let i = 1; i <= totalPages; i++) {
//         let btn = document.createElement("button")
//         btn.className = "btn btn-primary mx-1"
//         btn.innerText = i

//         // Tugmani bosganda sahifani o'zgartirish
//         btn.addEventListener("click", () => {
//             currentPage = i
//             displayPage(todos, currentPage)
//         })
//         pagination.appendChild(btn)
//     }
// }
