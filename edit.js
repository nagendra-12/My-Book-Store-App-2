
let table = document.getElementById('table')


let bodyEl = document.getElementById('body')

let pdfBodyEl = document.getElementById('body1')

let addButtonEl = document.getElementById('addButton')
let updateBtnEl = document.getElementById('updateBtn')



let pdfSaveBtnEl = document.getElementById('pdfSave')
let bookStoreEl = document.getElementById('bookStore')

let firstNameEl = document.getElementById('first-name')
let lastNameEl = document.getElementById('last-name')
let emailEl = document.getElementById('email')
let passwordEl = document.getElementById('password')
let confirmPasswordEl = document.getElementById('confirm-password')
let signUpBtnEl = document.getElementById('signUp')
let logInEl = document.getElementById('logIn')
let loginPageEl = document.getElementById('loginPage')
let signUpPageEl = document.getElementById('signUpPage')
let createAccountEl = document.getElementById('createAccount')
let loginAccountEl = document.getElementById('loginAccount')
let usernameEl = document.getElementById('username')
let loginPasswordEl = document.getElementById('loginPassword')
let logOutBtnEl = document.getElementById('logOutBtn')
let totalBooksEl = document.getElementById('totalBooks')
logOutBtnEl.onclick = function() {
    logOutBtnEl.href = './signUp.html'
}

//Get User Details From Local Storage
function getUserDetailsFromLocalStorage() {
    let stringifiedUserDetails = localStorage.getItem('userDetails')
    let parsedUserDetails = JSON.parse(stringifiedUserDetails)
    if (parsedUserDetails === null) {
        return []
    } else {
        return parsedUserDetails
    }
}
let userDetails = getUserDetailsFromLocalStorage()

//Create User When User Clicked on Sign Up Button
function createUser() {
    
    document.onclick = function() {
    signUpBtnEl.onclick = function () {
        let userCount = userDetails.length
        userCount = userCount + 1
        if (passwordEl.value === '') {
            swal("Oops", "Please Enter Your Password!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (confirmPasswordEl.value === '') {
            swal("Oops", "Please Enter Your Confirm Password!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (passwordEl.value.length < 8) {
            swal("Oops", "Password Must be Greater than or Equal to 8 Characters", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (passwordEl.value !== confirmPasswordEl.value) {
            swal("Oops", "Password and Confirm Password Must be Same", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (firstNameEl.value === '') {
            swal("Oops", "Please Enter Your First Name!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (lastNameEl.value === '') {
            swal("Oops", "Please Enter Your Last Name!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (emailEl.value === '') {
            swal("Oops", "Please Enter Your Email Address!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (!(emailEl.value.includes('@'))) {
            swal("Oops", "Please Enter a Valid Email Address!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if ( !(emailEl.value.includes('.com'))) {
            swal("Oops", "Please Enter a Valid Email Address!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (emailEl.value.includes(',', '!')) {
            swal("Oops", "Please Enter a Valid Email Address!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (emailEl.value.includes('#')) {
            swal("Oops", "Please Enter a Valid Email Address!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (emailEl.value.includes('~')) {
            swal("Oops", "Please Enter a Valid Email Address!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (!isNaN(emailEl.value[0])) {
            swal("Oops", "Please Enter a Valid Email Address!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        } else if (!isNaN(emailEl.value[emailEl.value.length-1])) {
            swal("Oops", "Please Enter a Valid Email Address!", "error")
            passwordEl.value = ''
            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            confirmPasswordEl.value = ''
            return []
        }
        let newUser = {
            firstName: firstNameEl.value.toUpperCase(),
            lastName: lastNameEl.value.toUpperCase(),
            email: emailEl.value,
            password: passwordEl.value,
            confirmPassword: confirmPasswordEl.value,
            uniqueNo: userCount
        }
        userDetails.push(newUser)
        let userId = 'user' + newUser.uniqueNo
        newUser.id = userId
        firstNameEl.value = ''
        lastNameEl.value = ''
        emailEl.value = ''
        passwordEl.value = ''
        confirmPasswordEl.value = ''
        swal("Good job!", "You have Registered Successfully!", "success");

        //Save User Details into the Local Storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails))
        signUpPageEl.classList.add('d-none')
        loginPageEl.classList.add('d-block')

        //Compare User Registered Details and Login Details with Find Index Method
            logInEl.onclick = function() {
                let userIndex = userDetails.findIndex(function(eachUser) {
                    let newUserId = 'user' + eachUser.uniqueNo
                    if (userId === newUserId) {
                        return true
                    } else {
                        return false
                    }
                })
                //If Mached Details it allows to Book Store
                if ((userDetails[userIndex].email === usernameEl.value) && (userDetails[userIndex].password === loginPasswordEl.value)) {
                    swal("Good job!", "You have Logged In Successfully!", "success");
                    logInEl.href = './index.html'
                    usernameEl.value = ''
                    loginPasswordEl.value = ''
                
                //If Mismatched Details it shows Error to the User
                } else {
                    if (usernameEl.value === '') {
                        swal("Oops", "Please Enter Your Username!", "error")
                    } else if (loginPasswordEl.value === '') {
                        swal("Oops", "Please Enter Your Password!", "error")
                    } else if ((userDetails[userIndex].email !== usernameEl.value) || (userDetails[userIndex].password !== loginPasswordEl.value)) {
                        swal("Oops", "Username/Password was Incorrect!", "error")
                    }
                }
            }
        }
        
    }
}
createUser()



let downloadBtl = document.getElementById('download')

//Settings for Pdf (Stored in a Variable) File Which user Downloaded File 
let opt = {
    margin: [30, 7, 30, 15], //top, left, buttom, right,
    filename: 'My Book Store',
    image: { type: 'pdf', quality: 5 },
    html2canvas: { dpi: 1200, scale: 2, letterRendering: true, useCORS: true },
    pagebreak: { mode: 'avoid-all' },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
};

let generateBtn = document.getElementById('generate')




//Get Books List From Local Storage
function getBooksListFromLocalStorage() {
    let stringifiedBooksList = localStorage.getItem('booksList')
    let parsedBooksList = JSON.parse(stringifiedBooksList)
    if (parsedBooksList === null) {
        return []
    } else {
        return parsedBooksList
    }
}
let booksList = getBooksListFromLocalStorage()


//Show to User How many books in the store based on length of the bookslist array when open the page
totalBooksEl.textContent = booksList.length

//Edit Book when clicked on Edit Button based on book individual index value in bookslist array
function onEditList(bookId, authorId, priceId) {
    let bookEditEl = document.getElementById(bookId)
    bookEditEl.removeAttribute('readonly', 'readonly')
    bookEditEl.focus()

    let authorEditEl = document.getElementById(authorId)
    authorEditEl.removeAttribute('readonly', 'readonly')

    let priceEditEl = document.getElementById(priceId)
    priceEditEl.removeAttribute('readonly', 'readonly')

}

//Update bookslist and update in local storage also when updated the data or deleted the book
updateBtnEl.onclick = function () {
    swal("Good job!", "You have updated successfully!", "success");
    totalBooksEl.textContent = booksList.length

    localStorage.setItem('booksList', JSON.stringify(booksList))

}


//Download Pdf File of Books When User Clicked on Download Button
downloadBtl.onclick = function () {
    swal("Good job!", "You have downoaded successfully!", "success");


    let bookStoreEl = document.getElementById('bookStore')
    html2pdf()
        .set(opt)
        .from(bookStoreEl)
        .save()

}


//Delete the Book from the bookslist based on book individual index value in bookslist array
function onDeleteList(listId) {
    let x = confirm('Are you sure want to delete?')
    if (x === true) {

        let listElement = document.getElementById(listId)
        bodyEl.removeChild(listElement)

        let deleteIndex = booksList.findIndex(function (eachList) {
            let eachListId = 'list' + eachList.uniqueNo
            if (eachListId === listId) {
                return true
            } else {
                return false
            }

        })
        booksList.splice(deleteIndex, 1)
        swal("Good job!", "You have deleted successfully!", "success");
    }

}

//Save updated data in bookslist based on book individual index value in bookslist array
function onSaveBook(bookId, authorId, priceId) {
    let saveBook = document.getElementById(bookId)
    saveBook.setAttribute('readonly', 'readonly')
    let saveAuthor = document.getElementById(authorId)
    saveAuthor.setAttribute('readonly', 'readonly')
    let savePrice = document.getElementById(priceId)
    savePrice.setAttribute('readonly', 'readonly') 

    if (saveBook.value === '') {
        swal("Oops", "Please Enter the Book Name!", "error")
        saveBook.removeAttribute('readonly', 'readonly')
        saveAuthor.removeAttribute('readonly', 'readonly')
        savePrice.removeAttribute('readonly', 'readonly')
        
    } else if (saveAuthor.value === '') {
        swal("Oops", "Please Enter Author Name!", "error")
        saveBook.removeAttribute('readonly', 'readonly')
        saveAuthor.removeAttribute('readonly', 'readonly')
        savePrice.removeAttribute('readonly', 'readonly')
        
    } else if (savePrice.value === '') {
        swal("Oops", "Please Enter the Price!", "error")
        saveBook.removeAttribute('readonly', 'readonly')
        saveAuthor.removeAttribute('readonly', 'readonly')
        savePrice.removeAttribute('readonly', 'readonly')
        
    } else {
        swal("Good job!", "You have save successfully!", "success");
    }

    let saveIndex = booksList.findIndex(function (eachList) {
        let bookEditElId = 'book' + eachList.uniqueNo
        let authorEditElId = 'author' + eachList.uniqueNo
        let priceEditElId = 'price' + eachList.uniqueNo


        if (bookEditElId === bookId && authorEditElId === authorId && priceEditElId === priceId) {
            return true
        } else {
            return false
        }

    })
    booksList[saveIndex].book = saveBook.value
    booksList[saveIndex].author = saveAuthor.value
    booksList[saveIndex].price = savePrice.value


    
}

addButtonEl.onclick = function () {
    onAddList()
}


//Create and append books list and access each book from bookslist array with passing parrameter 'list'
function createAndAppendList(list) {

    //Giving Unique No to each element using parameter
    let listId = 'list' + list.uniqueNo
    let bookId = 'book' + list.uniqueNo
    let authorId = 'author' + list.uniqueNo
    let priceId = 'price' + list.uniqueNo

    let tableRow = document.createElement('tr')
    tableRow.id = listId
    bodyEl.appendChild(tableRow)

    let tableData1 = document.createElement('td')
    tableRow.appendChild(tableData1)

    let data1Input1 = document.createElement('input')
    data1Input1.id = 'data1'
    data1Input1.type = 'text'
    data1Input1.id = bookId
    data1Input1.classList.add('text')
    data1Input1.classList.add('form-control')
    data1Input1.value = list.book.charAt(0).toUpperCase() + list.book.slice(1)
    data1Input1.setAttribute('readonly', 'readonly')
    data1Input1.setAttribute('onkeydown', 'return /[a-z]/i.test(event.key)')

    tableData1.appendChild(data1Input1)



    let tableData2 = document.createElement('td')
    tableRow.appendChild(tableData2)

    let data1Input2 = document.createElement('input')
    data1Input2.type = 'text'
    data1Input2.id = authorId
    data1Input2.value = list.author
    data1Input2.value = list.author.charAt(0).toUpperCase() + list.author.slice(1)
    data1Input2.classList.add('text')
    data1Input2.classList.add('form-control')
    data1Input2.setAttribute('readonly', 'readonly')
    data1Input2.setAttribute('onkeydown', 'return /[a-z]/i.test(event.key)')
    tableData2.appendChild(data1Input2)


    let tableData3 = document.createElement('td')
    tableRow.appendChild(tableData3)


    let data1Input3 = document.createElement('input')
    data1Input3.type = 'number'
    data1Input3.id = priceId
    data1Input3.value = list.price
    data1Input3.classList.add('text')
    data1Input3.classList.add('form-control')
    data1Input3.setAttribute('readonly', 'readonly')
    tableData3.appendChild(data1Input3)

    let pdfRowEl = document.createElement('tr')
    pdfBodyEl.appendChild(pdfRowEl)


    let pdfData1 = document.createElement('td')
    pdfData1.textContent = data1Input1.value
    pdfRowEl.appendChild(pdfData1)

    let pdfData2 = document.createElement('td')
    pdfData2.textContent = data1Input2.value
    pdfRowEl.appendChild(pdfData2)

    let pdfData3 = document.createElement('td')
    pdfData3.textContent = data1Input3.value
    pdfRowEl.appendChild(pdfData3)


    
    let editBtnEl = document.createElement('i')
    editBtnEl.classList.add('fa-solid', 'fa-pen-to-square', 'ml-5', 'i', 'edit')
    editBtnEl.onclick = function () {
        onEditList(bookId, authorId, priceId)
    }
    tableRow.appendChild(editBtnEl)


    let saveBookBtnEl = document.createElement('i')
    saveBookBtnEl.classList.add('fa-solid', 'fa-file-arrow-up', 'i', 'ml-5', 'save')
    saveBookBtnEl.onclick = function () {
        onSaveBook(bookId, authorId, priceId)
    }
    tableRow.appendChild(saveBookBtnEl)


    let deleteBtnEl = document.createElement('i')
    deleteBtnEl.classList.add('fa-solid', 'fa-trash-can', 'i', 'ml-5', 'delete')
    deleteBtnEl.onclick = function () {
        onDeleteList(listId)
    }

    tableRow.appendChild(deleteBtnEl)

    let empty1 = document.createElement('td')
    tableRow.appendChild(empty1)

    let empty2 = document.createElement('td')
    tableRow.appendChild(empty2)

    let empty3 = document.createElement('td')
    tableRow.appendChild(empty3)

}

let bookEl = document.getElementById('book')
let authorEl = document.getElementById('author')
let priceEl = document.getElementById('price')

bookEl.addEventListener('blur', function (event) {
    if (event.target.value === '') {
        bookEl.style.border = '2px solid red'
    } else {
        bookEl.style.border = '2px solid green'
    }
})

authorEl.addEventListener('blur', function (event) {
    if (event.target.value === '') {
        authorEl.style.border = '2px solid red'
    } else {
        authorEl.style.border = '2px solid green'
    }
})

priceEl.addEventListener('blur', function (event) {
    if (event.target.value === '') {
        priceEl.style.border = '2px solid red'
    } else {
        priceEl.style.border = '2px solid green'
    }
})

// Add a Book to Table Body When Clicked on Add Button
function onAddList() {
    let listCount = booksList.length
    listCount = listCount + 1

    let BookInputValue = bookEl.value

    let authorInputValue = authorEl.value

    let priceInputValue = priceEl.value


    if (bookEl.value === '') {
        swal("Oops", "Please Enter the Book Name!", "error")
        bodyEl = ''
        return
    }
    if (!isNaN(bookEl.value)) {
        swal("Oops", "Please Enter Alphabets Only!", "error")
        bodyEl = ''
        bookEl.value = ''
        return
    }
    if (authorEl.value === '') {
        swal("Oops", "Please Enter Author Name!", "error")
        bodyEl = ''
        bookEl.value = ''
        return
    }
    if (!isNaN(authorEl.value)) {
        swal("Oops", "Please Enter Alphabets Only!", "error")
        bodyEl = ''
        bookEl.value = ''
        authorEl.value = ''
        return
    }
    if (priceEl.value === '') {
        bookEl.value = ''
        authorEl.value = ''
        swal("Oops", "Please Enter the Price!", "error")
        bodyEl = ''
        return
    }
    if (isNaN(priceEl.value)) {
        swal("Oops", "Please Enter Numeric Values Only!", "error")
        bodyEl = ''
        bookEl.value = ''
        authorEl.value = ''
        priceEl.value = ''
        return
    }
    swal("Good job!", "You have added successfully!", "success");

    //Create an Object for Book using User Input Value
    let newList = {
        book: BookInputValue,
        author: authorInputValue,
        price: priceInputValue,
        uniqueNo: listCount
    }
    
    //Created Every Book Object will be pushed into the bookslist array
    booksList.push(newList)

    //When pushed the every new data then data will be stored in the table data
    createAndAppendList(newList)
    bookEl.value = ''
    authorEl.value = ''
    priceEl.value = ''
    bookEl.style.border = '2px solid #e4e4e4'
    authorEl.style.border = '2px solid #e4e4e4'
    priceEl.style.border = '2px solid #e4e4e4'

}

//Iterate each book of bookslist array
for (let eachList of booksList) {
    
    //each book will be passed as arguement to this function. So we can access each book from this function
    createAndAppendList(eachList)
    console.log(eachList)
}