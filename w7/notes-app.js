// DOM - Document Object Model
// Query and Remove - this will remove first p tag found
// const p = document.querySelector('p')
// p.remove()

//query and remove, show on console, or change text for all p tags
const ps = document.querySelectorAll('p')
ps.forEach(function (){
    ps.textContent = '*****'
    // console.log(p.textContent)
   // p.remove()
})