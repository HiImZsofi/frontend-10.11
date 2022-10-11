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

    document.getElementById('toList').addEventListener('click',function(){szazlabuMegjelenítés('list', labakbolSzazlabuk([1,214,100,122]))} )
})

class Szazlabu{
    #labakSzama

    constructor(labakSzama){
        this.#labakSzama = labakSzama
    }

    toString(){
        return this.#labakSzama + " lábú százlábú"
    }

}   

const szazlabulista = []
function labakbolSzazlabuk(szam) {
    let szazlabu = new Szazlabu(szam)
    szazlabulista.push(szazlabu)
    return szazlabu
}
function szazlabuMegjelenetis(ID, array){
    let output=document.getElementById(id);
    array.forEach(element=>{
        let li = document.createElement('li');
        li.textContent = element;
        output.appendChild(li);
    })
}

console.log(labakbolSzazlabuk(100).toString())



