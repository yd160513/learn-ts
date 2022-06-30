import './dataType'
import './enum'
import './interface'

const hello: string = 'Hello Typescript'
const div = document.getElementById('app')
console.log(div)
if (div) {
    div.innerHTML = hello
}