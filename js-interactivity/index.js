console.log('Hello World')

const message = document.querySelector('#message')

const form = document.querySelector('form')

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('SPAN')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'x' 
    deleteButton.addEventListener('click', deleteMovie)
    movie.appendChild(deleteButton)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ""
    
}

const deleteMovie = (event) =>{
    event.target.parentNode.remove() 
    message.textContent = "Movie Deleted!"
}

form.addEventListener('submit', addMovie)


const crossOffMovie = (event) =>{
    event.target.classList.toggle('checked') 
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = "Movie Added Back!"
    }
  
}
