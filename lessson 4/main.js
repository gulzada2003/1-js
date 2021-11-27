const input = document.getElementById('task')
const button = document.querySelector('.save_task')

// button.onclick = () => {
//     console.log(input.value)
// }


const toggleClass = (e) => {
    e.target.classList.toggle('active')
}