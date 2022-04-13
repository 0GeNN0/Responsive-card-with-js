const frontContainer = document.querySelector('.front-container')
const backContainer = document.querySelector('.back-container')
const inputs = document.querySelectorAll('input')
const subButton = document.querySelector('button')
const spanEl = document.querySelector('#grade')
let grade = ''

const addActiveClass = activeInput => {
   inputs.forEach(input => {
      input.classList.remove('active')
   })
   activeInput.classList.add('active')
}

inputs.forEach(input => {
   input.addEventListener('click', e => {
      addActiveClass(input)
      grade = e.target.value
   })
})

subButton.addEventListener('click', e => {
   if (grade) {
      frontContainer.classList.add('hide')
      spanEl.textContent = grade
      backContainer.classList.remove('hide')
   }
})