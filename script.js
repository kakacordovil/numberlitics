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
        let total = inputvalues.length
        let larger = inputvalues[0]
        let smaller = inputvalues[0]
        let sum = 0
        let avarage = 0
        for(let pos in inputvalues){
            sum += inputvalues[pos]
            
            if(inputvalues[pos] < smaller) {
                smaller = inputvalues[pos]
            }
            if(inputvalues[pos] > larger) {
                larger = inputvalues[pos]
            }
        }
        avarage = sum / total

        result.innerHTML = ``
        result.innerHTML += `<p>You have ${total} registered values. </p>`
        result.innerHTML += `<p>The larger value is ${larger}. </p>`
        result.innerHTML += `<p>The smaller value is ${smaller}. </p>`
        result.innerHTML += `<p>The sum of the values is ${sum}. </p>`
        result.innerHTML += `<p>The values avarage is ${avarage}. </p>`
    }
}