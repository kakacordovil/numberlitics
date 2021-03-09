let num = document.querySelector('input#inputvalue')
let list = document.querySelector('select#formlist')
let result = document.querySelector('div#result')
let inputvalues = []

function isANumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inList(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add(){
    if (isANumber(num.value) && !inList(num.value, inputvalues)){
        inputvalues.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `Added value ${num.value} `
        list.appendChild(item)
    } else {
        window.alert('Invalid value or found already')
    } 
    num.value = ''
    num.focus()

}

function toFinish(){
    if (inputvalues.length == 0){
        window.alert('Empty. Insert the values to finish:')
    } else {
        result.innerHTML = ``
    }
}



function mid(){
    
}