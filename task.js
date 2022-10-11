const numberarray = Array(20).fill().map(() => Math.floor(30 * Math.random() + 1) );
 const dividedNumbers = []
 
//tiszta ig
function divideArray(array){
    dividedNumbers.push(array.filter(array => array % 5 == 0)) 
    return dividedNumbers
}

/*document.addEventListener('DOMContentLoaded', () => {
    
})*/

console.log(divideArray(numberarray))