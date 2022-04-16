const frontContainer = document.querySelector('.front-container')
const backContainer = document.querySelector('.back-container')
const listItem = document.querySelectorAll('li')
const subButton = document.querySelector('button')
const spanEl = document.querySelector('#grade')
let grade = ''

const addActiveClass = activeLi => {
   listItem.forEach(li => {
      li.classList.remove('active')
   })
   activeLi.classList.add('active')
}

listItem.forEach(li => {
   li.addEventListener('click', e => {
      addActiveClass(li)
      console.log(e)
      grade = e.target.innerText
   })
})

subButton.addEventListener('click', e => {
   if (grade) {
      frontContainer.classList.add('hide')
      spanEl.textContent = grade
      backContainer.classList.remove('hide')
   }
})