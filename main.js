const area = document.querySelector('.area');
const box = document.querySelector('.box');
const boxes = document.querySelectorAll('.box')
const table = document.querySelector('table')
let step = 0;

const win  = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

area.addEventListener('click',e =>{
    if(e.target.classList.contains('box') && !e.target.innerText){
        e.target.innerHTML = step % 2 === 0 ? 'X' : '0'
        step ++
        countResult()
    }
})

const arr = JSON.parse(localStorage.getItem('ticTacToe')) || [];


const countResult = ()=>{

    for (let i  =0; i< win.length;i++){
        if(boxes[win[i][0]].innerText === 'X' && boxes[win[i][1]].innerText === 'X' && boxes[win[i][2]].innerText === 'X'){
            finish('Крестики','x')
            return
        } else if (boxes[win[i][0]].innerText === '0' && boxes[win[i][1]].innerText === '0' && boxes[win[i][2]].innerText === '0'){
            finish('Нолики','0')
            return;
        }
    }
    if(step >= 9){
        alert('Ничья')
        if(arr.length === 10){
            arr.shift()
        }
        arr.push({'Крестики':0,'Нолики':0,'Ничья':1})
        localStorage.setItem('ticTacToe',JSON.stringify(arr))
        location.reload()
    }

}



const finish = (winner,item)=>{
    alert(`Победили ${winner} за ${Math.round(step / 2)} ${ Math.round(step / 2) < 4 ? 'хода': 'ходов'}`)
    if(arr.length === 10){
        arr.shift()
    }
    if(item === 'x'){
        arr.push({'Крестики':1,'Нолики':0,'Ничья':0})
        localStorage.setItem('ticTacToe',JSON.stringify(arr))

    }else if(item === '0'){
        arr.push({'Крестики':0,'Нолики':1,'Ничья':0})
        localStorage.setItem('ticTacToe',JSON.stringify(arr))
    }
        location.reload()
}


arr.forEach(item=>{
    const tr = document.createElement('tr')
    const thX = document.createElement('th')
    thX.textContent = item['Крестики']
    tr.appendChild(thX)
    const th0 = document.createElement('th')
    th0.textContent = item['Нолики']
    tr.appendChild(th0)
    const thN = document.createElement('th')
    thN.textContent = item['Ничья']
    tr.appendChild(thN)
    table.appendChild(tr)
})

