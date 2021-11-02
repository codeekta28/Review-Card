console.log('This is review')
let dataObject = [
  {
    image: 'img1',
    uname: 'suhana',
    post: 'frontEnd Developer',
    description: 'This is suhana discriptiion.'
  },
  {
    image: 'img2',
    uname: 'Marissa',
    post: 'BackEnd Developer',
    description: 'This is Marissa discriptiion'
  },
  {
    image: 'img3',
    post: 'Planner',
    description: 'This is Jack discriptiion'
  },
  {
    image: 'img4',
    uname: 'Laura',
    post: 'Team Leader',
    description: 'This is Laura discriptiion.'
  },
  {
    image: 'img5',
    uname: 'Suzi',
    post: 'Team Executer',
    description: 'This is Suzi discriptiion.'
  }
]
// Taking containers of DOM and saving it in variable
let image = document.querySelector('#employeeImg')
let uname = document.querySelector('#name')
let post = document.querySelector('#post')
let discription = document.querySelector('#discription')
let counter = 0
// Event listeners
let btns = document.querySelectorAll('.btn')
for (let btn of btns) {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('leftBtn')) {
      console.log('left btn')
      insertData(counter)
      counter--
      if (counter < 0) {
        counter = dataObject.length - 1
      }
    } else if (btn.classList.contains('rightBtn')) {
      insertData(counter)
      counter++
      if (counter > dataObject.length - 1) {
        counter = 0
      }
    } else if (btn.classList.contains('surpriseBtn')) {
      counter = Math.floor(Math.random() * dataObject.length)
      insertData(counter)
    }
  })
}
function insertData (counter) {
  image.src = `img/${dataObject[counter].image}.jfif`
  uname.textContent = dataObject[counter].uname
  post.textContent = dataObject[counter].post
  discription.textContent = dataObject[counter].description
}
