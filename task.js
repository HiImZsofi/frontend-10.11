const numberarray = Array(20).fill().map(() => Math.floor(30 * Math.random() + 1) );
const dividedNumbers = []

//tiszta ig
function divideArray(array){
    dividedNumbers.push(array.filter(array => array % 5 == 0)) 
    return dividedNumbers
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('divide').addEventListener('click', () => {
        console.log(divideArray(numberarray))
    })

    document.getElementById('itemAdd').addEventListener('click', () => {
        var inputNumber = parseInt(document.getElementById('itemInput').value) 
        dividedNumbers.push(inputNumber)
        console.log(dividedNumbers)
    })
})



