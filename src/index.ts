import './dataType'
import './enum'
import './interface'
import './function'

const hello: string = 'Hello Typescript'
const div = document.getElementById('app')
console.log(div)
if (div) {
    div.innerHTML = hello
}