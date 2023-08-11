// create the variables for form and list
// getElementById to specify the ids of each
const todoForm = document.getElementById('form1')
const todoList = document.getElementById('list1')
// const doneList = document.getElementById('done-list')

// add an eventlistener for submit button
todoForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')

    const title = titleInput.value
    const description = descriptionInput.value

// conditional if title and description are input, create list item
// define the lisr item and how it is rendered on page
// .appendChild() to add to todoList 
// add eventListener with function that removes the item when clicked
    if (title && description) {
        const li = document.createElement('li')
        li.innerHTML = `<strong>${title.toUpperCase()}:</strong> ${description}`
        todoList.appendChild(li)
        li.addEventListener('click', function() {
            todoList.removeChild(li)
            // doneList.appendChild(li)
            // li.classList.add('done')
        })

        titleInput.value = ''
        descriptionInput.value = ''
    }
})